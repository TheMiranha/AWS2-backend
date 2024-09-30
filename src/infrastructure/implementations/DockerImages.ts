import Dockerode from "dockerode";
import type { DeleteImage, DownloadImage, GetImages, IImages } from "../IImages";
import Amqp from 'amqplib'
import logger from "../../utils/logger";

export class DockerImages implements IImages {

  private docker: Dockerode;
  private amqp!: Amqp.Connection

  constructor() {
    this.amqp;
    this.docker = new Dockerode({ host: 'localhost', port: 2375 })
    this.prepareAMQP()
  }

  async prepareAMQP() {
    const connection = await Amqp.connect({
      hostname: process.env.RABBIT_HOST,
      password: process.env.RABBIT_PASSWORD,
      username: process.env.RABBIT_USER,
    }).then((rs) => {
      logger.info('[DockerImages][prepareAMQP]: connected to rabbit')
      return rs
    }).catch((error) => {
      logger.error('[DockerImages][prepareAMPQ]: error on rabbit connection', error)
      return null
    })

    if (connection) {
      this.amqp = connection
    }
  }

  async getImages(): Promise<GetImages["response"]> {

    logger.info('[DockerImages][getImages]: loading all images...')

    try {
      const images = await this.docker.listImages({ all: true })

      logger.info('[DockerImages][getImages]: loaded images', { images })

      return {
        images
      }
    } catch (error) {
      logger.error('[DockerImages][getImages]: error', error)
    }

    return {
      images: []
    }

  }

  async downloadImage({ image }: DownloadImage['props']) {

    logger.info('[DockerImages][downloadImage]: request to download an image')

    const channel = await this.amqp.createChannel()
    channel.sendToQueue('ecr_pull', Buffer.from(JSON.stringify({ image })))
    await channel.close()

  }

  async deleteImage({ imageId }: DeleteImage["props"]): Promise<void> {

    logger.info('[DockerImages][deleteImage]: request do delete an image')

    const channel = await this.amqp.createChannel();
    channel.sendToQueue('ecr_delete', Buffer.from(JSON.stringify({ imageId })))
    await channel.close()
  }

}
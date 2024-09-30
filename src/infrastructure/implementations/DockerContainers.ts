import type Dockerode from "dockerode";
import Docker from 'dockerode'
import type { GetContainers, IContainers } from "../IContainers";
import logger from "../../utils/logger";

export class DockerContainers implements IContainers {

  private docker: Dockerode

  constructor() {
    this.docker = new Docker({ host: 'localhost', port: 2375 })
  }

  async getContainers(props?: GetContainers["props"]): Promise<GetContainers["response"]> {

    logger.info('[DockerContainers][getContainers]: loading all containers...')

    try {
      const containers = await this.docker.listContainers({
        all: props?.all
      })

      logger.info('[DockerContainers][getContainers]: loaded containers', { containers })

      return {
        containers
      }

    } catch (error) {
      logger.error('[DockerContainers][getContainers]: error', error)
    }
    return {
      containers: []
    }
  }

}
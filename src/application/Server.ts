import express, { json, type Express } from 'express'
import { ECSRouter } from './ecs/router';
import { ECRRouter } from './ecr/router';
import cors from 'cors'

export class Server {

  private app: Express;

  constructor(
    private PORT: number,
    private initializeCallback?: () => void
  ) {
    this.app = express()
    this.app.use(cors())
    this.app.use(json())
    this.prepareRoutes()
  }

  prepareRoutes() {
    this.app.use('/ecs', new ECSRouter().getRouter())
    this.app.use('/ecr', new ECRRouter().getRouter())
  }

  run() {
    this.app.listen(this.PORT, () => {
      console.log('HTTP Server Listenning on ' + this.PORT)
      this.initializeCallback && this.initializeCallback()
    })
  }

}
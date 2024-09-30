import { Router } from "express";
import { InternalRouter } from "../../../domain/interfaces/InternalRouter";
import { ECRDownloadUseCase } from "./use-case";
import { ECRDownloadController } from "./controller";
import { imageProvider } from "../../../infrastructure";

export class ECRDownloadRouter implements InternalRouter {

  private internalRouter: Router

  constructor() {
    this.internalRouter = Router()
    this.prepareRouter()
  }

  getRouter() {
    return this.internalRouter
  }

  prepareRouter() {
    this.internalRouter.post('/', (req, res) => {
      const useCase = new ECRDownloadUseCase(imageProvider)
      const controller = new ECRDownloadController(useCase)
      controller.handle(req, res)
    })
  }

}
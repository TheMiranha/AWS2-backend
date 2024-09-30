import { Router } from "express";
import { InternalRouter } from "../../../domain/interfaces/InternalRouter";
import { ECRDeleteUseCase } from "./use-case";
import { imageProvider } from "../../../infrastructure";
import { ECRDeleteController } from "./controller";

export class ECRDeleteRouter implements InternalRouter {

  private internalRouter: Router

  constructor() {
    this.internalRouter = Router()
    this.prepareRouter()
  }

  prepareRouter() {
    this.internalRouter.post('/', (req, res) => {
      const useCase = new ECRDeleteUseCase(imageProvider)
      const controller = new ECRDeleteController(useCase)

      controller.handle(req, res)
    })
  }

  getRouter(): Router {
    return this.internalRouter
  }

}
import type { Router } from "express";
import express from 'express';
import type { InternalRouter } from "../../domain/interfaces/InternalRouter";
import { ECRUseCase } from "./use-case";
import { ECRController } from "./controller";
import { ECRDownloadRouter } from "./download/router";
import { imageProvider } from "../../infrastructure";
import { ECRDeleteRouter } from "./delete/router";

export class ECRRouter implements InternalRouter {

  private internalRouter: Router

  constructor() {
    this.internalRouter = express()
    this.prepareRouter()
  }

  prepareRouter() {
    this.internalRouter.get('/', (req, res) => {
      const useCase = new ECRUseCase(imageProvider)
      const controller = new ECRController(useCase)
      controller.handle(req, res)
    })
    this.internalRouter.use('/download', new ECRDownloadRouter().getRouter())
    this.internalRouter.use('/delete', new ECRDeleteRouter().getRouter())
  }

  getRouter() {
    return this.internalRouter
  }

}
import type { Router } from "express";
import express from 'express'
import type { InternalRouter } from "../../domain/interfaces/InternalRouter";
import { ECSUseCase } from "./use-case";
import { ECSController } from "./controller";
import { containerProvider } from "../../infrastructure";

export class ECSRouter implements InternalRouter {

  private internalRouter: Router

  constructor() {
    this.internalRouter = express()
    this.prepareRouter()
  }

  prepareRouter() {
    this.internalRouter.get('/', (req, res) => {
      const useCase = new ECSUseCase(containerProvider)
      const controller = new ECSController(useCase)
      controller.handle(req, res)
    })
  }

  getRouter() {
    return this.internalRouter
  }

}
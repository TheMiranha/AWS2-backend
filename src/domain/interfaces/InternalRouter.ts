import type { Router as ExpressRouter } from 'express';

export interface InternalRouter {

  getRouter(): ExpressRouter

}
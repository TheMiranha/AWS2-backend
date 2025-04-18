import type { Request, Response } from "express";

export interface Controller {

  handle(req: Request, res: Response): Promise<void>

}
import type { Request, Response } from "express";
import type { Controller } from "../../domain/interfaces/Controller";
import type { UseCase } from "../../domain/interfaces/UseCase";
import type { ECRUseCaseDTOController } from "./dto";

export class ECRController implements Controller {

  constructor(
    private useCase: UseCase<void, ECRUseCaseDTOController>
  ) {

  }

  async handle(_: Request, res: Response) {

    const response = await this.useCase.execute()

    res.status(200).json({ images: response.images })

  }

}
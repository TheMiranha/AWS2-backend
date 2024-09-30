import type { Request, Response } from "express";
import type { Controller } from "../../domain/interfaces/Controller";
import type { UseCase } from "../../domain/interfaces/UseCase";
import type { ECSUseCaseDTOController } from "./dto";

export class ECSController implements Controller {

  constructor(
    private useCase: UseCase<void, ECSUseCaseDTOController>
  ) {

  }

  async handle(_: Request, res: Response) {

    const response = await this.useCase.execute()

    res.status(200).json({ containers: response.containers })

  }

}
import { Request, Response } from "express";
import { Controller } from "../../../domain/interfaces/Controller";
import { UseCase } from "../../../domain/interfaces/UseCase";
import { ECRDeleteControllerDTOECRDeleteUseCase } from "./dto";

type BodyData = {
  imageId: string
}

export class ECRDeleteController implements Controller {

  constructor(
    private useCase: UseCase<ECRDeleteControllerDTOECRDeleteUseCase, void>
  ) { }

  async handle(req: Request, res: Response): Promise<void> {

    const { imageId } = req.body as BodyData

    this.useCase.execute({ imageId })

    res.status(200).json({
      message: 'ok!',
    })
  }

}
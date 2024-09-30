import { Request, Response } from "express";
import { Controller } from "../../../domain/interfaces/Controller";
import { UseCase } from "../../../domain/interfaces/UseCase";
import { ECRDownloadControllerDTOECRDownloadUseCase } from "./dto";

type BodyData = {
  image: string
}

export class ECRDownloadController implements Controller {

  constructor(
    private useCase: UseCase<ECRDownloadControllerDTOECRDownloadUseCase, void>
  ) { }

  async handle(req: Request, res: Response): Promise<void> {
    const { image } = req.body as BodyData
    this.useCase.execute({ image })
    res.status(200).json({ message: 'Running action...', success: true, image })
  }

}
import { UseCase } from "../../../domain/interfaces/UseCase";
import { IImages } from "../../../infrastructure/IImages";
import { ECRDownloadControllerDTOECRDownloadUseCase } from "./dto";

export class ECRDownloadUseCase implements UseCase<ECRDownloadControllerDTOECRDownloadUseCase, void> {

  constructor(
    private imageProvider: IImages
  ) { }

  async execute(props: ECRDownloadControllerDTOECRDownloadUseCase): Promise<void> {
    const { image } = props

    await this.imageProvider.downloadImage({ image })

  }

}
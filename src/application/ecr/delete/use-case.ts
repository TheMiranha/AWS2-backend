import { UseCase } from "../../../domain/interfaces/UseCase";
import { IImages } from "../../../infrastructure/IImages";
import { ECRDeleteControllerDTOECRDeleteUseCase } from "./dto";

export class ECRDeleteUseCase implements UseCase<ECRDeleteControllerDTOECRDeleteUseCase, void> {
  constructor(
    private imageProvider: IImages
  ) { }

  async execute(props: ECRDeleteControllerDTOECRDeleteUseCase): Promise<void> {
    const { imageId } = props

    await this.imageProvider.deleteImage({ imageId })

  }

}
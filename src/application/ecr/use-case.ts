import type { UseCase } from "../../domain/interfaces/UseCase";
import type { IImages } from "../../infrastructure/IImages";
import type { ECRUseCaseDTOController } from "./dto";

export class ECRUseCase implements UseCase<void, ECRUseCaseDTOController> {

  constructor(
    private imagesProvider: IImages
  ) { }

  async execute(): Promise<ECRUseCaseDTOController> {

    const { images } = await this.imagesProvider.getImages()

    return {
      images
    }
  }

}
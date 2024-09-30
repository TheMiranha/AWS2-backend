import type { UseCase } from "../../domain/interfaces/UseCase";
import type { IContainers } from "../../infrastructure/IContainers";
import type { ECSUseCaseDTOController } from "./dto";

export class ECSUseCase implements UseCase<void, ECSUseCaseDTOController> {

  constructor(
    private containersProvider: IContainers
  ) { }

  async execute(): Promise<ECSUseCaseDTOController> {

    const { containers } = await this.containersProvider.getContainers({ all: true })

    return {
      containers
    }
  }

}
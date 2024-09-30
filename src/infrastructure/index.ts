import { IContainers } from "./IContainers";
import { IImages } from "./IImages";
import { DockerContainers } from "./implementations/DockerContainers";
import { DockerImages } from "./implementations/DockerImages";

const imageProvider: IImages = new DockerImages()
const containerProvider: IContainers = new DockerContainers()

export {
  imageProvider,
  containerProvider
}


import type { InternalImage } from "../domain/types/internalImage"

export type GetImages = {
  response: {
    images: InternalImage[]
  }
}

export type DownloadImage = {
  props: {
    image: string
  }
}

export type DeleteImage = {
  props: {
    imageId: string
  }
}

export interface IImages {

  getImages(): Promise<GetImages['response']>
  downloadImage(props: DownloadImage['props']): Promise<void>
  deleteImage(props: DeleteImage['props']): Promise<void>

}
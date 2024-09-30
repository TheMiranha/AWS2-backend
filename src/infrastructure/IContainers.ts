import type { InternalContainer } from "../domain/types/internalContainer"

export type GetContainers = {
  props: {
    all?: boolean
  }
  response: {
    containers: InternalContainer[]
  }
}

export interface IContainers {

  getContainers(props?: GetContainers['props']): Promise<GetContainers['response']>

}
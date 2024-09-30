export interface UseCase<ParamsDTO, ReturnDTO> {

  execute(props: ParamsDTO): Promise<ReturnDTO>

}
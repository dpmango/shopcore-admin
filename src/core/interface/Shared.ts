export interface IOperator {
  id: string
  avatar?: string
  name: string
  position: string
}

export interface IMessageResponseDto {
  message: string
  status: boolean
}

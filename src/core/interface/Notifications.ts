import { IOperator } from './Shared'

export interface INotificationDto {
  id: string
  created: number
  operator: IOperator
  text: string
  // status: 1 | 2 | 3 | 4
}

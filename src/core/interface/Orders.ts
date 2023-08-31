import { IOperator } from './Shared'

export interface IOrderDto {
  id: string
  created: number
  cooldown: number
  historyCount: number
  problemCount: number
  postponed: number
  item: IOrderItem
  where: IOrderWhere
  tags: string[]
}

export interface ICancellationDto extends IOrderDto {
  comment: string
  operator: IOperator
}

export interface IOrderItem {
  name: string
  type: string | null
}

export interface IOrderWhere {
  name: string
  time: number
  ava: string
}

export interface IOrderHistroyDto {
  date: number
  info: string
  reason: string
  waiting: number
}

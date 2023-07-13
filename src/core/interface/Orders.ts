export interface IOrderDto {
  id: string
  created: number
  cooldown: number
  historyCount: number
  problemCount: number
  item: IOrderItem
  where: IOrderWhere
}

export interface IOrderItem {
  name: string
  type: string | null
}

export interface IOrderWhere {
  name: string
  time: number
}

export interface IOrderDto {
  id: string
  created: Date
  cooldown: Date
  historyCount: number
  item: IOrderItem
  where: IOrderWhere
}

export interface IOrderItem {
  name: string
  type: string | null
}

export interface IOrderWhere {
  name: string
  time: Date
}

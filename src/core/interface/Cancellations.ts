import { IOrderDto, IOrderItem, IOrderWhere } from './Orders'
import { IOperator } from './Shared'

export interface ICancellationDto extends IOrderDto {
  // id: string
  // created: number
  // historyCount: number
  // problemCount: number
  // item: IOrderItem
  // where: IOrderWhere
  comment: string
  operator: IOperator
}

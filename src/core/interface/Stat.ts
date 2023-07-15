import { IOperator } from './Shared'
export interface IStatDetailsDto {
  value: number
  change?: number | null
}
export interface IStatOperatorDto {
  id: string
  operator: IOperator

  stats: {
    today: IStatDetailsDto
    yesterday: IStatDetailsDto
    currentWeek: IStatDetailsDto
    lastWeek: IStatDetailsDto
    total: IStatDetailsDto
  }
}

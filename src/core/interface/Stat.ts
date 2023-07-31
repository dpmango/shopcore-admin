import { IOperator } from './Shared'

export type IStatDetailsDto = number

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

export interface IStatOperatorDetailsDto {
  status: boolean
  permissions: IStatPermission[]
  operator: IOperator
}

export interface IStatPermission {
  id: string
  name: string
  enabled: boolean
}

export interface IOperatorStatDto {
  [key: string]: { [key: string]: number }
}

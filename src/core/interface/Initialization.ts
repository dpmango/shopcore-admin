export interface IWhoisDto {
  id: string
}

// auth
export interface ITelegramAuthDto {
  id: number
  hash: string
  auth_date: number
  first_name: string
  last_name?: string
  photo_url?: string
  username?: string
}

export interface IAuthDto {
  access_token: string
  refresh_token: string
  expires_at: string
  expires_in: number
  refresh_expires: number
  refresh_expires_at: string
}

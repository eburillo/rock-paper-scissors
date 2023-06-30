import { IconType } from 'react-icons'

export type WeaponName = 'rock' | 'paper' | 'scissors'

export type Weapon = {
  id: WeaponName
  icon: IconType
  wins: WeaponName[]
}

export interface ActionType {
  type: string
  payload?: string
}

export interface ScoreType {
  wins: number
  losses: number
  draws: number
  total: number
  user: string
}

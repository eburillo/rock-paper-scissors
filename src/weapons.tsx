import {
  LiaHandPaperSolid,
  LiaHandScissorsSolid,
  LiaHandRockSolid
} from 'react-icons/lia'
import type { Weapon } from './types'

const weapons: Array<Weapon> = [
  {
    id: 'rock',
    icon: LiaHandRockSolid,
    wins: ['scissors']
  },
  {
    id: 'scissors',
    icon: LiaHandScissorsSolid,
    wins: ['paper']
  },
  {
    id: 'paper',
    icon: LiaHandPaperSolid,
    wins: ['rock']
  }
]

export default weapons

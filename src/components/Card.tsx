import { WeaponName } from '../types'

interface CardProps {
  id: WeaponName | null
  size: number
  name: string
}

import weapons from '../weapons'
import { LiaQuestionCircleSolid } from 'react-icons/lia'

export default function Card(props: CardProps): JSX.Element {
  const { id, name, size } = props
  const Icon =
    weapons.find((weapon) => weapon.id === id)?.icon || LiaQuestionCircleSolid
  return (
    <div className='weapon-user'>
      <p>{name}</p>
      <div className='weapon'>
        <Icon size={size} />
      </div>
    </div>
  )
}

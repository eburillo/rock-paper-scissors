import { IconType } from 'react-icons'
import { WeaponName } from '../types'

interface WeaponButton {
  id: WeaponName
  Icon: IconType
  chooseWeapon: (id: WeaponName) => void
}

export default function WeaponButton({ id, Icon, chooseWeapon }: WeaponButton) {
  return (
    <button className='weapon' onClick={() => chooseWeapon(id)}>
      <Icon size={48} />
    </button>
  )
}

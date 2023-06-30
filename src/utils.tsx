import weapons from './weapons'
import type { WeaponName } from './types'

export const getRandomWeapon = (): WeaponName =>
  weapons[Math.floor(Math.random() * weapons.length)].id

export const getWinner = (player: WeaponName, cpu: WeaponName) => {
  let winner = 0
  const playerWeapon = weapons.find((weapon) => weapon.id === player)
  if (player !== cpu) {
    winner = playerWeapon?.wins.some((weaponId) => weaponId === cpu) ? 1 : -1
  }
  return winner
}

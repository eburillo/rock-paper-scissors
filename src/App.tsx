import { useState, useRef, useEffect, useContext } from 'react'

import { SCORE_ACTIONS, SECONDS_TO_PICK, HEADER_MESSAGES } from './constants'
import { getRandomWeapon, getWinner } from './utils'
import weapons from './weapons'
import Card from './components/Card'
import WeaponButton from './components/WeaponButton'
import type { WeaponName } from './types'
import { ScoreContext } from './context/score'
import Login from './components/LoginModal'

import './App.css'
import Scoreboard from './components/Scoreboard'
import Leaderboard from './components/Leaderboard'

function App() {
  const [playerWeapon, setPlayerWeapon] = useState<WeaponName | null>(null)
  const [cpuWeapon, setCpuWeapon] = useState<WeaponName | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [header, setHeader] = useState(HEADER_MESSAGES.START)
  const [counter, setCounter] = useState(SECONDS_TO_PICK)
  const playerWeaponRef = useRef(playerWeapon)

  const { score, dispatch } = useContext(ScoreContext)
  const { user } = score

  useEffect(() => {
    playerWeaponRef.current = playerWeapon
  }, [playerWeapon])

  useEffect(() => {
    counter > 0 && isPlaying && setTimeout(() => setCounter(counter - 1), 1000)
  }, [counter, isPlaying])

  useEffect(() => {
    dispatch({ type: SCORE_ACTIONS.UPDATE_FROM_LOCALSTORAGE, payload: user })
  }, [user, dispatch])

  const handleFinishGame = () => {
    const randomWeapon = getRandomWeapon()
    setCpuWeapon(randomWeapon)
    const winner = getWinner(
      playerWeaponRef.current as WeaponName,
      randomWeapon
    )
    if (winner === 0) {
      dispatch({ type: SCORE_ACTIONS.DRAW })
      setHeader(HEADER_MESSAGES.RESULT_DRAW)
    } else if (winner === 1) {
      dispatch({ type: SCORE_ACTIONS.PLAYER_WIN })
      setHeader(HEADER_MESSAGES.RESULT_WIN)
    } else {
      dispatch({ type: SCORE_ACTIONS.PLAYER_LOSE })
      setHeader(HEADER_MESSAGES.RESULT_LOST)
    }
  }

  const handleStart = () => {
    setIsPlaying(true)
    setCpuWeapon(null)
    setPlayerWeapon(null)
    setCounter(SECONDS_TO_PICK)
    setHeader(HEADER_MESSAGES.PICK)
    setTimeout(() => {
      if (!playerWeaponRef.current) {
        setHeader(HEADER_MESSAGES.NO_WEAPON_SELECTED)
      } else {
        handleFinishGame()
      }
      setIsPlaying(false)
    }, SECONDS_TO_PICK * 1000)
  }

  return (
    <div className='container'>
      <div className='board'>
        <header>
          <h1 className='title'>{header}</h1>
        </header>
        <main>
          <div className='weapons-selected'>
            <Card name='Player' id={playerWeapon} size={48} />
            <Card name='CPU' id={cpuWeapon} size={48} />
          </div>
          <div className='counter'>{counter}</div>
        </main>
        <footer>
          {!isPlaying && (
            <button className='primary-btn' onClick={handleStart}>
              Start
            </button>
          )}
          {isPlaying && (
            <div className='weapon-selection'>
              {weapons.map(({ id, icon: Icon }) => (
                <WeaponButton
                  key={id}
                  id={id}
                  Icon={Icon}
                  chooseWeapon={setPlayerWeapon}
                />
              ))}
            </div>
          )}
        </footer>
      </div>
      <aside>
        <Scoreboard />
        <Leaderboard />
      </aside>

      <Login />
    </div>
  )
}

export default App

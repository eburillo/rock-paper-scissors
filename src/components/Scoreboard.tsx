import { useContext } from 'react'
import { ScoreContext } from '../context/score'

export default function Scoreboard() {
  const { score } = useContext(ScoreContext)

  return (
    <>
      <header>
        <h2 className='title'>Scoreboard</h2>
      </header>
      <div className='current-score'>
        <div>Player: {score.user}</div>
        <div>Win: {score.wins}</div>
        <div>CPU: {score.losses}</div>
        <div>Draws: {score.draws}</div>
        <div>Total plays: {score.total}</div>
      </div>
    </>
  )
}

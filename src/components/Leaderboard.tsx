import { LOCALSTORAGE_PREFIX } from '../constants'
import { ScoreType } from '../types'

export const MAX_LEADERS = 5

const getFilteredDataFromLocalStorage = () => {
  const savedPlayers = Object.keys(localStorage).filter((key) =>
    key.startsWith(LOCALSTORAGE_PREFIX)
  )
  const savedScores = savedPlayers.map((key) =>
    JSON.parse(localStorage.getItem(key) || '')
  )

  const filteredData = savedScores
    .sort((a, b) => b.wins - a.wins)
    .filter((score) => score.wins > 0)
    .slice(0, MAX_LEADERS)

  return filteredData
}

export default function Leaderboard() {
  const leaderboardData = getFilteredDataFromLocalStorage()

  return (
    <>
      <h2 className='sidebar-title'>Leaderboard</h2>
      <div className='leaderboard'>
        <div className='leader'>
          <div className='leader-name'>user</div>
          <div>wins</div>
        </div>
        <div className='leaders'>
          {leaderboardData.map((leader: ScoreType) => (
            <div className='leader' key={leader.user}>
              <div className='leader-name'>{leader.user}</div>
              <div>{leader.wins}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

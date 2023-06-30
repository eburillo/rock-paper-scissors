import {
  ReactElement,
  createContext,
  useEffect,
  useReducer,
  Dispatch
} from 'react'
import {
  scoreReducer,
  scoreReducerInitialState
} from '../reducers/scoreReducer'
import { ScoreType, ActionType } from '../types'
import { LOCALSTORAGE_PREFIX } from '../constants'

interface ScoreContextInterface {
  score: ScoreType
  dispatch: Dispatch<ActionType>
}

export const ScoreContext = createContext<ScoreContextInterface>({
  score: scoreReducerInitialState,
  dispatch: () => undefined
})

export const ScoreProvider = ({ children }: { children: ReactElement }) => {
  const [score, dispatch] = useReducer(scoreReducer, scoreReducerInitialState)
  const { wins, losses, draws, total } = score

  useEffect(() => {
    if (score.user) {
      localStorage.setItem(
        `${LOCALSTORAGE_PREFIX}${score.user}`,
        JSON.stringify(score)
      )
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wins, losses, draws, total])

  return (
    <ScoreContext.Provider value={{ score, dispatch }}>
      {children}
    </ScoreContext.Provider>
  )
}

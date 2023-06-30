import { SCORE_ACTIONS, LOCALSTORAGE_PREFIX } from '../constants'
import { ScoreType, ActionType } from '../types'

export const scoreReducerInitialState = {
  wins: 0,
  losses: 0,
  draws: 0,
  total: 0,
  user: ''
}

/* export const initializer = (initialValue = scoreReducerInitialState) => {
  const localStorageData = localStorage.getItem('score')
  return localStorageData ? JSON.parse(localStorageData) : initialValue
} */

export const scoreReducer = (state: ScoreType, action: ActionType) => {
  if (action.type === SCORE_ACTIONS.PLAYER_WIN) {
    return {
      ...state,
      wins: state.wins + 1,
      total: state.total + 1
    }
  }
  if (action.type === SCORE_ACTIONS.PLAYER_LOSE) {
    return {
      ...state,
      losses: state.losses + 1,
      total: state.total + 1
    }
  }
  if (action.type === SCORE_ACTIONS.DRAW) {
    return {
      ...state,
      draws: state.draws + 1,
      total: state.total + 1
    }
  }
  if (action.type === SCORE_ACTIONS.LOGIN) {
    return {
      ...state,
      user: action.payload
    }
  }
  if (action.type === SCORE_ACTIONS.UPDATE_FROM_LOCALSTORAGE) {
    const localStorageData = localStorage.getItem(
      `${LOCALSTORAGE_PREFIX}${action.payload}`
    )
    if (localStorageData) {
      const savedState = JSON.parse(localStorageData)
      return {
        ...savedState
      }
    } else {
      return {
        ...state
      }
    }
  }
}

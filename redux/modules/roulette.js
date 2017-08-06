// @flow
import { handleActions } from "redux-actions"

export const ROULETTE_STATUS_INIT = 0
export const ROULETTE_STATUS_START = 1
export const ROULETTE_STATUS_STOP = 2

export const start = (): Action => ({
  type: "ROULETTE/START",
  payload: {
    status: ROULETTE_STATUS_START
  }
})

export const stop = (): Action => ({
  type: "ROULETTE/STOP",
  payload: {
    status: ROULETTE_STATUS_STOP
  }
})

export const select = (name: string): Action => ({
  type: "ROULETTE/SELECT",
  payload: {
    name
  }
})

// reducer
export type State = {
  status: ROULETTE_STATUS_INIT | ROULETTE_STATUS_START | ROULETTE_STATUS_STOP
}

const initialState: State = {
  status: ROULETTE_STATUS_INIT,
  name: ""
}

export const reducer = handleActions(
  {
    "ROULETTE/START": (state: State, action) => ({
      ...state,
      status: action.payload.status
    }),
    "ROULETTE/STOP": (state: State, action) => ({
      ...state,
      status: action.payload.status
    }),
    "ROULETTE/SELECT": (state: State, action) => ({
      ...state,
      name: action.payload.name
    })
  },
  initialState
)

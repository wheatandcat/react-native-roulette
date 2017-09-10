// @flow
import { handleActions } from "redux-actions"
import config from "../../config.json"

export type Item = {
  name: string,
  color: string
}

export const shuffle = (items: Array<Item>): Action => ({
  type: "SHUFFLE",
  payload: {
    items
  }
})

export type State = Array<Item>

const initialState: State = config.users

export const reducer = handleActions(
  {
    SHUFFLE: (state: State, action) => ({
      ...state,
      items: action.payload.items
    })
  },
  initialState
)

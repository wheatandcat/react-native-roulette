// @flow

import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducer as Roulette } from "./modules/roulette"
import { reducer as Shuffle } from "./modules/shuffle"

const middleware = applyMiddleware(thunk)

export default () => {
  const rootReducer = combineReducers({
    // every modules reducer should be define here
    Roulette,
    Shuffle
  })

  return createStore(rootReducer, middleware)
}

// @flow
import React from "react"
import { Provider } from "react-redux"
import { Scene, Router } from "react-native-router-flux"
import Roulette from "./redux/containers/Roulette"
import createStore from "./redux/createStore"

const store = createStore()

export default () =>
  <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene key="pageA" title="PageA" component={Roulette} />
      </Scene>
    </Router>
  </Provider>

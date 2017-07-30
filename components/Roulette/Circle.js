// @flow
import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { ROULETTE_STATUS_START } from "../../redux/modules/roulette"

type State = {
  count: number
}
type Props = {
  status: number,
  /* eslint-disable react/no-unused-prop-types */
  stop: () => void
}

type DefaultProps = { status: number }

const styles = StyleSheet.create({
  center: {
    top: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  yinyangMain: {
    width: 150,
    height: 150,
    borderColor: "red",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 75,
    borderRightWidth: 2,
    borderRadius: 75
  }
})

let self: {
  props: Props
}
let up = 50
let count = 0

const tick = () => {
  if (up <= 0) {
    self.props.stop()
    return
  }

  if (self.props.status !== ROULETTE_STATUS_START) return

  if (count % 2 === 0) {
    up -= 1
  }

  self.setState({
    count: self.state.count + up
  })

  count += 1
}

export default class Circle extends Component<DefaultProps, Props, State> {
  static defaultProps = { status: 0 }
  state = { count: 0 }
  componentDidMount() {
    self = this
    this.interval = setInterval(tick, 1)
  }
  componentWillReceiveProps() {
    if (this.props.status === ROULETTE_STATUS_START) return
    up = 50
    count = 0
  }
  props: Props

  render() {
    return (
      <View style={styles.center}>
        <View style={{ transform: [{ rotate: `${this.state.count}deg` }] }}>
          <View style={styles.yinyangMain} />
        </View>
      </View>
    )
  }
}

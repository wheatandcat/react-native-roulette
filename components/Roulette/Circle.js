// @flow
import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { ROULETTE_STATUS_START } from "../../redux/modules/roulette"
import { randomRange } from "../../libs/random"
import type { Item } from "../../redux/modules/shuffle"

type State = {
  count: number
}
type Props = {
  status: number,
  /* eslint-disable react/no-unused-prop-types */
  stop: () => void,
  select: (name: string) => void,
  items: Array<Item>
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
  cone: {
    width: 152,
    height: 152,
    borderRadius: 152 / 2,
    backgroundColor: "#000"
  },
  axis: {
    width: 80,
    height: 80,
    top: -40,
    left: -40,
    borderRadius: 100 / 2,
    backgroundColor: "#fff",
    position: "absolute"
  }
})

let self: {
  props: Props
}
let up = randomRange(50, 150)
let count = 0

const tick = () => {
  if (self.props.status !== ROULETTE_STATUS_START) return

  if (up <= 0) {
    self.props.stop()
    self.props.select(
      self.props.items[Math.floor((self.state.count + 45) % 360 / (360 / 4))]
        .name
    )

    return
  }

  if (count % 2 === 0) {
    up -= randomRange(1, 2)
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
    up = randomRange(50, 150)
    count = 0
  }
  props: Props

  render() {
    const { items } = this.props
    return (
      <View style={styles.center}>
        <View style={{ transform: [{ rotate: `${this.state.count}deg` }] }}>
          <View style={styles.cone}>
            <View
              style={{
                top: 1,
                left: 1,
                width: 150,
                height: 150,
                borderTopColor: items[0].color,
                borderLeftColor: items[1].color,
                borderBottomColor: items[2].color,
                borderRightColor: items[3].color,
                borderTopWidth: 75,
                borderLeftWidth: 75,
                borderRightWidth: 75,
                borderBottomWidth: 75,
                borderTopLeftRadius: 75,
                borderTopRightRadius: 75,
                borderBottomRightRadius: 75,
                borderBottomLeftRadius: 75,
                position: "absolute"
              }}
            >
              <View style={styles.axis} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

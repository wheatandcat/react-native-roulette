// @flow
import React from "react"
import { StyleSheet, View } from "react-native"
import { Container, Content, Button, Text, Header } from "native-base"
import { Col, Grid } from "react-native-easy-grid"
import { Circle, List, Triangle, Footer } from "./"
import type { Item } from "../../redux/modules/shuffle"
import config from "../../config.json"

type Props = {
  status: number,
  name: srting,
  items: Array<Item>,
  start: () => void,
  stop: () => void,
  select: (name: string) => void,
  shuffle: (items: Array<Item>) => void
}

const styles = StyleSheet.create({
  button: {
    top: 60
  },
  triangle: {
    top: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  hit: {
    fontSize: 30,
    color: "#faa",
    fontWeight: "bold"
  },
  shuffle: {
    top: 5,
    left: 15
  }
})

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

/* eslint-disable no-param-reassign */
const shuffleItems = async (items: Array<Item>): Array<Item> => {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const r = Math.floor(Math.random() * (i + 1))
    const tmp = items[i]
    items[i] = items[r]
    items[r] = tmp
  }

  await sleep(1000)

  return items
}

export default ({ status, start, stop, select, shuffle, name, items }: Props) =>
  <Container>
    <Header>
      {(() => {
        if (name) {
          return (
            <Text style={styles.hit}>
              {name}!!
            </Text>
          )
        }
        return <View />
      })()}
    </Header>
    <Content>
      <Button
        style={styles.shuffle}
        onPress={() =>
          shuffleItems(items || config.users).then(res => shuffle(res))}
      >
        <Text>シャッフル!</Text>
      </Button>
      <Grid>
        <Col size={1}>
          <List items={items || config.users} />
        </Col>
        <Col size={2}>
          <View style={styles.triangle}>
            <Triangle />
          </View>
          <Circle
            status={status}
            stop={stop}
            select={select}
            items={items || config.users}
          />
        </Col>
      </Grid>
      <Button success block style={styles.button} onPress={() => start()}>
        <Text> スタート! </Text>
      </Button>
    </Content>
    <Footer />
  </Container>

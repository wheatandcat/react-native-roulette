// @flow
import React from "react"
import { StyleSheet, View } from "react-native"
import { Container, Content, Button, Text, Header } from "native-base"
import { Col, Grid } from "react-native-easy-grid"
import { Circle, List, Triangle, Footer } from "./"
import config from "../../config.json"

type Props = {
  status: number,
  name: srting,
  start: () => void,
  stop: () => void,
  select: (name: string) => void
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
  }
})

export default ({ status, start, stop, select, name }: Props) =>
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
      <Grid>
        <Col size={1}>
          <List items={config.users} />
        </Col>
        <Col size={2}>
          <View style={styles.triangle}>
            <Triangle />
          </View>
          <Circle
            status={status}
            stop={stop}
            select={select}
            items={config.users}
          />
        </Col>
      </Grid>
      <Button success block style={styles.button} onPress={() => start()}>
        <Text> スタート! </Text>
      </Button>
    </Content>
    <Footer />
  </Container>

// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Container, Content, Header, Button, Text } from "native-base"
import { Circle } from "./"

type Props = {
  status: number,
  start: () => void,
  stop: () => void
}

const styles = StyleSheet.create({
  button: {
    top: 60
  }
})

export default ({ status, start, stop }: Props) =>
  <Container>
    <Header>
      <Text>ルーレット</Text>
    </Header>
    <Content>
      <Circle status={status} stop={stop} />
      <Button success block style={styles.button} onPress={() => start()}>
        <Text> スタート! </Text>
      </Button>
    </Content>
  </Container>

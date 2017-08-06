// @flow
import React from "react"
import { StyleSheet, View } from "react-native"
import { Container, Content, Header, Button, Text } from "native-base"
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
  }
})

export default ({ status, start, stop, select, name }: Props) =>
  <Container>
    <Header>
      <Text>ルーレット</Text>
    </Header>

    <Content>
      <Text>
        {name}
      </Text>
      <List items={config.users} />
      <View style={styles.triangle}>
        <Triangle />
      </View>
      <Circle
        status={status}
        stop={stop}
        select={select}
        items={config.users}
      />
      <Button success block style={styles.button} onPress={() => start()}>
        <Text> スタート! </Text>
      </Button>
    </Content>
    <Footer />
  </Container>

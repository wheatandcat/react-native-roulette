// @flow
import React from "react"
import { StyleSheet, View } from "react-native"
import { List, ListItem, Text, Left, Body } from "native-base"
import type { Item } from "../../redux/modules/shuffle"

type Props = {
  items: Array<Item>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10
  }
})

export default ({ items }: Props) =>
  <List>
    {items.map(item =>
      <ListItem icon key={item.name}>
        <Left>
          <View
            style={{ width: 20, height: 20, backgroundColor: item.color }}
          />
        </Left>
        <Body>
          <Text style={styles.text}>
            {item.name}
          </Text>
        </Body>
      </ListItem>
    )}
  </List>

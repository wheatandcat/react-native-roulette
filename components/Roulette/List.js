// @flow
import React from "react"
import { View } from "react-native"
import { List, ListItem, Text, Left, Body } from "native-base"

type Item = {
  name: string,
  color: string
}

type Props = {
  items: Array<Item>
}

export default ({ items }: Props) =>
  <List>
    {items.map(item =>
      <ListItem icon key={item.name}>
        <Left>
          <View
            style={{ width: 25, height: 25, backgroundColor: item.color }}
          />
        </Left>
        <Body>
          <Text>
            {item.name}
          </Text>
        </Body>
      </ListItem>
    )}
  </List>

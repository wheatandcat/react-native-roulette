// @flow
import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import Roulette, { Circle, List, Triangle } from "./"

storiesOf("Roulette", module)
  .add("Circle", () => <Circle status={0} stop={action("on stop")} />)
  .add("Triangle", () => <Triangle />)
  .add("List", () =>
    <List
      items={[
        {
          name: "foo",
          color: "#ff0"
        },
        {
          name: "bar",
          color: "#0ff"
        }
      ]}
    />
  )
  .add("Roulette init", () =>
    <Roulette
      status={0}
      start={action("on start")}
      stop={action("on stop")}
      select={action("on select")}
      items={[
        {
          name: "foo",
          color: "#F6CECE"
        },
        {
          name: "bar",
          color: "#F7F2E0"
        },
        {
          name: "baz",
          color: "#CED8F6"
        },
        {
          name: "qux",
          color: "#FFFF00"
        }
      ]}
      shuffle={action("on shuffle")}
    />
  )
  .add("Roulette start", () =>
    <Roulette
      status={1}
      start={action("on start")}
      stop={action("on stop")}
      select={action("on select")}
      items={[
        {
          name: "foo",
          color: "#F6CECE"
        },
        {
          name: "bar",
          color: "#F7F2E0"
        },
        {
          name: "baz",
          color: "#CED8F6"
        },
        {
          name: "qux",
          color: "#FFFF00"
        }
      ]}
      shuffle={action("on shuffle")}
    />
  )

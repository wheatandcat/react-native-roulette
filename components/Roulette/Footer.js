import React from "react"
import { Footer, FooterTab, Button, Icon, Text } from "native-base"

export default () =>
  <Footer>
    <FooterTab>
      <Button>
        <Icon name="apps" />
        <Text>app</Text>
      </Button>
      <Button>
        <Icon name="list" />
        <Text>履歴</Text>
      </Button>
      <Button active>
        <Icon active name="navigate" />
        <Text>情報</Text>
      </Button>
    </FooterTab>
  </Footer>

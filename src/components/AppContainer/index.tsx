import { ComponentProps } from '@/@types'

import { Container, Body, Content, Menu, Header } from './styles'

export { AppTitle, AppSubTitle } from './styles'

export default function AppContainer({ children }: ComponentProps) {
  return (
    <Container>
      <Menu>

      </Menu>

      <Body>
        <Header>

        </Header>

        <Content>{children}</Content>
      </Body>
    </Container>
  )
}

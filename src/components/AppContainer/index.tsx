import { ComponentProps } from '@/@types'

import { Container, Body, Content, Menu, Header } from './styles'
import TopHeader from './TopHeader'

export { AppTitle, AppSubTitle } from './styles'

export default function AppContainer({ children }: ComponentProps) {
  return (
    <Container>
      <Menu>
        <TopHeader />
      </Menu>
      <Body>
        <Content>{children}</Content>
      </Body>
    </Container>
  );
}

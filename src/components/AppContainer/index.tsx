import { ComponentProps } from '@/@types'

import SideMenu from './SideMenu'
import { Container, Body, Content, Menu, Header } from './styles'
import TopHeader from './TopHeader'

export { AppTitle, AppSubTitle } from './styles'

export default function AppContainer({ children }: ComponentProps) {
  return (
    <Container>
      <Menu>
        <SideMenu />
      </Menu>

      <Body>
        <Header>
          <TopHeader />
        </Header>

        <Content>{children}</Content>
      </Body>
    </Container>
  )
}

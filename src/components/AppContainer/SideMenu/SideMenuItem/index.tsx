import { Container, Icon } from './styles'

type SideMenuItemProps = {
  title: string
  icon: string
  selected: boolean
  onClick: () => void
}

export default function SideMenuItem({
  title,
  icon,
  onClick,
  selected
}: SideMenuItemProps) {
  return (
    <Container selected={selected} type="button" onClick={onClick}>
      <Icon selected={selected}>
        <img src={icon} />
      </Icon>

      <span>{title}</span>
    </Container>
  )
}

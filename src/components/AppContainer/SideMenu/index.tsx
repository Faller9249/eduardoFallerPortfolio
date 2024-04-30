import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Language from '@/components/Language'
import { useAlert } from '@/hooks/alert'
import { useAuth } from '@/hooks/auth'
import { useInternationalization } from '@/hooks/internationalization'

import Help from './Help'
import SideMenuItem from './SideMenuItem'
import { Bottom, Container, Line } from './styles'

const menus = [
  { title: 'menus.home', icon: 'home', path: '/' },
  {
    title: 'menus.accessDevice',
    icon: 'accessDevice',
    path: '/access-device'
  },
  { title: 'menus.upload', icon: 'upload', path: '/upload' },
  // {
  //   title: 'menus.advancedReader',
  //   icon: 'advancedReader',
  //   path: '/advanced-reader'
  // },
  { title: 'menus.profile', icon: 'profile', path: '/profile' },
  { title: 'menus.leave', icon: 'signOut', path: '' },
  { title: 'menus.inlite', icon: 'global', path: 'https://inlite.com.br/' }
  // { title: 'menus.help', icon: 'help', path: '/help' }
]

export default function SideMenu() {
  const { t } = useInternationalization()
  const navigate = useNavigate()
  const { logado, logout } = useAuth()
  const { showAlertBase } = useAlert()

  const handleClickMenu = useCallback(
    (path: string) => {
      if (path.includes('http')) {
        window.open(path)
      } else if (path) {
        navigate(path)
      } else {
        showAlertBase({
          title: t('alert.leave') + '!',
          text: t('alert.wishLeave'),
          icon: 'signOut',
          buttons: [t('alert.cancel'), t('alert.leave')],
          onButtonClick: (index: number) => {
            if (index === 1) {
              logout()
            }
          }
        })
      }
    },
    [logout, navigate, showAlertBase, t]
  )

  return (
    <Container>
      <img src="/assets/logo.svg" />

      <Line />

      {menus.slice(0, 3).map(menu => (
        <SideMenuItem
          key={menu.title}
          title={t(menu.title)}
          icon={`/menu/${menu.icon}.svg`}
          onClick={() => handleClickMenu(menu.path)}
          selected={location.pathname === menu.path}
        />
      ))}

      <Line style={{ marginTop: 24 }} />

      {menus
        .filter(p => !(!logado && (p.path === '' || p.path === '/profile')))
        .slice(3, 7)
        .map(menu => (
          <SideMenuItem
            key={menu.title}
            title={t(menu.title)}
            icon={`/menu/${menu.icon}.svg`}
            onClick={() => handleClickMenu(menu.path)}
            selected={location.pathname === menu.path}
          />
        ))}

      <Bottom>
        <Help
          selected={location.pathname === '/documents'}
          onClick={() => handleClickMenu('/documents')}
        />

        <Language />
      </Bottom>
    </Container>
  )
}

import { useNavigate } from 'react-router-dom'

import BreadCrumb from '@/components/BreadCrumb'
import { useAuth } from '@/hooks/auth'
import { useInternationalization } from '@/hooks/internationalization'

import { Container, User, BackButton } from './styles'

function getTextByPath(path: string) {
  if (path.includes('/access-device')) {
    return 'menus.accessDevice'
  }
  if (path.includes('/upload')) {
    return 'menus.upload'
  }
  switch (path) {
    case '/advanced-reader':
      return 'menus.advancedReader'
    case '/profile':
      return 'menus.profile'
    case '/inlite':
      return 'menus.inlite'
    case '/documents':
      return 'menus.documents'
    default:
      return 'menus.home'
  }
}

export default function TopHeader() {
  const { t } = useInternationalization()
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <Container>
      <div>
        {location.pathname !== '/' && (
          <BackButton type="button" onClick={() => navigate(-1)}>
            <img src="/global/arrowLeft.svg" />
          </BackButton>
        )}
      </div>

      <BreadCrumb
        initial={t('menus.page')}
        items={[t(getTextByPath(location.pathname))]}
      />

      <User type="button" onClick={() => navigate('/profile')}>
        <span>
          <img src="/global/user.svg" />
          {user.name}
        </span>

        <span>
          <img src="/global/config.svg" />
          <img src="/global/notification.svg" />
        </span>
      </User>
    </Container>
  )
}

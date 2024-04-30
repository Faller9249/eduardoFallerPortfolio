import Button from '@/components/Form/Button'
import { useInternationalization } from '@/hooks/internationalization'

import { CheckDocuments, HelpContainer, NeedHelp, NeedHelpIcon } from './styles'

type HelpProps = {
  onClick: () => void
  selected: boolean
}

export default function Help({ onClick, selected }: HelpProps) {
  const { t } = useInternationalization()

  return (
    <HelpContainer>
      <NeedHelp>
        <NeedHelpIcon>
          <img src="/global/ajuda.svg" />
        </NeedHelpIcon>

        <span>{t('menus.needHelp')}</span>
      </NeedHelp>

      <CheckDocuments>{t('menus.checkDocuments')}</CheckDocuments>

      <Button onClick={onClick} selected={selected}>
        {t('menus.documents')}
      </Button>
    </HelpContainer>
  )
}

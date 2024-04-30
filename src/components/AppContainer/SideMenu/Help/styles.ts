import styled, { css } from 'styled-components'

export const HelpContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 17rem;

    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    background: url('/assets/helpBackground.svg');
  `}
`

export const NeedHelp = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    span {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const NeedHelpIcon = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius12};

    margin-right: ${theme.spacings.xmsmall};

    > img {
      margin-bottom: -4px;
    }
  `}
`

export const CheckDocuments = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};
  `}
`

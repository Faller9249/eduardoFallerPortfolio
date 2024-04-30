import styled, { css } from 'styled-components'

type SelectedProps = {
  selected: boolean
}

export const Container = styled.button<SelectedProps>`
  ${({ theme, selected }) => css`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};

    border-radius: ${theme.border.radius};

    ${selected &&
    css`
      background: ${theme.colors.lightGray};
    `}

    span {
      margin-left: ${theme.spacings.xxsmall};

      font-weight: ${theme.font.medium};
      font-size: ${theme.font.sizes.small};
    }

    transition: ${theme.transition.medium};
  `}
`

export const Icon = styled.div<SelectedProps>`
  ${({ theme, selected }) => css`
    background: ${selected
      ? theme.colors.lightGray
      : theme.colors.secondaryBlue};
    border-radius: ${theme.border.radius12};
    padding: ${theme.spacings.xxsmall};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: ${theme.transition.medium};

    img {
      width: 16px;
      height: 16px;
    }
  `}
`

import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const User = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    span {
      font-weight: ${theme.font.medium};
      font-size: ${theme.font.sizes.xsmall};
      margin-right: ${theme.spacings.xxsmall};

      display: flex;
      align-items: center;

      img {
        margin-right: ${theme.spacings.xxsmall};
      }
    }

    span + span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const BackButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xmsmall};
    background-color: ${theme.colors.secondaryBlue};
    border-radius: ${theme.border.radius12};

    img {
      width: 2rem;
      height: 2rem;
    }
  `}
`

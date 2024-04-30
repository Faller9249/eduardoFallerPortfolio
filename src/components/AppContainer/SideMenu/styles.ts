import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: ${theme.spacings.small};

    > img {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ::-webkit-scrollbar-track {
      margin: ${theme.spacings.xmsmall};
    }
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.2rem;

    margin-bottom: ${theme.spacings.medium};

    background: ${theme.colors.gradientes.menuLine};
  `}
`

export const Bottom = styled.div`
  width: 100%;
  margin-top: auto;
`

export const Translate = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};

    display: flex;
    justify-content: center;

    button {
      margin: 0 ${theme.spacings.xxsmall};
    }
  `}
`

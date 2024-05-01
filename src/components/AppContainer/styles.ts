import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;

    background-image: url('/assets/background.svg');
    background-size: cover;

    padding: ${theme.spacings.medium};
  `}
`

export const Header = styled.header`
  margin-bottom: 6rem;
`

export const Body = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: ${theme.spacings.xmsmall};
    padding: 0 ${theme.spacings.large};
  `}
`

export const Menu = styled.aside`
  ${({ theme }) => css`
    min-width: 30rem;
    margin: ${theme.spacings.xmsmall} 0;
    border: ${theme.border.white};
    border-radius: ${theme.border.radius};

    background: ${theme.colors.black};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    padding: ${theme.spacings.xxsmall};
  `}
`

export const AppTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.spacings.huge};

    margin-bottom: ${theme.spacings.xmsmall};
  `}
`

export const AppSubTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.spacings.medium};
    color: ${theme.colors.white};
  `}
`

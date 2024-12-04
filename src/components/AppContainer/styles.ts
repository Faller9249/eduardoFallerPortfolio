import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;

    flex-direction: column;
    background-color: ${theme.colors.backgroundDark};
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
    width: 100%;
    margin: 0;
    background-color: ${theme.colors.backgroundMenuDark};
    box-shadow: 8px 8px 8px 8px ${theme.colors.shadow};
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
    font-size: ${theme.spacings.xxlarge};
    color: ${theme.colors.primaryRed};
    
    margin-bottom: ${theme.spacings.xmsmall};
  `}
`

export const AppSubTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.spacings.big};
    color: ${theme.colors.white};
  `}
`

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

    gap: 16rem;

    padding: ${theme.spacings.xxsmall};
  `}
`

export const AppTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.spacings.xxlarge};
    color: ${theme.colors.black};;
    margin-bottom: ${theme.spacings.xmsmall};
    background-color: ${theme.colors.backgroundLight};
    border-radius: 8px;
    border: 1px solid ${theme.colors.backgroundLight}; /* Borda branca de 24px */
    text-shadow:
       0px 0px 4px ${theme.colors.white}, /* Contorno branco suave */
      2px 2px 0px ${theme.colors.white}, /* Sombra branca mais próxima */
      -2px -2px 0px ${theme.colors.white}, 
      -2px 2px 0px ${theme.colors.white}, 
      2px -2px 0px ${theme.colors.white}, /* Contorno em todas as direções */ /* Sombra sólida na cor #FF00C2 */
      5px 5px 0px  ${theme.colors.primaryBack}; /* Sombra branca mais próxima do texto */ /* Sombra sólida com deslocamento de 48px a 45 graus */
  `}
`;


export const AppSubTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.spacings.big};
  `}
`

export const AppDescription = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.spacings.xxlarge};
  `}
`

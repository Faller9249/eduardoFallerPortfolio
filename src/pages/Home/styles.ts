import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    margin-top: ${theme.spacings.small};

    display: flex;
    gap: ${theme.spacings.large};
    align-content: space-between;
    justify-content: center;

    p{
      font-weight: ${theme.font.bold};
      font-size: ${theme.spacings.small};
    }
  `}
`

import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    margin-top: ${theme.spacings.small};

    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas:
      'know benefits'
      'products products';
  `}
`

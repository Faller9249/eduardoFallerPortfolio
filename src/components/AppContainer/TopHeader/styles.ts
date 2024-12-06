import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    background-color: ${theme.colors.backgroundMenuDark};
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.spacings.medium};
  `}
`;

export const UserInfo = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.spacings.huge};
    font-family: ${theme.font.family.primary};
    color: ${theme.colors.primaryRed};
  `}
`;

export const Menu = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`;

export const MenuItem = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.spacings.big};
    font-weight: ${theme.font.medium};
    font-family: ${theme.font.family.primary};
    cursor: pointer;
    color: ${theme.colors.white};
    text-shadow: 1px 1px 2px ${theme.colors.primaryBlue};

    &:hover {
      transition: 5ms ease-in-out;
      color: ${theme.colors.primaryBlue};
      text-shadow: 2px 2px 4px ${theme.colors.primaryRed};
      font-size: 6.5rem;
    }
  `}
`;

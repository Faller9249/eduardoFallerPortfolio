import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    border: 1px solid ${theme.colors.primaryRed};
    border-radius: 50%;

    background-color: transparent;
    cursor: pointer;
    transition: transform 0.2s;

    img {
      width: 60%;
      height: 60%;
    }

    &:hover {
      transform: scale(1.1);
      border-color: ${theme.colors.primaryBlue};
      box-shadow: 8px 8px 8px 8px ${theme.colors.primaryBlue};
    }
  `}
`;

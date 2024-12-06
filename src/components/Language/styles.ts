import styled, { css, keyframes } from "styled-components";

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const LanguageContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 16px;
  `}
`;

export const FabContainer = styled.div`
  position: fixed;
  bottom: 32px;
  right: 24px;

  .main {
    cursor: pointer;
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #5b19b7;
    border: none;
    color: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
    }

    img {
      width: 100%;
      height: auto;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    }

    &.clicked {
      animation: ${clickAnimation} 0.3s;
    }
  }
`;

export const OptionList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  bottom: 70px;
  right: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 10;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "20px")});
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  li {
    margin-bottom: 10px;
    opacity: 1;

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;

      img {
        height: 55px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border-radius: 50%;

        &:hover {
          transform: scale(1.1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
        }
      }

      label {
        background-color: white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        padding: 5px 8px;
        font-size: 16px;
      }

      &:hover {
        label {
          opacity: 1;
        }
      }
    }
  }
`;

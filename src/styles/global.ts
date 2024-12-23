import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
      color: ${theme.colors.white};
      background: ${theme.colors.backgroundDark};
      -webkit-font-smoothing: antialiased;
      font-family: ${theme.font.family.second}; /* Alterado para usar a fonte Inter */
      font-weight: 900; /* Peso 900 */
      font-style: italic; /* Estilo itálico */
    }

    #root,
    body {
      width: 100vw;
      height: 100vh;
    }

    html {
      @media only screen and (min-width: 768px) {
        font-size: 40%;
      }

      @media only screen and (max-width: 768px) {
        font-size: 40%;
      }

      @media only screen and (min-width: 992px) {
        font-size: 45%;
      }

      @media only screen and (min-width: 1200px) {
        font-size: 50%;
      }

      @media only screen and (min-width: 1920px) {
        font-size: 62.5%;
      }
    }

    body,
    input,
    button {
      color: ${theme.colors.white};
      font-family: ${theme.font.family};
      font-size: ${theme.font.small};
    }

    button {
      cursor: pointer;
      border: 0;
      background: none;
    }

    input {
      border: 0;
      background: none;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    table {
      border-spacing: 0;
    }

    [disabled] {
      cursor: not-allowed;
    }

    .modal-overlay {
      background: ${theme.colors.background};
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }

    .modal-content {
      width: 100%;
      min-height: 30rem;
      max-width: 100rem;
      background: ${theme.colors.modal};
      padding: 8rem ${theme.spacings.medium};
      position: relative;
      border-radius: ${theme.border.radius};
      box-shadow: 10px 10px 10px 1px ${theme.colors.black};

      max-height: 96%;
      overflow-y: auto;
    }

    .close-modal {
      position: absolute;
      top: 2rem;
      left: 2rem;
      transition: filter 0.2s;

      height: 4rem;
      width: 4rem;
      border-radius: 100%;
      border: ${theme.border.solid};

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 1.8rem;
        width: 1.8rem;

        &:hover {
          filter: brightness(0.8);
        }
      }

      &:hover {
        filter: brightness(0.8);
      }
    }

    ::-webkit-scrollbar {
      width: 1rem;
      border-radius: ${theme.border.radius};
      border: 1.5rem solid ${theme.colors.white};
    }

    ::-webkit-scrollbar-track {
      border-radius: ${theme.border.radius};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.primaryBlue};
      transition: ${theme.transition.medium};
      border-radius: ${theme.border.radius};
    }

  `}
`

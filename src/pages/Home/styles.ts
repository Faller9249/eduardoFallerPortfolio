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

    p {
      font-weight: ${theme.font.bold};
      font-size: ${theme.spacings.small};
    }
  `}
`;

// Estilo para a imagem
export const ProfileImage = styled.img`
  ${({ theme }) => css`
    border-radius: 50%;
    transition: transform 0.1s ease-in-out, box-shadow 0.3s ease-in-out;
    border: 4px solid ${theme.colors.primaryBack}; // Borda personalizada
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    animation: borderColorChange 5s infinite alternate; // Animação que troca a cor da borda

    // Borda fixa
    border: 4px solid ${theme.colors.primaryBack}; 

    // Animação pulsante da borda usando box-shadow
    animation: borderPulse 2s infinite alternate; 

    // Animação para pulsar a borda
    @keyframes borderPulse {
      0% {
        box-shadow: 0 0 8px 1px ${theme.colors.primaryBack};  // Borda inicial
      }
      50% {
        box-shadow: 0 0 16px 3px ${theme.colors.primaryBlue};  // Pulsação com cor
      }
      100% {
        box-shadow: 0 0 24px 1px ${theme.colors.backgroundLight};  // Pulsação com cor final
      }
    }
    }
  `}
`;

export const Know = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacings.xsmall};

    p {
      font-weight: ${theme.font.medium};
      font-size: ${theme.spacings.xmsmall};
    }

  `}
`;

export const BtnDownloadCV = styled.button`
  ${({ theme }) => css`
    width: 100%;	  
    background-color: ${theme.colors.primaryRed};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    font-weight: ${theme.font.extra};
      font-size: ${theme.spacings.medium};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.colors.primaryBlue};
    }
  `}
`;
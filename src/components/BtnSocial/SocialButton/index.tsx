import React from "react";
import { Button } from "../styles";

interface SocialButtonProps {
  icon: string; // URL da imagem
  link: string; // URL para redirecionamento
  alt: string; // Texto alternativo para imagem
}

export default function SocialButton({ icon, link, alt }: SocialButtonProps) {
  return (
    <Button onClick={() => window.open(link, "_blank")}>
      <img src={icon} alt={alt} />
    </Button>
  );
}

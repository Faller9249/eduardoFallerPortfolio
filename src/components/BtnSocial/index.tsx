import React from "react";
import SocialButton from "./SocialButton";

const socialLinks = [
  {
    icon: "/social/github.svg",
    link: "https://github.com/Faller9249",
    alt: "GitHub",
  },
  {
    icon: "/social/linkedin.svg",
    link: "https://www.linkedin.com/in/eduardo-faller-4031b114a/",
    alt: "Linkedin",
  },
  {
    icon: "/social/instagram.svg",
    link: "https://www.instagram.com/eusouoedufaller/",
    alt: "Instagram",
  },
  {
    icon: "/social/youtube.svg",
    link: "https://www.youtube.com/@eu.sou.o.edu.faller",
    alt: "Youtube",
  },
  {
    icon: "/social/tiktok.svg",
    link: "https://www.tiktok.com/@eu.sou.o.edu.faller",
    alt: "Tik Tok",
  },
];

export default function BtnSocial() {
  return (
    <div style={{ display: "flex", gap: "4rem", marginTop: "4rem" }}>
      {socialLinks.map((social, index) => (
        <SocialButton
          key={index}
          icon={social.icon}
          link={social.link}
          alt={social.alt}
        />
      ))}
    </div>
  );
}

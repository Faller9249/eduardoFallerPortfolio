import { Grid, ProfileImage, Know, BtnDownloadCV } from "./styles"; // Atualizando para importar a nova estilização da imagem
import { useInternationalization } from "@/hooks/internationalization";
import BtnSocial from "@/components/BtnSocial";

import AppContainer from "@/components/AppContainer";
import {
  AppDescription,
  AppSubTitle,
  AppTitle,
} from "@/components/AppContainer/styles";
import Language from "@/components/Language";

export default function Home() {
  const { t } = useInternationalization();
  return (
    <AppContainer>
      <Language />
      <Grid>
        <div>
          {/* Agora a imagem é estilizada através do componente ProfileImage */}
          <ProfileImage src="/perfil/edu.png" alt="Perfil de Edu" width={250} />
        </div>
        <div>
          <AppTitle>{t("intro.title")}</AppTitle>
          <AppSubTitle>{t("intro.subtitle")}</AppSubTitle>
          <div>
            <p>{t("intro.aboutMe1")}</p>
            <p>{t("intro.aboutMe2")}</p>
          </div>
          <div>
            <BtnSocial />
          </div>
        </div>
      </Grid>
      <Grid>
        <Know>
          <AppDescription>{t("infoPerfil.title")}</AppDescription>
          <div>
            {[1, 2, 3, 4].map((index) => (
              <p key={index}>{t(`infoPerfil.texto${index}`)}</p>
            ))}
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <div>
              <p>{t("infoPerfil.nameType")}:</p>
              <p>{t("infoPerfil.ageType")}:</p>
              <p>{t("infoPerfil.addressType")}:</p>
              <p>{t("infoPerfil.phoneType")}:</p>
              <p>{t("infoPerfil.emailType")}:</p>
            </div>
            <div>
              <p>{t("infoPerfil.name")}</p>
              <p>{t("infoPerfil.age")}</p>
              <p>{t("infoPerfil.address")}</p>
              <p>{t("infoPerfil.phone")}</p>
              <p>{t("infoPerfil.email")}</p>
            </div>
          </div>
          <a href="/documents/CurriculoEduardoFaller.pdf" download>
            <BtnDownloadCV>{t("infoPerfil.downloadCV")}</BtnDownloadCV>
          </a>
        </Know>

        <div>
          <img src="/perfil/edu.png" alt="Perfil de Edu" width={250} />
        </div>
      </Grid>
      <Grid>
        <p>My Projects</p>
      </Grid>
      <Grid>
        <p>My Experience</p>
      </Grid>
      <Grid>
        <p>Contact</p>
      </Grid>
    </AppContainer>
  );
}

import { Grid, ProfileImage } from "./styles"; // Atualizando para importar a nova estilização da imagem
import { useInternationalization } from "@/hooks/internationalization";
import BtnSocial from "@/components/BtnSocial";

import AppContainer from "@/components/AppContainer";
import { AppDescription, AppSubTitle, AppTitle } from "@/components/AppContainer/styles";


export default function Home() {
  const { t } = useInternationalization();
  return (
    <AppContainer>
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
        <div>
          <AppDescription>{t("intro.subtitle")}</AppDescription>
          <div>
            <p>{t("intro.aboutMe1")}</p>
            <p>{t("intro.aboutMe2")}</p>
          </div>
          <div>
            <BtnSocial />
          </div>
        </div>
        <div>
          {/* Agora a imagem é estilizada através do componente ProfileImage */}
          <ProfileImage src="/perfil/edu.png" alt="Perfil de Edu" width={250} />
        </div>
      </Grid>
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
    </AppContainer>
  );
}

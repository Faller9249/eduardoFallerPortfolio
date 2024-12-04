import { useCallback } from "react";

import AppContainer, { AppSubTitle, AppTitle } from "@/components/AppContainer";
import { Grid } from "./styles";
import { useInternationalization } from "@/hooks/internationalization";
import BtnSocial from "@/components/BtnSocial";

export default function Home() {
  const { t } = useInternationalization();
  return (
    <AppContainer>
      <Grid>
        <div>
          <img src="/perfil/edu.png" width={250} />
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

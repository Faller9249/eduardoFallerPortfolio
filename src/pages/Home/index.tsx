import { useCallback } from "react";

import AppContainer, { AppSubTitle, AppTitle } from "@/components/AppContainer";
import { Grid } from "./styles";

export default function Home() {
  return (
    <AppContainer>
      <AppTitle>Home</AppTitle>
      <AppSubTitle>SubTitulo</AppSubTitle>

      <Grid>
      </Grid>
    </AppContainer>
  );
}

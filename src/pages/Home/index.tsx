import { useCallback } from "react";

import AppContainer, { AppSubTitle, AppTitle } from "@/components/AppContainer";
import Carousel from "@/components/Carousel";
import devices from "@/data/devices.json";
import { useResponsive } from "@/hooks";
import { useAuth } from "@/hooks/auth";
import { useInternationalization } from "@/hooks/internationalization";

export default function Home() {
  const { t } = useInternationalization();
  const { user } = useAuth();
  const { isTabletOrMobile } = useResponsive();

  const onOpen = useCallback((path: string) => {
    window.open(path);
  }, []);

  return (
    <AppContainer>
      <AppTitle>
        {t("login.goodToSeeYou")}
        {user.name ? `, ${user.name}` : ""}
      </AppTitle>
      <AppSubTitle>{t("home.wishDo")}</AppSubTitle>

      <Grid isTabletOrMobile={isTabletOrMobile}>
        <Know isTabletOrMobile={isTabletOrMobile}>
          <img src="/home/home1.png" />

          <strong>{t("home.knowInlite")}</strong>

          <div>
            {[1, 2, 3, 4].map((index) => (
              <p key={index}>{t(`home.knowInlite${index}`)}</p>
            ))}
          </div>
        </Know>
        <Benefits>
          <img src="/home/home2.png" />

          <BenefitsText>
            <div>{t("home.benefits")}</div>

            <ul>
              {[1, 2, 3, 4, 5].map((index) => (
                <section>
                  <img src="/global/check.svg" />
                  <li key={index}>{t(`home.benefits${index}`)}</li>
                </section>
              ))}
            </ul>
          </BenefitsText>
        </Benefits>

        <Products>
          <ProductsTitle>
            <div>{t("home.products")}</div>
          </ProductsTitle>

          <Carousel
            disableDotsControls
            infinite
            mouseTracking
            autoPlay
            autoPlayInterval={3000}
            animationDuration={1000}
            animationType="fadeout"
            responsive={{
              900: { items: 1 },
              1200: { items: 2 },
              1700: { items: 3 },
            }}
          >
            
          </Carousel>
        </Products>
      </Grid>
    </AppContainer>
  );
}
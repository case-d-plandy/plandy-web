import { useTranslation } from "react-i18next";

import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Typography from "@components/atoms/Typography";

import i18n from "@utils/i18n";

import { ImageBox, StyledIntro, SubTitle, Title, TitleBox } from "./Intro.styles";

function Intro() {
  const { t } = useTranslation();

  return (
    <StyledIntro>
      <TitleBox>
        <Title>Plandy</Title>
        <SubTitle>{t("intro_text")}</SubTitle>
        <Box mt={2}>
          <Button
            variant="text"
            startIcon={<img src="/images/icon_app_store.png" alt="App Store" width="24px" />}
            onClick={() => window.open("https://apps.apple.com/us/app/id6736831438")}
          >
            <Typography variant="title" fontWeight={500}>
              App Store
            </Typography>
          </Button>
        </Box>
      </TitleBox>
      <ImageBox>
        <img
          src={`/images/plandy_mockup_${["en", "ko"].includes(i18n.language) ? i18n.language : "en"}.png`}
        />
      </ImageBox>
    </StyledIntro>
  );
}

export default Intro;

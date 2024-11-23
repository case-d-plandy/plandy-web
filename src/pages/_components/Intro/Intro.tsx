import { useTranslation } from "react-i18next";

import AppStoreIcon from "@assets/images/icon_app_store.png";
import PlandyMockupEn from "@assets/images/plandy_mockup_en.png";
import PlandyMockupJA from "@assets/images/plandy_mockup_ja.png";
import PlandyMockupKO from "@assets/images/plandy_mockup_ko.png";
import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Typography from "@components/atoms/Typography";

import i18n from "@utils/i18n";

import { ImageBox, StyledIntro, SubTitle, Title, TitleBox } from "./Intro.styles";

const PlandyMockupImage = {
  en: PlandyMockupEn,
  ko: PlandyMockupKO,
  ja: PlandyMockupJA
};

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
            startIcon={<img src={AppStoreIcon} alt="App Store" width="24px" />}
            onClick={() => window.open("https://apps.apple.com/us/app/id6736831438")}
          >
            <Typography ml={1}>Download on</Typography>
            <Typography variant="title" fontWeight={500}>
              App Store
            </Typography>
          </Button>
        </Box>
      </TitleBox>
      <ImageBox>
        <img
          src={
            i18n.language.toString() in PlandyMockupImage
              ? PlandyMockupImage[i18n.language.toString() as keyof typeof PlandyMockupImage]
              : PlandyMockupImage.en
          }
        />
      </ImageBox>
    </StyledIntro>
  );
}

export default Intro;

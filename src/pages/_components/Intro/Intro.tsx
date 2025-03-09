import { useTranslation } from "react-i18next";

import AppStoreIcon from "@assets/images/icon_app_store.png";
import PlandyMockupEn from "@assets/images/plandy_mockup_en.png";
import PlandyMockupJA from "@assets/images/plandy_mockup_ja.png";
import PlandyMockupKO from "@assets/images/plandy_mockup_ko.png";
import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Typography from "@components/atoms/Typography";

import { matchSupportLanguage } from "@utils/i18n";

import { ImageBox, StyledIntro, SubTitle, Title, TitleBox, ImageRatioBox } from "./Intro.styles";

const PlandyMockupImage = {
  en: PlandyMockupEn,
  ko: PlandyMockupKO,
  ja: PlandyMockupJA
};

function Intro() {
  const { i18n, t } = useTranslation();

  return (
    <StyledIntro>
      <TitleBox>
        <Title>Plandy</Title>
        <SubTitle>{t("intro_text")}</SubTitle>
        <Box mt={2}>
          <Button
            variant="text"
            startIcon={<img src={AppStoreIcon} width={24} height={24} alt="App Store" />}
            onClick={() =>
              window.open(
                `https://apps.apple.com/${matchSupportLanguage(i18n.resolvedLanguage).country}/app/id6736831438`
              )
            }
          >
            <Typography ml={1}>Download on</Typography>
            <Typography variant="title" fontWeight={500}>
              App Store
            </Typography>
          </Button>
        </Box>
      </TitleBox>
      <ImageBox>
        <ImageRatioBox>
          <img
            width={750}
            height={568}
            src={
              i18n.language in PlandyMockupImage
                ? PlandyMockupImage[i18n.language as keyof typeof PlandyMockupImage]
                : PlandyMockupImage.en
            }
            alt="Plandy Mockup"
          />
        </ImageRatioBox>
      </ImageBox>
    </StyledIntro>
  );
}

export default Intro;

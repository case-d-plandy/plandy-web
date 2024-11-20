import { useTranslation } from "react-i18next";

import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";

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
            startIcon={<Icon name="ImportBold" />}
            onClick={() => window.open("https://apps.apple.com/us/app/id6736831438")}
          >
            <Typography>Download On the</Typography>
            <Typography variant="title" fontWeight={700}>
              App store
            </Typography>
          </Button>
        </Box>
      </TitleBox>
      <ImageBox>
        <Icon name="ImageBold" />
      </ImageBox>
    </StyledIntro>
  );
}

export default Intro;

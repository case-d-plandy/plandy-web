import Box from "@components/atoms/Box";
import Button from "@components/atoms/Button";
import Icon from "@components/atoms/Icon";
import Typography from "@components/atoms/Typography";

import { ImageBox, StyledIntro, SubTitle, Title, TitleBox } from "./Intro.styles";

function Intro() {
  return (
    <StyledIntro>
      <TitleBox>
        <Title>Plandy</Title>
        <SubTitle>Simple schedule planner with Apple CloudKit</SubTitle>
        <Box mt={2}>
          <Button variant={"text"} startIcon={<Icon name={"ImportBold"} />}>
            <Typography>Download On the</Typography>
            <Typography variant={"title"} fontWeight={700}>
              App store
            </Typography>
          </Button>
        </Box>
      </TitleBox>
      <ImageBox>
        <Icon name={"ImageBold"} />
      </ImageBox>
    </StyledIntro>
  );
}

export default Intro;

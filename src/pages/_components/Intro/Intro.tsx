import Icon from "@components/atoms/Icon";

import { ImageBox, StyledIntro, SubTitle, Title, TitleBox } from "./Intro.styles";

function Intro() {
  return (
    <StyledIntro>
      <TitleBox>
        <Title>Plan Mate</Title>
        <SubTitle>Simple schedule planner with Apple CloudKit</SubTitle>
      </TitleBox>
      <ImageBox>
        <Icon name={"ImageBold"} />
      </ImageBox>
    </StyledIntro>
  );
}

export default Intro;

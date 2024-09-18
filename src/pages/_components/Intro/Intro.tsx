import { ImageBox, StyledIntro, SubTitle, Title, TitleBox } from "./Intro.styles";

function Intro() {
  return (
    <StyledIntro>
      <TitleBox>
        <Title>Plan Mate</Title>
        <SubTitle>Simple schedule planner with Apple CloudKit</SubTitle>
      </TitleBox>
      <ImageBox>App Image Box</ImageBox>
    </StyledIntro>
  );
}

export default Intro;

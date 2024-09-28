import styled from "basic-styled";

export const StyledIntro = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme: { spacing } }) => `${spacing(4)}px`};
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  padding: ${({ theme: { spacing } }) => `${spacing(20)}px`} 0px;
`;

export const Title = styled.h1`
  background: linear-gradient(
    90deg,
    ${({ theme: { palette } }) => palette.secondary} 5%,
    ${({ theme: { palette } }) => palette.primary} 90%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({
    theme: {
      typography: { display }
    }
  }) => ({
    fontSize: display.large.size,
    fontWeight: 700,
    letterSpacing: display.large.letterSpacing
  })};
`;

export const SubTitle = styled.h2`
  ${({
    theme: {
      typography: { headline }
    }
  }) => ({
    fontSize: headline.large.size,
    fontWeight: 500,
    letterSpacing: headline.large.letterSpacing
  })};
`;

export const ImageBox = styled.div`
  text-align: center;
  flex-grow: 1;
  padding: ${({ theme: { spacing } }) => `${spacing(20)}px ${spacing(10)}px`};
  border: 1px solid ${({ theme: { palette } }) => palette.subText};
  border-radius: ${({ theme: { spacing } }) => `${spacing(1)}px`};
`;

import styled from "basic-styled";

export const StyledGeneralLayout = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 ${({ theme: { spacing } }) => `${spacing(3)}px`};
`;

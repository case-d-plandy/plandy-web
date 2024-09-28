import styled from "basic-styled";

export const StyledGuideList = styled.ul`
  margin-top: ${({ theme }) => `${theme.spacing(3)}px`};
`;

export const GuideListItem = styled.li`
  & button {
    text-align: left;
  }
  & button > svg {
    min-width: fit-content;
  }
`;

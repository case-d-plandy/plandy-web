import styled from "basic-styled";

export const StyledFagList = styled.ul`
  margin-top: ${({ theme }) => `${theme.spacing(3)}px`};
`;

export const FagListItem = styled.li`
  & button {
    text-align: left;
  }
  & button > svg {
    min-width: fit-content;
  }
`;

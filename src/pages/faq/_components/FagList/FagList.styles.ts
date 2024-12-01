import styled from "basic-styled";

export const StyledFagList = styled.ul`
  margin-top: ${({ theme }) => `${theme.spacing(3)}px`};
`;

export const FagListItem = styled.li`
  & button {
    text-align: left;
    color: ${({ theme }) => theme.palette.grey["700"]};
  }
  & button > svg {
    min-width: fit-content;
  }
`;

export const Bullet = styled.span`
  min-width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme: { palette } }) => palette.grey["700"]};
`;

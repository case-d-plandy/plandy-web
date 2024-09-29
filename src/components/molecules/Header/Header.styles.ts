import styled from "basic-styled";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => `${spacing(3)}px ${spacing(3)}px`};
  backdrop-filter: blur(8px);
  z-index: 1;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: ${({ theme: { spacing } }) => `-${spacing(1)}px`};
`;

export const Logo = styled.div`
  border-radius: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  overflow: hidden;
`;

export const Adornment = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => `${spacing(1)}px`};
`;

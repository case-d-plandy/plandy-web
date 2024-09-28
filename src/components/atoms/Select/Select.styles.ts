import styled from "basic-styled";

import type { SelectProps } from "./Select";

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledSelect = styled.button<
  Pick<SelectProps, "size"> & {
    open: boolean;
  }
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: { spacing } }) => `${spacing(0.5)}px`};
  border-radius: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  background-color: transparent;
  color: ${({ theme: { palette } }) => palette.mainText};

  ${({
    theme: {
      typography: { title, body },
      spacing
    },
    size
  }) => {
    switch (size) {
      case "large":
        return {
          padding: `${spacing(1.5)}px`,
          fontSize: title.large.size,
          fontWeight: title.large.weight
        };
      case "small":
        return {
          padding: `${spacing(1)}px`,
          fontSize: body.small.size,
          fontWeight: 500
        };
      default:
        return {
          padding: `${spacing(1.25)}px`,
          fontSize: title.medium.size,
          fontWeight: 500
        };
    }
  }};

  &:hover {
    ${({ theme: { mode } }) => ({
      backgroundColor: mode === "dark" ? "rgba(238, 243, 255, 0.04)" : "rgba(35, 42, 61, 0.03)"
    })};
  }
  &:active {
    ${({ theme: { mode } }) => ({
      backgroundColor: mode === "dark" ? "rgba(238, 243, 255, 0.11)" : "rgba(35, 42, 61, 0.09)"
    })};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const SelectInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: { spacing } }) => `${spacing(1)}px`};
`;

export const EndIcon = styled.span<{
  open: boolean;
}>`
  transform: rotate(${({ open }) => `${open ? 180 : 0}deg`});
`;

export const OptionBox = styled.div<Pick<SelectProps, "size">>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  border: 1px solid ${({ theme: { palette } }) => palette.border};
  border-radius: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  background-color: ${({ theme: { palette } }) => palette.background};

  ${({
    theme: {
      typography: { title, body },
      spacing
    },
    size
  }) => {
    switch (size) {
      case "large":
        return {
          padding: `${spacing(1.5)}px`,
          fontSize: title.large.size,
          fontWeight: title.large.weight
        };
      case "small":
        return {
          padding: `${spacing(1)}px`,
          fontSize: body.small.size,
          fontWeight: 500
        };
      default:
        return {
          padding: `${spacing(1.25)}px`,
          fontSize: title.medium.size,
          fontWeight: 500
        };
    }
  }};
`;

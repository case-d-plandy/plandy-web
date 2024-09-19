import styled from "basic-styled";

import type { SelectProps } from "./Select";

export const StyledSelect = styled.button<
  Pick<SelectProps, "size"> & {
    open: boolean;
  }
>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: { spacing } }) => `${spacing(0.5)}px`};
  border-radius: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  background-color: transparent;
  color: ${({ theme: { palette } }) => palette.mainText};

  ${({ theme: { spacing }, size }) => {
    switch (size) {
      case "large":
        return {
          padding: `${spacing(1.5)}px`,
          fontSize: "15px",
          fontWeight: 500
        };
      case "small":
        return {
          padding: `${spacing(1)}px`,
          fontSize: "12px",
          fontWeight: 500
        };
      default:
        return {
          padding: `${spacing(1.25)}px`,
          fontSize: "14px",
          fontWeight: 500
        };
    }
  }};

  &:hover {
    ${({ theme: { mode }, open }) => {
      if (open) {
        return {};
      }

      return {
        backgroundColor: mode === "dark" ? "rgba(238, 243, 255, 0.04)" : "rgba(35, 42, 61, 0.03)"
      };
    }};
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

export const OptionBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  border: 1px solid ${({ theme: { palette } }) => palette.subText};
  border-radius: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  background-color: ${({ theme: { palette } }) => palette.background};
`;

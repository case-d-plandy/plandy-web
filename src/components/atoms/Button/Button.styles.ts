import styled from "basic-styled";

import type { ButtonProps } from "./Button";

export const StyledButton = styled.button<Pick<ButtonProps, "variant" | "size">>`
  border-radius: ${({ theme: { spacing } }) => `${spacing(1)}px`};
  color: ${({ theme: { palette } }) => palette.mainText};

  ${({ theme: { palette }, variant }) => {
    switch (variant) {
      case "text":
        return {
          backgroundColor: "transparent"
        };
      default:
        return {
          // TODO color defined
          backgroundColor: palette.primary
        };
    }
  }};

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
    ${({ theme: { mode }, variant }) => {
      switch (variant) {
        case "text":
          return {
            // TODO add theme color
            backgroundColor:
              mode === "dark" ? "rgba(238, 243, 255, 0.04)" : "rgba(35, 42, 61, 0.03)"
          };
        // TODO add other variants
        default:
          return {};
      }
    }};
  }
  &:active {
    ${({ theme: { mode }, variant }) => {
      switch (variant) {
        case "text":
          return {
            backgroundColor:
              mode === "dark" ? "rgba(238, 243, 255, 0.11)" : "rgba(35, 42, 61, 0.09)"
          };
        // TODO add other variants
        default:
          return {};
      }
    }};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

import styled from "basic-styled";

import type { ButtonProps } from "./Button";

export const StyledButton = styled.button<Pick<ButtonProps, "variant" | "size">>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: { spacing } }) => `${spacing(1)}px`};
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

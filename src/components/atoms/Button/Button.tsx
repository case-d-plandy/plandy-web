import { ButtonHTMLAttributes, ReactNode } from "react";

import { StyledButton } from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "text";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

function Button({
  children,
  variant = "filled",
  size = "medium",
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
}

export default Button;

import { ButtonHTMLAttributes } from "react";

import { StyledButton } from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "text";
  size?: "small" | "medium" | "large";
}

function Button({ children, variant = "filled", size = "medium", ...props }: ButtonProps) {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;

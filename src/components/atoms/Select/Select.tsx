import {
  ButtonHTMLAttributes,
  Children,
  cloneElement,
  isValidElement,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  useEffect,
  useRef,
  useState
} from "react";

import type { OptionProps } from "./Option";
import { EndIcon, OptionBox, SelectInner, StyledSelect } from "./Select.styles";

export interface SelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onChange"> {
  children?: ReactElement<OptionProps> | ReactElement<OptionProps>[];
  size?: "small" | "medium" | "large";
  onChange?: (value?: string) => void;
  value?: string;
  endIcon?: ReactElement;
  placeholder?: string;
}

function Select({
  children,
  onChange,
  value,
  endIcon,
  placeholder = "선택",
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [optionBoxTop, setOptionBoxTop] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOption =
    (optionValue?: string, childOnClick?: MouseEventHandler) => (e: MouseEvent<HTMLDivElement>) => {
      setIsOpen(false);

      if (typeof onChange === "function") {
        onChange(optionValue);
      }

      if (typeof childOnClick === "function") {
        childOnClick(e);
      }
    };

  const options = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return null;
    }

    return cloneElement(child, {
      ...child?.props,
      onClick: handleClickOption(child?.props?.value, child?.props?.onClick),
      selected: child?.props?.value === value
    });
  })?.filter(Boolean);
  const selectedOption = options?.find((option) => option?.props?.selected);

  const handleClick = () => setIsOpen((prevState) => !prevState);

  const handleClickStopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  useEffect(() => {
    const handleResize = () => {
      setOptionBoxTop((ref.current?.parentElement?.offsetHeight || 0) + 8);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, children]);

  return (
    <StyledSelect open={isOpen} onClick={handleClick} {...props}>
      <div ref={ref}>
        <SelectInner>
          <span>{selectedOption?.props?.children || placeholder}</span>
          {endIcon && <EndIcon open={isOpen}>{endIcon}</EndIcon>}
          {isOpen && (
            <OptionBox
              onClick={handleClickStopPropagation}
              style={{
                top: optionBoxTop
              }}
            >
              {options}
            </OptionBox>
          )}
        </SelectInner>
      </div>
    </StyledSelect>
  );
}

export default Select;

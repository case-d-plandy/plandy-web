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

import { GoogleAnalytics } from "@utils/google-analytics";

import { EndIcon, OptionBox, SelectInner, StyledSelect, Wrapper } from "./Select.styles";

import type { OptionProps } from "./Option";

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
  size,
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

      if (optionValue) {
        GoogleAnalytics.logEvent("select_language_option", {
          selected_item: optionValue
        });
      }

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

  const handleClick = () => {
    if (isOpen) {
      GoogleAnalytics.logEvent("click_top_nav", {
        item_name: "language"
      });
    }

    setIsOpen((prevState) => !prevState);
  };

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
    <Wrapper>
      <StyledSelect open={isOpen} onClick={handleClick} size={size} {...props}>
        <SelectInner ref={ref}>
          <span>{selectedOption?.props?.children || placeholder}</span>
          {endIcon && <EndIcon open={isOpen}>{endIcon}</EndIcon>}
        </SelectInner>
      </StyledSelect>
      {isOpen && (
        <OptionBox
          onClick={handleClickStopPropagation}
          size={size}
          style={{
            top: optionBoxTop
          }}
        >
          {options}
        </OptionBox>
      )}
    </Wrapper>
  );
}

export default Select;

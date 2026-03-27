import InputMask from "react-input-mask";
import { forwardRef } from "react";
import { StyledInput, Wrapper } from "./styles";

type InputBankAccountProps = {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">;

export const InputBankAccount = forwardRef<
  HTMLInputElement,
  InputBankAccountProps
>(
  (
    {
      id,
      label,
      value = "",
      onChange,
      disabled,
      placeholder = "000000000-0",
      className,
      ...props
    },
    ref
  ) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const rawValue = e.target.value.replace(/\D/g, "");
      onChange?.(rawValue);
    }

    return (
      <Wrapper className={className}>
        {label && <label htmlFor={id}>{label}</label>}

        <InputMask
          mask="999999999-9"
          value={value}
          onChange={handleChange}
          disabled={disabled}
        >
          {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
            <StyledInput
              {...inputProps}
              {...props}
              id={id}
              ref={ref}
              placeholder={placeholder}
            />
          )}
        </InputMask>
      </Wrapper>
    );
  }
);

InputBankAccount.displayName = "InputBankAccount";
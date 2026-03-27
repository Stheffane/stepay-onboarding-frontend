import { StyledCurrencyInput, Wrapper } from "./styles";

type InputMoneyProps = {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
};

export function InputMoney({
  id,
  label,
  value,
  onChange,
  onBlur,
  disabled,
  placeholder = "R$ 0,00",
  className,
}: InputMoneyProps) {
  function handleChange(val?: string) {
    if (!onChange) return;
    onChange(val ?? "");
  }

  return (
    <Wrapper className={className}>
      {label && <label htmlFor={id}>{label}</label>}

      <StyledCurrencyInput
        id={id}
        value={value}
        onValueChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        prefix="R$ "
        decimalSeparator=","
        groupSeparator="."
        decimalsLimit={2}
        placeholder={placeholder}
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
      />
    </Wrapper>
  );
}
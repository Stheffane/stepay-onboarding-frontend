import styled from "styled-components";
import CurrencyInput from "react-currency-input-field";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.secondaryColor};
  }

  .invalid {
    border-color: #ff0a62 !important;
  }
`;

export const StyledCurrencyInput = styled(CurrencyInput)`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }

  &:disabled {
    opacity: 0.6;
  }
`;
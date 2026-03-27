import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 8px;
    color: #616e8e;
  }

  .invalid {
    border-color: #ff0a62 !important;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }

  &:disabled {
    opacity: 0.7;
    color: #a3aec9;
  }
`;
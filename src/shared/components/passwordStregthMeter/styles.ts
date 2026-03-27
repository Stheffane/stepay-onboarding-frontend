import styled from "styled-components";

export const Progress = styled.progress`
  appearance: none;
  flex: 1;
  height: 4px;
  border-radius: 4px;
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: #e9eafa;
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  &.strength-Fraca::-webkit-progress-value {
    background-color: #ff0a62;
  }

  &.strength-Normal::-webkit-progress-value {
    background-color: #ffe066;
  }

  &.strength-Bom::-webkit-progress-value {
    background-color: #247ba0;
  }

  &.strength-Forte::-webkit-progress-value {
    background-color: #70c1b3;
  }
`;

export const PasswordStrengthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;

  .left {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 8px;
    margin-right: 20px;
  }

  img {
    width: 18px;
    height: 18px;
  }

  label {
    font-weight: 600;

    &.strength-Fraca {
      color: #ff0a62;
    }

    &.strength-Normal {
      color: #ffe066;
    }

    &.strength-Bom {
      color: #247ba0;
    }

    &.strength-Forte {
      color: #70c1b3;
    }
  }
`;
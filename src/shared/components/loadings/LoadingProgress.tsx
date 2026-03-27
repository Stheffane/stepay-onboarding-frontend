import { CircularProgress } from "@mui/material";
import styled from "styled-components";

type LoadingProgressProps = {
  percentValue: number;
};

export default function LoadingProgress({
  percentValue,
}: LoadingProgressProps) {
  return (
    <Wrapper>
      <ProgressContainer>
        <StyledProgress
          variant="determinate"
          value={percentValue}
          size={160}
          thickness={5}
        />
        <PercentLabel>{percentValue}%</PercentLabel>
      </ProgressContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
`;

const ProgressContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

const StyledProgress = styled(CircularProgress)`
  color: ${({ theme }) => theme.primaryColor} !important;
`;

const PercentLabel = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;

  color: ${({ theme }) => theme.primaryColor};
`;
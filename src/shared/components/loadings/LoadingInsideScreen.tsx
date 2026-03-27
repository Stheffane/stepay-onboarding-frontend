import { CircularProgress } from "@mui/material";
import styled from "styled-components";

type LoadingInsideScreenProps = {
  isLoading: boolean;
};

export default function LoadingInsideScreen({
  isLoading
}: LoadingInsideScreenProps) {
  if (!isLoading) return null;

  return (
    <Wrapper>
      <CircularProgress size={40} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 64vh;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
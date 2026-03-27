import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

type LoadingProps = {
  isLoading: boolean;
};

export default function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return null;

  return (
    <Overlay>
      <LoadingSpinner size={60} />
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background-color: rgba(255, 255, 255, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`;
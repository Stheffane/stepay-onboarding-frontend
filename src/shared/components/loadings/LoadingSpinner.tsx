import styled from "styled-components";

type LoadingSpinnerProps = {
  size?: number;
  mobileSize?: number;
};

export default function LoadingSpinner({
  size = 48,
  mobileSize = 36
}: LoadingSpinnerProps) {
  return (
    <Wrapper $mobileSize={mobileSize}>
      <svg
        className="spinner"
        width={size}
        height={size}
        viewBox="0 0 66 66"
      >
        <circle
          className="path-back"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />

        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $mobileSize: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  --offset: 187;
  --duration: 1.4s;

  .spinner {
    border-radius: 50%;
    animation: rotator var(--duration) linear infinite;
  }

  @media (max-width: 350px) {
    .spinner {
      width: ${({ $mobileSize }) => $mobileSize}px;
      height: ${({ $mobileSize }) => $mobileSize}px;
    }
  }

  @keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .path-back {
    stroke-dasharray: var(--offset);
    stroke-dashoffset: 0;
    stroke-width: 7px;
    transform-origin: center;
    stroke: #E9EAFA;
  }

  .path {
    stroke-dasharray: var(--offset);
    stroke-dashoffset: 0;
    stroke-width: 7px;
    transform-origin: center;
    stroke: ${({ theme }) => theme.primaryColor};

    animation:
      dash var(--duration) ease-in-out infinite,
      colors calc(var(--duration) * 5) ease-in-out infinite;
  }

  @keyframes colors {
    0% { stroke: ${({ theme }) => theme.primaryColor}; }
    40% { stroke: ${({ theme }) => theme.secondaryColor}; }
    80% {
      stroke: ${({ theme }) =>
    theme.secondaryColor === theme.tertiaryColor
      ? theme.secondaryColor
      : theme.tertiaryColor};
    }
    100% { stroke: ${({ theme }) => theme.primaryColor}; }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 187px;
      transform: rotate(90deg);
    }

    50% {
      stroke-dashoffset: calc(187px / 4);
      transform: rotate(110deg);
    }

    100% {
      stroke-dashoffset: 187px;
      transform: rotate(450deg);
    }
  }
`;
import zxcvbn from "zxcvbn";
import { Progress, PasswordStrengthWrapper } from "./styles";

const Padlock = "/images/icon-clock.svg";

type PasswordStrengthMeterProps = {
  password: string;
};

type StrengthLabel = "Fraca" | "Normal" | "Bom" | "Forte";

function getStrengthLabel(score: number): StrengthLabel {
  switch (score) {
    case 0:
    case 1:
      return "Fraca";
    case 2:
      return "Normal";
    case 3:
      return "Bom";
    case 4:
      return "Forte";
    default:
      return "Fraca";
  }
}

export function PasswordStrengthMeter({
  password,
}: PasswordStrengthMeterProps) {
  const result = zxcvbn(password);
  const label = getStrengthLabel(result.score);

  return (
    <PasswordStrengthWrapper>
      <div className="left">
        <img src={Padlock} alt="password strength" />

        <Progress
          className={`strength-${label}`}
          value={result.score}
          max={4}
        />
      </div>

      <label className={`strength-${label}`}>{label}</label>
    </PasswordStrengthWrapper>
  );
}
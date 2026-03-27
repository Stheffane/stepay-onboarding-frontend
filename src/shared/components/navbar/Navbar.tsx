import { Container, Stepper, Step, StepLabel } from "@mui/material";
import { STEP_INDEX, useOnboardingFlowStore, type OnboardingFlowState } from "../../../store/onboarding-flow.store";
import { STEPS_CONFIG } from "./steps.config";
// import LetterSize from "../LetterSize";

import {
  NavbarWrapper,
  NavbarTop,
  LogoContainer,
  Logo,
  Title,
  StepsContainer
} from "./styles";

export default function Navbar() {
  const step = useOnboardingFlowStore((s: OnboardingFlowState) => s.step);

  const currentIndex = STEP_INDEX[step];
  const steps = STEPS_CONFIG[currentIndex] ?? [];

  return (
    <NavbarWrapper>
      <Container maxWidth="lg">
        <NavbarTop>
          <LogoContainer>
            <Logo src="/images/logo-stepay.svg" alt="stepay" />

            <Title>
              Solicitação
              <br />
              de Empréstimo
            </Title>
          </LogoContainer>

          {/* <LetterSize /> */}
        </NavbarTop>

        <StepsContainer>
          <Stepper activeStep={Number(step)} alternativeLabel>
            {steps.map((s) => (
              <Step key={s.title}>
                <StepLabel>{s.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepsContainer>
      </Container>
    </NavbarWrapper>
  );
}
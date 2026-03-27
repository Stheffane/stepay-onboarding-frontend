import type { ReactNode } from "react";
import { Container } from "@mui/material";
import { OnboardingFormProvider } from "../../providers/onboarding-form.provider";


type Props = {
  children: ReactNode;
};

export function OnboardingLayout({ children }: Props) {
  return (
    <OnboardingFormProvider>
      <Container maxWidth="sm">
        {children}
      </Container>
    </OnboardingFormProvider>
  );
}
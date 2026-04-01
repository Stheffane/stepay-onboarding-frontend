import { Container, Typography, Grid } from "@mui/material";
import type { ReactNode } from "react";
import Footer from "../footer/Footer";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;

  onSubmit: () => void;
  formId: string;

  isSubmitting?: boolean;
  disableSubmit?: boolean;

  leftButton?: "voltar" | "desistir";
  onBack?: () => void;
};

export function OnboardingFormPage({
  title,
  subtitle,
  children,
  onSubmit,
  formId,
  disableSubmit,
  leftButton = "voltar",
  onBack,
}: Props) {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" mb={2}>
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="h6" mb={4}>
          {subtitle}
        </Typography>
      )}

      <form id={formId} onSubmit={onSubmit}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </form>

      <Footer
        leftButton={leftButton}
        leftButtonOnClick={onBack}
        rightButton="avancar"
        rightButtonForm={formId}
        rightButtonDisabled={disableSubmit}
      />
    </Container>
  );
}
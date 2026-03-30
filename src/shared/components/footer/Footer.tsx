import { Button, Container } from "@mui/material";
import { useEffect } from "react";

import {
  iconCloseStyle,
  iconLeftArrowStyle,
  iconRightStyle,
  FooterWrapper,
  ButtonsRow,
  LeftArea,
  RightArea,
  LeftButton
} from "./styles";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

type FooterProps = {
  leftButton?: "negar" | "desistir" | "voltar" | "acordo";
  rightButton?: "aceitar" | "confirmar" | "finalizar" | "avancar";

  leftButtonLink?: string;
  rightButtonLink?: string;

  leftButtonOnClick?: () => void;
  rightButtonOnClick?: () => void;

  rightButtonDisabled?: boolean;
  rightButtonForm?: string;
};

export default function Footer({
  leftButton,
  rightButton = "avancar",
  leftButtonLink,
  rightButtonLink,
  leftButtonOnClick,
  rightButtonOnClick,
  rightButtonDisabled = false,
  rightButtonForm
}: FooterProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <ButtonsRow>
          <LeftArea>
            {leftButton && (
              <LeftButton
                onClick={leftButtonOnClick}
                href={leftButtonLink}
              >
                {renderLeftIcon(leftButton)}
                {renderLeftText(leftButton)}
              </LeftButton>
            )}
          </LeftArea>

          <RightArea>
            <Button
              variant="contained"
              size="large"
              disabled={rightButtonDisabled}
              form={rightButtonForm || undefined}
              onClick={rightButtonOnClick}
              href={rightButtonLink}
              type={rightButtonOnClick ? "button" : "submit"}
            >
              {renderRightText(rightButton)}
              {renderRightIcon(rightButton)}
            </Button>
          </RightArea>
        </ButtonsRow>
      </Container>
    </FooterWrapper>
  );
}

function renderLeftText(type: FooterProps["leftButton"]) {
  switch (type) {
    case "negar":
      return "Negar Proposta";
    case "desistir":
      return "Quero Desistir";
    case "voltar":
      return "Voltar";
    case "acordo":
      return "Não Estou de Acordo";
    default:
      return null;
  }
}

function renderLeftIcon(type: FooterProps["leftButton"]) {
  switch (type) {
    case "voltar":
      return <ArrowBackIcon style={iconLeftArrowStyle} />;
    default:
      return <CloseIcon style={iconCloseStyle} />;
  }
}

function renderRightText(type: FooterProps["rightButton"]) {
  switch (type) {
    case "aceitar":
      return "Aceitar Proposta";
    case "confirmar":
      return "Confirmar";
    case "finalizar":
      return "Finalizar";
    default:
      return "Avançar";
  }
}

function renderRightIcon(type: FooterProps["rightButton"]) {
  switch (type) {
    case "aceitar":
    case "finalizar":
      return <CheckIcon style={iconRightStyle} />;
    default:
      return <ArrowForwardIcon style={iconRightStyle} />;
  }
}


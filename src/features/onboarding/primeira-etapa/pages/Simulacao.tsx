import {
  Container,
  Typography,
  Grid,
  Slider,
  Card,
  Divider,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useOnboardingStore } from "../../../../store";
import Footer from "../../../../shared/components/footer/Footer";
import { PATHS } from "../../../../app/router/paths";
import { formatMoney } from "../../../../shared/utils";

// TODO: substituir por valores reais, vindos da API
const VALOR_MIN = 10000;
const VALOR_MAX = 300000;
const VALOR_STEP = 5000;
const PARCELAS_MIN = 6;
const PARCELAS_MAX = 24;
const PARCELAS_STEP = 3;

export default function SimulacaoPage() {
  const navigate = useNavigate();
  const { model, setModel } = useOnboardingStore();

  const [valor, setValor] = useState(
    model?.simulacao?.simulatedValue ?? VALOR_MIN
  );
  const [parcelas, setParcelas] = useState(
    model?.simulacao?.simulatedParcelas ?? PARCELAS_MIN
  );

  const valorTotal = valor * 1.05; // simulando juros fixos de 5% para todo cenário, apenas para exemplo
  const valorParcela = valorTotal / parcelas;

  const handleSubmit = () => {
    setModel({
      ...(model ?? {}),
      simulacao: {
        simulatedValue: valor,
        simulatedParcelas: parcelas,
      },
    });

    navigate(PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.SOCIO);

    // TODO: adicionar outros caminhos possíveis
    // Exemplo:
    // if (empresaPossuiSocios) {
    //   navigate(PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.SOCIOS);
    // } else if (foraDoQuadro) {
    //   navigate(PATHS.SEGUNDA_ETAPA.PROXIMOS_PASSOS.FORA_QUADRO);
    // }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" mb={2}>
        Pré-aprovado!
      </Typography>

      <Typography variant="h6" mb={4}>
        Você possui crédito disponível. Escolha como deseja contratar.
      </Typography>

      <Grid container spacing={4}>

        {/* ESQUERDA */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography gutterBottom>Valor desejado</Typography>
          <Typography variant="h5" mb={2}>
            {formatMoney(valor)}
          </Typography>
          <Slider
            min={VALOR_MIN}
            max={VALOR_MAX}
            step={VALOR_STEP}
            value={valor}
            onChange={(_, v) => setValor(v as number)}
          />

          <Typography mt={4} gutterBottom>
            Parcelas
          </Typography>
          <Typography variant="h5" mb={2}>
            {parcelas}x
          </Typography>
          <Slider
            min={PARCELAS_MIN}
            max={PARCELAS_MAX}
            step={PARCELAS_STEP}
            value={parcelas}
            onChange={(_, v) => setParcelas(v as number)}
          />
        </Grid>

        {/* DIREITA */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" mb={2}>
              Resumo
            </Typography>

            <Grid container spacing={1}>
              <Grid size={6}>Valor</Grid>
              <Grid size={6}>{formatMoney(valor)}</Grid>

              <Grid size={6}>Total</Grid>
              <Grid size={6}>{formatMoney(valorTotal)}</Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Typography>{parcelas}x de</Typography>
            <Typography variant="h4">{formatMoney(valorParcela)}</Typography>

            <Typography variant="body2" mt={2}>
              Valores podem sofrer alteração na etapa final
            </Typography>
          </Card>
        </Grid>

      </Grid>

      <Footer
        leftButton="desistir"
        leftButtonOnClick={() => navigate(PATHS.QUARTA_ETAPA.DESISTENCIA)}
        rightButton="avancar"
        rightButtonOnClick={handleSubmit}
      />
    </Container>
  );
}
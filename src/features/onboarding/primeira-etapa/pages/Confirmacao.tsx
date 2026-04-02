import {
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Box,
  Divider,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { useOnboardingStore, useOnboardingFlowStore } from "../../../../store";
import {
  confirmacaoSchema,
  type ConfirmacaoForm,
} from "../schemas/confirmacao.schema";
import { OnboardingFormPage } from "../../../../shared/components";
import { PATHS } from "../../../../app/router/paths";
import { formatMoney } from "../../../../shared/utils";
import { useHydrateForm } from "../../../../shared/hooks";
import { ReadonlyField } from "../components/ReadonlyField";

// modais
import { ModalContract } from "../../../../shared/components";
import { useState } from "react";

type ModalType = "termos" | "politica" | "src" | null;

export default function ConfirmacaoPage() {
  const navigate = useNavigate();
  const { model, setModel } = useOnboardingStore();
  const next = useOnboardingFlowStore((s) => s.next);

  const [openModal, setOpenModal] = useState<ModalType>(null);

  const dadosPessoais = model?.dadosPessoais;
  const detalhesPedido = model?.detalhesPedido;
  const simulacao = model?.simulacao;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConfirmacaoForm>({
    resolver: zodResolver(confirmacaoSchema),
    defaultValues: {
      checkTermos: false,
      checkConsultas: false,
      checkWhatsapp: true,
    },
  });

  useHydrateForm(model?.confirmacao, reset);

  const onSubmit = (values: ConfirmacaoForm) => {
    setModel({
      ...(model ?? {}),
      confirmacao: values,
    });

    next();
    navigate(PATHS.PRIMEIRA_ETAPA.CONSULTA_MOTOR);
  };

  return (
    <>
      <OnboardingFormPage
        title="Confirme seus dados"
        subtitle="Você precisa conferir seus dados para seguirmos em frente com sua solicitação:"
        formId="confirmacao-form"
        onSubmit={handleSubmit(onSubmit)}
        onBack={() => navigate(PATHS.PRIMEIRA_ETAPA.DETALHES_PEDIDO)}
      >
        <Grid container spacing={3}>

          {/* VALOR DESTAQUE */}
          <Grid size={12}>
            <Box
              textAlign="center"
              border="1px solid"
              borderColor="divider"
              borderRadius={2}
              py={3}
            >
              <Typography variant="body2" color="text.secondary" mb={1}>
                Valor do Empréstimo
              </Typography>
              <Typography variant="h4" fontWeight={900}>
                {formatMoney(simulacao?.simulatedValue ?? 0)}
              </Typography>
            </Box>
          </Grid>

          {/* DADOS PESSOAIS */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField label="Nome" value={dadosPessoais?.userName} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField label="Email" value={dadosPessoais?.userEmail} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField
              label="Telefone"
              value={
                dadosPessoais?.userCellphone
                  ? formatPhone(dadosPessoais.userCellphone)
                  : undefined
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField
              label="CPF"
              value={
                dadosPessoais?.userNumberDoc
                  ? formatCpf(dadosPessoais.userNumberDoc)
                  : undefined
              }
            />
          </Grid>

          {/* DADOS DO PEDIDO */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField
              label="CNPJ"
              value={
                detalhesPedido?.userCNPJ
                  ? formatCnpj(detalhesPedido.userCNPJ)
                  : undefined
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField
              label="Nº de funcionários"
              value={detalhesPedido?.userNumberEmployees}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField
              label="Faturamento mensal"
              value={formatMoney(Number(detalhesPedido?.userRevenues ?? 0))}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField
              label="Custos mensais"
              value={formatMoney(Number(detalhesPedido?.userCosts ?? 0))}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <ReadonlyField
              label="Motivo do empréstimo"
              value={detalhesPedido?.userReason}
            />
          </Grid>

          {detalhesPedido?.userPatrimony && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <ReadonlyField
                label="Patrimônio"
                value={formatMoney(Number(detalhesPedido.userPatrimony))}
              />
            </Grid>
          )}

          <Grid size={12}>
            <Divider />
          </Grid>

          {/* CHECKBOXES */}
          <Grid size={12}>
            <Controller
              name="checkTermos"
              control={control}
              render={({ field }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Autorizo o{" "}
                        <Box
                          component="span"
                          color="primary.main"
                          sx={{ cursor: "pointer" }}
                          onClick={() => setOpenModal("src")}
                        >
                          acesso às informações
                        </Box>
                        .
                      </Typography>
                    }
                  />
                  {errors.checkTermos && (
                    <FormHelperText error>
                      {errors.checkTermos.message}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              name="checkConsultas"
              control={control}
              render={({ field }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Concordo com os{" "}
                        <Box
                          component="span"
                          color="primary.main"
                          sx={{ cursor: "pointer" }}
                          onClick={() => setOpenModal("termos")}
                        >
                          termos de uso
                        </Box>{" "}
                        e{" "}
                        <Box
                          component="span"
                          color="primary.main"
                          sx={{ cursor: "pointer" }}
                          onClick={() => setOpenModal("politica")}
                        >
                          política de privacidade
                        </Box>
                        .
                      </Typography>
                    }
                  />
                  {errors.checkConsultas && (
                    <FormHelperText error>
                      {errors.checkConsultas.message}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              name="checkWhatsapp"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={field.value ?? true}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      Aceito receber informações sobre a solicitação de
                      empréstimo via WhatsApp.
                    </Typography>
                  }
                />
              )}
            />
          </Grid>

        </Grid>
      </OnboardingFormPage>

      {/* MODAIS */}
      <ModalContract
        open={openModal === "termos"}
        onClose={() => setOpenModal(null)}
        title="Termos Uso"
      />
      <ModalContract
        open={openModal === "politica"}
        onClose={() => setOpenModal(null)}
      />
      <ModalContract
        open={openModal === "src"}
        onClose={() => setOpenModal(null)}
        title="Serviço de Recuperação de Crédito"
      />
    </>
  );
}

// ─── helpers de formatação ────────────────────────────────────────────────────

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "");
  return d.length === 11
    ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
    : value;
}

function formatCpf(value: string) {
  const d = value.replace(/\D/g, "");
  return d.length === 11
    ? `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`
    : value;
}

function formatCnpj(value: string) {
  const d = value.replace(/\D/g, "");
  return d.length === 14
    ? `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`
    : value;
}
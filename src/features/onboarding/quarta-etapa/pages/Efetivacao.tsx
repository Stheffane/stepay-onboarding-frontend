import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Autocomplete,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { useOnboardingStore } from "../../../../store";
import {
  confirmacaoPropostaSchema,
  type ConfirmacaoPropostaForm,
} from "../schemas/confirmacao.schema";
import { useMockProposta } from "../hooks/useMockProposta";
import { PropostaResumoCard } from "../components/PropostaResumoCard";
import { MOCK_BANCOS } from "../constants/bancos";
import Footer from "../../../../shared/components/footer/Footer";
import { PATHS } from "../../../../app/router/paths";

export default function ConfirmacaoPage() {
  const navigate = useNavigate();
  const { model, setModel } = useOnboardingStore();
  const proposta = useMockProposta();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmacaoPropostaForm>({
    resolver: zodResolver(confirmacaoPropostaSchema),
    defaultValues: {
      banco: "",
      agencia: "",
      conta: "",
      tipoConta: undefined,
      senha: "",
    },
  });

  const onSubmit = (values: ConfirmacaoPropostaForm) => {
    const bancoSelecionado = MOCK_BANCOS.find(
      (b) => `${b.codigoBanco} - ${b.banco}` === values.banco
    );

    setModel({
      ...(model ?? {}),
      dadosBancarios: {
        banco: bancoSelecionado?.banco,
        codigoBanco: bancoSelecionado?.codigoBanco,
        agencia: values.agencia,
        conta: values.conta,
        tipoConta: values.tipoConta,
      },
    });

    // TODO: chamar API AceitarProposta com senha e token
    navigate(PATHS.QUARTA_ETAPA.CONCLUSAO);
  };

  return (
    <Container maxWidth="sm">
      <Box pt={6} pb={4}>
        <Typography variant="h4" mb={1}>
          Conclusão de solicitação
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={1}>
          Veja o resumo da sua proposta, confira e clique em "aceitar" para
          concluir.
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          <em>Valores sujeitos a alterações</em>
        </Typography>

        <PropostaResumoCard proposta={proposta} />

        {/* DADOS BANCÁRIOS — editáveis */}
        <Typography variant="h5" mb={3}>
          Dados Bancários
          <Typography variant="body2" color="text.secondary">
            Insira os dados do mesmo extrato bancário enviado
          </Typography>
        </Typography>

        <form id="confirmacao-proposta-form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mb={4}>

            <Grid size={12}>
              <Controller
                name="banco"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    options={MOCK_BANCOS.map(
                      (b) => `${b.codigoBanco} - ${b.banco}`
                    )}
                    value={field.value || null}
                    onChange={(_, value) => field.onChange(value ?? "")}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Banco"
                        error={!!errors.banco}
                        helperText={errors.banco?.message}
                      />
                    )}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="agencia"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Agência"
                    fullWidth
                    inputProps={{ maxLength: 4 }}
                    error={!!errors.agencia}
                    helperText={errors.agencia?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="conta"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Conta"
                    fullWidth
                    error={!!errors.conta}
                    helperText={errors.conta?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Typography variant="body2" mb={1}>
                Qual o tipo da conta?
              </Typography>
              <Controller
                name="tipoConta"
                control={control}
                render={({ field }) => (
                  <>
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="Conta Corrente"
                        control={<Radio />}
                        label="Conta Corrente"
                      />
                      <FormControlLabel
                        value="Poupança"
                        control={<Radio />}
                        label="Poupança"
                      />
                    </RadioGroup>
                    {errors.tipoConta && (
                      <FormHelperText error>
                        {errors.tipoConta.message}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="senha"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Senha cadastrada"
                    type="password"
                    fullWidth
                    error={!!errors.senha}
                    helperText={errors.senha?.message}
                  />
                )}
              />
            </Grid>

          </Grid>
        </form>
      </Box>

      <Footer
        leftButton="negar"
        leftButtonOnClick={() =>
          navigate(PATHS.QUARTA_ETAPA.DESISTENCIA)
        }
        rightButton="aceitar"
        rightButtonForm="confirmacao-proposta-form"
      />
    </Container>
  );
}
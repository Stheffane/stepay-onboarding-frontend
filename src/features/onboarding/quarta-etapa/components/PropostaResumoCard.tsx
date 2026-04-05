import {
  Box,
  Grid,
  Typography,
  Divider,
  TextField,
  Paper,
} from "@mui/material";
import { formatMoney } from "../../../../shared/utils";
import type { useMockProposta } from "../hooks/useMockProposta";

type PropostaData = ReturnType<typeof useMockProposta>;

type Props = {
  proposta: PropostaData;
  showBankData?: boolean;
};

type TabelaLinha = {
  label: string;
  value: string;
  bg?: boolean;
};

function TabelaLinha({ label, value, bg }: TabelaLinha) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ xs: 0, md: 5 }}
      py={1.5}
      sx={{ backgroundColor: bg ? "action.hover" : "transparent" }}
    >
      <Typography color="text.secondary" fontWeight={bg ? 400 : 600}>
        {label}
      </Typography>
      <Typography fontWeight={600}>{value}</Typography>
    </Box>
  );
}

function ReadonlyField({ label, value }: { label: string; value?: string }) {
  return (
    <TextField
      label={label}
      value={value ?? "—"}
      fullWidth
      slotProps={{ input: { readOnly: true } }}
      sx={{ "& .MuiInputBase-input": { fontWeight: 600 } }}
    />
  );
}

export function PropostaResumoCard({ proposta, showBankData = false }: Props) {
  const {
    valorAprovado,
    valorLiquido,
    prazoAprovado,
    valorParcela,
    taxaJurosMes,
    taxaJurosAno,
    cetMes,
    cetAno,
    taxaIOUU,
    taxaParceiro,
    iof,
    valorTotal,
    dadosPessoais,
    detalhesPedido,
    dadosBancarios,
  } = proposta;

  return (
    <Box>
      {/* DESTAQUES */}
      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          p: 3,
          mb: 3,
          borderRadius: 2,
          gap: 2,
        }}
      >
        <Box textAlign="center">
          <Typography color="text.secondary">Valor Aprovado</Typography>
          <Typography variant="h5" fontWeight={700}>
            {formatMoney(valorAprovado)}
          </Typography>
        </Box>

        <Typography color="text.disabled" fontSize={24}>→</Typography>

        <Box textAlign="center">
          <Typography color="text.secondary">Valor Líquido a Receber</Typography>
          <Typography variant="h5" fontWeight={700}>
            {formatMoney(valorLiquido)}
          </Typography>
        </Box>
      </Paper>

      {/* PRAZO + PARCELA */}
      <Grid container spacing={2} mb={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
            <Typography color="text.secondary">Prazo do empréstimo</Typography>
            <Typography variant="h5" fontWeight={700}>{prazoAprovado}x</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, textAlign: "center" }}>
            <Typography color="text.secondary">Valor da Parcela</Typography>
            <Typography variant="h5" fontWeight={700}>{formatMoney(valorParcela)}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* TABELA FINANCEIRA */}
      <Box mb={4} border="1px solid" borderColor="divider" borderRadius={2} overflow="hidden">
        <TabelaLinha label="Taxa de Juros ao Mês" value={`${taxaJurosMes.toFixed(2)}% a.m.`} />
        <TabelaLinha label="Taxa de Juros Anual" value={`${taxaJurosAno.toFixed(2)}% a.a.`} bg />
        <TabelaLinha label="Custo Efetivo Total Mensal" value={`${cetMes.toFixed(2)}% a.m.`} />
        <TabelaLinha label="Custo Efetivo Total Anual" value={`${cetAno.toFixed(2)}% a.a.`} bg />
        <TabelaLinha label="Taxa Stepay" value={formatMoney(taxaIOUU)} />
        <TabelaLinha label="IOF" value={formatMoney(iof)} bg />
        <TabelaLinha label="Taxa Instituição Financeira" value={formatMoney(taxaParceiro)} />
        <Divider />
        <TabelaLinha label="Valor Total a pagar" value={formatMoney(valorTotal)} bg />
      </Box>

      {/* DADOS PESSOAIS */}
      <Typography variant="h5" mb={3}>Seus Dados</Typography>
      <Grid container spacing={2} mb={4}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ReadonlyField label="Nome" value={dadosPessoais?.userName} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ReadonlyField label="Telefone" value={dadosPessoais?.userCellphone} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ReadonlyField label="Email" value={dadosPessoais?.userEmail} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ReadonlyField label="CPF" value={dadosPessoais?.userNumberDoc} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ReadonlyField label="CNPJ" value={detalhesPedido?.userCNPJ} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ReadonlyField label="Relação com a empresa" value="Sócio" />
        </Grid>
      </Grid>

      {/* DADOS BANCÁRIOS (readonly) */}
      {showBankData && dadosBancarios && (
        <>
          <Typography variant="h5" mb={3}>Dados Bancários</Typography>
          <Grid container spacing={2} mb={4}>
            <Grid size={12}>
              <ReadonlyField
                label="Banco"
                value={dadosBancarios.banco
                  ? `${dadosBancarios.codigoBanco} - ${dadosBancarios.banco}`
                  : undefined}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ReadonlyField label="Agência" value={dadosBancarios.agencia} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ReadonlyField label="Conta" value={dadosBancarios.conta} />
            </Grid>
            <Grid size={12}>
              <ReadonlyField label="Tipo de Conta" value={dadosBancarios.tipoConta} />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}
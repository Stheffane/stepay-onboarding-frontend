import { useOnboardingStore } from "../../../../store";

const MOCK_TAXA_JUROS_MES = 2.49;
const MOCK_IOF_RATE = 0.0038;
const MOCK_TAC_RATE = 0.01;

export function useMockProposta() {
  const { model } = useOnboardingStore();

  const valor = model?.simulacao?.simulatedValue ?? 0;
  const parcelas = model?.simulacao?.simulatedParcelas ?? 0;

  const iof = valor * MOCK_IOF_RATE;
  const tac = valor * MOCK_TAC_RATE;
  const taxaIOUU = valor * 0.005;
  const taxaParceiro = valor * 0.003;
  const total = valor + iof + tac + taxaIOUU + taxaParceiro;
  const valorParcela = parcelas > 0 ? total / parcelas : 0;
  const taxaJurosAno = ((1 + MOCK_TAXA_JUROS_MES / 100) ** 12 - 1) * 100;
  const cetMes = MOCK_TAXA_JUROS_MES + 0.3;
  const cetAno = ((1 + cetMes / 100) ** 12 - 1) * 100;

  return {
    valorAprovado: valor,
    valorLiquido: valor - tac,
    prazoAprovado: parcelas,
    valorParcela,
    taxaJurosMes: MOCK_TAXA_JUROS_MES,
    taxaJurosAno,
    cetMes,
    cetAno,
    taxaIOUU,
    taxaParceiro,
    iof,
    valorTotal: total,
    dadosPessoais: model?.dadosPessoais,
    detalhesPedido: model?.detalhesPedido,
    dadosBancarios: model?.dadosBancarios,
  };
}
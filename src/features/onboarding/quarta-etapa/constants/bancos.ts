export type Banco = {
  id: number;
  codigoBanco: string;
  banco: string;
};

// TODO: substituir por chamada à API ListarBancos
export const MOCK_BANCOS: Banco[] = [
  { id: 1, codigoBanco: "001", banco: "Banco do Brasil" },
  { id: 2, codigoBanco: "033", banco: "Santander" },
  { id: 3, codigoBanco: "104", banco: "Caixa Econômica Federal" },
  { id: 4, codigoBanco: "237", banco: "Bradesco" },
  { id: 5, codigoBanco: "341", banco: "Itaú Unibanco" },
  { id: 6, codigoBanco: "077", banco: "Banco Inter" },
  { id: 7, codigoBanco: "260", banco: "Nu Pagamentos (Nubank)" },
  { id: 8, codigoBanco: "336", banco: "C6 Bank" },
];
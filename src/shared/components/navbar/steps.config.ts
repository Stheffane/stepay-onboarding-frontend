export type StepItem = {
  title: string;
};

export const STEPS_CONFIG: StepItem[][] = [
  [
    { title: "Dados Pessoais" },
    { title: "Detalhes do Pedido" },
    { title: "Confirmação" },
    { title: "Análise" }
  ],
  [
    { title: "Identificação" },
    { title: "Documentos" },
    { title: "Aprovação" }
  ],
  [
    { title: "Crie uma senha" },
    { title: "Documentos" },
    { title: "Análise" }
  ]
];
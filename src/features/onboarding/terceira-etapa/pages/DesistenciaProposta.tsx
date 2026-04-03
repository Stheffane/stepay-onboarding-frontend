import { DesistenciaBase } from "../components/DesistenciaBase";

const MOTIVOS = [
  { value: "Juros muito alto", label: "Juros muito alto" },
  { value: "Desisti do empréstimo", label: "Desisti do empréstimo" },
  { value: "Valor aprovado é insuficiente", label: "Valor aprovado é insuficiente" },
  { value: "Prazo aprovado não atende", label: "Prazo aprovado não atende" },
  { value: "Outros", label: "Outros" },
];

export default function DesistenciaPropostaPage() {
  const handleConfirm = (motivo: string, motivoCustomizado: string) => {
    // TODO: integrar com API de feedback
    console.info("Desistência proposta:", motivo, motivoCustomizado);
  };

  return (
    <DesistenciaBase
      title="Que pena que você não está de acordo :("
      subtitle="Selecione abaixo o motivo de você ter negado nossa proposta:"
      motivos={MOTIVOS}
      onConfirm={handleConfirm}
    />
  );
}
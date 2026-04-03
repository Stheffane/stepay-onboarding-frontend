import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

import Footer from "../../../../shared/components/footer/Footer";
import { useShareLink } from "../hooks/useShareLink";
import { useOnboardingStore } from "../../../../store";
import { formatMoney } from "../../../../shared/utils";
import { ModalWhatsapp } from "../../../../shared/components";

type Props = {
  title: string;
  subtitle: string;
  onBack: () => void;
  onNext: () => void;
};

export function IdentificacaoBase({ title, subtitle, onBack, onNext }: Props) {
  const { link, copyLink } = useShareLink();
  const { model, setModel } = useOnboardingStore();
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const marcarWhatsappEnviado = () => {
    setModel({ ...(model ?? {}), whatsappEnviado: true });
  };

  const nome = model?.dadosPessoais?.userName ?? "";
  const cnpj = model?.detalhesPedido?.userCNPJ ?? "";
  const valor = model?.simulacao?.simulatedValue ?? 0;

  const cnpjFormatado = cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );

  const mensagem = `Olá, somos da Stepay. Foi realizado um pedido no nome ${nome} para o CNPJ: ${cnpjFormatado} no valor de ${formatMoney(valor)}, e para finalizar a proposta precisamos da confirmação do(s) sócio(s). Após abrir o link será necessário confirmar algumas informações. É bem rapidinho! Segue o link: ${link}`;

  const handleCopy = () => {
    copyLink();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    marcarWhatsappEnviado();
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box pt={6} pb={4}>
          <Typography variant="h4" mb={2}>
            {title}
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={4}>
            {subtitle}
          </Typography>

          <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
            {/* AÇÕES */}
            <Box p={3} borderBottom="1px solid" borderColor="divider">
              <Typography variant="subtitle2" mb={2}>
                Escolha a opção de envio
              </Typography>

              <Box display="flex" gap={2} flexWrap="wrap">
                <Button
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  onClick={() => { marcarWhatsappEnviado(); setWhatsappModalOpen(true); }}
                  sx={{ flex: 1, minWidth: 140, py: 2 }}
                >
                  WhatsApp
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<ContentCopyIcon />}
                  onClick={handleCopy}
                  sx={{ flex: 1, minWidth: 140, py: 2 }}
                >
                  {copied ? "Copiado!" : "Copiar Link"}
                </Button>
              </Box>
            </Box>

            {/* PRÉVIA DA MENSAGEM */}
            <Box
              p={3}
              sx={{ backgroundColor: "action.hover" }}
            >
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: 1,
                  p: 2,
                  maxHeight: 80,
                  overflowY: "auto",
                  "&::-webkit-scrollbar": { width: 8 },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "text.disabled",
                    borderRadius: 4,
                  },
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {mensagem}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>

        <Footer
          leftButton="voltar"
          leftButtonOnClick={onBack}
          rightButton="avancar"
          rightButtonOnClick={onNext}
        />
      </Container>

      <ModalWhatsapp
        open={whatsappModalOpen}
        onClose={() => setWhatsappModalOpen(false)}
        message={() => mensagem}
      />
    </>
  );
}
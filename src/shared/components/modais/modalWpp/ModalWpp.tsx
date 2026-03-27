import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";

import { whatsappSchema, type WhatsappFormData } from "./schema";
import { StyledInput } from "../../components/inputs/inputBankAccount/styles";

type Props = {
  open: boolean;
  onClose: () => void;
  message: () => string;
};

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export function ModalWhatsapp({ open, onClose, message }: Props) {
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm<WhatsappFormData>({
    resolver: zodResolver(whatsappSchema),
  });

  const handleSend = async (data: WhatsappFormData) => {
    const number = data.phone.replace(/\D/g, "");

    if (isSafari) {
      const url = `https://wa.me/55${number}?text=${encodeURIComponent(message())}`;
      window.open(url, "_blank");
      reset();
      return;
    }

    reset();
    navigate("/erro");

  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1}>
          <WhatsAppIcon />
          WhatsApp
        </Box>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body2" mb={2}>
          Insira o contato para enviarmos o link de confirmação.
        </Typography>

        <form onSubmit={handleSubmit(handleSend)}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputMask
                mask="(99) 99999-9999"
                value={field.value || ""}
                onChange={field.onChange}
              >
                {(inputProps) => (
                  <StyledInput
                    {...inputProps}
                    placeholder="(00) 00000-0000"
                  />
                )}
              </InputMask>
            )}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            ENVIAR
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
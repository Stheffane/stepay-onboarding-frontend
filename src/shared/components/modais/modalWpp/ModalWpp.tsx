import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternFormat } from "react-number-format";

import { whatsappSchema, type WhatsappFormData } from "./schema";

type Props = {
  open: boolean;
  onClose: () => void;
  message: () => string;
};

export function ModalWhatsapp({ open, onClose, message }: Props) {

  const { control, handleSubmit, reset, formState: { errors } } = useForm<WhatsappFormData>({
    resolver: zodResolver(whatsappSchema),
  });

  const handleSend = async (data: WhatsappFormData) => {
    const number = data.phone.replace(/\D/g, "");

    const url = `https://wa.me/55${number}?text=${encodeURIComponent(message())}`;
    window.open(url, "_blank");
    reset();
    return;
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
              <PatternFormat
                value={field.value || ""}
                onValueChange={(values) => field.onChange(values.value)}
                format="(##) #####-####"
                customInput={TextField}
                fullWidth
                label="Celular"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

type ModalSuccessProps = {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
  okText?: string;
};

export function ModalSuccess({
  open,
  title,
  content,
  onClose,
  okText = "OK",
}: ModalSuccessProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <Typography>{content}</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained">
          {okText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Content, Text, Span } from "./styles";

type ModalPoliticaProps = {
  open: boolean;
  onClose: () => void;
};

export function ModalPolitica({ open, onClose }: ModalPoliticaProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        Política de Privacidade

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Content>
          <Text>
            <Span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </Span>
          </Text>

          <Text>
            <Span>
              Vivamus eleifend magna et quam ullamcorper cursus...
            </Span>
          </Text>

          <Text>
            Proin ut magna odio. Duis lobortis, ipsum sit amet tincidunt finibus...
          </Text>

          <Text>
            <h2>Lorem Ipsum</h2>

            <h3>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...
            </h3>

            <Text>
              Donec varius ullamcorper risus, sed ullamcorper odio lobortis a...
            </Text>

            <h3>-Lorem Ipsum</h3>

            <Text>
              Morbi ac suscipit enim, in pulvinar odio...
            </Text>
          </Text>
        </Content>
      </DialogContent>
    </Dialog>
  );
}
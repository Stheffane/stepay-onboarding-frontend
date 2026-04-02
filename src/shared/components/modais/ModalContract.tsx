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
  title?: string;
};

export function ModalContract({ open, onClose, title }: ModalPoliticaProps) {
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
        {title || "Política de Privacidade"}

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Content>
          <Text>
            <Span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor metus mi, in porttitor ligula blandit at. Pellentesque malesuada, sapien a bibendum bibendum, ipsum eros elementum sapien, eget cursus mauris nunc nec mauris. Etiam dignissim nibh a leo egestas, id consectetur nisi scelerisque. Etiam quis libero at tellus elementum maximus id ac tellus. Duis quis massa sed leo mattis dapibus. Aenean rutrum semper purus vel volutpat. Aenean porttitor sagittis lacus, eget eleifend nunc.
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
              Suspendisse potenti. Donec ut mattis dolor, at hendrerit nulla. Donec consequat viverra orci, nec sollicitudin nisl tristique et. Quisque at libero tortor. Quisque non tempus augue, eget porta nulla. Duis pulvinar urna mauris, maximus ornare ligula sollicitudin at.
            </Text>

            <h3>-Lorem Ipsum</h3>

            <Text>
              Morbi ac suscipit enim, in pulvinar odio...
            </Text>

            <Text>
              Nullam ac dapibus lacus. Integer bibendum sit amet orci in fermentum. Proin vehicula lorem sed arcu volutpat porttitor. Aenean interdum quis nulla non placerat. In aliquam tellus lectus, eget lobortis purus tempus eu. Nam vestibulum massa a orci aliquam, vitae convallis diam ultricies. In vitae massa eget sapien varius lobortis. Curabitur ac ultricies enim, ac fermentum odio. Mauris eu libero in odio cursus molestie a eu dui. Vestibulum molestie, diam a pulvinar convallis, lacus nulla ornare dolor, ut placerat metus mauris vitae metus.
            </Text>

            <h3>-Lorem Ipsum</h3>

            <Text>
              Sed mi diam, eleifend et cursus non, varius sed tortor.
            </Text>

            <Text>
              Morbi vitae odio et enim ultricies aliquet sed sit amet felis. Donec a tincidunt ante, sed ultricies urna. Mauris luctus, quam at vestibulum lobortis, ex enim ultricies turpis, a malesuada orci est ut est. Nam consectetur in ligula ac viverra. Mauris eleifend ornare arcu, eu semper neque lacinia at. Ut posuere ex ex, eu maximus augue aliquam vel. Vivamus vitae cursus odio, vel venenatis est. Pellentesque fringilla eros ante, porttitor scelerisque nunc venenatis quis. Ut fermentum consequat congue. Nam vulputate elit ac sollicitudin tempor.
            </Text>
          </Text>
        </Content>
      </DialogContent>
    </Dialog>
  );
}
import styled from "styled-components";
import { Button } from "@mui/material";

export const iconCloseStyle = {
  width: 12,
  marginRight: 10
};

export const iconLeftArrowStyle = {
  width: 12,
  marginRight: 10
};

export const iconRightStyle = {
  width: 15,
  marginLeft: 10
};

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 24px 0;
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftArea = styled.div`
  display: flex;
`;

export const RightArea = styled.div`
  display: flex;
`;

export const LeftButton = styled(Button)`
  background: white !important;
  color: ${({ theme }) => theme.primaryColor} !important;
  box-shadow: none !important;
`;
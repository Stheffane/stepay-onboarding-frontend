import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function OnboardingLayout() {
  return (
    <>
      <Container 
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingY: 4,
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}
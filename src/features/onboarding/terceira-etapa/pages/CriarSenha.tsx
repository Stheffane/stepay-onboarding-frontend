import { Typography, Box } from "@mui/material";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { PasswordRules } from "../components";
import { OnboardingFormPage } from "../../../../shared/components";
import { PATHS } from "../../../../app/router/paths";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { criarSenhaSchema, type CriarSenhaForm } from "../schemas";

export default function CriarSenhaPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CriarSenhaForm>({
    resolver: zodResolver(criarSenhaSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const password = useWatch({ control, name: "password" });

  const onSubmit = (_values: CriarSenhaForm) => {
    // TODO: chamar API criarSenha com token do store
    navigate(PATHS.TERCEIRA_ETAPA.DOCUMENTOS);
  };

  return (
    <OnboardingFormPage
      title="Deu tudo certo!"
      subtitle="Agora é a hora de criar sua senha de acesso da nossa plataforma."
      formId="criar-senha-form"
      onSubmit={handleSubmit(onSubmit)}
      onBack={() => navigate(-1)}
    >
      <Box maxWidth={480}>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Dica: crie uma senha com 8 a 10 caracteres, contendo letra minúscula,
          maiúscula, número e caractere especial.
        </Typography>

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Senha"
              fullWidth
              type={showPassword ? "text" : "password"}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ mb: 1 }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((p) => !p)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        <PasswordRules password={password} />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirmar senha"
              fullWidth
              type={showConfirm ? "text" : "password"}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirm((p) => !p)}
                        edge="end"
                      >
                        {showConfirm ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
      </Box>
    </OnboardingFormPage>
  );
}
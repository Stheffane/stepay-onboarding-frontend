import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type Rule = {
  label: string;
  test: (v: string) => boolean;
};

const RULES: Rule[] = [
  { label: "Entre 8 e 10 caracteres", test: (v) => v.length >= 8 && v.length <= 10 },
  { label: "Ao menos uma letra minúscula", test: (v) => /[a-z]/.test(v) },
  { label: "Ao menos uma letra maiúscula", test: (v) => /[A-Z]/.test(v) },
  { label: "Ao menos um número", test: (v) => /\d/.test(v) },
  { label: "Ao menos um caractere especial", test: (v) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(v) },
];

export function PasswordRules({ password }: { password: string }) {
  if (!password) return null;

  return (
    <Box display="flex" flexDirection="column" gap={0.5} mb={2}>
      {RULES.map(({ label, test }) => {
        const passed = test(password);
        return (
          <Box key={label} display="flex" alignItems="center" gap={1}>
            {passed ? (
              <CheckCircleOutlineIcon fontSize="small" color="success" />
            ) : (
              <ErrorOutlineIcon fontSize="small" color="error" />
            )}
            <Typography
              variant="body2"
              color={passed ? "success.main" : "error.main"}
            >
              {label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
import { TextField } from "@mui/material";

export function ReadonlyField({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <TextField
      label={label}
      value={value ?? "—"}
      fullWidth
      slotProps={{ input: { readOnly: true } }}
      variant="outlined"
      focused={false}
      sx={{
        "& .MuiInputBase-input": {
          fontWeight: 600,
          color: "text.primary",
        },
      }}
    />
  );
}
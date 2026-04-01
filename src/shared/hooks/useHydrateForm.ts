import { useEffect } from "react";
import type { UseFormReset } from "react-hook-form";

export function useHydrateForm<T extends Record<string, unknown>>(
  data: T | undefined,
  reset: UseFormReset<T>
) {
  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);
}
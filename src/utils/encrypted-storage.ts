import { AES, enc } from "crypto-js";
import type { StateStorage } from "zustand/middleware";

const SECRET = "%$1232l9989j*)gt";

export const createEncryptedStorage = (
  storage: Storage
): StateStorage => ({
  getItem: (name: string): string | null => {
    const value = storage.getItem(name);

    if (!value) return null;

    try {
      const bytes = AES.decrypt(value, SECRET);
      return bytes.toString(enc.Utf8);
    } catch {
      return null;
    }
  },

  setItem: (name: string, value: string): void => {
    const encrypted = AES.encrypt(value, SECRET).toString();
    storage.setItem(name, encrypted);
  },

  removeItem: (name: string): void => {
    storage.removeItem(name);
  },
});
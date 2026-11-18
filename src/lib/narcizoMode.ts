import { readStorage, writeStorage } from "./storage";

export const NARCIZO_MODE_STORAGE_KEY = "narcizo:ativo";

type Listener = () => void;

// Mantido em memória: se o localStorage estiver indisponível (modo privado), a escolha ainda vale até fechar o app.
let isEnabled = readStorage<boolean>(NARCIZO_MODE_STORAGE_KEY, false) === true;
const listeners = new Set<Listener>();

export function getNarcizoEnabled(): boolean {
  return isEnabled;
}

export function setNarcizoEnabled(next: boolean): void {
  if (next === isEnabled) return;
  isEnabled = next;
  writeStorage(NARCIZO_MODE_STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

export function subscribeNarcizoMode(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

import { registerSW } from "virtual:pwa-register";

const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;

/**
 * Registra o service worker. Com `registerType: "autoUpdate"`, quando uma versão nova assume o controle o app
 * recarrega sozinho. Como o app instalado quase nunca é recarregado, também procura versão nova a cada hora
 * e sempre que volta a ficar visível.
 */
export function registerServiceWorker(): void {
  registerSW({
    immediate: true,
    onRegisteredSW(_swUrl, registration) {
      if (!registration) return;
      const checkForUpdate = () => void registration.update();
      setInterval(checkForUpdate, UPDATE_CHECK_INTERVAL_MS);
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") checkForUpdate();
      });
    },
  });
}

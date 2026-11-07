import { useEffect, useRef, type RefObject } from "react";

/** Registra uma entrada no histórico enquanto a folha está aberta, para o "voltar" do celular fechá-la. */
function useCloseOnHistoryBack(onClose: () => void) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    let hasPushedEntry = false;
    let closedByHistory = false;

    function handlePopState() {
      closedByHistory = true;
      onCloseRef.current();
    }

    // Adiado para que o ciclo montar-desmontar-montar do StrictMode (dev) não deixe um
    // `history.back()` pendente: o `popstate` dele fecharia a folha recém-aberta.
    const pushTimer = setTimeout(() => {
      window.history.pushState({ ...window.history.state, bottomSheet: true }, "");
      window.addEventListener("popstate", handlePopState);
      hasPushedEntry = true;
    }, 0);

    return () => {
      clearTimeout(pushTimer);
      if (!hasPushedEntry) return;
      window.removeEventListener("popstate", handlePopState);
      const entryIsStillOurs = Boolean(window.history.state?.bottomSheet);
      if (!closedByHistory && entryIsStillOurs) window.history.back();
    };
  }, []);
}

function useCloseOnEscape(onClose: () => void) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
}

function useLockedPageScroll() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);
}

/** Leva o foco para a folha ao abrir e o devolve a quem a abriu ao fechar. */
function useFocusOnSheet(sheetRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    sheetRef.current?.focus();
    return () => opener?.focus();
  }, [sheetRef]);
}

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex='-1'])";

/** Mantém o Tab dentro da folha enquanto ela está aberta. */
function useFocusTrap(sheetRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const sheet = sheetRef.current;
      if (event.key !== "Tab" || !sheet) return;
      const focusable = [...sheet.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const isLeavingStart = event.shiftKey && (document.activeElement === first || document.activeElement === sheet);
      const isLeavingEnd = !event.shiftKey && document.activeElement === last;
      if (isLeavingStart) {
        event.preventDefault();
        last.focus();
      } else if (isLeavingEnd) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [sheetRef]);
}

export function useSheetBehavior(sheetRef: RefObject<HTMLElement | null>, onClose: () => void) {
  useCloseOnHistoryBack(onClose);
  useCloseOnEscape(onClose);
  useLockedPageScroll();
  useFocusOnSheet(sheetRef);
  useFocusTrap(sheetRef);
}

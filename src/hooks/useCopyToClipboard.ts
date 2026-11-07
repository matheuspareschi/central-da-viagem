import { useEffect, useRef, useState } from "react";

const FEEDBACK_DURATION_MS = 1500;

function copyWithSelection(text: string): void {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();
}

async function writeToClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
  } else {
    copyWithSelection(text);
  }
}

/** Copia texto e expõe `copied` por 1,5 s para dar retorno visual. */
export function useCopyToClipboard(text: string) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  async function copy() {
    try {
      await writeToClipboard(text);
    } catch {
      copyWithSelection(text);
    }
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), FEEDBACK_DURATION_MS);
  }

  return { copied, copy };
}

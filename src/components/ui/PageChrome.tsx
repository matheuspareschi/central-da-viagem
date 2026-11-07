import { useLocation, useNavigate } from "react-router-dom";

/** Para onde o botão "Voltar" leva. Quem abre uma página pode passá-lo no `state` da navegação: `{ backTarget }`. */
export interface BackTarget {
  path: string;
  label: string;
}

const homeBackTarget: BackTarget = { path: "/", label: "Voltar para a Central" };

function isBackTarget(value: unknown): value is BackTarget {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as BackTarget).path === "string" &&
    typeof (value as BackTarget).label === "string"
  );
}

function readBackTarget(navigationState: unknown): BackTarget {
  const candidate = (navigationState as { backTarget?: unknown } | null)?.backTarget;
  return isBackTarget(candidate) ? candidate : homeBackTarget;
}

/** Volta para a página de origem informada na navegação; sem origem, volta para a Central. */
export function BackButton() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const backTarget = readBackTarget(state);

  return (
    <button
      type="button"
      onClick={() => navigate(backTarget.path)}
      className="mb-4 border-b border-dashed border-ink/20 pb-0.5 font-mono text-xs text-ink-soft"
    >
      ← {backTarget.label}
    </button>
  );
}

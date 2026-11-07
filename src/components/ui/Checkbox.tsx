interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label: string;
  activeColor?: "palm" | "citrus";
}

export function Checkbox({ checked, onToggle, label, activeColor = "palm" }: CheckboxProps) {
  const activeClasses = activeColor === "palm" ? "border-palm bg-palm" : "border-citrus bg-citrus";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors duration-200 ease-out ${
        checked ? activeClasses : "border-ink/25 bg-transparent"
      }`}
    >
      <svg
        viewBox="0 0 16 16"
        className={`h-3.5 w-3.5 text-cardbg transition-transform duration-200 ease-out ${checked ? "scale-100" : "scale-0"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8.5 6.3 12 13 4" />
      </svg>
    </button>
  );
}

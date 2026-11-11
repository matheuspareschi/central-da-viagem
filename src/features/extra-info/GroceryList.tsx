import { useState, type FormEvent } from "react";
import { Plus, X } from "lucide-react";
import { TapCheckbox } from "../../components";
import { useGroceryList } from "../../hooks/useGroceryList";
import { CheckProgress } from "./CheckProgress";
import { ConfirmClearButton } from "./ConfirmClearButton";

const secondaryButtonClasses =
  "min-h-11 rounded-xl border border-line px-3.5 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-citrus";

/** Compras básicas de mercado: marcar o que já foi comprado e incluir itens próprios. */
export function GroceryList() {
  const list = useGroceryList();
  return (
    <div>
      <CheckProgress
        checkedCount={list.checkedCount}
        totalCount={list.items.length}
        summary={`${list.checkedCount} de ${list.items.length} itens no carrinho`}
        ariaLabel="Itens no carrinho"
      />
      <ul>
        {list.items.map((item) => {
          const isChecked = list.checked.set.has(item.id);
          return (
            <li key={item.id} className="flex items-center border-b border-dashed border-line last:border-b-0">
              <TapCheckbox checked={isChecked} onToggle={() => list.checked.toggle(item.id)} label={isChecked ? `Desmarcar ${item.name}` : `Marcar ${item.name}`}>
                <span className={`min-w-0 flex-1 text-[15px] ${isChecked ? "text-ink-soft line-through" : "text-ink"}`}>{item.name}</span>
              </TapCheckbox>
              {list.customIds.has(item.id) && (
                <button
                  type="button"
                  onClick={() => list.removeItem(item.id)}
                  aria-label={`Remover ${item.name} da lista`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center text-ink-soft focus-visible:outline-2 focus-visible:outline-citrus"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <AddGroceryItemForm onAdd={list.addItem} />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <ConfirmClearButton onConfirm={() => list.checked.replace([])} disabled={list.checkedCount === 0} question="Desmarcar todos os itens?" />
      </div>
    </div>
  );
}

function AddGroceryItemForm({ onAdd }: { onAdd: (name: string) => void }) {
  const [name, setName] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName("");
  }

  return (
    <form onSubmit={submit} className="mt-3 flex gap-2">
      <label htmlFor="grocery-new-item" className="sr-only">
        Novo item da lista
      </label>
      <input
        id="grocery-new-item"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Incluir item"
        className="min-h-11 min-w-0 flex-1 rounded-xl border border-line bg-paper-inset px-3 text-base text-ink focus-visible:outline-2 focus-visible:outline-citrus"
      />
      <button type="submit" className={`${secondaryButtonClasses} flex items-center gap-1 border-citrus text-citrus-text`}>
        <Plus className="h-4 w-4" aria-hidden="true" />
        Incluir
      </button>
    </form>
  );
}

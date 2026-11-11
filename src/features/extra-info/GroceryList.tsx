import { useState, type FormEvent } from "react";
import { Plus, X } from "lucide-react";
import { TapCheckbox } from "../../components";
import { baseGroceryItems, GROCERY_CHECKED_STORAGE_KEY, GROCERY_CUSTOM_STORAGE_KEY, type GroceryItem } from "../../data/listaMercado";
import { useLocalStorageSet } from "../../hooks/useLocalStorageSet";
import { readStorage, writeStorage } from "../../lib/storage";

const secondaryButtonClasses =
  "min-h-11 rounded-xl border border-line px-3.5 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-citrus";

function useCustomGroceryItems() {
  const [items, setItems] = useState<GroceryItem[]>(() => readStorage(GROCERY_CUSTOM_STORAGE_KEY, []));

  function save(next: GroceryItem[]) {
    setItems(next);
    writeStorage(GROCERY_CUSTOM_STORAGE_KEY, next);
  }

  return {
    items,
    add: (name: string) => save([...items, { id: `custom-${Date.now()}`, name }]),
    remove: (id: string) => save(items.filter((item) => item.id !== id)),
  };
}

/** Compras básicas de mercado: marcar o que já foi comprado e incluir itens próprios. */
export function GroceryList() {
  const checked = useLocalStorageSet(GROCERY_CHECKED_STORAGE_KEY);
  const custom = useCustomGroceryItems();
  const [isConfirmingClear, setIsConfirmingClear] = useState(false);
  const allItems = [...baseGroceryItems, ...custom.items];
  const customIds = new Set(custom.items.map((item) => item.id));

  function clearAll() {
    checked.replace([]);
    setIsConfirmingClear(false);
  }

  return (
    <div>
      <ul>
        {allItems.map((item) => {
          const isChecked = checked.set.has(item.id);
          return (
            <li key={item.id} className="flex items-center gap-1 border-b border-dashed border-line py-0.5 last:border-b-0">
              <TapCheckbox checked={isChecked} onToggle={() => checked.toggle(item.id)} label={isChecked ? `Desmarcar ${item.name}` : `Marcar ${item.name}`} />
              <span className={`min-w-0 flex-1 text-[15px] text-ink ${isChecked ? "line-through" : ""}`}>{item.name}</span>
              {customIds.has(item.id) && (
                <button
                  type="button"
                  onClick={() => custom.remove(item.id)}
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
      <AddGroceryItemForm onAdd={custom.add} />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {isConfirmingClear ? (
          <>
            <span className="text-sm text-ink">Desmarcar todos os itens?</span>
            <button type="button" onClick={clearAll} className={secondaryButtonClasses}>
              Desmarcar
            </button>
            <button type="button" onClick={() => setIsConfirmingClear(false)} className={secondaryButtonClasses}>
              Cancelar
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setIsConfirmingClear(true)}
            disabled={checked.items.length === 0}
            className={`${secondaryButtonClasses} text-ink-soft disabled:opacity-40`}
          >
            Desmarcar tudo
          </button>
        )}
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

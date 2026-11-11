import { BottomSheet } from "../../../components";
import { GroceryList } from "../../extra-info/GroceryList";

export function GroceryListSheet({ onClose }: { onClose: () => void }) {
  return (
    <BottomSheet
      title="Compras básicas de mercado"
      onClose={onClose}
      maxHeightPercent={85}
      header={<h3 className="font-serif text-xl font-bold leading-tight text-ink">Compras básicas de mercado</h3>}
    >
      <GroceryList />
    </BottomSheet>
  );
}

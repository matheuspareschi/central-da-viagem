import type { DetailSection } from "../../types";
import { listSection } from "./builders";

/** Voucher do carro alugado (Rentcars + Avis): usado na retirada (25/12) e na devolução (28/12). */
export const reservaLocacaoCarro: DetailSection = listSection("navy", "parking", "Reserva do carro", [
  "Reserva Rentcars: **YD5DK8Q**",
  "Confirmação Avis: **08261423US2**",
  "Condutor: Rafael Narcizo",
  "Categoria atual: Toyota Corolla ou similar (intermediário automático)",
  "Retirada: 25/12/2026 às 8h • Aeroporto de Orlando (MCO)",
  "Devolução: 28/12/2026 às 17h • Aeroporto de Miami (MIA)",
  "Valor: US$ 265,57 • pagamento previsto no destino",
  "Caução: valor definido pela Avis no contrato e bloqueado no cartão",
  "Proteção: nenhum seguro ou proteção incluído no voucher atual",
  "Combustível: devolver com o mesmo nível recebido",
]);

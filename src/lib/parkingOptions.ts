import type { ParkingOption } from "../types";

export const findChosenParking = (options: ParkingOption[], chosenId: string | null): ParkingOption | undefined =>
  options.find((option) => option.id === chosenId);

/** Resumo da linha de uma opção: caminhada e valor. */
export const describeParkingOption = (option: ParkingOption): string => `${option.walk} · ${option.price.replace(/\*\*/g, "")}`;

/** Subtítulo da parada de estacionamento no cronograma. */
export const describeParkingChoice = (chosen: ParkingOption | undefined): string =>
  chosen ? `Escolhido: ${chosen.name}` : "Toque para escolher onde estacionar";

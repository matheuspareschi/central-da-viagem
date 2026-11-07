import { useState } from "react";
import { readStorage, writeStorage } from "../lib/storage";
import type { SplitTrack } from "../types";

const selectedTrackKey = (dateISO: string) => `trilha:${dateISO}`;

/**
 * Trilha escolhida num dia dividido, salva por dia e compartilhada entre a Home e o roteiro.
 * `requestedKey` (ex.: `?trilha=` da URL) tem prioridade sobre o valor salvo e passa a ser o salvo.
 */
export function useSelectedTrack(dateISO: string, tracks: SplitTrack[], requestedKey?: string | null) {
  const [selectedKey, setSelectedKey] = useState(() => {
    const requestedIsValid = tracks.some((track) => track.key === requestedKey);
    if (requestedKey && requestedIsValid) {
      writeStorage(selectedTrackKey(dateISO), requestedKey);
      return requestedKey;
    }
    return readStorage<string>(selectedTrackKey(dateISO), "");
  });
  const selectedTrack = tracks.find((track) => track.key === selectedKey) ?? tracks[0];

  function select(track: SplitTrack) {
    setSelectedKey(track.key);
    writeStorage(selectedTrackKey(dateISO), track.key);
  }

  return { selectedTrack, select };
}

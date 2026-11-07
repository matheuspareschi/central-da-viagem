export const houseInfo = {
  name: "Storey Lake Resort",
  address: "4801 Dedication Street, Kissimmee, FL 34746",
  communityEntrance: "4715 Kings Castle Circle",
  ownerSmsPhone: "+1 (407) 842-8507",
  wifiNetwork: "WonderVacationHomes.com",
  wifiPassword: "welcomewonder",
  /** A fonte original traz duas senhas para a mesma rede; esta é a da versão em inglês. */
  wifiFallbackPassword: "Welcome4801",
};

export const emergencyNumber = "911";

export interface UsefulContact {
  name: string;
  phone: string;
  /** Texto de apoio abaixo do nome (função, número de apólice etc.). */
  detail?: string;
}

export const usefulContacts: UsefulContact[] = [
  { name: "Lu Viagens", detail: "Gestora da viagem", phone: "+55 (14) 99752-9709" },
  { name: "Consulado-Geral do Brasil em Orlando", phone: "+1 (321) 758-7050" },
  // Valores de exemplo: trocar pelos dados reais do seguro.
  { name: "Seguro de viagem · 24h", detail: "Apólice AX-2026-004821", phone: "+1 (800) 555-0199" },
];

export const tripBadge = "Pareschi · Nunes · Narcizo";

/** Link do álbum de fotos compartilhado (Apple). Cole a URL aqui quando o álbum existir. */
export const photoAlbumUrl: string | null = "https://photos.icloud.com/shared/album/07eXjeOwT4CnJqqyuR41pLgsw";

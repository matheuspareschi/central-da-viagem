import { Lightbulb, MapPin, Plane, PlaneLanding, type LucideIcon } from "lucide-react";

export interface TollStep {
  id: string;
  titulo: string;
  texto: string;
  dica?: string;
}

export interface TollStage {
  id: string;
  titulo: string;
  icon: LucideIcon;
  /** Fundo e cor do ícone circular. */
  iconClasses: string;
  passos: TollStep[];
}

export const TOLL_STORAGE_KEY = "pedagio:passos";
export const tollTipIcon = Lightbulb;

/** Passo a passo do Visitor Toll Pass, com os textos do Thiago. Os passos são numerados de 1 a 6 em todas as etapas. */
export const tollStages: TollStage[] = [
  {
    id: "antes-de-viajar",
    titulo: "Antes de viajar (ainda no Brasil)",
    icon: Plane,
    iconClasses: "bg-gold-tint text-[#6b4a0b]",
    passos: [
      { id: "pedagio-1", titulo: "Baixe o aplicativo", texto: "Instale o app Visitor Toll Pass e crie a sua conta." },
      {
        id: "pedagio-2",
        titulo: "Cadastre o pagamento",
        texto: "Adicione seu cartão global (com pelo menos US$ 10 de saldo) e faça a reserva da sua tag para os dias da viagem.",
      },
    ],
  },
  {
    id: "aeroporto",
    titulo: "No Aeroporto de Orlando (MCO)",
    icon: MapPin,
    iconClasses: "bg-citrus-tint text-citrus-text",
    passos: [
      {
        id: "pedagio-3",
        titulo: "Pegue o carro primeiro",
        texto: "Retire a chave na locadora, vá até o veículo e anote a placa e o estado de registro.",
        dica: "Recuse o pacote de pedágio no balcão e confira se o aparelho do carro, caso exista, está fechado.",
      },
      {
        id: "pedagio-4",
        titulo: "Retire a tag no totem",
        texto:
          "Com o carro já estacionado na garagem, vá até a máquina de autoatendimento no Nível 1 do terminal, escaneie o QR Code do app e pegue o seu passe.",
      },
      {
        id: "pedagio-5",
        titulo: "Ative e pendure no carro",
        texto:
          "Escaneie o código da tag no aplicativo, digite a placa do veículo e pendure o cartão no espelho retrovisor interno antes de sair dirigindo.",
      },
    ],
  },
  {
    id: "volta",
    titulo: "Na volta para o Brasil",
    icon: PlaneLanding,
    iconClasses: "bg-[#dfe3f0] text-[#2f3f73]",
    passos: [
      {
        id: "pedagio-6",
        titulo: "Devolva a tag",
        texto:
          "Antes de embarcar, retire o passe do retrovisor e deposite em uma das urnas de devolução do aeroporto para encerrar a conta e receber o estorno do saldo não utilizado.",
      },
    ],
  },
];

export const allTollSteps: TollStep[] = tollStages.flatMap((stage) => stage.passos);

/** Passos que acontecem ainda no Brasil e entram em "Antes de viajar". */
export const preTripTollStepIds: string[] = tollStages[0].passos.map((step) => step.id);

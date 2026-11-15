import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-13",
  calendarTitle: "Universal Studios Florida",
  day: 13,
  park: {
    name: "Universal Studios Florida",
    departure: "8h30",
    opening: "10h", // REVISAR: abre às 10h (antes 9h); confirmar no app
  },
  weekday: "Dom",
  liturgicalWeekday: "3º Domingo do Advento (Gaudete)",
  category: "parque",
  reading: {
    label: "3º Domingo do Advento (Gaudete)",
    oldTestamentReading: "Isaías 61:1–4, 8–11",
    gospelReading: "João 1:6–8, 19–28",
  },
  title: "Universal Studios Florida",
  itinerary: {
    kind: "checklist",
    parkId: "universal-studios-florida",
    // REVISAR (alerts): "Fora de operação" não tinha marcação de alerta; foi tratado como alerta por ser informação crítica.
    // REVISAR (notes): Item "Chegada e preparação" dividido entre tiles e notes; conferir agrupamento.
    summary: "Visita única ao Universal Studios (não haverá segunda visita).",
    journey: {
      tiles: [{ label: "Acordar", value: "7h45" }, { label: "Sair de casa", value: "8h30" }, { label: "Estacionamento", value: "8h00" }, { label: "Chegada", value: "10h00" }],
      notes: [
        { icon: "car", text: "~15 min até os portões." },
        { icon: "info", text: "**Às 10h00**, seguir a pé para o Beco Diagonal via New York e San Francisco (**~12 min**)." },
        { icon: "info", text: "6000 Universal Blvd, Orlando, FL 32819. Estacionamento **a partir de US$35 por dia** (2026). São duas garagens enormes: **anote o setor e o andar**." },
        { icon: "info", text: "Da garagem ao portão pelo CityWalk são cerca de **15–20 min a pé**." },
        { icon: "info", text: "Horários sugeridos assumem abertura **às 10h**; se o app mostrar outro horário, desloque tudo pela mesma diferença." },
        { icon: "info", text: "Prioridade de corte se apertar: Horror Make-Up, E.T., Villain-Con, Race Through New York. **Nunca cortar**: Gringotts (2x), Mummy, Transformers, Ollivanders e Bourne." },
        { icon: "info", text: "**Ingresso já cadastrado** no app Universal Orlando Resort antes de sair." },
        { icon: "info", text: "**Levar só bolsa pequena** (armários), carregador portátil e protetor solar." },
        { icon: "info", text: "Universal **não permite cooler**: levar muffin ou barrinha de whey assado." },
        { icon: "info", text: "Água filtrada **grátis** nas máquinas Coca-Cola Freestyle." },
      ],
      alerts: ["**Fora de operação**: Hollywood Rip Ride Rockit, Fast & Furious Supercharged e Animal Actors."],
    },
    attractions: [
      {
        id: "hollywood-transformers",
        attractionId: "transformers-the-ride-3d",
        name: "Transformers",
        area: "Hollywood",
        icon: "target",
        sections: [
          { color: "citrus", icon: "camera", title: "Foto", paragraphs: ["Melhor local para tirar fotos com os personagens. Do lado da atração tem personagens da saga para ver e tirar fotos."] },
        ],
      },
      {
        id: "san-francisco-fast-furious",
        name: "Velozes e Furiosos",
        area: "San Francisco",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Não é tão legal assim, mas sempre vale a pena."] },
        ],
      },
      {
        id: "diagon-knight-bus",
        name: "Knight Bus",
        area: "Diagon Alley",
        icon: "camera",
        sections: [
          { color: "palm", icon: "camera", title: "Foto", paragraphs: ["Vale esperar a vez e fotografar de frente."] },
        ],
      },
      {
        id: "diagon-largo-grimmauld",
        name: "Largo Grimmauld",
        area: "Diagon Alley",
        icon: "camera",
        sections: [
          { color: "palm", icon: "camera", title: "Foto", paragraphs: ["A fachada de tijolos e a placa do largo são bons enquadramentos, com menos gente no início da manhã."] },
        ],
      },
      {
        id: "diagon-cambio-galeoes",
        name: "Trocar dólares por galeões",
        area: "Diagon Alley",
        icon: "bag",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Roteiro", paragraphs: ["Passar para trocar dólares por galeões."] },
        ],
      },
      {
        id: "diagon-ollivanders",
        name: "Show do Ollivanders",
        area: "Diagon Alley",
        icon: "bag",
        sections: [
          { color: "citrus", icon: "bag", title: "Roteiro", paragraphs: ["Ver o show do Ollivanders."] },
        ],
      },
      {
        id: "diagon-dedos-de-mel",
        name: "Dedos de mel",
        area: "Diagon Alley",
        icon: "bag",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Roteiro", paragraphs: ["Não esquecer dos dedos de mel."] },
        ],
      },
      {
        id: "gringotts",
        name: "Gringotts",
        area: "Diagon Alley",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Gringotts."] },
        ],
      },
      {
        id: "world-expo-men-in-black",
        name: "Men in Black",
        area: "World Expo",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Men in Black."] },
        ],
      },
      {
        id: "world-expo-simpsons",
        name: "Simpsons Ride",
        area: "World Expo",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Simpsons Ride."] },
        ],
      },
      {
        id: "dreamworks-et",
        name: "E.T.",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["E.T."] },
        ],
      },
      {
        id: "dreamworks-bourne",
        name: "The Bourne Stuntacular",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Atenção", paragraphs: ["Tem horários para acontecer. Confirmar no app."] },
        ],
      },
      {
        id: "dreamworks-mummy",
        name: "Revenge of the Mummy",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Revenge of the Mummy."] },
        ],
      },
      {
        id: "dreamworks-race-new-york",
        name: "Race Through New York Starring Jimmy Fallon",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Race Through New York Starring Jimmy Fallon."] },
        ],
      },
      {
        id: "dreamworks-fast-furious",
        name: "Velozes e Furiosos",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Velozes e Furiosos."] },
        ],
      },
      {
        id: "dreamworks-minion-mayhem",
        name: "Minion Mayhem",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Minion Mayhem."] },
        ],
      },
      {
        id: "dreamworks-minios-vilains",
        name: "Minios vilains",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Atenção", paragraphs: ["Nome como escrito no roteiro original. Confirmar o nome da atração no app."] },
        ],
      },
      {
        id: "fim-do-dia-fogos",
        name: "Show de fogos",
        area: "Fim do dia",
        icon: "camera",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Roteiro", paragraphs: ["Assistir o show de fogos. Verificar no app se há show no dia."] },
        ],
      },
    ],
  },
} satisfies DayData;

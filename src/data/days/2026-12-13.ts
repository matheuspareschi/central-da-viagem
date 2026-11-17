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
        { icon: "info", text: "Água filtrada **grátis** nas máquinas Coca-Cola Freestyle." },
      ],
      alerts: [
        "**Levar só bolsa pequena** (armários), carregador portátil e protetor solar. Universal **não permite cooler**: levar muffin ou barrinha de whey assado.",
      ],
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
          { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Simulador 3D com movimento, com Optimus Prime gigante na porta. Dá para sentir o calor das explosões. **Fila média de ~33 min**."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Fazer **antes das 14h**. Tem single rider. Depois, Race Through New York (Jimmy Fallon, ~18 min, com ar-condicionado) para aliviar o calor."] },
        ],
      },
      {
        id: "diagon-knight-bus",
        name: "Knight Bus",
        area: "Diagon Alley",
        icon: "camera",
        sections: [
          { color: "palm", icon: "camera", title: "Foto", paragraphs: ["Vale esperar a vez e fotografar de frente."] },
          { color: "citrus", icon: "camera", title: "Sobre", list: ["Dragão do Gringotts cuspindo fogo.", "Beco Bativolta (Knockturn Alley).", "Cabine telefônica vermelha: discar **62442** para o Ministério da Magia.", "**Parede da Plataforma 9¾** no King's Cross: um filma o outro \"atravessando\".", "Knight Bus: foto pelos fundos, sem fila."] },
        ],
      },
      {
        id: "diagon-largo-grimmauld",
        name: "Largo Grimmauld",
        area: "Diagon Alley",
        icon: "camera",
        sections: [
          { color: "palm", icon: "camera", title: "Foto", paragraphs: ["A fachada de tijolos e a placa do largo são bons enquadramentos, com menos gente no início da manhã."] },
          { color: "citrus", icon: "camera", title: "Sobre", list: ["Largo Grimmauld nº 12: esperar o **Kreacher na janela**."] },
        ],
      },
      {
        id: "diagon-cambio-galeoes",
        name: "Trocar dólares por galeões",
        area: "Diagon Alley",
        icon: "bag",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Roteiro", paragraphs: ["Passar para trocar dólares por galeões."] },
          { color: "citrus", icon: "camera", title: "Sobre", list: ["**Câmbio dos duendes** (dólar por notas de Gringotts)."] },
        ],
      },
      {
        id: "diagon-ollivanders",
        attractionId: "ollivanders-wand-shop",
        name: "Show do Ollivanders",
        area: "Diagon Alley",
        icon: "bag",
        sections: [
          { color: "citrus", icon: "bag", title: "Roteiro", paragraphs: ["Ver o show do Ollivanders."] },
          { color: "citrus", icon: "bag", title: "Sobre", paragraphs: ["Teatrinho interativo de ~10 min em que a varinha escolhe o bruxo, com saída pela loja. Varinhas custavam de **US$65** a **US$85** em 2025. As varinhas interativas funcionam em todo o Beco Diagonal e em Hogsmeade."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["**À noite a fila é menor** e as chances de ser escolhido aumentam; **grupo só de adultos** tem mais chance. Decida antes se alguém vai comprar varinha.", "**Não compre varinha agora**: a loja lota. A escolha da varinha é melhor à noite (**Ollivanders, 19:00**). Decoração de Natal do Universal Holidays no Beco Diagonal."] },
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
        attractionId: "harry-potter-and-escape-from-gringotts",
        name: "Gringotts",
        area: "Diagon Alley",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Gringotts."] },
          { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Montanha-russa indoor com simulador 3D dentro do banco de Gringotts (adrenalina 3/5). A fila passa pelo saguão de mármore com duendes trabalhando. O **dragão de 18 m** cospe fogo real a cada 10–15 min."] },
          { color: "gold", icon: "lightbulb", title: "Dica", list: ["A fila varia muito: ~29 min às 10h, **~83 min às 15h–16h** e ~35 min depois das 19h.", "Guardar a bolsa no armário (os pequenos são **grátis** durante a fila e o brinquedo).", "Tem **single rider**: pergunte ao funcionário se compensa."] },
          { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Se estiver parado ou com mais de 60 min na abertura, vá primeiro à Mummy e volte ao Gringotts **às 12h** ou **depois das 19h30**."] },
        ],
      },
      {
        id: "world-expo-men-in-black",
        attractionId: "men-in-black-alien-attack",
        name: "Men in Black",
        area: "World Expo",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Men in Black."] },
          { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Dark ride de tiro com placar, com mais de 120 tipos de alienígenas. Fila de ~22 min à tarde; tem **single rider**."] },
          { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Os carrinhos giram bastante: **quem enjoa com facilidade** deve ter cuidado."] },
        ],
      },
      {
        id: "world-expo-simpsons",
        attractionId: "the-simpsons-ride",
        name: "Simpsons Ride",
        area: "World Expo",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Simpsons Ride."] },
          { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Simulador em tela de 25 m de diâmetro (**~22 min de fila**). Na área, Duff Beer, Moe's Tavern (foto e Love Tester) e o donut rosa gigante do Lard Lad."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Sentar na **primeira fileira** e não olhar para os lados. O donut dá para dividir com o grupo."] },
        ],
      },
      {
        id: "dreamworks-shrek-po",
        attractionId: "shreks-swamp-and-pos-kung-fu-camp",
        name: "Casa do Shrek e Dojo do Po",
        area: "DreamWorks",
        icon: "camera",
        sections: [
          { color: "palm", icon: "camera", title: "Foto", paragraphs: ["Tirar fotos na casa do Shrek e no Dojo do Po, na área da DreamWorks."] },
        ],
      },
      {
        id: "dreamworks-et",
        attractionId: "e-t-adventure",
        name: "E.T.",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["E.T."] },
        ],
      },
      {
        id: "dreamworks-bourne",
        attractionId: "the-bourne-stuntacular",
        name: "The Bourne Stuntacular",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Atenção", paragraphs: ["Tem horários para acontecer. Confirmar no app."] },
          { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Espetáculo de dublês com telão LED côncavo e palco giratório (**~30 min**), sentado e com **ar-condicionado**. Considerado o que mais surpreende no parque."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Escolher a sessão no app e **chegar 15 min antes**. Depois, E.T. Adventure (opcional, fila de ~28 min)."] },
        ],
      },
      {
        id: "dreamworks-mummy",
        attractionId: "revenge-of-the-mummy",
        name: "Revenge of the Mummy",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Revenge of the Mummy."] },
          { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Montanha-russa indoor no escuro (**~70 km/h**), ambientada em 1926, que vai e volta nos trilhos. Adrenalina 3/5."] },
          { color: "gold", icon: "lightbulb", title: "Dica", list: ["Fila fica em torno de **44 min o dia todo**: não adianta esperar.", "Armário **obrigatório**; tem single rider.", "Se bater fome **antes das 13h**, lanche rápido no Louie's Italian e deixe o almoço para as 15h30.", "Se passar show de rua (Blues Brothers, Beat Builders, Vamos! Báilalo), **pare 10 min**: não tem fila."] },
        ],
      },
      {
        id: "dreamworks-race-new-york",
        attractionId: "race-through-new-york-jimmy-fallon",
        name: "Race Through New York Starring Jimmy Fallon",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Race Through New York Starring Jimmy Fallon."] },
        ],
      },
      {
        id: "dreamworks-minion-mayhem",
        attractionId: "despicable-me-minion-mayhem",
        name: "Minion Mayhem",
        area: "DreamWorks",
        icon: "target",
        sections: [
          { color: "citrus", icon: "target", title: "Roteiro", paragraphs: ["Minion Mayhem."] },
          { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Minion Mayhem é um simulador leve (**você vira Minion** ainda na fila, ~35 min). Villain-Con Minion Blast é um jogo de tiro com blaster que pode ser pareado com o app."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["**Pop-A-Nana** (pipoca doce de banana) para dividir. Villain-Con é um dos primeiros itens a cortar se o dia apertar."] },
        ],
      },
      {
        id: "dreamworks-minios-vilains",
        attractionId: "villain-con-minion-blast",
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

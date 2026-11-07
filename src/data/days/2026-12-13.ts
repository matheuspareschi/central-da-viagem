import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-13",
  calendarTitle: "Universal Studios Florida",
  day: 13,
  park: {
    name: "Universal Studios Florida",
    departure: "7h15",
    opening: "9h",
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
    summary: "Visita única ao Universal Studios (não haverá segunda visita). Domingo costuma ser mais cheio.",
    journey: {
      tiles: [{ label: "Acordar", value: "6h15" }, { label: "Sair de casa", value: "7h15" }, { label: "Estacionamento e portão", value: "8h15" }, { label: "Beco Diagonal", value: "9h" }],
      notes: [
        { icon: "car", text: "~15 min até os portões." },
        { icon: "info", text: "Às 9h00, seguir a pé para o Beco Diagonal via New York e San Francisco (~12 min)." },
        { icon: "info", text: "6000 Universal Blvd, Orlando, FL 32819. Estacionamento a partir de US$35 por dia (2026). São duas garagens enormes: anote o setor e o andar." },
        { icon: "info", text: "Da garagem ao portão pelo CityWalk são cerca de 15–20 min a pé." },
        { icon: "info", text: "Horários sugeridos assumem abertura às 09h; se o app mostrar outro horário, desloque tudo pela mesma diferença." },
        { icon: "info", text: "Prioridade de corte se apertar: Horror Make-Up, E.T., Villain-Con, Race Through New York. Nunca cortar: Gringotts (2x), Mummy, Transformers, Ollivanders e Bourne." },
        { icon: "info", text: "Ingresso já cadastrado no app Universal Orlando Resort antes de sair." },
        { icon: "info", text: "Levar só bolsa pequena (armários), carregador portátil e protetor solar." },
        { icon: "info", text: "Universal não permite cooler: levar muffin ou barrinha de whey assado." },
        { icon: "info", text: "Água filtrada grátis nas máquinas Coca-Cola Freestyle." },
      ],
      alerts: ["Fora de operação: Hollywood Rip Ride Rockit, Fast & Furious Supercharged e Animal Actors."],
    },
    attractions: [
      {
        id: "gringotts",
        name: "Harry Potter and the Escape from Gringotts",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 9h15. Beco Diagonal vazio e Gringotts com fila baixa antes das 11h."],
          },
          {
            color: "navy",
            icon: "house",
            title: "Endereço",
            paragraphs: ["Beco Diagonal / Londres, Universal Studios Florida."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Montanha-russa indoor com simulador 3D dentro do banco de Gringotts (adrenalina 3/5). A fila passa pelo saguão de mármore com duendes trabalhando. O dragão de 18 m cospe fogo real a cada 10–15 min.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            list: [
              "A fila varia muito: ~29 min às 10h, ~83 min às 15h–16h e ~35 min depois das 19h.",
              "Guardar a bolsa no armário (os pequenos são grátis durante a fila e o brinquedo).",
              "Tem single rider: pergunte ao funcionário se compensa.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Se estiver parado ou com mais de 60 min na abertura, vá primeiro à Mummy e volte ao Gringotts às 12h ou depois das 19h30.",
            ],
          },
        ],
      },
      {
        id: "beco-diagonal",
        name: "Fotos no Beco Diagonal",
        icon: "camera",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 10h00. Depois, ~10 min a pé até New York."],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            list: [
              "Dragão do Gringotts cuspindo fogo.",
              "Beco Bativolta (Knockturn Alley).",
              "Largo Grimmauld nº 12: esperar o Kreacher na janela.",
              "Cabine telefônica vermelha: discar 62442 para o Ministério da Magia.",
              "Parede da Plataforma 9¾ no King's Cross: um filma o outro \"atravessando\".",
              "Knight Bus: foto pelos fundos, sem fila.",
              "Câmbio dos duendes (dólar por notas de Gringotts).",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Não compre varinha agora: a loja lota. A escolha da varinha é melhor à noite (Ollivanders, 18:00). Decoração de Natal do Universal Holidays no Beco Diagonal.",
            ],
          },
        ],
      },
      {
        id: "mummy",
        attractionId: "revenge-of-the-mummy",
        name: "Revenge of the Mummy",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 10h45."],
          },
          {
            color: "navy",
            icon: "house",
            title: "Endereço",
            paragraphs: ["Área New York, Universal Studios Florida."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Montanha-russa indoor no escuro (~70 km/h), ambientada em 1926, que vai e volta nos trilhos. Adrenalina 3/5.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            list: [
              "Fila fica em torno de 44 min o dia todo: não adianta esperar.",
              "Armário obrigatório; tem single rider.",
              "Se bater fome antes das 12h, lanche rápido no Louie's Italian e deixe o almoço para as 14h30.",
              "Se passar show de rua (Blues Brothers, Beat Builders, Vamos! Báilalo), pare 10 min: não tem fila.",
            ],
          },
        ],
      },
      {
        id: "transformers",
        attractionId: "transformers-the-ride-3d",
        name: "Transformers: The Ride 3D",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: [
              "Por volta das 12h00. Meio do dia: brinquedos de fila menor, shows com ar-condicionado e almoço fora do pico.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Simulador 3D com movimento, com Optimus Prime gigante na porta. Dá para sentir o calor das explosões. Fila média de ~33 min.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Fazer antes das 13h. Tem single rider. Depois, Race Through New York (Jimmy Fallon, ~18 min, com ar-condicionado) para aliviar o calor.",
            ],
          },
        ],
      },
      {
        id: "race-through-new-york",
        attractionId: "race-through-new-york-jimmy-fallon",
        name: "Race Through New York (Jimmy Fallon)",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 12h40. Depois, ~10 min a pé até a Minion Land."],
          },
        ],
      },
      {
        id: "minion-land",
        name: "Minion Mayhem e Villain-Con Minion Blast",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 13h15."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Minion Mayhem é um simulador leve (você vira Minion ainda na fila, ~35 min). Villain-Con Minion Blast é um jogo de tiro com blaster que pode ser pareado com o app.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Pop-A-Nana (pipoca doce de banana) para dividir. Villain-Con é um dos primeiros itens a cortar se o dia apertar.",
            ],
          },
        ],
      },
      {
        id: "almoco",
        name: "Almoço fora do pico",
        icon: "burger",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 14h30."],
          },
          {
            color: "gold",
            icon: "burger",
            title: "Onde comer",
            list: [
              "Illumination's Minion Café (hambúrguer de rosbife, salmão).",
              "Mel's Drive-In (Hollywood): hambúrguer, chicken fingers, milkshake.",
              "Louie's Italian (New York) e Krusty Burger (Springfield) como alternativas.",
            ],
          },
          {
            color: "palm",
            icon: "lightbulb",
            title: "Observação",
            paragraphs: [
              "Pedir pelo app com a carteira configurada evita fila. Preço de parque: espere pagar caro.",
            ],
          },
        ],
      },
      {
        id: "bourne",
        attractionId: "the-bourne-stuntacular",
        name: "The Bourne Stuntacular",
        icon: "camera",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 15h15."],
          },
          {
            color: "navy",
            icon: "house",
            title: "Endereço",
            paragraphs: ["Área Hollywood, Universal Studios Florida."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Espetáculo de dublês com telão LED côncavo e palco giratório (~30 min), sentado e com ar-condicionado. Considerado o que mais surpreende no parque.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Escolher a sessão no app e chegar 15 min antes. Depois, E.T. Adventure (opcional, fila de ~28 min).",
            ],
          },
        ],
      },
      {
        id: "et-adventure",
        attractionId: "e-t-adventure",
        name: "E.T. Adventure",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 15h50. Opcional, fila de ~28 min."],
          },
        ],
      },
      {
        id: "simpsons",
        name: "The Simpsons Ride e donut Lard Lad",
        icon: "corn",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 16h40."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Simulador em tela de 25 m de diâmetro (~22 min de fila). Na área, Duff Beer, Moe's Tavern (foto e Love Tester) e o donut rosa gigante do Lard Lad.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Sentar na primeira fileira e não olhar para os lados. O donut dá para dividir com o grupo.",
            ],
          },
        ],
      },
      {
        id: "mib",
        attractionId: "men-in-black-alien-attack",
        name: "Men in Black Alien Attack",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 17h15. Depois, ~10 min a pé de volta ao Beco Diagonal."],
          },
          {
            color: "navy",
            icon: "house",
            title: "Endereço",
            paragraphs: ["Área World Expo, Universal Studios Florida."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Dark ride de tiro com placar, com mais de 120 tipos de alienígenas. Fila de ~22 min à tarde; tem single rider.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Os carrinhos giram bastante: quem enjoa com facilidade deve ter cuidado."],
          },
        ],
      },
      {
        id: "ollivanders",
        name: "Ollivanders e varinhas",
        icon: "bag",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: [
              "Por volta das 18h00. Noite de Harry Potter: Ollivanders mais vazio, jantar temático e segunda volta no Gringotts.",
            ],
          },
          {
            color: "navy",
            icon: "house",
            title: "Endereço",
            paragraphs: ["Beco Diagonal, Universal Studios Florida."],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Sobre",
            paragraphs: [
              "Teatrinho interativo de ~10 min em que a varinha escolhe o bruxo, com saída pela loja. Varinhas custavam de US$65 a US$85 em 2025. As varinhas interativas funcionam em todo o Beco Diagonal e em Hogsmeade.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "À noite a fila é menor e as chances de ser escolhido aumentam; grupo só de adultos tem mais chance. Decida antes se alguém vai comprar varinha.",
            ],
          },
        ],
      },
      {
        id: "caldeirao-furado",
        name: "Jantar no Caldeirão Furado",
        icon: "burger",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 18h50."],
          },
          {
            color: "citrus",
            icon: "burger",
            title: "Sobre",
            paragraphs: [
              "Pub britânico temático, sem serviço de mesa: peixe com fritas, torta de carne moída com purê, sanduíches e cerveja amanteigada (sem álcool).",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Pedir pelo app. A cerveja amanteigada gelada é bem doce e enche: dividir. Sorvete do Florean Fortescue de sobremesa.",
            ],
          },
        ],
      },
      {
        id: "gringotts-segunda-volta",
        name: "Gringotts (2ª vez)",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 19h30. Depois das 19h a fila costuma cair para ~35 min."],
          },
        ],
      },
      {
        id: "parada-natal",
        name: "Parada de Natal e árvore",
        icon: "tree",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário sugerido",
            paragraphs: ["Por volta das 20h00."],
          },
          {
            color: "citrus",
            icon: "tree",
            title: "Sobre",
            paragraphs: [
              "Durante o Universal Holidays (14/11/2026 a 03/01/2027) há parada noturna no Studios que termina com o acendimento da árvore de Natal de 80 pés.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "O horário exato só aparece no app. Chegar 30–40 min antes para ter lugar. Sair do parque por volta das 21h30 para evitar a multidão final.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;

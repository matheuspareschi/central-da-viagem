import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-22",
  calendarTitle: "Epic Universe",
  day: 22,
  park: {
    name: "Epic Universe",
    departure: "8h",
    opening: "9h",
    closing: "21h",
  },
  weekday: "Ter",
  liturgicalWeekday: "Preparação para o Natal",
  category: "parque",
  reading: {
    label: "Preparação para o Natal",
    oldTestamentReading: "Sofonias 3:8–13",
    gospelReading: "Lucas 1:39–45",
  },
  title: "Epic Universe",
  itinerary: {
    kind: "checklist",
    parkId: "epic-universe",
    summary: "Dia inteiro no Epic, da abertura ao fechamento, em ritmo tranquilo: favoritas, pausas, lojas de Natal, Power-Up Band e jantar sentado.",
    journey: {
      tiles: [{ label: "Parque aberto", value: "9h–21h" }],
      notes: [
      ],
      alerts: ["Confirmar no app: horário do parque assumido das 09h às 21h. Deslocar tudo pela diferença."],
    },
    attractions: [
      {
        id: "chegada-epic-22",
        name: "Chegada e estacionamento",
        icon: "parking",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e estacionamento",
            paragraphs: [
              "1001 Epic Blvd, Orlando, FL 32819. Estacionamento US$ 32 a 35 por dia. Foto da placa e da fileira.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horários",
            list: [
              "07h00 acordar",
              "08h00 sair de Storey Lake",
              "~08h30 estacionar",
              "~08h50 no portão; 09h00 abertura",
              "~21h00 fechamento",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            list: [
              "Perto do Natal o parque tende a estar mais cheio que no dia 17: usar o alerta de fila no app.",
              "Antes de sair no dia 17, o grupo escolhe as 2 favoritas para repetir (padrão: Stardust Racers e Battle at the Ministry).",
              "Dia 23 é Daytona, com saída cedo: dormir assim que chegar.",
            ],
          },
        ],
      },
      {
        id: "wing-gliders-22",
        attractionId: "hiccups-wing-gliders",
        name: "Hiccup's Wing Gliders (repetição)",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "target",
            title: "Onde",
            paragraphs: ["Isle of Berk, 09h00. Altura mínima: 1,02 m."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Pedir a primeira fileira, aproveitando a fila curta da abertura. É a única atração obrigatória da manhã."],
          },
        ],
      },
      {
        id: "toothless-treasures",
        name: "Adotar um dragão e decoração Snoggletog",
        icon: "bag",
        sections: [
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            paragraphs: [
              "Toothless' Treasures: adoção de dragão de pelúcia (US$ 21). Escolhe a cor do ovo, faz o juramento viking, dá o nome e há uma cerimônia de nascimento. Hiccup's Work Shop e How to Treat Your Dragon têm decoração de Natal.",
            ],
          },
          {
            color: "gold",
            icon: "camera",
            title: "Dica",
            paragraphs: ["Passeio com calma por volta das 09h30 a 10h45, com fotos e personagens."],
          },
        ],
      },
      {
        id: "ministry-viewing",
        name: "Ministry Viewing",
        icon: "camera",
        sections: [
          {
            color: "navy",
            icon: "camera",
            title: "Onde",
            paragraphs: ["Ministry of Magic. A entrada fica junto da fila Single Rider: avisar o funcionário. ~10h45."],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Visita à parte da fila com o Ministério da Magia, passando pelo pó de Flu, sem andar no brinquedo. Faz sentido para quem já fez a Battle no dia 17 e quer ver os detalhes.",
            ],
          },
        ],
      },
      {
        id: "cirque-varinhas-quadros",
        name: "Le Cirque Arcanus, varinhas e quadros falantes",
        icon: "camera",
        sections: [
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Le Cirque Arcanus (~11h15): show de circo e Animais Fantásticos, hora de sentar (os guias divergem: opcional). Perto do Le Gobelet Noir, os quadros de Cassandra Trelawney, Sir Cadogan e Simon Beauchamp ensinam um feitiço a quem tem varinha.",
            ],
          },
          {
            color: "gold",
            icon: "burger",
            title: "Dica",
            paragraphs: ["~12h00 crepe de cerveja amanteigada no Café L'Air de la Sirène, para dividir."],
          },
        ],
      },
      {
        id: "toadstool-cafe",
        name: "Almoço no Toadstool Café",
        icon: "burger",
        sections: [
          {
            color: "navy",
            icon: "burger",
            title: "Onde",
            paragraphs: ["Super Nintendo World, ~13h00. Reservar ou pedir pelo app."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "A comida é só ok, mas o ambiente é o mais temático do parque (Mario Burger, Super Mushroom Soup). Vale a experiência.",
            ],
          },
        ],
      },
      {
        id: "power-up-band",
        name: "Power-Up Band e Key Challenges (opcional)",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Pulseira interativa (cerca de US$ 45 + taxas) com 5 minijogos: Goomba Crazy Crank, Piranha Plant Nap Mishap, Koopa Troopa POWer Punch, Bob-omb Kaboom Room e Thwomp Panel Panic. Com 3 chaves, todo o grupo joga o Bowser Jr. Shadow Showdown. A pontuação aparece no app.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Comprar uma só e revezar (~14h00). O Bob-omb Kaboom Room é exclusivo da Super Nintendo World de Orlando. Se ninguém quiser, usar o tempo na Mine-Cart Madness (se a fila for baixa) e nas lojas 1-Up Factory e Mario Motors.",
            ],
          },
        ],
      },
      {
        id: "dark-universe-22",
        name: "Dark Universe: Monsters Unchained e Das Stakehaus",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "target",
            title: "Onde",
            paragraphs: ["Dark Universe, ~15h30. Altura mínima do Monsters Unchained: 1,22 m."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Repetir o Monsters Unchained só se a fila for ≤30 min. Sobremesa no Das Stakehaus (chocolate em forma de túmulo). ~16h00: ver a hélice do The Burning Blade Tavern pegar fogo e fotos com os monstros.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Darkmoor Monster Makeup é opcional, com reserva no site da Universal (US$ 45 só a maquiagem; US$ 169+ o pacote). Adultos maquiados não podem beber álcool.",
            ],
          },
        ],
      },
      {
        id: "mead-hall",
        name: "Jantar no Mead Hall",
        icon: "burger",
        sections: [
          {
            color: "navy",
            icon: "burger",
            title: "Onde",
            paragraphs: ["Isle of Berk, ~17h15. Reservar pelo app: perto do Natal enche."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Salão de banquete viking. Thawfest Platter: frango glaceado com barbecue de frutas silvestres, salmão grelhado e salsicha. A Berk ao entardecer fica com a decoração de Natal.",
            ],
          },
        ],
      },
      {
        id: "celestial-park-natal",
        name: "Celestial Park de Natal e compras finais",
        icon: "tree",
        sections: [
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            list: [
              "Other Worlds Mercantile",
              "North Star – Wintry Wonders (produtos de Natal)",
              "K. Rammelle (doces)",
              "Pretorius' Scientific Oddities (Dark Universe)",
            ],
          },
          {
            color: "gold",
            icon: "tree",
            title: "Dica",
            paragraphs: [
              "~18h30. O Celestial Park vira um 'cosmic winter wonderland' no Natal, com árvores iluminadas. Foto de capa: lago e Helios Grand Hotel ao fundo.",
            ],
          },
        ],
      },
      {
        id: "favoritas-noite",
        name: "As 2 favoritas à noite",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "~19h00, por Single Rider. Padrão: Stardust Racers iluminada e Battle at the Ministry. Entrar na fila até ~20h, porque ela fecha no encerramento.",
            ],
          },
        ],
      },
      {
        id: "celestial-goodnight-22",
        name: "Universal Celestial Goodnight",
        icon: "camera",
        sections: [
          {
            color: "navy",
            icon: "camera",
            title: "Onde",
            paragraphs: ["Celestial Park. Fechamento previsto às 21h00."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Chegar 20 a 30 min antes (horário só no app). Para descansar, o bar do 10º andar do Helios Grand Hotel é aberto a não hóspedes e tem vista para o show (nome e horário a confirmar).",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Se sobrar tempo ou energia, o que faltou no dia 17 entra aqui: Mario Kart, segunda pista da Stardust, Toothless Meet & Greet, Fyre Drill (se estiver quente) e Untrainable Dragon (se perdeu o horário).",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
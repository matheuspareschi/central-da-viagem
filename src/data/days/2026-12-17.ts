import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-17",
  calendarTitle: "Epic Universe",
  day: 17,
  park: {
    name: "Epic Universe",
    departure: "7h15",
    opening: "9h",
    closing: "21h",
  },
  weekday: "Qui",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "parque",
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "2 Samuel 6:1–11",
    gospelReading: "Marcos 9:9–13",
  },
  title: "Epic Universe",
  itinerary: {
    kind: "checklist",
    parkId: "epic-universe",
    summary: "Visita intensa, na ordem do dia. Sem Express Pass, com Single Rider nas filas acima de 75 min.",
    journey: {
      tiles: [{ label: "Parque aberto", value: "9h–21h" }],
      notes: [
        { icon: "info", text: "Regra de ouro: não começar pelo Harry Potter, começar pela Isle of Berk." },
      ],
      alerts: ["Confirmar no app: horário de 17/12 não publicado; assumido das 09h às 21h. Deslocar tudo pela diferença."],
    },
    attractions: [
      {
        id: "chegada-epic",
        name: "Chegada e estacionamento",
        icon: "parking",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e estacionamento",
            paragraphs: [
              "1001 Epic Blvd, Orlando, FL 32819. Entrada e estacionamento próprios, a ~3,5 km do CityWalk (não dá para ir a pé até lá).",
              "Estacionamento: US$ 32 a 35 por dia. Caminhada do carro ao portão: ~5 a 7 min. Tirar foto da placa e da fileira.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horários",
            list: [
              "06h15 acordar",
              "07h15 sair de Storey Lake (~30 min de carro; rota I-4 oeste, saída Kirkman Rd/International Dr)",
              "~07h45 estacionar",
              "~08h15 no portão, com o ingresso já aberto no app",
              "09h00 abertura",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            list: [
              "Confirmar no voucher que o ingresso de 14 dias vale no Epic nos dois dias (17 e 22).",
              "Dia 16 termina tarde para parte do grupo (jogo do Magic): se voltarem depois das 23h, empurrar o despertar em 30 min.",
              "Mais da metade das atrações fecha com chuva forte ou raio.",
            ],
          },
        ],
      },
      {
        id: "regras-de-fila",
        name: "Regras de fila do dia",
        icon: "lightbulb",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            list: [
              "App Universal Orlando Resort: criar alerta de fila (≤30 min) para Mario Kart, Battle at the Ministry, Stardust e Monsters Unchained.",
              "Single Rider: Mario Kart, Stardust, Battle at the Ministry e Monsters Unchained. O tempo não aparece no app: perguntar ao funcionário. O grupo se divide e a fila fecha quando lota.",
              "Armários grátis nas atrações (reconhecimento facial); na Stardust é obrigatório.",
              "O parque ainda é instável: não deixar brinquedo importante para o fim do dia.",
            ],
          },
        ],
      },
      {
        id: "hiccups-wing-gliders",
        attractionId: "hiccups-wing-gliders",
        name: "Hiccup's Wing Gliders",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "target",
            title: "Onde",
            paragraphs: ["Isle of Berk (Como Treinar o Seu Dragão). Altura mínima: 1,02 m. Abertura às 09h00."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Montanha-russa familiar de ~72 km/h, sem inversões. Simula um voo sobre a ilha ao lado de Soluço e Banguela e passa perto da lagoa.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Primeira atração do dia: a fila é de ~10 a 25 min na abertura e cresce o dia todo. Pedir a primeira fileira só se a fila estiver curta, pois o cenário fica mais bonito.",
            ],
          },
        ],
      },
      {
        id: "stardust-racers",
        attractionId: "stardust-racers",
        name: "Stardust Racers",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "target",
            title: "Onde",
            paragraphs: ["Celestial Park, do lado mais perto da Isle of Berk. Altura mínima: 1,22 m. Por volta das 09h30."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Montanha-russa de lançamento duplo: dois trens em corrida paralela, ~100 km/h, inversões e quedas. É a atração mais radical do parque e a favorita dos guias.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Fazer as DUAS pistas (a verde é um pouco mais intensa, segundo os guias). Armário obrigatório na fila. Segunda pista por Single Rider para ganhar tempo.",
            ],
          },
        ],
      },
      {
        id: "dragon-racers-rally",
        name: "Dragon Racer's Rally (opcional)",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Giro aéreo com asas controláveis. Dura pouco mais de 1 min e há pouca explicação. Altura mínima: 1,22 m.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Só vale com fila de até 20 min. Não aceita Express Pass. Primeira da lista de cortes."],
          },
        ],
      },
      {
        id: "banguela-isle-of-berk",
        name: "Banguela e passeio na Isle of Berk",
        icon: "camera",
        sections: [
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Meet & Greet com o Banguela por volta das 10h40 (ele fica numa área externa, dá para vê-lo de fora da fila). Personagens andam pela ilha. A decoração de Natal (Snoggletog) está nas lojas Hiccup's Work Shop, How to Treat Your Dragon e Toothless' Treasures.",
            ],
          },
          {
            color: "gold",
            icon: "camera",
            title: "Foto de capa",
            paragraphs: ["As duas estátuas vikings de 12 m na lagoa, por volta das 10h30: luz boa e área ainda vazia."],
          },
        ],
      },
      {
        id: "untrainable-dragon",
        name: "The Untrainable Dragon",
        icon: "camera",
        sections: [
          {
            color: "navy",
            icon: "camera",
            title: "Onde",
            paragraphs: ["Isle of Berk. Show de ~18 a 20 min, com ar-condicionado."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: [
              "Estimativa de um site: 11h00, 13h30 e 16h (confirmar no app). Chegar 15 a 20 min antes. Se o das 11h não encaixar, usar o das 13h30.",
            ],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: ["Espetáculo com dragões animatrônicos e acrobacias. O ponto alto é o Banguela voando sobre o público."],
          },
        ],
      },
      {
        id: "spit-fyre-grill",
        name: "Almoço no Spit Fyre Grill",
        icon: "burger",
        sections: [
          {
            color: "navy",
            icon: "burger",
            title: "Onde",
            paragraphs: ["Isle of Berk, com vista para a Fyre Drill. Chegar ~11h40, antes do pico das 12h."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Bowls e grelhados, o preferido do guia VPD. Evitar o cone de pão de alho com macarrão e queijo (~US$ 20), que o guia não recomenda.",
            ],
          },
        ],
      },
      {
        id: "fyre-drill",
        name: "Fyre Drill (opcional)",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: ["Passeio de barco com canhões d'água para acertar alvos. Molha MUITO. Sem altura mínima."],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Só se a máxima do dia passar de ~21 °C; senão, pular. Guardar as bolsas no baú do barco."],
          },
        ],
      },
      {
        id: "monsters-unchained",
        name: "Monsters Unchained: The Frankenstein Experiment",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "target",
            title: "Onde",
            paragraphs: ["Dark Universe (Frankenstein Manor). Altura mínima: 1,22 m. Por volta das 12h35."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Simulador com movimento e 15 animatrônicos. Drácula liberta Lobisomem, Múmia e outros monstros no experimento da Dra. Victoria Frankenstein.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Fila ~30 a 60 min; Single Rider disponível; armário. Quem enjoa fácil com movimento deve ter cuidado."],
          },
        ],
      },
      {
        id: "curse-of-the-werewolf",
        name: "Curse of the Werewolf e fotos com monstros (opcional)",
        icon: "camera",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Montanha-russa giratória familiar (altura mínima 1,02 m). O carrinho gira no próprio eixo, então pular se alguém não curte giro. Fotos com Noiva de Frankenstein, Homem Invisível e Ygor.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Olhar o The Burning Blade Tavern: a hélice do moinho pega fogo a cada 20 min."],
          },
        ],
      },
      {
        id: "battle-at-the-ministry",
        name: "Harry Potter and the Battle at the Ministry",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "target",
            title: "Onde",
            paragraphs: ["Ministry of Magic. Altura mínima: 1,02 m. Por volta das 13h50."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Simulador com animatrônicos e efeitos. Você entra no Métro-Floo em Paris, chega ao Ministério da Magia britânico e ajuda a impedir a fuga de Dolores Umbridge. A fila é um espetáculo à parte.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "É a atração mais concorrida (fila ~45 a 90 min o dia todo). Por isso NÃO é a primeira. Single Rider; armário. Se passar de 75 min, voltar à noite.",
            ],
          },
        ],
      },
      {
        id: "ministry-paris-lojas",
        name: "Ruas de Paris: varinhas, doces e crepe",
        icon: "bag",
        sections: [
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            list: [
              "Cosme Acajor Baguettes Magique: varinhas do Epic (só funcionam no Epic; vêm com mapa de pontos).",
              "K. Rammelle: confeitaria com doces da saga.",
              "Vitrine de quadros perto do Le Gobelet Noir: ensina um feitiço a quem tem varinha.",
            ],
          },
          {
            color: "gold",
            icon: "burger",
            title: "Dica",
            paragraphs: [
              "Crepe de cerveja amanteigada no Café L'Air de la Sirène, para dividir. Le Cirque Arcanus fica para o dia 22 (os guias divergem sobre o show).",
            ],
          },
        ],
      },
      {
        id: "mario-kart",
        attractionId: "mario-kart-bowsers-challenge",
        name: "Mario Kart: Bowser's Challenge",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "target",
            title: "Onde",
            paragraphs: ["Super Nintendo World (entrada pelo cano verde). Altura mínima: 1,02 m. Por volta das 15h40."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Corrida com óculos de realidade aumentada e projeção mapeada, em carrinhos de 4 lugares. O objetivo é coletar 100 moedas e vencer o Bowser. A fila no castelo do Bowser faz parte da graça.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Ouvir as instruções antes de começar: a atração não é intuitiva. Fila ~60 a 90 min; Single Rider. Se passar de 75 min, deixar para depois das 19h30.",
            ],
          },
        ],
      },
      {
        id: "mine-cart-madness",
        name: "Mine-Cart Madness e fotos com personagens",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Montanha-russa familiar do Donkey Kong (altura mínima 1,02 m). O trilho parece incompleto e o carrinho salta entre trechos. Por volta das 16h50.",
            ],
          },
          {
            color: "gold",
            icon: "camera",
            title: "Dica",
            paragraphs: [
              "Fotos com Mario, Luigi, Peach, Toad e Donkey Kong (horários no app). Pular a Yoshi's Adventure. Paninis no Yoshi's Snack Stand. Power-Up Band: decidir só no dia 22.",
            ],
          },
        ],
      },
      {
        id: "pizza-moon-jantar",
        name: "Jantar no Pizza Moon",
        icon: "burger",
        sections: [
          {
            color: "navy",
            icon: "burger",
            title: "Onde",
            paragraphs: ["Celestial Park, ~17h30."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Pizzas diferentes do básico de parque e massa gratinada. Alternativa: Das Stakehaus, na Dark Universe (muito temático, preço normal).",
            ],
          },
        ],
      },
      {
        id: "lojas-celestial-park",
        name: "Lojas do Celestial Park",
        icon: "bag",
        sections: [
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            list: [
              "Other Worlds Mercantile: a mais completa, com produtos de todas as áreas.",
              "Sensorium Emporium: acessórios temáticos do parque.",
              "North Star – Wintry Wonders: produtos de Natal.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Ir por volta das 18h15, antes da fila do fim do dia."],
          },
        ],
      },
      {
        id: "stardust-noite-snw-noite",
        name: "Noite: Stardust iluminada e Super Nintendo World",
        icon: "camera",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            list: [
              "18h45 Stardust Racers à noite: o trilho imita um cometa e fica iluminado. Single Rider; a fila fecha no encerramento.",
              "19h30 Voltar à Super Nintendo World iluminada. Se a fila do Mario Kart caiu, fazer agora.",
              "20h15 Constellation Carousel iluminado (sem altura mínima; bom para descansar).",
            ],
          },
        ],
      },
      {
        id: "celestial-goodnight",
        name: "Universal Celestial Goodnight",
        icon: "camera",
        sections: [
          {
            color: "navy",
            icon: "camera",
            title: "Onde",
            paragraphs: ["Ao redor do lago do Celestial Park. Fechamento previsto às 21h00; foto da placa do carro na saída."],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Espetáculo noturno com fontes, luzes, música e fogos (substituiu o Cosmos Fountain em 07/07/2026). Traz canções de Super Nintendo, Como Treinar o Seu Dragão, Harry Potter e monstros.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Horário só no app: chegar 20 a 30 min antes. Corte da noite: se faltar tempo, cortar nesta ordem Dragon Racer's Rally, Fyre Drill, Werewolf, Yoshi's e Carousel."],
          },
        ],
      },
    ],
  },
} satisfies DayData;

import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-11",
  calendarTitle: "Hollywood Studios",
  day: 11,
  weekday: "Sex",
  liturgicalWeekday: "3ª sem. do Advento",
  category: "parque",
  title: "Hollywood Studios",
  reading: {
    label: "3ª sem. do Advento",
    oldTestamentReading: "Habacuque 3:2–6",
    gospelReading: "Mateus 21:28–32",
  },
 split: ["parque", "turismo"],
 itinerary: {
    kind: "split",
    tracks: [
      {
        key: "hollywood-studios",
        category: "parque",
        title: "Hollywood Studios",
        mode: "checklist",
        parkId: "hollywood-studios",
        // REVISAR (summary): Texto montado a partir da legenda da foto (heroCaption) removida; conferir redação.
        summary: "Dia no Hollywood Studios, com portões das 09h às 21h.",
        group: "Sandra, Thiago, Silvana, Gabriel, Renata e Isabela",
        journey: {
          tiles: [{ label: "Acordar", value: "7h15" }, { label: "Sair de casa", value: "7h45" }, { label: "Estacionamento abre", value: "8h" }, { label: "Parque aberto", value: "9h–21h" }],
          notes: [
            { icon: "car", text: "Ida até os portões ~20 min." },
            { icon: "info", text: "Deixar os lanches do parque separados no dia anterior. Mochilas com filtro solar, remédios etc." },
          ],
          alerts: [],
        },
        attractions: [
          {
            id: "mickey-minnie-runaway-railway",
            attractionId: "mickey-and-minnies-runaway-railway",
            name: "Hollywood Boulevard · Mickey and Minnie's Runaway Railway",
            icon: "target",
            sections: [
              {
                color: "gold",
                icon: "camera",
                title: "Foto",
                list: [
                  "Onde: fachada do teatro (antes de entrar na fila).",
                  "Melhor horário: 11h (luz boa, não muito cheio).",
                  "Dica: fotografar de frente, com a fachada colorida ao fundo — fica melhor com luz natural do meio-dia.",
                ],
              },
            ],
          },
          {
            id: "tower-of-terror",
            name: "Sunset Boulevard · Torre do Terror",
            icon: "target",
            sections: [
              {
                color: "gold",
                icon: "camera",
                title: "Foto",
                list: [
                  "Onde: frente do prédio da torre (à distância, no pátio).",
                  "De dia: 10h–11h (sol ainda alto, bom contraste).",
                  "De noite: 19h30+ (iluminação dramática, mais atmosférico).",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Dica",
                paragraphs: [
                  "A torre fica impressionante com a iluminação roxa/dourada à noite — melhor que de dia para uma foto mágica.",
                ],
              },
            ],
          },
          {
            id: "rock-n-roller-coaster",
            name: "Sunset Boulevard · Rock 'n' Roller Coaster",
            icon: "target",
            sections: [
              {
                color: "gold",
                icon: "camera",
                title: "Foto",
                list: [
                  "Onde: fachada frontal com o logo do carro de rodas (do lado de fora da fila).",
                  "Melhor horário: 10h–11h ou 19h+ (à noite a iluminação de neon fica linda).",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Dica",
                paragraphs: [
                  "De dia, peguem a posição com o sol ao fundo; de noite, as luzes rosa/azul da fachada ficam incríveis.",
                ],
              },
            ],
          },
          {
            id: "beauty-and-the-beast-show",
            name: "Sunset Boulevard · Show da Bela e a Fera",
            icon: "target",
            sections: [
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: ["Ver o horário dos shows no dia."],
              },
            ],
          },
          {
            id: "pausa-lanchinhos",
            name: "Pausa para alimentação · Lanchinhos",
            icon: "burger",
            sections: [
              {
                color: "gold",
                icon: "lightbulb",
                title: "Dica",
                paragraphs: [
                  "Usar os lanches do parque separados no dia anterior.",
                ],
              },
            ],
          },
          {
            id: "foto-mickey-minnie",
            name: "Sunset Boulevard · Foto com Mickey e Minnie",
            icon: "camera",
            sections: [
              {
                color: "gold",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Tirar foto com Mickey e Minnie."],
              },
            ],
          },
          {
            id: "star-tours",
            name: "Echo Lake · Star Tours",
            icon: "target",
            sections: [
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: ["Fazer se não tiver fila."],
              },
            ],
          },
          {
            id: "pixar-plaza-personagens",
            name: "Pixar Plaza · Fotos com personagens",
            icon: "camera",
            sections: [
              {
                color: "citrus",
                icon: "camera",
                title: "Personagens",
                paragraphs: [
                  "Fotos com personagens: Os Incríveis, Divertida Mente, Monstros S.A. e outros.",
                ],
              },
              {
                color: "gold",
                icon: "camera",
                title: "Melhor horário",
                list: [
                  "Evitem: 10h–13h (aglomerado, filas de 30+ min por personagem).",
                  "Ideal: 15h–16h (meio da tarde, filas menores que 10 min).",
                  "Backup: 19h–20h (antes do Fantasmic).",
                ],
              },
            ],
          },
          {
            id: "slinky-dog-dash",
            attractionId: "slinky-dog-dash",
            name: "Pixar Plaza · Slinky Dog Dash",
            icon: "target",
            sections: [
              {
                color: "gold",
                icon: "camera",
                title: "Foto",
                list: [
                  "De dia: 10h–11h (luz clara).",
                  "De noite: 19h+ (imperdível — luzes coloridas, ambiente mágico).",
                ],
              },
            ],
          },
          {
            id: "millennium-falcon",
            attractionId: "millennium-falcon-smugglers-run",
            name: "Star Wars: Galaxy's Edge · Millennium Falcon: Smugglers Run",
            icon: "target",
            sections: [
              {
                color: "gold",
                icon: "camera",
                title: "Foto",
                list: [
                  "De dia: 9h–10h (mais iluminado, menos gente para foto limpa).",
                  "De noite: 18h+ (atmosfera escura e imersiva, muito mais mágica — luzes de neon dos estabelecimentos).",
                ],
              },
            ],
          },
          {
            id: "rise-of-the-resistance",
            attractionId: "star-wars-rise-of-the-resistance",
            name: "Star Wars: Galaxy's Edge · Rise of the Resistance",
            icon: "target",
            sections: [
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: [
                  "Atração mais disputada do parque — conferir a fila e o horário de funcionamento no dia.",
                ],
              },
            ],
          },
          {
            id: "toy-story-land-noite",
            name: "Toy Story Land · Fotos à noite",
            icon: "camera",
            sections: [
              {
                color: "gold",
                icon: "camera",
                title: "Foto",
                paragraphs: [
                  "Voltar para Toy Story Land e tirar fotos à noite (a partir das 19h).",
                ],
              },
            ],
          },
          {
            id: "fantasmic",
            attractionId: "fantasmic",
            name: "Sunset Boulevard · Fantasmic!",
            icon: "camera",
            sections: [
              {
                color: "navy",
                icon: "target",
                title: "Onde ficar",
                paragraphs: [
                  "Sunset Boulevard (melhor vista), ou perto da água entre as atrações.",
                ],
              },
              {
                color: "gold",
                icon: "camera",
                title: "Melhor horário",
                paragraphs: [
                  "Chegar 45 min a 1h antes (geralmente 19h45, se o show sair às 20h30).",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Dica para fotos",
                paragraphs: [
                  "Posicionem-se perto da água, sem árvores/pessoas bloqueando. As explosões de fogo e fumaça são os melhores momentos para fotografar — estejam prontos quando as chamas começarem.",
                ],
              },
            ],
          },
          {
            id: "world-of-animation",
            name: "Animation Courtyard · Show World of Animation",
            icon: "camera",
            sections: [
              {
                color: "navy",
                icon: "target",
                title: "Onde",
                paragraphs: [
                  "Animation Courtyard (projeções em tela gigante).",
                ],
              },
              {
                color: "gold",
                icon: "camera",
                title: "Melhor horário",
                paragraphs: [
                  "17h–18h30 (se houver sessão) ou 20h (se houver sessão pós-Fantasmic).",
                ],
              },
            ],
          },
        ],
      },
      {
        key: "matheus-jairo",
        category: "turismo",
        title: "Matheus e Jairo — lojas de música, Windermere e Old Town",
        mode: "schedule",
        summary: "Dia aberto, de carro, com horários aproximados. Lojas de Kissimmee de manhã, almoço em casa, depois o eixo norte (Corzic e Blackbird) e Windermere no fim da tarde, fechando no Old Town.",
        journey: {
          tiles: [],
          notes: [
            { icon: "info", text: "Se as lojas demorarem, cortem a Blackbird ou encurtem Windermere." },
            { icon: "info", text: "Opcionais fora da rota: Guitar Center (12402 S Orange Blossom Trail, abre 11h–21h) e Sound 4 Less (5563 International Dr — confirmar por telefone se ainda funciona: (407) 456-8844)." },
          ],
          alerts: ["Confirmar horários das lojas independentes na véspera."],
        },
        periods: [
          {
            title: "Manhã",
            note: "Lojas perto de casa, em Kissimmee.",
            steps: [
              {
                kind: "stop",
                time: "10:00",
                stopId: "lewis-music-store",
                name: "Lewis Music Store",
                icon: "bag",
              },
              {
                kind: "transit",
                time: "10:45",
                duration: "~15 min",
                destinationName: "Music & Arts",
              },
              {
                kind: "stop",
                time: "11:00",
                stopId: "music-and-arts",
                name: "Music & Arts",
                icon: "bag",
              },
              {
                kind: "transit",
                time: "12:00",
                duration: "~15 min",
                destinationName: "Casa",
              },
              {
                kind: "stop",
                time: "12:15",
                stopId: "",
                name: "Almoço em casa",
                icon: "house",
              },
            ],
          },
          {
            title: "Tarde",
            note: "Eixo norte de Orlando e Windermere.",
            steps: [
              {
                kind: "transit",
                time: "13:30",
                duration: "~40 min",
                destinationName: "Corzic Music",
              },
              {
                kind: "stop",
                time: "14:15",
                stopId: "corzic-music",
                name: "Corzic Music",
                icon: "bag",
              },
              {
                kind: "transit",
                time: "15:15",
                duration: "~20–30 min",
                destinationName: "Blackbird Vintage Music",
              },
              {
                kind: "stop",
                time: "15:45",
                stopId: "blackbird-vintage-music",
                name: "Blackbird Vintage Music",
                icon: "bag",
              },
              {
                kind: "transit",
                time: "16:45",
                duration: "~25–30 min",
                destinationName: "Windermere",
              },
              {
                kind: "stop",
                time: "17:15",
                stopId: "windermere",
                name: "Passeio em Windermere",
                icon: "tree",
              },
            ],
          },
          {
            title: "Noite",
            steps: [
              {
                kind: "transit",
                time: "18:15",
                duration: "~35–45 min",
                destinationName: "Old Town Kissimmee",
              },
              {
                kind: "stop",
                time: "19:00",
                stopId: "old-town-kissimmee",
                name: "Old Town Kissimmee",
                icon: "camera",
              },
            ],
          },
        ],
        cards: [
          {
            id: "lewis-music-store",
            name: "Lewis Music Store",
            icon: "bag",
            time: "10:00",
            sections: [
              {
                color: "navy",
                icon: "parking",
                title: "Endereço",
                paragraphs: [
                  "117 Broadway, Kissimmee, FL 34741 (centro histórico).",
                ],
              },
              {
                color: "citrus",
                icon: "bag",
                title: "Sobre",
                paragraphs: [
                  "Loja independente local, com instrumentos e acessórios em geral, novos e usados, e preço acessível.",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Horário",
                paragraphs: [
                  "Ter–Sex 10h–18h · Sáb 10h–17h · Seg e Dom fechado.",
                ],
              },
            ],
          },
          {
            id: "music-and-arts",
            name: "Music & Arts",
            icon: "bag",
            time: "11:00",
            sections: [
              {
                color: "navy",
                icon: "parking",
                title: "Endereço",
                paragraphs: ["1263 W Osceola Pkwy, Kissimmee, FL 34741."],
              },
              {
                color: "citrus",
                icon: "bag",
                title: "Sobre",
                paragraphs: [
                  "Rede nacional do grupo Guitar Center. Instrumentos de banda e orquestra, guitarras, teclados, acessórios e partituras, predominantemente novos.",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Horário",
                paragraphs: [
                  "Seg–Sex 11h–20h · Sáb 10h–17h · Dom 12h–17h.",
                ],
              },
            ],
          },
          {
            id: "corzic-music",
            name: "Corzic Music",
            icon: "bag",
            time: "14:15",
            sections: [
              {
                color: "navy",
                icon: "parking",
                title: "Endereço",
                paragraphs: ["997 W Kennedy Blvd, Suite A1, Orlando, FL 32810."],
              },
              {
                color: "citrus",
                icon: "bag",
                title: "Sobre",
                paragraphs: [
                  "Loja boutique de alto padrão: violões e guitarras artesanais (Santa Cruz, Bourgeois, Lowden, Huss & Dalton), teclados Nord e baixos Warwick.",
                ],
              },
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: [
                  "Às sextas fecha às 16h — chegar até 15h para ter tempo.",
                ],
              },
            ],
          },
          {
            id: "blackbird-vintage-music",
            name: "Blackbird Vintage Music",
            icon: "bag",
            time: "15:45",
            sections: [
              {
                color: "navy",
                icon: "parking",
                title: "Endereço",
                paragraphs: ["1819 N Orange Ave, Orlando, FL 32804."],
              },
              {
                color: "citrus",
                icon: "bag",
                title: "Sobre",
                paragraphs: [
                  "Guitarras e baixos vintage, amplificadores valvulados e pedais. Só usados e vintage, com preços de ~US$ 300 a US$ 25.000.",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Horário",
                paragraphs: [
                  "Ter–Sáb 12h–19h · Seg e Dom fechado.",
                ],
              },
            ],
          },
          {
            id: "windermere",
            name: "Windermere",
            icon: "tree",
            time: "17:15",
            sections: [
              {
                color: "navy",
                icon: "parking",
                title: "Onde começar",
                paragraphs: [
                  "Centro (Town Square) na Main Street; Prefeitura no 614 Main St. Estacionar ali e fazer um trecho a pé.",
                ],
              },
              {
                color: "citrus",
                icon: "tree",
                title: "Rota sugerida (~1h)",
                list: [
                  "Centro: Town Square, lojas locais da Main Street e biblioteca (prédio estilo \"Florida Cracker\", com varanda ao redor).",
                  "Lake Street Park: caminho à beira do lago, bom ponto para fotos.",
                  "Palmer Park (Pine St, entre a 2nd e a 3rd Ave): bancos de frente para o Lake Butler.",
                  "Oakdale Street, de carro: rua arborizada, boa para ver as casas.",
                  "Lake Down: rampa pública gratuita na Conroy-Windermere Road.",
                  "Isleworth: condomínio fechado, só dá para ver o entorno pela Conroy-Windermere Road.",
                  "Opcional: R.D. Keene Park (10900 Chase Road), 52 acres na Lake Isleworth.",
                ],
              },
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: [
                  "Confirmar endereço e horário da biblioteca no Google Maps. A maioria das ruas residenciais não é asfaltada: ir devagar. Escurece por volta das 17h30, então o passeio de carro rende mais com a última luz do dia.",
                ],
              },
              {
                color: "palm",
                icon: "lightbulb",
                title: "Observação",
                paragraphs: [
                  "A feira de Windermere acontece nas sextas de manhã na Main Street (horário não confirmado) — só entra se o dia for reorganizado para a manhã.",
                ],
              },
            ],
          },
          {
            id: "old-town-kissimmee",
            name: "Old Town Kissimmee",
            icon: "camera",
            time: "19:00",
            sections: [
              {
                color: "navy",
                icon: "parking",
                title: "Endereço",
                paragraphs: [
                  "5770 W Irlo Bronson Memorial Hwy, Kissimmee, FL 34746. Entrada e estacionamento no local: grátis.",
                ],
              },
              {
                color: "citrus",
                icon: "bag",
                title: "Sobre",
                paragraphs: [
                  "Complexo a céu aberto com mais de 70 lojas e restaurantes independentes e roda-gigante. Aberto diariamente, das 11h às 23h. Brinquedos e atrações são pagos à parte.",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Friday Muscle Car Cruise",
                paragraphs: [
                  "Às sextas há exibição de muscle cars (pós-1964) e trucks a partir das 15h, com desfile às 20h30. Chegar por volta das 19h ajuda a pegar bom lugar na calçada.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;

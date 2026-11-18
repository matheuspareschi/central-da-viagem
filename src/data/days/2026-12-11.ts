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
    epistleReading: "Filipenses 3:12–16",
    gospelReading: "Mateus 21:28–32",
    psalm: "Salmo 126",
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
        summary: "Dia no Hollywood Studios, com portões das 9h às 21h.",
        group: "Sandra, Thiago, Silvana, Gabriel, Renata e Isabela",
            journey: {
          tiles: [{ label: "Acordar", value: "7h15" }, { label: "Sair de casa", value: "7h45" }, { label: "Estacionamento abre", value: "8h00" }, { label: "Parque aberto", value: "9h–21h" }],
          notes: [
            { icon: "car", text: "Ida até os portões: em torno de 20 minutos." },
          ],
          alerts: ["**Deixar os lanches** do parque separados no dia anterior. Mochilas com filtro solar, remédios etc."],
        },
            attractions: [
          {
            id: "runaway-railway",
            attractionId: "mickey-and-minnies-runaway-railway",
            name: "Mickey & Minnie's Runaway Railway",
            area: "Hollywood Boulevard",
            icon: "target",
            sections: [
              {
                color: "citrus",
                icon: "target",
                title: "Roteiro",
                paragraphs: ["Atração."],
              },
            ],
          },
          {
            id: "foto-fachada-teatro",
            name: "Foto: fachada do teatro",
            area: "Hollywood Boulevard",
            icon: "camera",
            sections: [
              {
                color: "palm",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Onde: fachada do teatro (antes de entrar na fila). Fotografem de frente com a fachada colorida ao fundo; fica melhor com luz natural do meio-dia."],
                list: ["Melhor horário: **11h** (luz boa, não muito cheio)."],
              },
            ],
          },
          {
            id: "torre-terror",
            attractionId: "tower-of-terror",
            name: "Torre do Terror",
            area: "Sunset Boulevard",
            icon: "target",
            sections: [
              {
                color: "citrus",
                icon: "target",
                title: "Roteiro",
                paragraphs: ["Atração."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Dica",
                paragraphs: ["A torre fica impressionante com a **iluminação roxa/dourada** à noite — melhor que de dia para uma foto mágica."],
              },
            ],
          },
          {
            id: "foto-torre",
            name: "Foto: frente da torre",
            area: "Sunset Boulevard",
            icon: "camera",
            sections: [
              {
                color: "palm",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Onde: frente do prédio da torre (à distância, no pátio). A torre fica impressionante com a iluminação roxa/dourada à noite; melhor que de dia para foto mágica."],
                list: ["De dia: **10h–11h** (sol ainda alto, bom contraste).", "De noite: **19h30+** (iluminação dramática, mais atmosférico)."],
              },
            ],
          },
          {
            id: "rock-roller",
            attractionId: "rock-n-roller-coaster-aerosmith",
            name: "Rock 'n' Roller Coaster",
            area: "Sunset Boulevard",
            icon: "target",
            sections: [
              {
                color: "citrus",
                icon: "target",
                title: "Roteiro",
                paragraphs: ["Atração."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Dica",
                paragraphs: ["De dia, peguem a posição com o **sol ao fundo**; de noite, as luzes rosa/azul da fachada ficam incríveis."],
              },
            ],
          },
          {
            id: "foto-rock-roller",
            name: "Foto: fachada do Rock 'n' Roller",
            area: "Sunset Boulevard",
            icon: "camera",
            sections: [
              {
                color: "palm",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Onde: fachada frontal com o logo do carro de rodas (do lado de fora da fila)."],
                list: ["Melhor horário: **10h–11h** ou 19h+ (à noite a iluminação de neon fica linda)."],
              },
            ],
          },
          {
            id: "bela-fera",
            attractionId: "beauty-and-the-beast-live-on-stage",
            name: "Show Bela e a Fera",
            area: "Sunset Boulevard",
            icon: "camera",
            sections: [
              {
                color: "gold",
                icon: "lightbulb",
                title: "Roteiro",
                paragraphs: ["Ver horário no dia."],
              },
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: ["Ver o horário dos shows no dia."],
              },
            ],
          },
          {
            id: "lanche",
            name: "Pausa para alimentação",
            area: "Sunset Boulevard",
            icon: "bag",
            sections: [
              {
                color: "gold",
                icon: "bag",
                title: "Roteiro",
                paragraphs: ["Lanchinhos."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Dica",
                paragraphs: ["Usar os **lanches do parque** separados no dia anterior."],
              },
            ],
          },
          {
            id: "mickey-minnie-foto",
            name: "Foto com Mickey e Minnie",
            area: "Sunset Boulevard",
            icon: "camera",
            sections: [
              {
                color: "palm",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Tirar foto com Mickey e Minnie."],
              },
            ],
          },
          {
            id: "star-tours",
            attractionId: "star-tours-the-adventures-continue",
            name: "Star Tours",
            area: "Echo Lake",
            icon: "target",
            sections: [
              {
                color: "citrus",
                icon: "target",
                title: "Roteiro",
                paragraphs: ["Se não tiver fila."],
              },
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: ["Fazer se não tiver fila."],
              },
            ],
          },
          {
            id: "pixar-personagens",
            name: "Personagens da Pixar Plaza",
            area: "Pixar Plaza",
            icon: "camera",
            sections: [
              {
                color: "palm",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Tirar fotos com personagens: Incríveis, Divertidamente, Monstros S.A. Evitem 10h–13h (aglomerado, filas de 30+ min por personagem). Ideal: 15h–16h (meio da tarde, filas abaixo de 10 min)."],
              },
              {
                color: "citrus",
                icon: "camera",
                title: "Personagens",
                paragraphs: ["**Fotos com personagens**: Os Incríveis, Divertida Mente, Monstros S.A. e outros."],
              },
              {
                color: "gold",
                icon: "camera",
                title: "Melhor horário",
                list: ["Ideal: **15h–16h** (meio da tarde, filas menores que 10 min).", "Backup: **19h–20h** (antes do Fantasmic)."],
              },
            ],
          },
          {
            id: "slinky",
            attractionId: "slinky-dog-dash",
            name: "Slinky Dog Dash",
            area: "Pixar Plaza",
            icon: "camera",
            sections: [
              {
                color: "palm",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Foto de dia: 10h–11h (luz clara). Foto de noite: 19h ou mais (imperdível, luzes coloridas, ambiente mágico)."],
              },
            ],
          },
          {
            id: "millennium-falcon",
            attractionId: "millennium-falcon-smugglers-run",
            name: "Millennium Falcon",
            area: "Galaxy's Edge",
            icon: "camera",
            sections: [
              {
                color: "palm",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Atração. Foto de dia: 9h–10h (mais iluminado, menos pessoas para foto limpa). Foto de noite: 18h ou mais (atmosfera escura e imersiva, luzes de neon)."],
                list: ["De noite: **18h+** (atmosfera escura e imersiva, muito mais mágica — luzes de neon dos estabelecimentos)."],
              },
            ],
          },
          {
            id: "rise",
            attractionId: "star-wars-rise-of-the-resistance",
            name: "Rise of the Resistance",
            area: "Galaxy's Edge",
            icon: "target",
            sections: [
              {
                color: "citrus",
                icon: "target",
                title: "Roteiro",
                paragraphs: ["Atração."],
              },
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: ["Atração mais disputada do parque — **conferir a fila e o horário** de funcionamento no dia."],
              },
            ],
          },
          {
            id: "toy-story-noite",
            name: "Toy Story Land à noite",
            area: "Toy Story Land",
            icon: "camera",
            sections: [
              {
                color: "palm",
                icon: "camera",
                title: "Roteiro",
                paragraphs: ["Voltar para Toy Story Land e tirar fotos à noite."],
              },
              {
                color: "gold",
                icon: "camera",
                title: "Foto",
                paragraphs: ["Voltar para Toy Story Land e tirar fotos à noite (**a partir das 19h**)."],
              },
            ],
          },
          {
            id: "fantasmic",
            attractionId: "fantasmic",
            name: "Fantasmic!",
            area: "Sunset Boulevard",
            icon: "camera",
            sections: [
              {
                color: "gold",
                icon: "lightbulb",
                title: "Foto",
                paragraphs: ["Onde: ficar em Sunset Boulevard (melhor vista) ou perto da água entre atrações. Melhor horário: chegar 45 min a 1h antes (geralmente 19h45 se o show sair às 20h30). Posicionem-se perto da água, sem árvores ou pessoas bloqueando; as explosões de fogo e fumaça são os melhores momentos para fotografar."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Dica para fotos",
                paragraphs: ["Posicionem-se **perto da água**, sem árvores/pessoas bloqueando. As explosões de fogo e fumaça são os melhores momentos para fotografar — estejam prontos quando as chamas começarem."],
              },
            ],
          },
          {
            id: "world-animation",
            name: "Show World of Animation",
            area: "Animation Courtyard",
            icon: "camera",
            sections: [
              {
                color: "gold",
                icon: "lightbulb",
                title: "Roteiro",
                paragraphs: ["Assistir o show World of Animation."],
              },
              {
                color: "navy",
                icon: "target",
                title: "Onde",
                paragraphs: ["**Animation Courtyard** (projeções em tela gigante)."],
              },
              {
                color: "gold",
                icon: "camera",
                title: "Melhor horário",
                paragraphs: ["**17h–18h30** (se houver sessão) ou 20h (se houver sessão pós-Fantasmic)."],
              },
            ],
          },
            ],
      },
      {
        key: "matheus-jairo",
        category: "turismo",
        title: "Lojas de Música e Epic Universe",
        mode: "schedule",
        summary: "Dia aberto, de carro. Lojas de música em Orlando de manhã, almoço em fast food, tarde e noite no Epic Universe (saída às 20h) e, às 21h, buscar o pessoal no Hollywood Studios.",
        journey: {
          tiles: [
            { label: "Sair de casa", value: "9h30" },
            { label: "Lojas de música", value: "3" },
            { label: "Sair do Epic", value: "20h" },
            { label: "Pegar o pessoal", value: "21h" },
          ],
          notes: [],
          alerts: [],
        },
        periods: [
          {
            title: "Lojas de música",
            steps: [
              { kind: "transit", time: "09:30", duration: "~35 min", destinationName: "Discount Music Center" }, // REVISAR: tempos de deslocamento e de visita estimados
              { kind: "stop", time: "10:05", stopId: "discount-music-center", name: "Discount Music Center", icon: "bag" },
              { kind: "transit", time: "10:35", duration: "~20 min", destinationName: "Music & Arts (Millenia)" },
              { kind: "stop", time: "11:00", stopId: "music-and-arts-millenia", name: "Music & Arts (Millenia)", icon: "bag" },
              { kind: "transit", time: "11:30", duration: "~25 min", destinationName: "Guitar Center (Orange Blossom Trail)" },
              { kind: "stop", time: "12:00", stopId: "guitar-center-obt", name: "Guitar Center (Orange Blossom Trail)", icon: "bag" },
              { kind: "stop", time: "12:45", stopId: "", name: "Almoço (fast food)", icon: "burger" },
            ],
          },
          {
            title: "Tarde",
            steps: [
              { kind: "transit", time: "13:30", duration: "~30 min", destinationName: "Epic Universe" }, // REVISAR: tempo de deslocamento estimado
              { kind: "stop", time: "14:00", stopId: "epic-universe", name: "Epic Universe", icon: "target" },
            ],
          },
          {
            title: "Noite",
            steps: [
              { kind: "transit", time: "20:00", duration: "~30 min", destinationName: "Hollywood Studios" }, // REVISAR: tempo de deslocamento estimado
              { kind: "stop", time: "21:00", stopId: "pegar-pessoal-hollywood", name: "Pegar o pessoal no Hollywood Studios", icon: "target" },
            ],
          },
        ],
        cards: [
          {
            id: "discount-music-center",
            address: "3301 Gardenia Ave, Orlando, FL 32805",
            name: "Discount Music Center",
            icon: "bag",
            time: "10:00",
            sections: [
              {
                color: "citrus",
                icon: "bag",
                title: "Sobre",
                paragraphs: ["**Discount Music Center**: loja pequena e antiga (desde 1972), forte em **Roland** e **Boss**."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Horário",
                paragraphs: ["A partir das **10h**."],
              },
              {
                color: "navy",
                icon: "house",
                title: "Telefone",
                paragraphs: ["(407) 423-4171"],
              },
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: ["Horário de **10h** não confirmado em fonte oficial: **ligar antes**."],
              },
            ],
          },
          {
            id: "music-and-arts-millenia",
            address: "4676 Millenia Plaza Way, Orlando, FL 32839",
            name: "Music & Arts (Millenia)",
            icon: "bag",
            time: "11:00",
            sections: [
              {
                color: "citrus",
                icon: "bag",
                title: "Sobre",
                paragraphs: ["**Music & Arts**: loja de rede, voltada a instrumentos de estudo, aluguel e reparo. Fica perto do Mall at Millenia."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Horário",
                paragraphs: ["Abre às **11h**."],
              },
              {
                color: "navy",
                icon: "house",
                title: "Telefone",
                paragraphs: ["407-345-0544"],
              },
            ],
          },
          {
            id: "guitar-center-obt",
            address: "12402 S Orange Blossom Trail, Suite 1, Orlando, FL 32837",
            name: "Guitar Center (Orange Blossom Trail)",
            icon: "bag",
            time: "12:00",
            sections: [
              {
                color: "citrus",
                icon: "bag",
                title: "Sobre",
                paragraphs: ["**Guitar Center**: a maior das três, com seção de **usados** e sala de **guitarras vintage**. Fica no caminho de volta para Kissimmee."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Horário",
                paragraphs: ["Abre às **11h**."],
              },
              {
                color: "navy",
                icon: "house",
                title: "Telefone",
                paragraphs: ["(407) 251-6659"],
              },
              {
                color: "attn",
                icon: "alert",
                title: "Atenção",
                paragraphs: ["Horário de sexta não confirmado: **confirmar horário**."],
              },
            ],
          },
          {
            id: "epic-universe",
            address: "1001 Epic Blvd, Orlando, FL 32819",
            name: "Epic Universe",
            icon: "target",
            time: "14:00",
            sections: [
              {
                color: "citrus",
                icon: "target",
                title: "Sobre",
                paragraphs: ["**Epic Universe**: parque da Universal. Saída às **20h**, para buscar o pessoal às **21h**."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Horário",
                paragraphs: ["Fecha às **21h**."],
              },
            ],
          },
          {
            id: "pegar-pessoal-hollywood",
            address: "351 S Studio Dr, Lake Buena Vista, FL 32830",
            name: "Hollywood Studios",
            icon: "target",
            time: "21:00",
            sections: [
              {
                color: "citrus",
                icon: "target",
                title: "Sobre",
                paragraphs: ["Buscar o pessoal na saída do Hollywood Studios, às **21h**."],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Horário",
                paragraphs: ["O parque fecha às **21h**."],
              },
            ],
          },
        ],
      },
    ],
  },
  options: [
    {
      id: "hollywood-studios",
      label: "Hollywood Studios",
      supportLine: "Sandra, Thiago, Silvana, Gabriel, Renata e Isabela",
      trackKeys: ["hollywood-studios"],
      isDefault: true,
    },
    {
      id: "dia-livre",
      label: "Dia livre",
      calendarTitle: "Lojas de música e Epic",
      supportLine: "Matheus e Jairo · de carro",
      trackKeys: ["matheus-jairo"],
    },
  ],
} satisfies DayData;

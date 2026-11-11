import { mapSearchUrl } from "../../lib/maps";
import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-14",
  calendarTitle: "Saint Augustine",
  day: 14,
  weekday: "Seg",
  category: "turismo",
  title: "Saint Augustine",
  liturgicalWeekday: "4ª sem. do Advento",
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "1 Reis 18:1–18",
    gospelReading: "Mateus 3:1–6",
  },
  itinerary: {
    kind: "schedule",
    summary: "Almoço no Harry's Seafood Bar & Grille (bayfront); jantar rápido no Chick-fil-A já na saída da cidade.",
    group: "Grupo completo, exceto Rafael Narcizo (chega dia 20)",
    journey: {
      tiles: [
        { label: "Acordar", value: "A definir" },
        { label: "Sair de casa", value: "7h30" }, // REVISAR: horário do primeiro trajeto
        { label: "Sair de Saint Augustine", value: "19h10" }, // REVISAR: horário do trajeto de volta
        { label: "Chegar em casa", value: "~20h55" }, // REVISAR: 19h10 + ~1h45
      ],
      notes: [
        { icon: "car", text: "Deslocamento: ~1h45 cada trecho, ~3h30 de carro no total." },
      ],
      alerts: [],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          {
            kind: "transit",
            time: "07:30",
            duration: "~1h45",
            destinationName: "Historic Downtown Parking Facility, St. Augustine",
          },
          {
            kind: "stop",
            time: "09:40",
            stopId: "old-senator",
            name: "The Old Senator (Live Oak)",
            icon: "leaf",
          },
          {
            kind: "stop",
            time: "09:50",
            stopId: "mission",
            name: "Mission Nombre de Dios e Shrine",
            icon: "target",
          },
          {
            kind: "stop",
            time: "10:40",
            stopId: "castillo",
            name: "Castillo de San Marcos",
            icon: "target",
          },
          {
            kind: "stop",
            time: "12:10",
            stopId: "old-city-gate",
            name: "Old City Gate",
            icon: "target",
          },
        ],
      },
      {
        title: "Tarde",
        steps: [
          {
            kind: "stop",
            time: "12:30",
            stopId: "harrys",
            name: "Harry's Seafood Bar & Grille (almoço)",
            icon: "burger",
          },
          {
            kind: "stop",
            time: "13:30",
            stopId: "st-photios",
            name: "St. Photios Greek Orthodox National Shrine",
            icon: "house",
          },
          {
            kind: "stop",
            time: "13:45",
            stopId: "aviles",
            name: "Aviles Street",
            icon: "target",
          },
          {
            kind: "stop",
            time: "14:05",
            stopId: "cathedral",
            name: "Cathedral Basilica e Governor's House",
            icon: "house",
          },
          {
            kind: "stop",
            time: "14:50",
            stopId: "treasury",
            name: "Treasury Street e Love Tree",
            icon: "target",
          },
          {
            kind: "stop",
            time: "15:05",
            stopId: "flagler",
            name: "Flagler College e Villa Zorayda e Lightner",
            icon: "house",
          },
          {
            kind: "stop",
            time: "15:50",
            stopId: "grace-church",
            name: "Grace United Methodist Church",
            icon: "house",
          },
          {
            kind: "stop",
            time: "16:10",
            stopId: "bridge-of-lions",
            name: "Bridge of Lions & Bayfront",
            icon: "target",
          },
        ],
      },
      {
        title: "Noite",
        steps: [
          {
            kind: "stop",
            time: "16:50",
            stopId: "",
            name: "Tempo livre / fotos finais",
            icon: "target",
          },
          {
            kind: "stop",
            time: "17:15",
            stopId: "nights-of-lights",
            name: "Nights of Lights (passeio a pé)",
            icon: "tree",
          },
          {
            kind: "transit",
            time: "18:30",
            duration: "~10 min",
            destinationName: "Chick-fil-A",
          },
          {
            kind: "stop",
            time: "18:40",
            stopId: "chick-fil-a",
            name: "Chick-fil-A (jantar)",
            icon: "burger",
          },
          {
            kind: "transit",
            time: "19:10",
            duration: "~1h45",
            destinationName: "Silver Lake Resort, Kissimmee",
          },
        ],
      },
    ],
    cards: [
      {
        id: "old-senator",
        name: "The Old Senator (Live Oak)",
        icon: "leaf",
        time: "09:40",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e Estacionamento",
            paragraphs: [
              "137 San Marco Ave, St. Augustine, FL.",
              "**Historic Downtown Parking Facility**, 1 Cordova St — US$ 20/veículo, tarifa fixa 7h–17h. Feito no início do dia, vale para todas as paradas seguintes.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Carvalho monumental com mais de 600 anos — já estava ali antes de Ponce de León chegar à Flórida em 1513. Fica no pátio do hotel Villa 1565.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Não precisa ser hóspede do hotel para ver e fotografar. No caminho, dá pra admirar de fora a fachada do antigo Castle Warden Hotel (hoje Ripley's Believe It or Not!), no 19 San Marco Ave.",
            ],
          },
        ],
      },
      {
        id: "mission",
        name: "Mission Nombre de Dios e Shrine",
        icon: "target",
        time: "09:50",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "27 Ocean Ave, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Terreno onde a expedição de Pedro Menéndez de Avilés celebrou a primeira missa católica dos EUA, em 1565. A Great Cross de 63m marca o local do desembarque. A Shrine, dentro do mesmo terreno, é considerada o primeiro santuário mariano dos EUA.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis. Jardins tranquilos à beira d'água — ótimo para fotos matinais, ainda sem muito movimento.",
            ],
          },
        ],
      },
      {
        id: "castillo",
        name: "Castillo de San Marcos",
        icon: "target",
        time: "10:40",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "1 S Castillo Dr, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Forte de alvenaria mais antigo dos EUA continentais, construído entre 1672–1695 em pedra coquina (absorve bolas de canhão em vez de rachar). Monumento Nacional do National Park Service.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "**US$ 15/adulto (16+), grátis até 15 anos** — Isabela (14) entra de graça. Horário: diário 8h45–17h15 (última entrada 17h). Ingresso vale por 7 dias.",
              "Sem disparo de canhão programado em dezembro. Peça a um ranger para indicar a \"Câmara Secreta\" (descoberta selada em 1930). Programa Junior Ranger disponível.",
            ],
          },
        ],
      },
      {
        id: "old-city-gate",
        name: "Old City Gate",
        icon: "target",
        time: "12:10",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "St. George St & Orange St, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Portão de pedra coquina de 1808, entrada histórica para St. George Street.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis, 10 min — fica no caminho de volta do Castillo. Ótimo ponto de foto.",
            ],
          },
        ],
      },
      {
        id: "harrys",
        link: mapSearchUrl("Harry's Seafood Bar & Grille", "46 Avenida Menéndez, St. Augustine, FL"),
        name: "Harry's Seafood Bar & Grille (almoço)",
        icon: "burger",
        time: "12:30",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "46 Avenida Menéndez, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "burger",
            title: "Sobre",
            paragraphs: [
              "Frutos do mar estilo Nova Orleans, num pátio de frente para o bayfront — po'boys, jambalaya, red beans and rice, peixe grelhado ou frito. ~US$ 14–24/prato, servido até 16h.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Não aceita reserva — pode haver espera, principalmente para mesa no pátio com música ao vivo. É um desvio de ~10–12 min a pé a partir do Old City Gate (fica na orla, perto da Bridge of Lions) — depois volta-se normalmente para St. George Street/St. Photios à tarde.",
            ],
          },
        ],
      },
      {
        id: "st-photios",
        name: "St. Photios Greek Orthodox National Shrine",
        icon: "house",
        time: "13:30",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "41 St. George St, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Capela dentro da histórica Avero House (coquina, ~1749), dedicada aos primeiros imigrantes gregos dos EUA (1768). Ícones bizantinos e afrescos pintados à mão.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis (doações bem-vindas). 15 min é suficiente.",
            ],
          },
        ],
      },
      {
        id: "aviles",
        name: "Aviles Street",
        icon: "target",
        time: "13:45",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "Saindo da Plaza de la Constitución, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "A rua mais antiga dos EUA ainda em uso — fragmentos de cerâmica do início dos anos 1600 já foram encontrados ali.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis. Vale desviar do fluxo principal de St. George Street.",
            ],
          },
        ],
      },
      {
        id: "cathedral",
        name: "Cathedral Basilica e Governor's House",
        icon: "house",
        time: "14:05",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "38 Cathedral Pl / 48 King St, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Paróquia católica mais antiga dos EUA (missa fundadora em 1565, prédio atual de 1797). O Governor's House é museu gratuito sobre a história colonial, num prédio de 1598.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis os dois. Confira se não há missa/evento na Cathedral no horário. Governor's House tem banheiros públicos — bom ponto de parada para o grupo todo.",
            ],
          },
        ],
      },
      {
        id: "treasury",
        name: "Treasury Street e Love Tree",
        icon: "target",
        time: "14:50",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "Entre Cordova St e Charlotte St, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "A rua mais estreita dos EUA (~2,1m). A Love Tree é uma palmeira que cresceu dentro de um carvalho, formando um \"abraço\" — lenda diz que casais que se beijam ali selam o amor para sempre.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis, ~10 min — parada rápida e fofa para foto do grupo.",
            ],
          },
        ],
      },
      {
        id: "flagler",
        name: "Flagler College e Villa Zorayda e Lightner",
        icon: "house",
        time: "15:05",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "74 King St (Flagler) / 83 King St (Villa Zorayda) / 75 King St (Lightner), St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Três prédios do Gilded Age lado a lado. Flagler College é o antigo Hotel Ponce de León (1888), com Rotunda e +79 vitrais Tiffany. Villa Zorayda é mansão de 1883 inspirada na Alhambra. Lightner é o antigo Hotel Alcazar (1888), hoje museu de antiguidades.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Vista externa grátis nos três. Entrada paga opcional: Flagler tour guiado ~US$ 21–22 (só nos horários fixos 10h/14h, não bate com este roteiro), Villa Zorayda ~US$ 10 (autoguiado, sem hora marcada), Lightner ~US$ 20 (autoguiado, aberto 9h–17h). Confirmado: os três abrem normalmente às terças-feiras.",
            ],
          },
        ],
      },
      {
        id: "grace-church",
        name: "Grace United Methodist Church",
        icon: "house",
        time: "15:50",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "8 Carrera St, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Igreja construída por Henry Flagler (1886–87), estilo Gótico Veneziano com fachada em terracota.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis (vista externa). Interior normalmente só acessível em horário de culto.",
            ],
          },
        ],
      },
      {
        id: "bridge-of-lions",
        name: "Bridge of Lions & Bayfront",
        icon: "target",
        time: "16:10",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "Avenida Menéndez, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Ponte histórica de 1927 com esculturas de leões de mármore de Carrara; caminhada pela orla com vista para a Matanzas Bay e o Castillo ao fundo.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis. Ótimo horário para fotos com luz de fim de tarde.",
            ],
          },
        ],
      },
      {
        id: "nights-of-lights",
        name: "Nights of Lights (passeio a pé)",
        icon: "tree",
        time: "17:15",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "Plaza de la Constitución → St. George Street → orla → Bridge of Lions, St. Augustine, FL.",
            ],
          },
          {
            color: "citrus",
            icon: "tree",
            title: "Sobre",
            paragraphs: [
              "Mais de 3 milhões de luzinhas brancas cobrindo o centro histórico, de 21/nov/2026 a 18/jan/2027.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Grátis, sem ingresso. Use o app oficial \"Nights of Lights\" para mapa e banheiros. Vistam casaco leve — esfria perto da água. É a última parada dentro do centro histórico, antes de pegar a estrada.",
            ],
          },
        ],
      },
      {
        id: "chick-fil-a",
        link: mapSearchUrl("Chick-fil-A", "1752 US Hwy 1 S, St. Augustine, FL 32084"),
        name: "Chick-fil-A (jantar)",
        icon: "burger",
        time: "18:40",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "1752 US Hwy 1 S, St. Augustine, FL 32084.",
            ],
          },
          {
            color: "citrus",
            icon: "burger",
            title: "Sobre",
            paragraphs: [
              "Fast food — sanduíches de frango, nuggets (opção grelhada sem glúten), waffle fries, saladas. Fica no lado sul da cidade, praticamente no caminho de saída para a I-95 S.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Drive-thru ou mesa por dentro. Horário: seg–sáb 6h30–22h, fechado aos domingos (não é o caso do dia 15, terça-feira). ~30 min de parada é suficiente.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;

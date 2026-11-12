# Revisão de textos

Trechos migrados da `note` antiga (e do item "Chegada e preparação") para `summary`, `group` e `journey`. Só houve reorganização, sem texto novo. Cada item abaixo tem um comentário `// REVISAR` no arquivo do dia.

| Dia | Trilha | Campo | Motivo |
| --- | --- | --- | --- |
| 7 | Compras e Jardins | `journey.tiles` | "No carro, no dia ~2h15" veio da nota antiga, mas a soma dos trajetos dá ~2h35 (25+25+10+20+5+30+10+30 min). Mantido ~2h15, como pedido. |
| 7 | Compras e Jardins | `journey.tiles` | "Paradas" (7) e "Volta a Storey Lake" (~18h20) são texto fixo; o validador confere se batem com o cronograma. |
| 11 | Hollywood Studios | `summary`, `group` | Montados a partir da legenda da foto (`heroCaption`) removida e da nota; conferir redação. |
| 12 | (dia inteiro) | `journey.notes` | O texto original diz "Dia 13 é Saint Augustine", mas Saint Augustine é o dia 14 (o dia 13 é Universal Studios). |
| 13 | (dia inteiro) | `journey.alerts` | "Fora de operação: ..." não tinha marcação de alerta; foi tratado como alerta por ser informação crítica. |
| 13 | (dia inteiro) | `journey.notes` | O item "Chegada e preparação" foi dividido entre `tiles` e `notes`; conferir o agrupamento (10 notas, lista longa). |
| 15 | (dia inteiro) | `journey.notes` | Item "Chegada e preparação" redistribuído; conferir. |
| 18 | Islands of Adventure | `summary` | Texto vindo da legenda da foto (`heroCaption`) removida. |
| 19 | (dia inteiro) | `summary` | O dia não tinha `note`; resumo provisório ("Winter Garden."). Escrever um resumo de verdade. |

## Conferências gerais

- Dias 9 e 17 a 24: a nota longa foi dividida em `summary` (parte descritiva), `tiles` (horários) e `journey.notes` (o resto). Conferir se o corte ficou natural.
- Dia 24: `group` ficou longo ("7 de 10 pessoas — Nunes e Gobette Pareschi embarcam para Savannah nesse mesmo dia").
- Os dias 6, 8, 10, 14, 16, 20 e 23 não têm `tiles` (a nota não trazia horários de saída).

## Problemas nos dados achados pelo validador

- Dia 12: a parada `lbv-factory-stores` apontava para um cartão que não existe; corrigido para `lake-buena-vista-factory-stores`.
- Paradas com `stopId: ""` (por exemplo "Café da manhã em casa", "Universal CityWalk") não têm cartão de propósito. O validador as ignora.
- Paradas que visitam o mesmo cartão duas vezes (dia 8, `loop-west`; dia 16, `outlet-international-premium` e `kia-center`) são aceitas. A unicidade vale para os cartões, não para os passos.


## Melhorias dos dias 6 a 22

Todos têm `// REVISAR` nos arquivos. Detalhes em `melhorias-relatorio.md`.

| Dia | Campo | Motivo |
| --- | --- | --- |
| 6 | horários dos passos | Chegada 15:40 e demais +20 min; a chegada antiga era 15:15. |
| 8 | café e trajeto até o Olive Garden | Horários derivados (08:15 e 12:45), sem mudança. |
| 8 | noite | Casa 17:45 (~30 min), saída 18:15, Disney Springs 18:40, volta 20:35 (chegada ~21:00); passo "Preparar lanches para o dia 09" removido, o aviso do Epcot está em `journey.alerts`. |
| 8 | `journey.notes` | Nota de snacks copiada do dia 7. |
| 8 | Olive Garden | Endereço e horário ("Terça: 11h às 22h") de site agregador; conferir no site oficial. |
| 8 | Disney Springs | Cartão condensado em 4 seções. Removidos: a seção "Dica" (datas do Christmas Tree Stroll agora na seção Natal), a localização do Marketplace/Earl of Sandwich, a Árvore de Toy Story, os tijolos reciclados e o "Mais de" das curiosidades. |
| 8 | Disney Springs | Horário de funcionamento informado pelo Thiago, não consta nos dados. |
| 9 | `journey.tiles`, `alerts`, `notes`, `summary` | "Acordar" 7h00; alerta de lanches e mochilas; nota de ritmo rápido; ordem das áreas no resumo. "Utilizar early entry" e "quiosques baratos" ficaram com `REVISAR` (não estão no texto do Thiago). |
| 9 | ordem das atrações | Spaceship Earth, foto da bola, Mickey, Soarin', pausa para comer (nova), Coca-Cola, Moana, Guardiões, Mission: Space, Test Track; World Showcase sem mudança. |
| 9 | Spaceship Earth | "Sentar do lado direito do veículo" não está no texto do Thiago. |
| 9 | Soarin' | Nome "Soarin' Across America"; conferir se o `attractionId` do catálogo ainda vale. |
| 9 | Loja da Coca-Cola | Nome "(Club Cool)" e local: o Thiago escreveu "cool club" e o JSON a coloca em World Nature, perto de The Land. |
| 9 | Guardiões da Galáxia | Texto reescrito (agora é da terceira área, não a primeira parada); conferir. |
| 9 | México | "Ir ao anoitecer — a fila costuma ser menor..." não está no texto do Thiago. |
| 10 | Islands, McDonald's, Hogwarts, CityWalk | Parque fecha 19h, mas os passos de Hogwarts e CityWalk seguem depois. |
| 12 | horários após a doceria | 45 min antes; texto do Lake Eola cita 17h30. |
| 13 | textos "Por volta das…" | Deslocados +1 h por causa da abertura às 10h. |
| 14 | tiles | Acordar a definir; saída e chegada derivadas. |
| 16 | trajeto até o IHOP | A definir; saída 07:30 mantém os 30 min antigos. |
| 17 | guide "Chegada" | Ainda cita abertura às 09h00. |
| 18 | variante "sem" | "Sair de casa ~12h00" derivado. |
| 21 | Sair de Tampa, Chegar em casa | A definir. |


## Dia 7, trilha Magic Kingdom (diretrizes do Thiago)

- Nota de chegada: removido "ou balsa (~20–30 min a mais)". O Thiago diz monorail na ida; a balsa (ferryboat) fica só na saída (card `mk-exit`).
- `summary` da trilha: removida a frase "Almoço e lanches dentro do parque." O Thiago disse que não precisa de lanches nem almoço dentro do parque.
- Tiana: o texto original do Thiago dizia "Adventureland"; os dados mantêm Frontierland (Área 2), onde ela fica de fato, junto da Big Thunder.
- Pendências com `// REVISAR`: "Sleepy Hollow" (o texto dizia "Sleep Hollow"); trecho do atalho em `mk-liberty-photos` (a definir); frase da fila em `mk-seven-dwarfs`; frase da parada em `mk-liberty-characters`.

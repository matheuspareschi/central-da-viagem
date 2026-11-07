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

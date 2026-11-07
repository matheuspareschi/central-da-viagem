# Relatório: horários dos parques

Fonte: `docs/fontes/Roteiros_Parques_Orlando_2026.pdf`. As datas do PDF não foram usadas para achar o dia; cada trilha foi achada pelo `parkId` e pelos dados.

## 1. Alterações

| Dia | Parque | Campo | Antes | Depois | Arquivo:linha |
|---|---|---|---|---|---|
| 7 | Magic Kingdom | Acordar | 6h45 | 6h15 | `2026-12-07.ts:32` |
| 7 | Magic Kingdom | Nota de early entry | (não havia) | "Chegada para entrar no early entry (para não hóspedes)." | `2026-12-07.ts:39` |
| 9 | EPCOT | Acordar | 7h | 6h30 | `2026-12-09.ts:27` |
| 9 | EPCOT | Estacionamento (bloco) | "Estacionamento" ~8h | "Estacionamento abre" 8h00 | `2026-12-09.ts:27` |
| 9 | EPCOT | Nota de early entry | (não havia) | "Utilizar early entry (não hóspedes)." | `2026-12-09.ts:30` |
| 11 | Hollywood Studios | Acordar | 7h15 | 7h00 | `2026-12-11.ts:30` |
| 13 | Universal Studios Florida | Acordar | 6h30 | 6h15 | `2026-12-13.ts:28` |
| 13 | Universal Studios Florida | Tempo até os portões | 25–35 min até o estacionamento | ~15 min até os portões | `2026-12-13.ts:30` |
| 15 | Islands of Adventure (1ª visita) | Acordar | 6h30 | 6h15 | `2026-12-15.ts:28` |
| 15 | Islands of Adventure (1ª visita) | Nota de early entry e Hulk | (não havia) | texto do PDF | `2026-12-15.ts:31` |
| 17 | Epic Universe (1ª visita) | Sair de casa (`park.departure`) | 7h10 | 7h15 | `2026-12-17.ts:9` |
| 17 | Epic Universe (1ª visita) | Sair de Storey Lake (item "Chegada e estacionamento") | 07h10 | 07h15 | `2026-12-17.ts:54` |
| 21 | Busch Gardens | Sair de casa (`park.departure`) | 7h45 | 7h00 | `2026-12-21.ts:9` |
| 21 | Busch Gardens | Abertura (`park.opening`) | 10h | 9h | `2026-12-21.ts:10` |
| 21 | Busch Gardens | Fechamento (`park.closing`) | (não havia) | 21h | `2026-12-21.ts:11` |
| 21 | Busch Gardens | Bloco do parque | "Parque abre" 10h | "Parque aberto" 9h–21h | `2026-12-21.ts:28` |
| 21 | Busch Gardens | Aviso de abertura | "abertura às 10h" | "abertura às 9h" | `2026-12-21.ts:33` |
| 21 | Busch Gardens | Tempo de viagem | Cerca de 1h30 | Cerca de 1h30 a 1h45 (~100 km, sujeito a trânsito) | `2026-12-21.ts:46` |
| 21 | Busch Gardens | Sugestão de despertar e saída | acordar 6h45, sair 7h45 | acordar 6h00, sair 7h00 | `2026-12-21.ts:47` |

Validação: `validar:dados` agora confere, em trilhas de parque, o formato dos horários, a ordem Acordar < Sair < Estacionamento abre ≤ abertura < fechamento. Passa em todos os dias.

## 2. Já estavam certos (conferidos)

- **Magic Kingdom (dia 7):** sair 7h15, estacionamento 8h00, parque 9h–23h.
- **EPCOT (dia 9):** sair 7h30, parque 9h–21h, ~25 min até os portões, `park` 7h30 / 9h / 21h.
- **Hollywood Studios (dia 11):** sair 7h45, estacionamento 8h, parque 9h–21h, ~20 min até os portões.
- **Universal Studios Florida (dia 13):** sair 7h15, abertura 9h.
- **Islands of Adventure (dia 15):** sair 7h15, abertura 9h.
- **Epic Universe (dia 17):** acordar 6h15, abertura 9h.

## 3. Não informado no PDF, mantido como estava

- Magic Kingdom: tempo até os portões (o app diz ~20–25 min até o estacionamento e 20–30 min a mais até a entrada).
- Universal Studios Florida: abertura e fechamento do parque (app: 9h, sem fechamento).
- Islands of Adventure: abertura do estacionamento, fechamento (app: 20h), tempo até os portões (app: ~35 min + caminhada).
- Epic Universe: abertura do estacionamento, fechamento (app: 21h), tempo até os portões (app: ~30 min de carro).
- Busch Gardens: abertura do estacionamento.
- Hollywood Studios: o dia 11 não tem `park` (só blocos em `journey.tiles`), então não há saída/abertura em cartões da Home e do Calendário. O mesmo vale para o dia 18 (Islands, 2ª visita).

## 4. Conflitos de data entre o PDF e os dados

- O PDF põe "14/12" em Universal Studios, Islands of Adventure e Epic Universe. Nos dados: Universal Studios no dia 13; Islands no 15 (1ª visita) e no 18; Epic no 17 (1ª visita) e no 22. Datas não alteradas.
- Busch Gardens: o PDF diz "21/12 (a confirmar)", igual ao dado.
- 2ª visita (Islands dia 18, Epic dia 22): não coberta pelo PDF. Nada alterado. O Epic do dia 22 (sair 8h, parque 9h–21h) não conflita com a abertura de 9h do PDF; o Islands do dia 18 não tem horários de parque.

## 5. Incoerências deixadas (chegada ao parque não foi tocada)

- **Universal Studios (dia 13):** com "~15 min até os portões" e saída 7h15, o bloco "Estacionamento e portão 8h15" fica mais longo que o trajeto. O app também diz que da garagem ao portão são 15–20 min a pé. Vale conferir se o PDF fala só do trajeto de carro.
- **Busch Gardens (dia 21):** o texto "chegar ~9h30, 30 minutos antes de abrir" ficou incoerente (saída 7h00 + 1h30–1h45 dá ~8h30–8h45, e o parque abre às 9h). Os horários sugeridos dentro do parque (por exemplo ~17h40 na Iron Gwazi) partem de abertura às 10h e ficam deslocados em 1 hora.
- **Epic Universe (dia 17):** a nota "Dia 16 termina tarde… empurrar o despertar em 30 min" continua válida; o "~07h45 estacionar" continua coerente com saída 7h15 + ~30 min.
- **Islands (dia 15):** o PDF fala em early entry antes das 8:00 e o app mantém "No portão ~8h15".

## 6. Horários de dentro do parque (não alterados)

Do PDF, sem equivalente igual no app:

- Noruega fecha às 18:30 (EPCOT): o app já traz 18h30 no dia 9.
- Fantasmic: chegar 45 min–1h antes (~19h45 se o show for às 20h30); World of Animation 17h–18h30 ou 20h; janelas de foto no Hollywood Studios (10h–11h, 15h–16h, 19h+). Não conferi uma a uma contra o app.
- MK: fogos, chegar 40 a 45 min antes do show.
- Busch Gardens: Sky Ride US$ 5 por pessoa (o app diz US$ 5 por viagem).
- Islands: abertura 9h "confirmar no app" (o app já tem o aviso).

## 7. Horários repetidos em mais de um lugar

Para o Thiago decidir se vale centralizar:

- `park.departure`, `park.opening`, `park.closing` (Home e Calendário) e `journey.tiles` repetem saída e abertura; no dia 17 e no dia 21, também o texto livre ("Horários" e "Visão geral e logística").
- No dia 7 (Magic Kingdom) o `park` está dentro da trilha; nos dias 11 e 18 não existe.
- Os alertas ("Confirmar no app: horário assumido…") repetem a abertura em texto.

## 8. Pendência fora desta tarefa

`npm run build` falha em `tsc` por duas variáveis não usadas (`group` e `summary`) em `src/features/itinerary/components/TrackHeader.tsx`. É uma alteração que já estava no diretório de trabalho, sem relação com esta correção, e não foi tocada.

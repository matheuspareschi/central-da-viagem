# Relatório dos catálogos de atrações

Fonte: `docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf` (7 páginas). Os textos foram transcritos sem alterações; apóstrofos tipográficos (’) do PDF foram preservados.

Status por parque: EPCOT (piloto, feito) · demais parques (aguardando confirmação do piloto).

---

## EPCOT (`epcot`)

### 1. Contagem

| Linhas de atração no PDF | Entradas geradas | `show` |
|---|---|---|
| 14 | 14 | 1 (Luminous The Symphony of Us) |

Por área: World Celebration & World Discovery (4), World Nature (5), World Showcase (5).

### 2. Itens com `verify: true`

Nenhum. Nenhum texto do PDF menciona reforma, fechamento, temporário ou manutenção.

### 3. Suspeitas de erro ou texto estranho

- **"Grand Fiesta Tour (México)"**: o dia 9 escreve "Gran Fiesta Tour". Mantido como está no PDF.
- **"Canada / China Far & Wide"**: uma única linha cobrindo dois filmes/pavilhões; mantida como uma entrada.
- **"Mission: SPACE"**: o dia 9 escreve "Mission: Space" (só diferença de caixa).
- Nomes de atração trazem o país entre parênteses em World Showcase e "(Moana)" em Journey of Water; mantidos no `name`, conforme o PDF.

### 4. Áreas com nome combinado ou composto

- `world-celebration-world-discovery`: "World Celebration & World Discovery" (duas áreas juntas).
- `world-showcase-pavilhoes-dos-paises`: "World Showcase (Pavilhões dos Países)".

Thiago decide se divide.

### 5. Itens do dia 9 (checklist) × catálogo

**Ligados (4):**

| Item do dia | `attractionId` |
|---|---|
| Spaceship Earth | `spaceship-earth` |
| Mission: Space | `mission-space` |
| Test Track | `test-track` |
| Soarin' Around the World | `soarin-around-the-world` |

**Não ligados, com sugestão (dúvida de correspondência):**

| Item do dia | Sugestão | Motivo de não ligar |
|---|---|---|
| Guardiões da Galáxia: Cosmic Rewind | `guardians-of-the-galaxy-cosmic-rewind` | Nome traduzido, não é diferença trivial. |
| Fotos na área temática de Moana | `journey-of-water-moana` | Item de foto, não a atração. |
| World Showcase — França (Remy's Ratatouille Adventure) | `remys-ratatouille-adventure-franca` | Item é o pavilhão inteiro, não só a atração. |
| World Showcase — Noruega (Frozen Ever After) | `frozen-ever-after-noruega` | Idem. |
| World Showcase — México (Gran Fiesta Tour) | `grand-fiesta-tour-mexico` | Idem, mais grafia "Gran" × "Grand". |
| World Showcase — Canadá / China | `canada-china-far-and-wide` | Um filme cobre os dois pavilhões. |
| Fogos (show noturno) | `luminous-the-symphony-of-us` | Nome diferente; provavelmente o mesmo show. |

**Sem equivalente no catálogo** (ok): Foto com a Bola (Dreamers Point), Mickey and Friends, Loja da Coca-Cola, pavilhões Reino Unido, Marrocos, Japão, EUA, Itália e Alemanha.

### 6. Itens que parecem faltar segundo o próprio PDF

Nenhum indicado pelo PDF.

---

## Magic Kingdom: PDF × catálogo existente

Catálogo não alterado. Mesmos 31 itens de atração nas mesmas áreas; o catálogo tem 5 itens a mais, todos em "Shows e desfiles" (Let the Magic Begin, Mickey's Magical Friendship Faire, Festival of Fantasy Parade, Happily Ever After, Disney Starlight), ausentes do PDF.

**Nomes diferentes:**

| PDF | Catálogo |
|---|---|
| Enchanted Tiki Room | Walt Disney's Enchanted Tiki Room |
| Under the Sea ~ Little Mermaid | Under the Sea: Journey of The Little Mermaid |
| Carousel of Progress | Walt Disney's Carousel of Progress |
| PeopleMover | Tomorrowland Transit Authority PeopleMover |
| Apóstrofos tipográficos (’) em Mickey’s PhilharMagic e Buzz Lightyear’s | Apóstrofo reto (') |

**Tipos:** o PDF usa Title Case ("Trem a Vapor"); o catálogo usa minúsculas. Diferenças de conteúdo, além da caixa:

| Atração | PDF | Catálogo |
|---|---|---|
| Pirates of the Caribbean | Dark Ride Aquática | Passeio de barco no escuro |
| Haunted Mansion | Dark Ride Escura | Passeio no escuro |
| Hall of Presidents | Show Animatrônico | Show teatral |
| Town Square Theater | Encontro com Personagem | Encontro com personagem (só caixa) |
| Swiss Family Treehouse | Caminhada (Walkthrough) | Caminhada |
| Peter Pan's Flight | Dark Ride Suspensa | Passeio suspenso no escuro |
| Many Adventures of Winnie the Pooh / Under the Sea | Dark Ride Infantil | Passeio no escuro |
| Mickey's PhilharMagic | Cinema 3D / Show | Cinema 3D |
| Buzz Lightyear | Dark Ride Interativa de Tiro | Passeio interativo de tiro |
| Tomorrowland Speedway etc. | demais só diferem em caixa | — |
| Tiana's Bayou Adventure | Atração Aquática (Log Flume) | Atração aquática |
| TRON | Montanha-Russa de Lançamento | Montanha-russa de alta velocidade |
| Casey Jr. | Área Infantil Aquática | Área infantil aquática (só caixa) |
| Magic Carpets, Dumbo, Astro Orbiter | Carrossel Aéreo (/ Elevado) | Carrossel aéreo (/ elevado) (só caixa) |

**Descrições:** todas diferem (o catálogo é uma redação própria, o PDF outra). Pontos de conteúdo:

- Big Thunder: o catálogo marca `verify: true` ("estava em reforma"); o PDF não menciona reforma.
- Buzz Lightyear: o catálogo diz "estava em reforma no vídeo de origem: conferir", mas **sem** `verify: true` (inconsistência interna).
- Country Bear: o catálogo cita "Reformulado em 2024"; o PDF não.
- Tiana's Bayou Adventure e TRON: os dois trazem dados (queda de 16 m; quase 100 km/h) que coincidem. O catálogo chama TRON de "atração mais rápida do parque"; o PDF não afirma isso.
- Walt Disney World Railroad: o catálogo lista as lands atendidas; o PDF diz só "diversas áreas temáticas".
- O catálogo tem `id`s curtos (`rail`, `town`…); os novos catálogos usam slug do nome.

---

## Demais parques

Aguardando confirmação do piloto: Universal Studios Florida, Islands of Adventure, Hollywood Studios, Epic Universe, Busch Gardens Tampa.

# Relatório dos catálogos de atrações

Fonte: `docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf` (7 páginas). Os textos foram transcritos sem alterações; apóstrofos tipográficos (’) do PDF foram preservados.

Status: todos os parques do PDF feitos (EPCOT, Universal Studios Florida, Islands of Adventure, Hollywood Studios, Epic Universe, Busch Gardens Tampa). Magic Kingdom só comparado.

Regra de ligação usada nos dias: só liga quando o nome é igual ou muda só caixa, acento, aspas, "&"/"and", parênteses ou o prefixo "Área ·" do dia 11. Tradução, subtítulo extra ou item que combina várias atrações fica sem ligação.

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

## Universal Studios Florida (`universal-studios-florida`)

### 1. Contagem

| Linhas de atração no PDF | Entradas geradas | `show` |
|---|---|---|
| 18 | 18 | 3 |

Por área: Minion Land (3), New York (4), San Francisco & Hollywood (3), World Expo & DreamWorks Land (4), Springfield & Diagon Alley (Harry Potter) (4).
`show`: Shows de Rua (Blues Brothers / Beat Builders), Horror Make-Up Show, The Bourne Stuntacular.

### 2. Itens com `verify: true`

Nenhum. Mais próximo: E.T. Adventure ("única atração original do parque ainda em operação"), sem menção a reforma ou fechamento.

### 3. Suspeitas de erro ou texto estranho

- "Gringotes" (descrição de Harry Potter & Escape from Gringotts); o nome da atração usa "Gringotts".
- "percussão de obra" (Shows de Rua): talvez "percussão de obras" ou outra expressão.
- "Montanha-Russa 3D Multi-sensorial": o PDF quebra a linha no hífen; mantido "Multi-sensorial" (pode ser só efeito da quebra).
- "Ônibus" em "Fast & Furious - Supercharged": só confirmar se é o termo pretendido.
- "Race Through New York Jimmy Fallon" e "TRANSFORMERS: The Ride-3D": nomes sem a pontuação usual, mantidos.
- Classificação de `kind` a confirmar: Horror Make-Up Show (show de comédia, ao vivo → `show`); Shrek's Swamp & Po's Kung Fu Camp (tipo "Playgrounds & Shows" → `attraction`); Ollivanders Wand Shop ("Show Curto / Loja" → `attraction`).

### 4. Áreas com nome combinado

"San Francisco & Hollywood", "World Expo & DreamWorks Land", "Springfield & Diagon Alley (Harry Potter)".

### 5. Dia 13 (checklist) × catálogo

**Ligados (6):** Revenge of the Mummy, Transformers: The Ride 3D (`transformers-the-ride-3d`), Race Through New York (Jimmy Fallon), The Bourne Stuntacular, E.T. Adventure, Men in Black Alien Attack.

**Não ligados, com sugestão:**

| Item do dia | Sugestão | Motivo |
|---|---|---|
| Harry Potter and the Escape from Gringotts | `harry-potter-and-escape-from-gringotts` | Nome do PDF é "Harry Potter & Escape from Gringotts" (sem "the"). |
| Gringotts (2ª vez) | idem | Repetição. |
| Minion Mayhem e Villain-Con Minion Blast | `despicable-me-minion-mayhem` e `villain-con-minion-blast` | Item combina duas atrações. |
| The Simpsons Ride e donut Lard Lad | `the-simpsons-ride` | Item combina atração e lanche. |
| Ollivanders e varinhas | `ollivanders-wand-shop` | Item inclui compras. |

**Sem equivalente no catálogo** (ok): Fotos no Beco Diagonal, Almoço fora do pico, Jantar no Caldeirão Furado, Parada de Natal e árvore.

### 6. Itens que parecem faltar segundo o próprio PDF

Nenhum indicado pelo PDF.

---

## Universal Islands of Adventure (`islands-of-adventure`)

### 1. Contagem

| Linhas de atração no PDF | Entradas geradas | `show` |
|---|---|---|
| 16 | 16 | 0 |

Por área: Marvel Super Hero Island (3), Toon Lagoon & Skull Island (3), Seuss Landing & The Lost Continent (3), Jurassic Park (4; Pteranodon Flyers continua na página seguinte), The Wizarding World of Harry Potter - Hogsmeade (3).

### 2. Itens com `verify: true`

Nenhum. Pteranodon Flyers traz "restrito a crianças com acompanhante", que é regra de acesso, não reforma ou fechamento.

### 3. Suspeitas de erro ou texto estranho

- "livro do O Gato de Chapéu" (The Cat in the Hat): artigo duplicado.
- "Hagrid’s Magical Creatures Motorbike": o dia 15 escreve "Hagrid's Motorbike Adventure".
- "Montanha-Russa de Lançamentos" (Hagrid’s): plural, enquanto o Hulk usa "de Lançamento"; mantido.
- Hulk: "túnel inclinado com 7 inversões" e Doctor Doom's Fearfall: "Lançamento vertical… seguido por queda": frases mantidas, só conferir os dados na revisão.
- Apóstrofos: o PDF mistura reto (Doctor Doom's) e tipográfico (Dudley Do-Right’s, Bluto’s, Hagrid’s); mantidos como estão.

### 4. Áreas com nome combinado

"Toon Lagoon & Skull Island", "Seuss Landing & The Lost Continent"; "The Wizarding World of Harry Potter - Hogsmeade" tem hífen no nome.

### 5. Dias 15 e 18 × catálogo

O dia 10 está na lista de expectativa, mas é um dia de compras em formato de cronograma (sem checklist de parque), então não recebeu `parkId`. O dia 18 é dividido; o `parkId` foi posto na trilha `islands-of-adventure`.

**Ligados:**

| Dia | Item | `attractionId` |
|---|---|---|
| 15 e 18 | Jurassic World VelociCoaster | `jurassic-world-velocicoaster` |
| 15 | Harry Potter and the Forbidden Journey | `harry-potter-and-the-forbidden-journey` ("&" × "and") |
| 15 | Skull Island: Reign of Kong | `skull-island-reign-of-kong` |
| 18 | Jurassic Park River Adventure (se reaberto) | `jurassic-park-river-adventure` (o parêntese é nota do dia) |

**Não ligados, com sugestão:**

| Dia | Item | Sugestão | Motivo |
|---|---|---|---|
| 15 e 18 | Hagrid's Motorbike Adventure | `hagrids-magical-creatures-motorbike` | Nome diferente. |
| 15 | Toon Lagoon: Ripsaw Falls e Bilge-Rat Barges | `dudley-do-rights-ripsaw-falls` e `popeye-and-blutos-bilge-rat-barges` | Item com duas atrações. |
| 15 e 18 | Marvel: Spider-Man e Hulk | `the-amazing-adventures-of-spider-man` e `the-incredible-hulk-coaster` | Item com duas atrações. |
| 15 | Repetição: Hagrid's ou VelociCoaster (Single Rider) | uma das duas acima | Item de escolha. |
| 18 | Hogwarts Express: ida a King's Cross / volta a Hogsmeade | `hogwarts-express-kings-cross` (catálogo do Universal Studios Florida) | A atração está em outro parque. |

**Sem equivalente no catálogo** (ok): Almoço no Três Vassouras, Lojas de Hogsmeade, Jurassic Park Discovery Center, Jantar, Ollivanders e varinha (o PDF só lista Ollivanders no Universal Studios Florida), Hog's Head, Projeção de Natal, Pôr do sol, Plataforma 9¾, CityWalk, Daily Dealz.

### 6. Itens que parecem faltar segundo o próprio PDF

Nenhum indicado pelo PDF.

---

## Disney's Hollywood Studios (`hollywood-studios`)

### 1. Contagem

| Linhas de atração no PDF | Entradas geradas | `show` |
|---|---|---|
| 14 | 14 | 5 |

Por área: Hollywood & Sunset Boulevard (4), Toy Story Land (3), Echo Lake & Animation Courtyard (4), Star Wars: Galaxy's Edge & Espetáculos (3).
`show`: Beauty and the Beast – Live on Stage, Indiana Jones Epic Stunt Spectacular!, Frozen Sing-Along Celebration, The Little Mermaid – Musical Adventure, Fantasmic!.

### 2. Itens com `verify: true`

Nenhum. The Little Mermaid – Musical Adventure traz "Espetáculo renovado", que descreve o show, não uma reforma ou fechamento.

### 3. Suspeitas de erro ou texto estranho

- Área "Star Wars: Galaxy's Edge & Espetáculos" mistura uma land com uma categoria: Fantasmic! (show) está nela.
- Travessões longos (–) em "Beauty and the Beast – Live on Stage", "Star Tours – The Adventures Continue" e "The Little Mermaid – Musical Adventure"; mantidos.
- Tipo "Show de Acrobacias" (Indiana Jones) sem "ao Vivo", enquanto o de Universal usa "Show de Acrobacias ao Vivo"; mantido.
- Frozen Sing-Along Celebration: classificado como `show` (tipo "Show Interativo Musical"); confirmar.

### 4. Áreas com nome combinado

"Hollywood & Sunset Boulevard", "Echo Lake & Animation Courtyard", "Star Wars: Galaxy's Edge & Espetáculos".

### 5. Dia 11 (trilha `hollywood-studios`) × catálogo

Os nomes do dia vêm no formato "Área · Atração". Comparei só a parte depois do "·".

**Ligados (5):**

| Item do dia | `attractionId` | Observação |
|---|---|---|
| Mickey and Minnie's Runaway Railway | `mickey-and-minnies-runaway-railway` | "and" × "&" e apóstrofo. |
| Slinky Dog Dash | `slinky-dog-dash` | |
| Millennium Falcon: Smugglers Run | `millennium-falcon-smugglers-run` | |
| Rise of the Resistance | `star-wars-rise-of-the-resistance` | O PDF acrescenta o prefixo "Star Wars:". |
| Fantasmic! | `fantasmic` | |

**Não ligados, com sugestão:**

| Item do dia | Sugestão | Motivo |
|---|---|---|
| Torre do Terror | `tower-of-terror` | Nome traduzido. |
| Rock 'n' Roller Coaster | `rock-n-roller-coaster-aerosmith` | O PDF acrescenta "Aerosmith". |
| Show da Bela e a Fera | `beauty-and-the-beast-live-on-stage` | Nome traduzido. |
| Star Tours | `star-tours-the-adventures-continue` | O PDF acrescenta o subtítulo. |

**Sem equivalente no catálogo** (ok): Pausa para alimentação, Foto com Mickey e Minnie, Pixar Plaza (fotos com personagens), Toy Story Land (fotos à noite), Show World of Animation. Os itens da trilha "Matheus e Jairo" (lojas, Windermere, Old Town) não são de parque.

### 6. Itens que parecem faltar segundo o próprio PDF

Nenhum indicado pelo PDF.

---

## Universal Epic Universe (`epic-universe`)

### 1. Contagem

| Linhas de atração no PDF | Entradas geradas | `show` |
|---|---|---|
| 6 | 6 | 0 |

Áreas: Celestial Park (1), Donkey Kong (1), Isle of Berk (1), Harry Potter (1), Dark Universe (1), Sem área informada (1).

### 2. Itens com `verify: true`

Nenhum.

### 3. Suspeitas de erro ou texto estranho

- A coluna do PDF é "ATRAÇÃO / ÁREA", com a área entre parênteses. O `name` ficou sem o parêntese e a área virou o rótulo (ex.: "Stardust Racers (Celestial Park)" → nome "Stardust Racers", área "Celestial Park"). Os textos de `name` ficam, por isso, sem o parêntese que está no PDF.
- Mario Kart: Bowser’s Challenge não traz parêntese: área `sem-area`, rótulo "Sem área informada".
- As áreas "Donkey Kong", "Harry Potter" e "Dark Universe" são, no PDF, nomes de franquia entre parênteses, não nomes de áreas do parque; mantidos assim.
- "Dueling coaster" (descrição do Stardust Racers) e "Celestial Spin" mantidos em inglês, como no PDF.

### 4. Áreas com nome combinado

Nenhuma.

### 5. Dias 17 e 22 × catálogo

**Ligados:**

| Dia | Item | `attractionId` |
|---|---|---|
| 17 | Hiccup's Wing Gliders | `hiccups-wing-gliders` |
| 17 | Stardust Racers | `stardust-racers` |
| 17 | Mario Kart: Bowser's Challenge | `mario-kart-bowsers-challenge` |
| 22 | Hiccup's Wing Gliders (repetição) | `hiccups-wing-gliders` (o parêntese é nota do dia) |

**Não ligados, com sugestão:**

| Dia | Item | Sugestão | Motivo |
|---|---|---|---|
| 17 | Monsters Unchained: The Frankenstein Experiment | `monsters-unchained` | O dia acrescenta subtítulo. |
| 17 | Harry Potter and the Battle at the Ministry | `battle-at-the-ministry` | O dia acrescenta "Harry Potter and the". |
| 17 | Mine-Cart Madness e fotos com personagens | `mine-cart-madness` | Item combina atração e fotos. |
| 22 | Ministry Viewing | `battle-at-the-ministry` | Não está claro se é a atração. |
| 22 | Dark Universe: Monsters Unchained e Das Stakehaus | `monsters-unchained` | Item combina atração e restaurante. |

**Sem equivalente no catálogo** (ok): Chegada e estacionamento, Regras de fila, Dragon Racer's Rally, Banguela / Isle of Berk, The Untrainable Dragon, Spit Fyre Grill, Fyre Drill, Curse of the Werewolf, Ruas de Paris, Pizza Moon, Lojas do Celestial Park, Noite no Stardust / Super Nintendo World, Celestial Goodnight, Snoggletog, Le Cirque Arcanus, Toadstool Café, Power-Up Band, Mead Hall, favoritas à noite.

### 6. Itens que parecem faltar segundo o próprio PDF

O PDF traz só 6 atrações desse parque. Não completei com outras; o dia 17 e o dia 22 citam várias atrações e shows do parque que o PDF não lista (ver as listas acima).

---

## Busch Gardens Tampa Bay (`busch-gardens-tampa`)

### 1. Contagem

| Linhas de atração no PDF | Entradas geradas | `show` |
|---|---|---|
| 8 | 8 | 0 |

O PDF não separa áreas: área única `atracoes` ("Atrações").

### 2. Itens com `verify: true`

Nenhum.

### 3. Suspeitas de erro ou texto estranho

- **"Cobras's Curse"**: provável erro de digitação (o dia 21 escreve "Cobra's Curse"). Mantido; como o `id` sai do nome, ficou `cobrass-curse`.
- "SheiKra Dive Coaster (Queda Vertical)": no PDF a coluna ATRAÇÃO traz só "SheiKra" e o tipo é "Dive Coaster (Queda Vertical)"; transcrito assim.
- "Serengeti Flyer: Balanço gigante a 109 km/h": dado numérico mantido, para conferir na revisão.

### 4. Áreas com nome combinado

Nenhuma (área única).

### 5. Dia 21 × catálogo

**Ligados (7):** Cheetah Hunt, Cobra's Curse (`cobrass-curse`, diferença só de grafia), Serengeti Flyer, SheiKra, Tigris, Iron Gwazi, Montu.

**Não ligados:** nenhum item do dia com equivalente duvidoso. Sem equivalente no catálogo (ok): Visão geral e logística, Cheetah Run, Lion & Hyena Ridge, Serengeti Safari (o catálogo tem Serengeti Express, que é outra atração), Animal Care Center, Elephant Interaction Area, Penguin Point, Animal Connections, Almoço, Falcon's Fury, Phoenix Rising, Pantopia Theater, Congo River Rapids, Ubanga-Banga Bumper Cars, Habitat Hideaway, Stanleyville Theater, Walkabout Way, Lory Land, Myombe Reserve, Moroccan Palace Theatre.

### 6. Itens que parecem faltar segundo o próprio PDF

Nenhum indicado pelo PDF (o PDF lista só as montanhas-russas e o trem safári; o dia 21 cita muito mais, mas isso não vem do PDF).

---

## Pendências gerais

- Kennedy Space Center fora desta rodada (não está no PDF); o dia 24 não tem `parkId`.
- O dia 10 (compras, cronograma) não recebeu `parkId`: não é checklist de parque.

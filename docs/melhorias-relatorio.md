# Relatório das melhorias (ferramentas e dias 6 a 22)

Três commits: Bloco A (ferramentas e itens gerais), Bloco B (dias 6–12), Bloco C (dias 13–22 e validador). `npm run validar:dados` e o build passam. Não houve teste visual em navegador (nem a 360 px): o ajuste de títulos foi feito por CSS e precisa de conferência no celular.

## Bloco A

- **Conversor de peso**: `src/utils/weight.ts` (`lbParaKg`, `kgParaLb`), `WeightConverter.tsx`. O app já tem a aba **Extras** (`/informacoes-extra`), então o conversor e a lista de mercado ficaram lá, como o prompt manda. "Antes de viajar" ficou em **Essenciais**. Sem testes: o projeto não tem framework de teste.
- **Compras básicas de mercado**: `src/data/listaMercado.ts`, `GroceryList.tsx`. Chaves: `lista:mercado` (marcados) e `lista:mercado:proprios` (itens incluídos). "Desmarcar tudo" pede confirmação. Dia 6: botão "Ver lista de compras básicas" na folha do Walmart (`action: "groceryList"` no cartão).
- **Fotos da Disney**: item marcável em Essenciais (`antes-de-viajar`) e nota `info` nos dias 7, 9 e 11. Sem preço nem regras, como pedido. Falta informar: se o PhotoPass precisa ser vinculado ao ingresso e como.
- **Apagar atrações**: **não estava implementado** (só havia "Remover" para atração incluída do catálogo). Implementado: "Remover do roteiro" na folha de detalhe, aviso com "Desfazer" por 5 s, itens removidos voltam por "Adicionar atração" (seção "Removidas do roteiro"). Chave `roteiro:removidas:<data>:<trilha>`. Em dia sem divisão, a trilha é a própria data.
- **Link do restaurante**: campo `link` (e `siteUrl`) em `StopCard`; botão "Abrir no mapa" na folha e ícone na linha. Montado por `mapSearchUrl(nome, endereço)`. Cartões com link: Jantar Florida Mall (6), Black Bean Deli (7), Epic McDonald's (10), Harry's e Chick-fil-A (14), IHOP (16). Black Bean Deli usa o endereço genérico dos dados ("Mills 50 District…"). Nenhum `siteUrl`: os dados não trazem sites oficiais. Sem endereço, sem botão: Olive Garden (dia 8) e a doceria árabe (removida).
- **Títulos**: `TrackHeader`, `TrackTabs`, Home e Calendário com `min-w-0`, `overflow-wrap:anywhere` e `line-clamp-3`. Nenhum título foi encurtado.

## Bloco B

- **Dia 6**: chegada 15:40; passos seguintes +20 min (`// REVISAR`). A chegada antiga era 15:15, não 15:20: a diferença real é +25 min; apliquei o escrito (+20 nos demais). Walmart: "Fecha às 23h00" no cartão; o último passo (saída do Walmart 20:50) termina bem antes.
- **Dia 7**: alertas do Magic Kingdom já estavam vazios (a alteração estava no working tree e foi junto no commit A); "Rota repetida" mantido; a página não mostra cartão vazio. Acordar 6h15 confirmado. Blocos `attn` dentro de itens que **não** entraram na remoção: dois no cartão de compras (promoção da primeira segunda-feira; horário de fechamento 19h) e os demais `attn` dos cartões.
- **Dia 8**: tiles Acordar 8h00 e Sair 9h00; café da manhã 07:30 → 08:15 (estava antes de acordar). TJ Maxx removido (Loop West passa a 09:30). Almoço no Olive Garden (trajeto 12:45 + parada 13:00, `// REVISAR`). Noite: casa (lanche rápido e descarregar compras) → Disney Springs → preparar lanches do Epcot (23:00, derivado). Horário do Disney Springs ("até 23h; sex/sáb 23h30") veio do prompt, não dos dados (`// REVISAR`).
- **Olive Garden**: endereço e horário **a definir**. O site oficial (olivegarden.com) respondeu 403 ao acesso automático e só achei fontes de terceiros (Foursquare: 1604 W Osceola Pkwy, Kissimmee, FL 34741, 11h–22h; outra fonte cita endereços na Irlo Bronson Hwy). Não usei por não serem oficiais. Candidato a conferir no Google Maps: 1604 W Osceola Pkwy.
- **Dia 9**: ordem das atrações intacta; Acordar 6h30 / Sair 7h30 já estavam.
- **Dia 10**: era um dia de cronograma, não de parque. Nova ordem Outlet → Islands → McDonald's. Tiles: Acordar 8h00, Sair 9h20, Compras 10h–17h, Islands fecha 19h. Nota de carro ~25 min. Islands às 18:00 ("chegar às 18h: estacionamento grátis a partir desse horário"; fecha 19h; "Hagrid's primeiro"). Saída do outlet 17:40, McDonald's 19:15, tudo `// REVISAR`. **Conflito**: os passos "Castelo de Hogwarts iluminado" e "CityWalk" continuam depois do McDonald's (20:00 e 20:30), mas o parque fecha às 19h; decidir se saem.
- **Dia 12**: tiles 8h40 / 9h45; nota de carro ~10 min. CityWalk → Disney Springs (sem checklist, com cartão de detalhe e objetivo). Doceria retirada, com nota `info`. A doceria árabe antiga estava "nome a confirmar" (cartão removido). Horários seguintes saíram 45 min antes (`// REVISAR`): isso desalinha com o texto do Lake Eola ("chegar ~17h30, pôr do sol"). A nota antiga "Dia 13 é Saint Augustine" continua errada (já listada em `revisao-textos.md`).

## Bloco C

- **Dia 13**: abre 10h; tudo que dependia da abertura +1 h (tiles, "Por volta das…", textos). Acordar 7h30, Sair 8h15. "Estacionamento e portão" foi para 9h15 (era 8h15; o PDF dava 8h00: não corrigi, registrado). Passo "Show de fogos" no fim, "verificar no app se há show neste dia".
- **Dia 14**: tiles Acordar (a definir), Sair de casa 7h30, Sair de Saint Augustine 19h10, Chegar em casa ~20h55 (derivados, `// REVISAR`). O texto do trajeto de volta diz "Silver Lake Resort"; o nome da casa é Storey Lake (não alterei).
- **Dia 15**: parque 9h–19h; sem lembrete de dormir mais cedo.
- **Dia 16**: três abas ("Dia", "Noite · Jogo", "Noite · Natal"). Novo campo opcional `tabLabel`. Título da trilha de compras: "Orlando International Premium Outlets". IHOP ~8h00, Acordar 7h00; trajeto até o IHOP **a definir**. **Falta a aprovação do Thiago por captura de tela** (não consegui gerar aqui).
- **Dia 17**: tiles Acordar 6h15, Sair 7h15, Entrada antecipada 9h, Parque 10h–21h. Novo `journey.guide` com aba "Regras do dia" (Chegada, Estacionamento, Filas, Atenção); o texto foi movido (os dois itens do checklist saíram). O texto "09h00 abertura" em Chegada ficou como estava (conflita com 10h).
- **Dia 18**: variantes "Com/Sem Daily Dealz" (`variants` em `DayData`; seletor discreto abaixo do título; chave `roteiro:variante:<data>`). A variante "sem" vira checklist do Islands (sem abas), "Sair de casa ~12h00" derivado. Home e Calendário leem a variante escolhida.
- **Dia 19**: não alterado.
- **Dia 20**: CityWalk → Universal Studios Florida (sem checklist), fecha 21h00; horários mantidos.
- **Dia 21**: tiles Acordar 6h00, Sair 7h00, Sair de Tampa e Chegar em casa **a definir**; nota de carro ~1h30–1h45 (~100 km); parque 9h–21h foi para as notas.
- **Dia 22**: tiles Acordar 8h00, Sair 9h00, Entrar 9h30, Chegar ao parque 10h00; abre 10h. "Entrar" lido como "entrada no complexo/estacionamento".

## Validador

Novos: horários HH:MM e crescentes por período; ids únicos no dia inteiro (todas as trilhas); `journey.guide`; variantes (defaultKey, ≥2 opções, completas, cada uma validada como um dia). Passos de loja duplicados e horários fora do formato são **avisos**, não erros, porque dois dados antigos (dia 19 "Nike Factory Store" e dia 23 horário "Noite") não podiam ser mexidos. O limite de 4 tiles e os ids de catálogo/região já existiam.

## Pontos em aberto

- Conversor: "Tem como abrir…" ficou cortado; só existe em Extras. Onde mais abrir?
- Dia 8: frase "as lojas estão sendo…" cortada; lojas não alteradas além do TJ Maxx.
- Dia 19: pedido vazio.
- Dia 22: "Entrar às 9h30" (ver acima).
- Datas dos parques da Universal no PDF ("14/12") conflitam com os dados; não alteradas. Dia 13 = Universal e dia 14 = Saint Augustine já estavam corretos nos dados.
- Disney Springs (dias 8 e 12): confirmar horários.

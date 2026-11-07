# Backlog — Central da Viagem

## Conteúdo
- [~] Implementar o roteiro de todos os dias — **em andamento**: dias 6 (chegada), 7 (duplo — Magic Kingdom + Compras), 11 (Epcot), 12 (Winter Garden), 13 (Millenia/Lake Eola/CityWalk), 15 (Saint Augustine) e 24 (Kennedy Space Center) já implementados. Faltam: 8, 9, 10, 14, 16–23, 25.
- [X] Validar conteúdo dos roteiros
- [ ] Validar manualmente endereço dos roteiros
- [X] `itinerary.kind === "stopList"` (em src/features/itinerary/ItineraryBody.tsx) é temporário — existe só pros dias que ainda não têm cronograma fechado (ver comentário em StopListDay, types/index.ts). Quando todos os 21 dias virarem `schedule`, esse branch e o tipo StopListDay inteiro podem ser removidos. Não vale investir mais esforço/robustez nele até lá.

## Estrutura e Funcionalidades
- [x] Implementar layout de roteiros de dias duplos (grupo dividido) — feito e testado no dia 7 (abas "Magic Kingdom" / "Compras Orlando"); mesmo padrão de abas reaproveitado na página de Alimentação.
- [x] Retocar o Calendário — refeito por completo: ícone por categoria (reforço de acessibilidade pro par vermelho/verde), fundo indicando se o dia tem roteiro fechado ou não, barra lateral dividida pra dias duplos, raio de canto unificado com o resto do app, microinteração ao toque.
- [X] Adicionar link do álbum de fotos compartilhado (Apple) na Home — UI pronta (botão com aviso "link pendente"), ainda aguardando o link real do álbum.
- [x] Criar seção de Alimentação — **obsoleto, ver item abaixo**: decisão nova é remover essa área e substituir por página de links externos.
- [X] Remover a área de Alimentação (Lanches / Lista de Compras / Receitas) e criar no lugar uma página de **Links Externos**, com:
  - Conversor de tamanho de calçado
  - Conversor de tamanho de roupa
  - Lista de alimentos (vira link externo, não conteúdo próprio do app)
- [X] Preencher os `href` reais dos Links Externos (hoje todos com `href: "#"` = pendente, em src/data/global/externalLinks.ts) — quando isso for resolvido, considerar trocar `href: string` por `href?: string` (ausente = pendente) em vez do valor sentinela "#"
- [x] Botão "Voltar" contextual — feito: `BackButton` (substitui o BackToHomeButton) lê a origem do `state` da navegação (`{ backTarget }`); o Calendário passa "Voltar para o Calendário" ao abrir um dia, a troca de dia anterior/próximo preserva a origem, e sem origem volta pra Central. Optou-se por `state` em vez do histórico puro (`navigate(-1)`) pra que o rótulo do botão diga pra onde vai e pra funcionar quando o dia é aberto direto por link.

- [ ] Revisar o Calendário e adicionar horários específicos para momentos importantes do dia (ex: horário de shows/eventos pontuais que hoje não têm hora cadastrada)
- [x] Adicionar à Home: cartão-resumo do dia + acesso à Alimentação — feito; resumo do dia reposicionado (fica entre "Roteiro do Dia" e os botões de atalho). Temperatura real ainda pendente da automação diária. ⚠️ O botão de acesso vai precisar trocar de "Alimentação" para "Links Externos" quando a página nova entrar.
- [x] Endereços e telefones clicáveis na Home (abre mapa / disca direto).

## Infraestrutura
- [ ] Criar README
- [ ] Implementar automação diária — tarefa pro **Claude Code** (fora do escopo deste chat):
  - GitHub Actions rodando 1x/dia
  - Chama API do Claude → gera resumo do dia (exibido na **Home**, não na página de Roteiro)
  - Chama API de clima grátis → temperatura real
  - Chama API de trânsito/rotas → tempo de deslocamento real dos percursos do dia (não só o "~X min" estático já cadastrado)
  - Salva em JSON, versionado no próprio repositório GitHub (privado)
  - Chave da API do Claude fica como segredo do GitHub Actions, nunca exposta no site
- [ ] Estruturar o layout do cartão-resumo do dia na Home — hoje é só um texto corrido; com resumo + temperatura + trânsito juntos, precisa virar um layout de verdade (ex: linhas/ícones separados por tipo de informação, não tudo em parágrafo único)
- [ ] Disponibilizar acesso privado — mesma frente acima:
  - Hospedagem: Cloudflare Pages (grátis)
  - Restrição de acesso: Cloudflare Access (grátis até 50 pessoas, login por código de e-mail)
  - Site continua estático — só lê o JSON já pronto, nenhuma chamada de API na hora de abrir a página

## Qualidade
- [ ] Testes manuais (critérios de aceite) — sem suíte automatizada por enquanto; a preocupação de segurança fica coberta pela arquitetura de acesso privado acima, não por testes automatizados

## Identidade Visual
- [x] Refinamento visual geral (Home, Roteiro, Calendário, Alimentação) — cards com tint leve em vez de cor sólida, chips coloridos em vez de borda lateral nas Informações Importantes, timeline com badge circular por categoria no Cronograma, dois sistemas tipográficos (serifada só pra destaque emocional, sans pro resto, mono só pra dados copiáveis — senha do wi-fi e apólice do seguro), raio de canto unificado em todo o app, checkbox customizado com animação na checklist, campo "adicionar atração" em formato pílula, dots de paginação no carrossel, selo "Pareschi · Nunes · Narcizo" padronizado como pílula em toda página.
- [ ] Criar um logo para a Viagem — adiado, sem direção definida ainda
- [ ] ! Conseguir ter uma lista de todas as atrações do parque, também conseguir mexer nas ordens das atrações e até repetir atrações
- [ ] Adicionar ícone para "Adicionar à Tela de Início" no iPhone (apple-touch-icon) — pra quando alguém salvar o app como atalho, aparecer um ícone de verdade em vez do padrão do navegador. Depende do logo (item acima) ou, enquanto isso não sai, pode reaproveitar o ícone cítrico já usado no topo da Home

## Novos
- [ ] Revisar os itens na lista do cartão do dia para todos os dias de viagem
- [ ] Novos nos calendários
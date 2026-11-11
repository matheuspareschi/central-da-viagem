# Relatório da aba Extras

Dois commits: (a) grade e subpáginas; (b) testes das funções puras. `npm run build` passa (agora roda `testar:funcoes` antes de `validar:dados`). Não houve teste visual em navegador (360/390 px, foco por Tab): conferir no celular.

## O que foi feito

- **Grade** em `#/informacoes-extra` (2 colunas, gap 12) e **subpágina** em `#/informacoes-extra/<ferramenta>` (`conversor`, `desconto-imposto`, `mercado`, `lixo`, `antes-de-viajar`, `calcado`). "‹ Extras" (56 px) volta à grade; o voltar do navegador também. A aba Extras segue ativa nas subpáginas; o foco vai para o título ao abrir. Dados dos quadradinhos em `src/data/global/extraTools.ts`.
- **Conversor**: campos de 52 px, ⇄ entre eles, vírgula/ponto, resultado com até 2 casas, Limpar e linha de referência. Funções `lbParaKg`/`kgParaLb` em `src/utils/weight.ts`; `parseDecimal`/`formatDecimal` foram para `src/utils/decimal.ts`.
- **Desconto e imposto**: `calcularPreco` em `src/utils/price.ts`. Imposto sem padrão; último valor digitado em `calc:imposto` (com try/catch via `readStorage`/`writeStorage`). Percentual fora de 0–100 ou inválido mostra mensagem no campo e esconde o resultado; vazio vale 0; preço vazio não mostra resultado.
- **Mercado**: contador "x de N itens no carrinho", barra de 6 px, linha inteira tocável (`TapCheckbox` ganhou `children`). Hook `useGroceryList` é a fonte única (lista, grade e a folha do dia 6). Remover um item próprio também tira a marca dele.
- **Antes de viajar**: item das fotos da Disney com título e subtítulo pedidos; `useBeforeTravel` conta os não marcados. Continua também em Essenciais, com o mesmo componente.
- **Instruções do lixo** e **Calçados** abrem os componentes que já existiam, sem mudar o texto.

## Decisões

- O arquivo de referência `referencias_roteiro/referencia-extras.html` **não está no repositório**. Segui as medidas e cores do texto do pedido.
- **Onde estava o lixo**: só na aba Extras (nunca em Essenciais). O acesso antigo continua, agora pelo quadradinho. Calçados (também já existente) virou o sexto quadradinho, neutro, no fim da grade.
- A seção "Informações Extra" em cartões empilhados foi substituída pela grade; os cartões antigos (`ExtraInfoCard`, `extraInfo.ts`) saíram.
- O apoio do Mercado usa o total atual da lista (inclui itens próprios): "x de N itens".
- Sem framework de teste no projeto: os testes são `scripts/test-utils.ts` (`node:assert` + `tsx`), `npm run testar:funcoes`, sem biblioteca nova. Cobrem 1 lb → 0,45 kg, 22,68 kg → 50 lb, 100 com 20% + 25% → 60,00, 6,5% → 3,90 e 63,90, e entradas vazias/inválidas sem NaN.

## Dúvidas

- Fornecer o HTML de referência, se as medidas finas (sombra, espaçamentos internos) precisarem bater.
- O subtítulo "O que resolver ainda no Brasil." da subpágina Antes de viajar é meu; trocar se preferir outro.
- Tamanhos de texto: rótulos dos campos usam 14 px e dicas 12 px (mínimo respeitado).

## Quadradinho Pedágio (Visitor Toll Pass)

- Conteúdo em `src/data/pedagio.ts` (3 etapas, 6 passos `pedagio-1` a `pedagio-6`, dica no passo 3), textos do Thiago sem acréscimos. Marcação em `pedagio:passos`; hook `usePedagio`.
- Quadradinho em 5º lugar na grade, antes de "Calçados" (que passa a ser o 7º). Apoio fixo "Visitor Toll Pass", sem contador.
- A rota segue o padrão atual, `#/informacoes-extra/pedagio` (o prompt citava `#/extras/pedagio`).
- A subpágina usa o cabeçalho padrão das outras (título 28 px), não 22 px.
- "Antes de viajar" ganhou o item "Visitor Toll Pass…" sem estado próprio: lê os passos 1 e 2, abre o Pedágio e entra na contagem "n itens a fazer". Aparece nas duas telas que usam a lista (Essenciais e a subpágina).
- `CheckProgress` e `ConfirmClearButton` foram extraídos e agora servem ao Mercado e ao Pedágio. Teste dos dados em `testar:funcoes`.

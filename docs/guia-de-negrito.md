# Guia de negrito

Negrito é o padrão de leitura do app: a pessoa deve achar de relance o que importa. Nos textos dos dados, escreva `**assim**`. O componente `RichText` (e `parseRichText`, em `src/lib/richText.ts`) transforma em negrito; marcação sem fechamento aparece como texto normal.

## O que destacar

- **Horários e prazos:** `**fecha às 18h30**`, `**até 6/jan**`.
- **Valores e condições:** `**grátis**`, `**US$ 10–13/pessoa**`, `**entrada e estacionamento gratuitos**`.
- **A ação ou o nome principal:** `**Christmas Tree Stroll**`, `**sentar no último carrinho**`.
- **Avisos que mudam a decisão:** `**confirmar no local**`, `**não acumulam**`.

## Limites

- De 1 a 3 trechos por parágrafo ou item de lista.
- Trecho curto, até ~6 palavras. Nunca uma frase inteira, nunca um parágrafo todo.
- Não destaque o que já é título ou rótulo em negrito por estilo.
- Texto curto (uma frase) pode ter só um destaque ou nenhum.

## Validação

`npm run validar:dados` falha se houver `**` sem fechamento e avisa (sem falhar) quando mais de 40% de um texto está em negrito.

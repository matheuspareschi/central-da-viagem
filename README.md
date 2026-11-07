# Central da Viagem — Flórida 2026

App pessoal de organização da viagem em família a Orlando/Flórida (5–25 de dezembro de 2026): calendário do roteiro, cronograma dia a dia, checklist de atrações, guia de compras e informações de contato/emergência.

Este projeto é uma reconstrução, com arquitetura por componentes, de um protótipo anterior feito em um único arquivo HTML (bundle de produção minificado, sem código-fonte original — ver [reference/](reference/)). Todo o conteúdo (roteiro, atrações, lojas, leituras litúrgicas do Advento, contatos) foi extraído desse bundle e recriado aqui como dados tipados.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (tema customizado em `src/index.css`)
- [react-router-dom](https://reactrouter.com/) (`HashRouter`, para funcionar em qualquer hospedagem estática)
- [lucide-react](https://lucide.dev/) para ícones

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção (roda o type-check antes)
npm run preview   # serve o build de produção localmente
npm run lint       # oxlint
```

## Arquitetura

```
src/
  types/            interfaces compartilhadas (Step, Period, Section, ScheduleDay, ...)
  data/             conteúdo da viagem: calendário, leituras, roteiros, lojas, contatos, ícones, tema
    itinerary/        os três formatos de dia: cronograma (scheduleDays), checklist de
                       atrações (checklistDays) e dias divididos em duas trilhas (splitDays)
  lib/              utilitários puros (datas, localStorage, resumo do dia)
  hooks/            useCurrentAgenda (destaca a parada "Agora"), useLocalStorageSet
  components/       peças de UI reaproveitáveis entre features (ícones, RichText, Checkbox, SectionCard)
  features/
    home/             tela inicial: contagem regressiva, Advento, atalhos, endereço/contatos
    calendar/         grade dos 21 dias da viagem
    food/             abas de alimentação (lanches / lista de compras / receitas)
    roteiro/          detalhe de um dia: cronograma, checklist de atrações ou trilhas divididas
  App.tsx           rotas (/, /calendario, /alimentacao, /roteiro/:day)
```

Cada dia da viagem é um de três formatos (ver `src/types/index.ts`):

- **`ScheduleDay`** — linha do tempo por horário (chegada, compras, cidade);
- **`ChecklistDay`** — lista de atrações de um parque, sem horário fixo;
- **`SplitTrack[]`** — um dia dividido em duas trilhas paralelas (ex.: dia 7, "Magic Kingdom + Compras"), cada uma no formato acima.

Favoritos, itens marcados/visitados e atrações adicionadas manualmente ficam salvos no `localStorage` do navegador.

## Notas sobre a migração

- O bundle original (`reference/central-viagem-florida-original.html`) fixava a data "atual" em 13/dez/2026 às 17h30 para fins de demonstração. Esta versão usa a data real do dispositivo (`new Date()`), já que o app é para uso durante a viagem de verdade.
- As imagens de capa (`src/data/heroImages.ts`) apontam para arquivos do Wikimedia Commons, como no original — são fotos ilustrativas, não fotos dos locais exatos.
- Cores, fontes (Fraunces / Work Sans / IBM Plex Mono) e o tom visual geral foram recriados a partir do CSS compilado do bundle original, mas não há garantia de fidelidade pixel a pixel.

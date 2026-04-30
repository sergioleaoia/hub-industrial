# PRD — Hub de IA Industrial (Leão Marketeria)

> **Referência modelada:** [materiais.rdstation.com/agradecimento-hub-ia-agencias](https://materiais.rdstation.com/agradecimento-hub-ia-agencias)
> **Adaptação:** Agências (RD Station) → Indústrias B2B (Leão Marketeria)
> **Operado por:** Claude (Opus 4.7) via Cursor
> **Data:** 2026-04-16
> **Status:** APROVADO — execução iniciada

---

## 0. Direcionamento Final (aprovado)

- **Marca:** Hub de IA Industrial — **by Leão Marketeria** (marca explícita)
- **Brandkit:** oficial da Leão (dark mode `#0A0A0A` + verde accent `#72E2A7`, Space Grotesk + Inter Tight)
- **6 cards:** 4 lead magnets existentes (Raio-X, Feira.IA, GEO, Criador de Funil) + 2 novos (Guia PDF + Planilha)
- **Escopo MVP:** Landing `/` com captura (Supabase) + `/obrigado` (Hub)
- **Copys:** genéricas/placeholders nesta fase — refinamento depois

---

## 1. Contexto e Objetivo

A RD Station oferece um "Hub de IA para Agências" — uma página de agradecimento pós-captura de lead que entrega 6 materiais gratuitos sobre IA aplicada ao marketing. Nosso objetivo é **replicar o modelo e reposicioná-lo para o segmento industrial brasileiro**, entregando ferramentas de IA aplicadas ao marketing, vendas e operações de indústrias.

**Proposta de valor:**
> "Acelere seus resultados integrando Marketing, Vendas e Operação industrial com Inteligência Artificial."

**Público-alvo (ICP):**
- Diretores de Marketing / Comercial em indústrias (B2B)
- Gestores de vendas técnicas (engenharia comercial)
- Donos de indústrias pequenas e médias (metalmecânica, química, plásticos, alimentos, auto-peças, construção civil, agro)
- Consultores de marketing industrial

---

## 2. Mapeamento da Página de Referência

### 2.1. Estrutura visual (RD Station)

| Elemento | Observação |
|---|---|
| Header | Logo RD Station centralizado |
| Hero | H1 "Obrigado!" + subtítulo "Acelere seus resultados integrando Marketing, Vendas e Atendimento" |
| Título da grid | H2 "Acesse agora os conteúdos para sua agência ou consultoria:" |
| Grid de cards | **1 coluna centralizada** (max-width ~600px), 6 cards empilhados |
| Card | Borda ciano suave, ícone azul topo, título em negrito, botão CTA verde-lima ("CLIQUE AQUI") |
| Footer | Fundo preto, "Copyright © 2026 RD Station. Política de Privacidade." |
| Background | Gradiente sutil branco + imagem de fundo no rodapé |

### 2.2. Paleta de cores identificada

| Uso | Hex |
|---|---|
| CTA (botão) | `#C9F02E` (verde-lima) |
| Ícones dos cards | `#31A2FF` (azul claro) |
| Borda dos cards | `#BEEAFF` / ciano suave |
| Texto principal | `#333333` |
| Fundo | `#FFFFFF` com halo cyan no topo/rodapé |
| Footer | `#000000` |
| Tipografia | Arial / Helvetica (sans-serif) |

### 2.3. Mapeamento dos 6 materiais (Agências → Indústrias)

| # | Versão Agências (atual) | URL atual | Versão Indústrias (nova) | Tipo de asset |
|---|---|---|---|---|
| 1 | **Guia de IA para Agências** | [PDF Drive](https://drive.google.com/file/d/1HftvlWtX3z2DS2OHeB1-1evxRpMpDIzA/view) | **Guia de IA para Indústrias** | PDF |
| 2 | **Prompts: Planejamento 2026** | [Planilha Google](https://docs.google.com/spreadsheets/d/1DDMOKZmFzIZlzHxDd2oQw8Ec0loKAsTG1YEtEHOA4tc/copy) | **Prompts: Planejamento Industrial 2026** | Google Sheets |
| 3 | **Prompts avançados para Agências de tráfego pago** | [App Lovable](https://guia-ia-agencias-trafego.lovable.app/) | **Prompts avançados para Geração de Leads Industriais (B2B)** | Web app |
| 4 | **Planilha de precificação + Prompts** | [Planilha Google](https://docs.google.com/spreadsheets/d/14-ugrfrPaJ0-0Znziv0NdfMXCmR0GdAV/copy) | **Planilha de precificação industrial + Prompts** | Google Sheets |
| 5 | **Assistente de IA: geração de anúncios (GPT)** | [ChatGPT](https://chatgpt.com/g/g-68f133c9f7248191a1ec3c3ef5b4e2e7) | **Assistente de IA: geração de anúncios industriais (GPT)** | ChatGPT custom GPT |
| 6 | **Assistente de IA: buscador de clientes (GEM)** | [Gemini](https://gemini.google.com/gem/3c42de403bf3) | **Assistente de IA: prospector de clientes industriais (GEM)** | Gemini Gem |

---

## 3. Escopo do Projeto

### 3.1. Em escopo (MVP)

1. **Página `/obrigado`** — réplica adaptada da página de agradecimento, com 6 cards de materiais industriais.
2. **Página `/` (landing)** — captura de lead com formulário (nome, email, empresa, cargo, segmento industrial). Redireciona para `/obrigado` após submit.
3. **Integração com Supabase** — armazenar leads capturados (usando MCP Supabase do usuário).
4. **Design system base** — tokens, componentes `ui/` reutilizáveis (Button, Card, Input, Container).
5. **SEO + Open Graph** — metadata otimizada para "hub ia indústrias", "ia indústria brasileira", schema markup.
6. **Responsivo** — mobile-first, com breakpoints sm/md/lg.

### 3.2. Fora de escopo (fases futuras)

- Produção real dos 6 materiais (PDFs, planilhas, GPTs, Gems) — nesta fase usaremos **placeholders/redirects** para os materiais da RD enquanto os originais não são produzidos.
- Blog / área de conteúdo.
- Dashboard administrativo de leads.
- Autenticação de usuários.
- Emails transacionais (pode ser adicionado na Fase 2 via Brevo MCP).

---

## 4. Stack Técnica

Baseado nas user rules do workspace:

| Camada | Tecnologia |
|---|---|
| Package manager | **pnpm** (exclusivo) |
| Framework | **Next.js 15** (App Router, React 19) |
| Linguagem | **TypeScript** (strict) |
| Styling | **Tailwind CSS 4** |
| Componentes base | **shadcn/ui** (colocados em `components/ui/`) |
| Ícones | **lucide-react** |
| Formulários | **react-hook-form** + **zod** |
| Banco de dados | **Supabase** (via MCP já configurado) |
| Porta de dev | **3000** |
| Deploy | Vercel (recomendado) |
| Fontes | **Inter** (via next/font) — mais moderna que a Arial da RD |

---

## 5. Estrutura de Pastas (proposta)

```
hub-ia-industrial/
├── app/
│   ├── layout.tsx                # Layout raiz + metadata global
│   ├── page.tsx                   # Landing de captura (/)
│   ├── obrigado/
│   │   └── page.tsx               # Página de agradecimento
│   ├── api/
│   │   └── leads/
│   │       └── route.ts           # POST → salva lead no Supabase
│   └── globals.css                # Tailwind + tokens
├── components/
│   ├── ui/                        # Componentes genéricos shadcn
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── container.tsx
│   ├── hub/                       # Caso de uso: Hub de IA
│   │   ├── material-card.tsx      # Card de um material (ícone + título + CTA)
│   │   ├── materials-grid.tsx     # Grid dos 6 materiais
│   │   ├── hub-hero.tsx           # Hero "Obrigado!" da página /obrigado
│   │   └── hub-footer.tsx         # Footer padrão
│   └── lead-capture/              # Caso de uso: captura
│       ├── lead-form.tsx          # Formulário landing
│       └── landing-hero.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts              # Cliente browser
│   │   └── server.ts              # Cliente SSR
│   ├── materials.ts               # Fonte única dos 6 materiais (data)
│   └── utils.ts                   # cn() helper
├── public/
│   ├── icons/                     # Ícones SVG dos cards
│   └── og-image.png               # Open Graph
├── docs/
│   └── PRD.md                     # Este documento
├── .env.local.example
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 6. Modelagem de Dados

### 6.1. Fonte única dos materiais (`lib/materials.ts`)

```typescript
export type Material = {
  id: string;
  title: string;
  subtitle?: string;
  icon: "newspaper" | "file-text" | "wrench" | "badge-percent" | "search" | "bot";
  ctaLabel: string;
  href: string;
  kind: "pdf" | "sheet" | "webapp" | "gpt" | "gem";
};

export const MATERIALS: Material[] = [
  {
    id: "guia-ia-industrias",
    title: "Guia de IA",
    subtitle: "para Indústrias",
    icon: "newspaper",
    ctaLabel: "CLIQUE AQUI",
    href: "#",
    kind: "pdf",
  },
  // ... demais 5
];
```

### 6.2. Tabela Supabase `leads`

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null,
  email text not null,
  empresa text not null,
  cargo text,
  segmento text,                  -- metalmecânica, química, etc.
  porte text,                     -- pequena, média, grande
  origem text default 'hub-ia-industrial',
  utm_source text,
  utm_medium text,
  utm_campaign text
);

create index idx_leads_email on public.leads (email);
create index idx_leads_created_at on public.leads (created_at desc);

-- RLS: apenas insert público, select só por service role
alter table public.leads enable row level security;
create policy "allow public insert" on public.leads for insert to anon with check (true);
```

---

## 7. Plano de Execução — Passo a Passo

### **Fase 0 — Fundação** (30 min)
1. `pnpm create next-app@latest .` com TypeScript, Tailwind, App Router, ESLint.
2. Instalar deps base: `pnpm add @supabase/ssr @supabase/supabase-js react-hook-form zod @hookform/resolvers lucide-react clsx tailwind-merge class-variance-authority`.
3. Configurar `components.json` e instalar shadcn/ui: `button`, `card`, `input`, `label`, `form`, `select`, `toast`.
4. Setar fonte Inter via `next/font/google` no `app/layout.tsx`.
5. Criar `.env.local.example` com `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
6. `.gitignore`, commit inicial.

### **Fase 1 — Design tokens & layout base** (45 min)
1. Definir tokens no `globals.css` (variáveis CSS para cores do hub: lime, cyan, ink).
2. Criar `components/ui/container.tsx` (max-width centralizado).
3. Definir metadata global no `app/layout.tsx` (title, description, OG tags, theme-color).
4. Importar fonte Inter + fallback system.

### **Fase 2 — Página `/obrigado` (coração do produto)** (1h30)
1. Criar `lib/materials.ts` com os 6 materiais da versão industrial.
2. Construir `components/hub/hub-hero.tsx` — "Obrigado!" + subtítulo.
3. Construir `components/hub/material-card.tsx` — card com ícone azul, título, subtítulo opcional, botão lime CTA.
4. Construir `components/hub/materials-grid.tsx` — layout 1 coluna (mobile/desktop), max-width 600px, `gap-4`.
5. Construir `components/hub/hub-footer.tsx` — footer preto com copyright.
6. Montar `app/obrigado/page.tsx` juntando hero + grid + footer.
7. Validar visualmente (mobile + desktop).

### **Fase 3 — Landing page `/` com captura** (1h30)
1. Construir `components/lead-capture/landing-hero.tsx` — H1 "Hub de IA para Indústrias", bullets de benefício, imagem/mockup.
2. Construir `components/lead-capture/lead-form.tsx` — nome, email, empresa, cargo, segmento (select com 8-10 opções do setor industrial BR), porte.
3. Validação zod + react-hook-form.
4. Seção "O que você vai receber" — preview dos 6 materiais (sem CTAs ativos).
5. Prova social / autoridade (placeholder).
6. Montar `app/page.tsx`.

### **Fase 4 — API & Supabase** (45 min)
1. Criar tabela `leads` no Supabase via MCP.
2. Criar `lib/supabase/client.ts` e `lib/supabase/server.ts`.
3. Criar `app/api/leads/route.ts` (POST) com validação zod server-side.
4. Capturar UTMs do querystring e passar ao submit.
5. Conectar formulário à rota + redirect para `/obrigado` em sucesso.
6. Toast de erro via shadcn `useToast`.

### **Fase 5 — SEO, acessibilidade, performance** (45 min)
1. `app/sitemap.ts` + `app/robots.ts`.
2. Open Graph image (`opengraph-image.tsx` nativo do Next).
3. JSON-LD `Organization` + `WebPage` no `/`.
4. Labels/aria em todos inputs, focus rings visíveis.
5. Lighthouse local target: **95+ em Performance, 100 em A11y e SEO**.

### **Fase 6 — Polish & deploy** (30 min)
1. README com setup (pnpm, .env, comandos).
2. Verificar console warnings.
3. `pnpm build` sem erros.
4. Deploy Vercel (ou preview local em :3000).

**Tempo total estimado:** ~6 horas de execução focada.

---

## 8. Critérios de Aceite (Definition of Done)

- [ ] Dev server roda em `http://localhost:3000` com `pnpm dev` sem erros.
- [ ] `/` mostra landing e captura, envia lead para Supabase.
- [ ] Após submit, redireciona para `/obrigado`.
- [ ] `/obrigado` exibe os 6 cards industriais, todos clicáveis.
- [ ] Responsivo em 375px, 768px, 1440px.
- [ ] Lighthouse mobile ≥ 90 em todas as categorias.
- [ ] Nenhum texto residual de "agência" ou "RD Station" na versão final.
- [ ] `pnpm build` sem warnings críticos.
- [ ] README atualizado com instruções de setup.

---

## 9. Decisões de Design

1. **Mesma estrutura visual da RD** (cards empilhados, verde-lima no CTA, ícones azuis) para aproveitar o padrão testado, mas com **tipografia Inter** em vez de Arial para modernizar.
2. **1 coluna também em desktop** — mantém a experiência focada e igual à referência.
3. **Copy adaptada para dor industrial** — em vez de "integrar Marketing, Vendas e Atendimento", falar em "Marketing, Vendas Técnicas e Operação".
4. **Formulário curto** (5 campos essenciais) — maior taxa de conversão em B2B industrial.
5. **Segmento industrial como select** — permite futura segmentação de leads.

---

## 10. Riscos e Mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| Materiais originais ainda não produzidos | Alto | Fase 1 lança com placeholders linkando para os materiais da RD (com crédito); Fase 2 troca por conteúdo próprio. |
| LGPD (dados pessoais) | Alto | Opt-in explícito no form + página "Política de Privacidade". |
| Taxa de conversão da landing | Médio | A/B testar hero e headline; usar Vercel Analytics. |
| Entregabilidade de emails de nutrição | Médio | Integrar Brevo MCP na Fase 2 com DKIM/SPF/DMARC. |

---

## 11. Perguntas para o PO (você) antes de codar

Para eu começar a execução, me confirme:

1. **Nome final da marca:** "Hub de IA para Indústrias" ou tem outro nome/sub-marca?
2. **Domínio planejado:** já tem domínio (ex.: `hubia.industria.br`)?
3. **Materiais:** começamos com os 6 redirecionando para os mesmos da RD (placeholders) e depois produzimos os nossos, ou você já tem algum material pronto?
4. **Supabase:** posso usar o projeto Supabase atual do MCP ou precisa ser um novo?
5. **Landing `/`:** confirma que quer captura de lead antes de `/obrigado`? Ou o `/obrigado` é a primeira fase e a `/` fica pra depois?
6. **Identidade visual:** mantemos a paleta da RD (lime + cyan) ou quer adaptar para cores industriais (ex.: azul-aço, laranja equipamento)?

Assim que você responder, inicio a **Fase 0**.

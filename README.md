# Hub de IA Industrial — Leão Marketeria

Landing + thank-you page (Hub) que reúne a suíte de IA da **Leão Marketeria** para indústrias B2B:

- **Raio-X Industrial** — diagnóstico de perdas em R$
- **Feira.IA** — captura/qualificação/follow-up de leads de feira com IA
- **GEO Industrial** — visibilidade em AI Search (ChatGPT, Perplexity, Gemini)
- **Criador de Funil Industrial** — funil B2B com IA
- **Guia de IA para Indústrias** (PDF)
- **Planejamento Industrial 2026** (planilha + prompts)

Inspirado no [Hub de IA para Agências da RD Station](https://materiais.rdstation.com/agradecimento-hub-ia-agencias), reposicionado para indústrias.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- Supabase (captura de leads)
- React Hook Form + Zod
- lucide-react
- Space Grotesk (display) + Inter Tight (body)
- **pnpm** exclusivo

## Estrutura

```
app/
├── layout.tsx           # Layout raiz + fonts + metadata
├── page.tsx             # Landing com captura (/)
├── obrigado/page.tsx    # Hub com os 6 cards (/obrigado)
├── api/leads/route.ts   # POST para salvar lead no Supabase
└── globals.css          # Tokens Leão + Tailwind 4

components/
├── ui/                  # Genéricos (Button, Card, Input, Select, Label, Badge, Container)
├── hub/                 # Caso de uso: Hub (cards, grid, hero, header, footer)
└── lead-capture/        # Caso de uso: captura (landing hero, lead form)

lib/
├── utils.ts             # cn() helper
├── materials.ts         # Fonte única dos 6 materiais
└── supabase/            # Clientes client.ts e server.ts

supabase/
└── migrations/
    └── 0001_leads.sql   # Schema da tabela `leads` + RLS

docs/
└── PRD.md               # Product Requirements Document
```

## Setup

```bash
# 1. Instalar deps
pnpm install

# 2. Configurar ambiente
cp .env.local.example .env.local
# edite .env.local com as credenciais do Supabase

# 3. Criar tabela no Supabase
# Rode supabase/migrations/0001_leads.sql no SQL Editor
# ou via CLI: supabase db push

# 4. Desenvolver (porta 3000 — obrigatório pelo rulebook)
pnpm dev --port 3000

# 5. Build
pnpm build

# 6. Produção local
pnpm start
```

Abra [http://localhost:3000](http://localhost:3000).

## Design Tokens (Brand Kit Leão)

| Token | Hex | Uso |
|---|---|---|
| background | `#0A0A0A` | Fundo principal |
| card | `#141414` + border `#303030` | Containers |
| **accent** | **`#72E2A7`** | CTA — o verde que vale ouro |
| accent-deep | `#1C7C54` | Secundário |
| gold | `#D4A853` | Badges premium |
| danger | `#E8695A` | Erros e perdas |
| foreground | `#FAFAFA` | Texto principal |
| muted | `#A3A3A3` | Subtítulos |
| muted-dim | `#787878` | Legendas |

**Regra:** *90% preto e branco. 10% verde.*

## Rotas

| Rota | O que faz |
|---|---|
| `GET /` | Landing com hero + formulário de captura |
| `GET /obrigado` | Hub com os 6 cards de materiais |
| `POST /api/leads` | Salva lead no Supabase |

## Fluxo

1. Usuário chega em `/` (via anúncio com UTMs)
2. Preenche formulário → POST `/api/leads`
3. Redireciona para `/obrigado`
4. Acessa materiais (Raio-X, Feira.IA, GEO, Funil, Guia, Planilha)

## Próximos passos (backlog)

- [ ] Substituir placeholders (`#`) pelos links reais dos materiais em `lib/materials.ts`
- [ ] Produzir Guia PDF e Planilha de Planejamento 2026
- [ ] Integrar sequências de email via Brevo MCP
- [ ] Adicionar Vercel Analytics / Plausible
- [ ] Página `/privacidade` (LGPD)
- [ ] OG image customizada
- [ ] A/B test da headline do hero

---

Feito por [Leão Marketeria](https://leaomarketeria.com.br) · Tokens e contexto derivados das skills internas da Leão.

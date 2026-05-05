/**
 * Fonte única de verdade dos materiais do Hub.
 *
 * Os 4 primeiros são lead magnets proprietários da Leão (já existentes).
 * Os 2 últimos são bônus (guia PDF + planilha de planejamento).
 *
 * URLs atuais apontam para placeholders — substituir pelos links reais.
 */

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Radio,
  Search,
  Workflow,
  BookOpen,
  Table2,
  Target,
} from "lucide-react";

export type MaterialKind =
  | "webapp"
  | "pdf"
  | "sheet"
  | "gpt"
  | "gem";

export type Material = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  ctaLabel: string;
  href: string;
  kind: MaterialKind;
  external?: boolean;
  comingSoon?: boolean;
  download?: string;
};

export const MATERIALS: Material[] = [
  {
    id: "raio-x-industrial",
    title: "Raio-X Industrial",
    subtitle: "Diagnóstico com IA",
    description:
      "Descubra em minutos se o marketing da sua indústria tá performando ou patinando — e saia com um plano claro do que corrigir primeiro, sem precisar contratar consultoria.",
    icon: Activity,
    badge: "Ferramenta",
    ctaLabel: "Fazer Raio-X",
    href: "https://raioxindustria.leaomarketeria.com.br/?utm_source=hub-ia-industrial&utm_medium=hub&utm_campaign=hub-ia-industrial&utm_content=raio-x-industrial",
    kind: "webapp",
    external: true,
  },
  {
    id: "feira-ia",
    title: "Feira.IA",
    subtitle: "3 playbooks de IA para feiras industriais",
    description:
      "Em 1 minuto você recebe um plano completo com IA — com passo a passo do que fazer antes, durante e depois da feira pra gerar até 3x mais oportunidades com os mesmos contatos.",
    icon: Radio,
    badge: "Ferramenta",
    ctaLabel: "Testar Feira.IA",
    href: "https://feiraia.leaomarketeria.com.br/?utm_source=hub-ia-industrial&utm_medium=hub&utm_campaign=hub-ia-industrial&utm_content=feira-ia",
    kind: "webapp",
    external: true,
  },
  {
    id: "geo-industrial",
    title: "GEO Industrial",
    subtitle: "Apareça quando o comprador pesquisa no ChatGPT",
    description:
      "89% dos compradores B2B pesquisam online antes de fechar — e cada vez mais em AI Search (ChatGPT, Perplexity, Gemini). Descubra se sua indústria aparece.",
    icon: Search,
    badge: "Ferramenta",
    ctaLabel: "Ver GEO da minha indústria",
    href: "https://aivisibility.leaomarketeria.com.br/?utm_source=hub-ia-industrial&utm_medium=hub&utm_campaign=hub-ia-industrial&utm_content=geo-industrial",
    kind: "webapp",
    external: true,
  },
  {
    id: "guia-ia-industrias",
    title: "Guia de IA para Indústrias",
    subtitle: "O manual definitivo para 2026",
    description:
      "Guia Prático para Implementar IA na Sua Indústria de Maneira Simples, com passo a passo e cases reais.",
    icon: BookOpen,
    badge: "PDF",
    ctaLabel: "Baixar guia",
    href: "/guia-ia-para-industrias.pdf",
    kind: "pdf",
    download: "Guia IA para Industrias.pdf",
  },
  {
    id: "planilha-planejamento-2026",
    title: "Pack de 10 Prompts Avançados",
    subtitle: "Planilha + 10 prompts prontos",
    description:
      "Use IA em 5 áreas da operação comercial industrial (prospecção, qualificação, feiras, atendimento e marketing) com prompts de engenharia sênior prontos pra colar em Claude, ChatGPT ou Gemini.",
    icon: Table2,
    badge: "Planilha + Prompts",
    ctaLabel: "Acessar",
    href: "https://docs.google.com/spreadsheets/d/1orIFDcGDUD6Gmzyfw9loMjjWMs6ywDbYHzCGYl8PQrM/copy",
    kind: "sheet",
    external: true,
  },
  {
    id: "criador-funil-industrial",
    title: "Criador de Funil Industrial",
    subtitle: "Funil B2B com IA em minutos",
    description:
      "Monte um funil completo de geração de demanda para sua indústria — da atração ao fechamento — com templates de IA já validados pela Leão.",
    icon: Workflow,
    ctaLabel: "Em breve",
    href: "#",
    kind: "webapp",
    comingSoon: true,
  },
  {
    id: "gerador-icp-industrial",
    title: "Gerador de ICP Industrial",
    subtitle: "Assistente de IA",
    description:
      "Descubra em minutos os 3 perfis de cliente ideal da sua indústria, os canais onde encontrá-los e os ângulos de mensagem que mais convertem — com um assistente de IA construído sobre a experiência real da Leão com indústrias B2B brasileiras.",
    icon: Target,
    ctaLabel: "Em breve",
    href: "#",
    kind: "gpt",
    comingSoon: true,
  },
];

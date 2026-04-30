import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Radio,
  Workflow,
  Search,
  ArrowRight,
  Factory,
  Cog,
  HardHat,
  Wrench,
  Truck,
  Boxes,
  Lightbulb,
  Package,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0c10] text-white">
      <BackgroundDecoration />

      <Container size="lg" className="relative">
        <div className="flex items-center pt-4 sm:pt-6">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Leão IA — página inicial"
          >
            <Image
              src="/leao%20ia%20branca%20pra%20corte.png"
              alt="Leão IA"
              width={1080}
              height={1080}
              priority
              className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 pb-20 pt-8 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-10">
          <HeroCopy />
          <div className="relative mx-auto hidden w-full max-w-[560px] lg:block">
            <MaterialsCollage />
          </div>
        </div>

        <div className="mt-10 pb-16 lg:hidden">
          <MaterialsCollageMobile />
        </div>
      </Container>

      <SegmentsStrip />
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="flex flex-col gap-8">
      <span className="text-overline inline-flex w-fit items-center gap-2 text-white/75">
        <Factory className="h-3.5 w-3.5 text-[#E85A1E]" aria-hidden />
        Inteligência Artificial para Indústrias
      </span>

      <h1 className="font-display text-[1.75rem] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[2rem] lg:text-[2.5rem]">
        Hub de IA <span className="text-[#1C7C54]">para Indústrias:</span>{" "}
        método, ferramentas e prompts 100% aplicáveis imediatamente
      </h1>

      <div className="max-w-md rounded-lg bg-white p-6 text-foreground shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-neutral-150 sm:p-7">
        <p className="text-[15px] leading-[160%] text-muted sm:text-base">
          Pro <strong className="text-foreground">seu time (ou você)</strong>{" "}
          aplicar já — sem programador, sem agência, sem consultor. Gratuito
          com acesso vitalício.
        </p>

        <a
          href="#form"
          className="group mt-5 inline-block w-full sm:w-auto"
          aria-label="Acessar as ferramentas do Hub"
        >
          <span className="cta-led-wrap block w-full sm:inline-block sm:w-auto">
            <Button
              variant="cta"
              size="lg"
              className="w-full font-bold uppercase tracking-[0.14em] sm:w-auto"
            >
              Acessar o Hub agora
              <ArrowRight className="cta-arrow h-4 w-4" aria-hidden />
            </Button>
          </span>
        </a>

        <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted-dim">
          Liberação imediata com acesso vitalício
        </p>
      </div>

      <ClientLogos />
    </div>
  );
}

const CLIENT_LOGOS: { src: string; alt: string; scale: number }[] = [
  { src: "/3one cinza.png", alt: "3OneData", scale: 1.55 },
  { src: "/brascin cinza.png", alt: "Brascin", scale: 1.6 },
  { src: "/collum cinza.png", alt: "Collum", scale: 1.5 },
  { src: "/bext cinza.png", alt: "Bext", scale: 1.55 },
  { src: "/sukha cinza.png", alt: "Sukha", scale: 1.4 },
  { src: "/Helath safety cinza.png", alt: "Health & Safety", scale: 1.25 },
];

function ClientLogos() {
  return (
    <div className="mt-2 max-w-md">
      <p className="text-left text-[10px] uppercase leading-[1.8] tracking-[0.18em] text-white/55">
        Baseado na experiência da Leão ao lado
        <br />
        de dezenas de indústrias e empresas B2B
      </p>
      <ul className="-ml-4 mt-4 flex list-none flex-wrap items-center gap-x-7 gap-y-4 p-0 sm:gap-x-9">
        {CLIENT_LOGOS.map(({ src, alt, scale }) => (
          <li
            key={src}
            className="relative flex h-11 w-[104px] shrink-0 items-center justify-center"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="104px"
              style={{ transform: `scale(${scale})` }}
              className="object-contain opacity-75 mix-blend-screen invert"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function BackgroundDecoration() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -left-40 -top-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(114,226,167,0.12),transparent_65%)] blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[520px] w-[620px] bg-[radial-gradient(ellipse_at_center,rgba(28,124,84,0.22),transparent_60%)] blur-3xl" />
    </div>
  );
}

type CollageMaterial = {
  label: string;
  icon: LucideIcon;
};

const COLLAGE: CollageMaterial[] = [
  { label: "Raio-X Industrial de Marketing com IA", icon: Activity },
  { label: "Feira.IA", icon: Radio },
  { label: "Guia prático de IA para Indústrias", icon: Lightbulb },
  { label: "10 Prompts Avançados pra operação Industrial", icon: Workflow },
  { label: "GEO Industrial", icon: Search },
];

function MaterialsCollage() {
  return (
    <div aria-hidden className="relative h-[560px] w-full select-none">
      <IconBubble
        icon={Factory}
        tone="accent"
        className="absolute left-[14%] top-[-2%]"
      />
      <IconBubble icon={Cog} className="absolute left-[36%] top-[3%]" />

      <MiniCard
        icon={Search}
        title="GEO Industrial"
        body="Veja se sua indústria é citada pelas IAs quando perguntam sobre seu produto ou solução"
        className="absolute left-[2%] top-[14%] w-[240px] -rotate-[2deg]"
      />

      <HubCard className="absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2" />

      <Pill
        label="Raio-X Industrial de Marketing com IA"
        icon={Activity}
        className="absolute left-[0%] top-[70%]"
      />

      <MiniCard
        icon={Lightbulb}
        body="Guia prático pra implementar IA na sua indústria de maneira simples"
        className="absolute right-[-6%] top-[60%] w-[230px] rotate-[2deg]"
      />

      <IconBubble
        icon={HardHat}
        size="sm"
        className="absolute bottom-[6%] left-[18%]"
      />

      <IconBubble
        icon={Wrench}
        size="sm"
        className="absolute right-[4%] top-[18%]"
      />

      <MiniCard
        icon={Radio}
        title="Feira.IA"
        body="Faça os contatos da sua feira virarem venda"
        className="absolute right-[22%] top-[3%] w-[220px] rotate-[3deg]"
      />

      <Pill
        label="10 Prompts Avançados pra operação Industrial"
        icon={Workflow}
        className="absolute bottom-[14%] left-[32%]"
      />
    </div>
  );
}

function MaterialsCollageMobile() {
  return (
    <div className="flex flex-wrap gap-2">
      {COLLAGE.map(({ label, icon: Icon }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur"
        >
          <Icon className="h-3.5 w-3.5 text-[#E85A1E]" aria-hidden />
          {label}
        </span>
      ))}
    </div>
  );
}

function HubCard({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-lg bg-accent-deep p-6 text-white shadow-[0_30px_80px_-20px_rgba(15,68,48,0.7)] ring-1 ring-white/10 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="font-display text-[2.5rem] font-bold leading-none tracking-tight">
          HUB
        </span>
        <span className="text-[13px] font-medium leading-tight text-white/85">
          de Inteligência
          <br />
          Artificial para
          <br />
          Indústrias B2B
        </span>
      </div>
    </div>
  );
}

function Pill({
  label,
  icon: Icon,
  className,
}: {
  label: string;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-[13px] font-medium text-white/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md ${
        className ?? ""
      }`}
    >
      {Icon && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#E85A1E]">
          <Icon className="h-3.5 w-3.5" aria-hidden />
        </span>
      )}
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}

function MiniCard({
  icon: Icon,
  title,
  body,
  className,
}: {
  icon: LucideIcon;
  title?: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md border border-white/10 bg-white/[0.06] p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md ${
        className ?? ""
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#E85A1E]/15 text-[#E85A1E]">
          <Icon className="h-3.5 w-3.5" aria-hidden />
        </span>
        <div className="flex flex-col gap-1">
          {title && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
              {title}
            </span>
          )}
          <span className="text-[12px] font-medium leading-[1.35] text-white/85">
            {body}
          </span>
        </div>
      </div>
    </div>
  );
}

function IconBubble({
  icon: Icon,
  tone = "dark",
  size = "md",
  className,
}: {
  icon: LucideIcon;
  tone?: "dark" | "accent";
  size?: "sm" | "md";
  className?: string;
}) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
  };
  const tones = {
    dark: "bg-white/[0.08] text-white ring-white/10",
    accent: "bg-accent-deep text-white ring-accent-deep/40",
  };
  return (
    <div
      className={`flex ${sizes[size]} items-center justify-center rounded-full ring-1 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] backdrop-blur ${tones[tone]} ${
        className ?? ""
      }`}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </div>
  );
}

const SEGMENTS: { label: string; icon: LucideIcon }[] = [
  { label: "Máquinas & Equipamentos", icon: Wrench },
  { label: "Embalagens", icon: Package },
  { label: "Segurança do Trabalho & EPI", icon: ShieldCheck },
  { label: "Metalmecânica", icon: Cog },
  { label: "Plásticos & Borracha", icon: Boxes },
  { label: "Alimentos & Bebidas", icon: Factory },
];

function SegmentsStrip() {
  const loop = [...SEGMENTS, ...SEGMENTS];
  return (
    <div className="relative border-y border-white/[0.06] bg-white/[0.015]">
      <Container size="lg" className="py-4">
        <div className="flex items-center gap-5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/45 sm:text-[11px] sm:tracking-[0.18em]">
          <span className="shrink-0 text-white/80">Setores atendidos —</span>
          <div
            className="relative flex-1 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <div className="marquee-track">
              {loop.map(({ label, icon: Icon }, i) => (
                <span
                  key={`${label}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2 pr-6"
                  aria-hidden={i >= SEGMENTS.length ? true : undefined}
                >
                  <Icon className="h-3.5 w-3.5 text-white/35" aria-hidden />
                  {label}
                  <span className="pl-6 text-white/15">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export function HubBrandSeal() {
  return (
    <section
      aria-label="Leão Marketeria — quem está por trás deste hub"
      className="relative isolate overflow-hidden bg-neutral-950"
    >
      <Image
        src="/leao-fachada-banner-1280.webp"
        alt="Fachada da Leão Marketeria — Laboratório da Leão"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-70"
        loading="lazy"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/35 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-overline text-accent-light">
            <MapPin className="h-3.5 w-3.5" strokeWidth={2.4} />
            quem fez este hub
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
            Tudo que está aqui nasceu no{" "}
            <span className="text-accent-light">Laboratório da Leão.</span>
          </h2>

          <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-neutral-200 sm:text-lg">
            Marketing industrial que gera resultado é método.
            <br />
            Este hub contém algumas das ferramentas que a gente usa e constrói
            com indústrias todo dia.
          </p>

          <Link
            href="https://leaomarketeria.com.br/?utm_source=hub-ia-industrial&utm_medium=brand-seal&utm_campaign=hub-ia-industrial"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 border-b border-accent-light/40 pb-1 font-display text-base font-semibold text-accent-light transition-colors hover:border-accent-light hover:text-white sm:text-lg"
          >
            conhecer a Leão Marketeria
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.4}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

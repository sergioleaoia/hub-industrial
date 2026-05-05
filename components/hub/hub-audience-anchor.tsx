import Image from "next/image";

export function HubAudienceAnchor() {
  return (
    <figure
      aria-label="Indústria brasileira: marketing, vendas técnicas e operação"
      className="relative overflow-hidden rounded-lg border border-card-border bg-neutral-950 shadow-md"
    >
      <div className="relative aspect-[16/9] sm:aspect-[16/7]">
        <Image
          src="/publico-industria-1024.webp"
          alt="Operadora e executivo em chão de fábrica analisando dados em um tablet"
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
          loading="lazy"
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-neutral-950/55 via-transparent to-transparent"
        />

        <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5 sm:p-7 md:p-8">
          <span className="text-overline text-accent-light">
            feito para a indústria brasileira
          </span>
          <p className="max-w-3xl font-display text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl">
            Ferramentas proprietárias, guias e playbooks que aceleram{" "}
            <span className="text-accent-light">
              Marketing, Vendas Técnicas e Operação B2B.
            </span>
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

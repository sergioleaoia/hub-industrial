import { Bookmark } from "lucide-react";

export function HubHero() {
  return (
    <header className="flex flex-col items-center gap-6 text-center">
      <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
        Obrigado!
      </h1>

      <p className="max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
        Ferramentas proprietárias, guias e playbooks que aceleram Marketing,
        Vendas Técnicas e Operação B2B
      </p>

      <div className="relative mt-1 w-full max-w-2xl overflow-hidden rounded-lg border border-card-border bg-card px-5 py-4 text-left shadow-sm sm:px-6">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-deep via-accent to-accent-light"
        />
        <div className="flex items-start gap-4">
          <div
            aria-hidden
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent ring-1 ring-accent/20"
          >
            <Bookmark className="h-[18px] w-[18px]" strokeWidth={2.2} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-display text-base font-bold leading-tight text-foreground sm:text-lg">
              Favorite esta página.
            </p>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Sempre que criarmos novas ferramentas, publicaremos aqui primeiro.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

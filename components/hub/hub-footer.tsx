import Link from "next/link";

export function HubFooter() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-dim sm:flex-row sm:px-6">
        <p>
          © <span className="font-medium text-muted">Leão Marketeria</span>.
          Todos os direitos reservados.
        </p>
        <Link
          href="https://leaomarketeria.com.br/?utm_source=hub-ia-industrial&utm_medium=footer&utm_campaign=hub-ia-industrial"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          leaomarketeria.com.br
        </Link>
      </div>
    </footer>
  );
}

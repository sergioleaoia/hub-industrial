import { Suspense } from "react";
import { Cog } from "lucide-react";
import { Container } from "@/components/ui/container";
import { HubFooter } from "@/components/hub/hub-footer";
import { LandingHero } from "@/components/lead-capture/landing-hero";
import { LeadForm } from "@/components/lead-capture/lead-form";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <LandingHero />

        <section
          id="acessar"
          aria-labelledby="acessar-titulo"
          className="relative overflow-hidden bg-background"
        >
          <Container size="lg" className="py-16 sm:py-20 md:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div className="order-1 flex flex-col gap-6 lg:pt-2">
                <h3 className="font-display text-[1.5rem] font-bold leading-[1.15] tracking-[-0.015em] text-foreground sm:text-[1.75rem] lg:text-[2rem]">
                  O ponto de partida pra sua indústria{" "}
                  <span className="text-accent-deep bg-[linear-gradient(transparent_62%,rgba(28,124,84,0.18)_62%)]">
                    usar IA de verdade
                  </span>{" "}
                  em 2026
                </h3>

                <p className="max-w-prose text-[15px] leading-[1.65] text-muted sm:text-base">
                  Indústria B2B brasileira vende bem por indicação e feira —
                  mas o funil de vendas digital fica imprevisível e a presença
                  online não acompanha o tamanho da empresa. O{" "}
                  <strong className="font-semibold text-foreground">Hub</strong>{" "}
                  reúne método, ferramentas e prompts pra estruturar geração
                  de demanda digital aplicada à indústria. Pronto pra usar
                  essa semana.
                </p>

                <div className="mt-1 flex flex-col gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-deep">
                    O que você terá acesso
                  </span>
                  <ul className="flex flex-col gap-4">
                    {[
                      {
                        title: "Raio-X Industrial de Marketing",
                        desc: "Como descobrir onde seu marketing tá travando e o que corrigir",
                      },
                      {
                        title: "Feira.IA",
                        desc: "Como usar IA na próxima feira pra vender mais",
                      },
                      {
                        title: "Guia Prático de IA para Indústrias",
                        desc: "Como aplicar IA em 5 etapas práticas (Método 5P)",
                      },
                      {
                        title: "10 Prompts Avançados",
                        desc: "Como acelerar prospecção, vendas e atendimento com IA",
                      },
                      {
                        title: "GEO Industrial",
                        desc: "Como fazer sua indústria ser citada pelas IAs",
                      },
                    ].map(({ title, desc }) => (
                      <li key={title} className="flex items-start gap-3">
                        <Cog
                          aria-hidden
                          className="mt-[0.2em] h-4 w-4 shrink-0 text-[#E85A1E]"
                        />
                        <div className="flex flex-col gap-0.5">
                          <span className="font-display text-[16px] font-bold leading-[1.25] text-foreground sm:text-[17px]">
                            {title}
                          </span>
                          <span className="text-[13.5px] leading-[1.45] text-muted-dim">
                            {desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="max-w-prose text-[14px] leading-[1.65] text-muted">
                  Construído pela{" "}
                  <strong className="font-semibold text-foreground">Leão Marketeria</strong>{" "}
                  — escritório de tecnologia e marketing com foco em geração
                  de demanda pra indústrias B2B brasileiras.
                </p>
              </div>

              <div
                id="form"
                className="order-2 flex scroll-mt-24 flex-col lg:pt-4"
              >
                <Suspense fallback={<LeadFormFallback />}>
                  <LeadForm />
                </Suspense>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <HubFooter />
    </>
  );
}

function LeadFormFallback() {
  return (
    <div
      aria-hidden
      className="h-[480px] animate-pulse rounded-lg bg-neutral-100"
    />
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { HubHeader } from "@/components/hub/hub-header";
import { HubHero } from "@/components/hub/hub-hero";
import { HubAudienceAnchor } from "@/components/hub/hub-audience-anchor";
import { MaterialsGrid } from "@/components/hub/materials-grid";
import { HubBrandSeal } from "@/components/hub/hub-brand-seal";
import { HubFooter } from "@/components/hub/hub-footer";

export const metadata: Metadata = {
  title: "Hub de IA Industrial — Seus materiais",
  description:
    "Acesse a suíte completa de IA da Leão para indústrias B2B: Raio-X Industrial, Feira.IA, GEO Industrial, Criador de Funil e mais.",
};

export default function ObrigadoPage() {
  return (
    <>
      <HubHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Glow de fundo sutil */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(114,226,167,0.12),transparent_60%)]"
          />

          <Container size="lg" className="py-16 sm:py-20 md:py-24">
            <HubHero />

            <div className="mt-12 sm:mt-14 md:mt-16">
              <HubAudienceAnchor />
            </div>

            <div className="mt-14 sm:mt-16 md:mt-20">
              <MaterialsGrid />
            </div>
          </Container>
        </section>

        <HubBrandSeal />
      </main>

      <HubFooter />
    </>
  );
}

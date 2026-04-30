import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Material } from "@/lib/materials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  material: Material;
  className?: string;
};

export function MaterialCard({ material, className }: Props) {
  const Icon = material.icon;
  const isComingSoon = material.comingSoon;

  return (
    <article
      aria-disabled={isComingSoon || undefined}
      className={cn(
        "group relative flex flex-col gap-5 rounded-2xl border border-card-border bg-card p-6 sm:p-8",
        "transition-all duration-200",
        isComingSoon
          ? "opacity-60"
          : "hover:border-accent/40 hover:shadow-[0_0_40px_-10px_rgba(114,226,167,0.25)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl ring-1",
            isComingSoon
              ? "bg-muted-surface text-muted-dim ring-card-border"
              : "bg-accent/10 text-accent ring-accent/20"
          )}
          aria-hidden
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        {isComingSoon ? (
          <Badge variant="default">Em breve</Badge>
        ) : (
          material.badge && <Badge variant="accent">{material.badge}</Badge>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
          {material.title}
        </h3>
        <p
          className={cn(
            "text-sm font-medium",
            isComingSoon ? "text-muted-dim" : "text-accent"
          )}
        >
          {material.subtitle}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {material.description}
        </p>
      </div>

      <div className="mt-auto pt-2">
        {isComingSoon ? (
          <Button
            variant="primary"
            size="md"
            fullWidth
            disabled
            aria-disabled="true"
          >
            <span>Em breve</span>
          </Button>
        ) : material.download ? (
          <a
            href={material.href}
            download={material.download}
            className="block"
          >
            <Button variant="primary" size="md" fullWidth>
              <span>{material.ctaLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
        ) : (
          <Link
            href={material.href}
            target={material.external ? "_blank" : undefined}
            rel={material.external ? "noopener noreferrer" : undefined}
            className="block"
          >
            <Button variant="primary" size="md" fullWidth>
              <span>{material.ctaLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        )}
      </div>
    </article>
  );
}

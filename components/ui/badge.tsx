import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent" | "gold";
};

export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-card border border-card-border text-muted",
    accent:
      "bg-accent/10 border border-accent/30 text-accent",
    gold:
      "bg-gold/10 border border-gold/30 text-gold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

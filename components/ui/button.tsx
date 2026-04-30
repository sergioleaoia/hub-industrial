import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold tracking-tight transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground hover:brightness-110 active:brightness-95 shadow-[0_0_0_1px_rgba(114,226,167,0.3)]",
        dark:
          "bg-foreground text-white hover:bg-[#1a1a1a] active:bg-black shadow-[0_8px_24px_-8px_rgba(10,10,10,0.6)]",
        cta:
          "bg-[#E85A1E] text-white hover:bg-[#FF6B2C] active:bg-[#C84510] shadow-[0_12px_32px_-10px_rgba(232,90,30,0.55),inset_0_0_0_1px_rgba(255,255,255,0.18)] hover:shadow-[0_18px_44px_-10px_rgba(232,90,30,0.75),inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:-translate-y-[1px] transition-all duration-200 ease-out",
        secondary:
          "bg-card text-foreground border border-card-border hover:bg-[#efece6]",
        ghost:
          "bg-transparent text-foreground hover:bg-card border border-transparent hover:border-card-border",
        outline:
          "bg-transparent text-accent border border-accent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-[15px]",
        lg: "h-14 px-7 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { buttonVariants };

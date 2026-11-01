
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-xl text-sm font-semibold",
    "transition-all duration-500 ease-out",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-purple-500 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.97]",
    "motion-reduce:transition-none",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40",

        donate:
          "min-h-11 min-w-[120px] rounded-lg border-0 text-white font-medium " +
          "bg-[length:280%_auto] " +
          "bg-[linear-gradient(325deg,#2563eb_0%,#47b8ff_55%,#2563eb_90%)] " +
          "shadow-[0_0_20px_rgba(71,184,255,0.35),0_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.4),inset_-4px_-4px_8px_rgba(19,95,216,0.3)] " +
          "hover:bg-right-top hover:shadow-[0_0_25px_rgba(71,184,255,0.55)] " +
          "focus-visible:ring-blue-400",

        gradient:
          "bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20 hover:-translate-y-1 hover:brightness-110 hover:shadow-purple-500/40",

        destructive:
          "bg-red-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-red-700",

        outline:
          "border border-purple-500/40 bg-background text-purple-600 shadow-sm hover:-translate-y-0.5 hover:border-purple-500 hover:bg-purple-500/10 dark:text-purple-300",

        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-secondary/80",

        ghost:
          "text-foreground hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400",

        glass:
          "border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-xl hover:bg-white/20",

        link:
          "text-purple-600 underline-offset-4 hover:underline dark:text-purple-400",
      },

      size: {
        xs: "h-7 rounded-lg px-2.5 text-xs",
        sm: "h-9 rounded-lg px-3 text-sm",
        default: "h-11 px-5 text-sm",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-base",
        icon: "size-10 rounded-xl",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      type,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={asChild ? undefined : type ?? "button"}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

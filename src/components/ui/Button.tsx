"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-dark" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold shadow-sm hover:shadow focus-visible:ring-brand-600",
  secondary:
    "bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-medium focus-visible:ring-slate-400",
  outline:
    "bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-medium border border-slate-200/90 hover:border-slate-300 shadow-sm focus-visible:ring-brand-500",
  "outline-dark":
    "bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-medium border border-white/20 hover:border-white/30 backdrop-blur-sm shadow-sm focus-visible:ring-white/40",
  ghost:
    "bg-transparent hover:bg-slate-100 active:bg-slate-200 text-slate-600 hover:text-slate-900 font-medium focus-visible:ring-slate-400",
  danger:
    "bg-rose-600 hover:bg-rose-700 text-white font-medium shadow-sm focus-visible:ring-rose-600",
};

const sizeStyles: Record<string, string> = {
  sm: "h-9 px-3.5 text-xs gap-1.5 rounded-xl",
  md: "h-11 px-4.5 text-sm gap-2 rounded-xl",
  lg: "h-12 px-6 text-sm sm:text-base gap-2.5 rounded-xl font-semibold",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      href,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      variantStyles[variant] || variantStyles.primary,
      sizeStyles[size] || sizeStyles.md,
      fullWidth && "w-full",
      (disabled || isLoading) ? "opacity-60 cursor-not-allowed pointer-events-none" : "cursor-pointer",
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={buttonClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

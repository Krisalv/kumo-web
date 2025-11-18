import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) {
  // Estilos base
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variantes
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400",
    ghost:
      "text-slate-700 hover:bg-slate-100",
  };

  // Tamaños
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

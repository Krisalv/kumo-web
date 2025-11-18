import React from "react";
import clsx from "clsx";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white shadow-md border border-slate-200 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={clsx("p-6", className)} {...props}>
      {children}
    </div>
  );
}

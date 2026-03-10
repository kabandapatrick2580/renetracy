import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function LinkButton({
  href,
  children,
  variant = "primary"
}: LinkButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gold text-canvas hover:bg-sand"
      : "border border-gold/30 bg-white/5 text-ink hover:border-gold hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}

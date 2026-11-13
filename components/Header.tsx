"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, ArrowRight } from "./icons";

const nav = [
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#funcionalidades", label: "Funcionalidades" },
  { href: "/#planos", label: "Planos" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-black/5 bg-offwhite/85 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-charcoal/70 transition-colors hover:text-charcoal">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Começar agora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-charcoal md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-offwhite md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal/80 hover:bg-black/[0.04]">
                {item.label}
              </Link>
            ))}
            <Link href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-primary mt-2">
              Começar agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

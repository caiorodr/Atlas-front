"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AtlasLogo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#numeros", label: "Números" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-emerald-800/15 bg-cream/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" aria-label="Atlas — voltar ao início">
          <AtlasLogo tone="light" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-900/70 transition-colors duration-200 hover:text-emerald-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contato" size="sm">
            Fale com especialistas
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </div>

        <button
          className="-mr-2 p-2 text-emerald-950 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-emerald-800/10 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-6 py-6">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 font-mono text-sm uppercase tracking-[0.14em] text-emerald-900 transition-colors hover:bg-emerald-800/[0.06] hover:text-emerald-800"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  href="#contato"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Fale com especialistas
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const HIGHLIGHTS = [
  "Implantação assistida do convênio, com migração do histórico",
  "Integração com os principais sistemas de folha do país",
  "Time que entende de consignado público, não só de software",
];

type FormStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos construir uma nova geração de crédito consignado?"
            lead="Converse com nossos especialistas e descubra como levar a averbação do seu convênio para o padrão Atlas."
          />

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4">
              {HIGHLIGHTS.map((text) => (
                <li key={text} className="flex items-start gap-3.5">
                  <span className="mt-1 h-1.5 w-1.5 flex-none bg-mint-500" />
                  <span className="text-[15px] leading-relaxed text-sage">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-emerald-800/15 pt-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-sage">
                Prefere e-mail?
              </span>
              <a
                href="mailto:desenvolvimento@atlasaverbadora.com.br"
                className="mt-2 block font-mono text-sm text-emerald-700 transition-colors [overflow-wrap:anywhere] hover:text-emerald-800"
              >
                desenvolvimento@atlasaverbadora.com.br
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="border border-emerald-800/25 bg-paper shadow-[0_40px_100px_-48px_rgba(3,35,26,0.45)]">
            {/* Cabeçalho de protocolo */}
            <div className="flex items-center justify-between border-b border-emerald-800/15 px-7 py-4 sm:px-10">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-950">
                Protocolo de contato
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-700">
                <span className="h-1.5 w-1.5 animate-pulse-dot bg-mint-500" />
                Canal aberto
              </span>
            </div>

            <div className="p-7 sm:p-10">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center border-2 border-emerald-700 bg-mint-300/60">
                      <Check className="h-6 w-6 text-emerald-800" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold text-emerald-950">
                      Recebemos seu contato.
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-sage">
                      Nossa equipe de especialistas retorna em até 1 dia útil.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-emerald-700 transition-colors hover:text-emerald-800"
                    >
                      Enviar novo contato
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <Label htmlFor="contact-name">Nome</Label>
                        <Input
                          id="contact-name"
                          name="name"
                          placeholder="Seu nome completo"
                          autoComplete="name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-company">Empresa</Label>
                        <Input
                          id="contact-company"
                          name="company"
                          placeholder="Órgão ou instituição"
                          autoComplete="organization"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-role">Cargo</Label>
                        <Input
                          id="contact-role"
                          name="role"
                          placeholder="Sua função"
                          autoComplete="organization-title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">E-mail</Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="voce@empresa.gov.br"
                          autoComplete="email"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-phone">Telefone</Label>
                        <Input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="mt-8 w-full"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Enviando…" : "Enviar mensagem"}
                      {status !== "sending" && (
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </Button>

                    {status === "error" && (
                      <p className="mt-4 text-center text-sm text-red-600 [overflow-wrap:anywhere]">
                        Não foi possível enviar sua mensagem. Tente novamente ou
                        escreva para desenvolvimento@atlasaverbadora.com.br.
                      </p>
                    )}

                    <p className="mt-4 text-center text-xs leading-relaxed text-sage/80">
                      Ao enviar, você concorda com nossa Política de
                      Privacidade. Seus dados são tratados conforme a LGPD.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

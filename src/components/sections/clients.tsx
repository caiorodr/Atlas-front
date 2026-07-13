import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

import penaforte from "@/assets/logos/Penaforte-Ceará-CE.png";
import brejinho from "@/assets/logos/brejinho-de-nazare-Tocantins-TO.png";
import capistrano from "@/assets/logos/capistrano-Ceará-CE.png";
import cariri from "@/assets/logos/cariri-do-tocantins-Tocantins-TO.png";
import triunfo from "@/assets/logos/triunfo-potiguar-Rio-Grande-do-Norte-RN.png";

type Client = { src: string; name: string; uf: string };

const CLIENTS: Client[] = [
  { src: penaforte, name: "Penaforte", uf: "CE" },
  { src: brejinho, name: "Brejinho de Nazaré", uf: "TO" },
  { src: capistrano, name: "Capistrano", uf: "CE" },
  { src: cariri, name: "Cariri do Tocantins", uf: "TO" },
  { src: triunfo, name: "Triunfo Potiguar", uf: "RN" },
];

/* Repete a lista para preencher telas largas e permitir loop contínuo (-50%). */
const REEL = [...CLIENTS, ...CLIENTS, ...CLIENTS];

function LogoItem({ client }: { client: Client }) {
  return (
    <div className="group flex w-44 flex-none flex-col items-center gap-4 sm:w-52">
      <div className="flex h-24 w-full items-center justify-center">
        <img
          src={client.src}
          alt={`Brasão da Prefeitura de ${client.name} — ${client.uf}`}
          loading="lazy"
          draggable={false}
          className="max-h-full w-auto object-contain opacity-70 grayscale transition duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium leading-tight text-ink-100 transition-colors duration-300 group-hover:text-white">
          {client.name}
        </p>
        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400 transition-colors duration-300 group-hover:text-neon-400">
          {client.uf}
        </span>
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section
      id="clientes"
      className="relative overflow-hidden bg-ink-950 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -top-40 right-[10%] h-[380px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(36,77,216,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Nossos clientes"
          title="Prefeituras que já confiam na Atlas"
          lead="Municípios de todo o país usam a nossa plataforma para gerir o consignado público com segurança e transparência."
        />
      </div>

      {/* Faixa contínua de brasões */}
      <Reveal delay={0.1} className="mt-16 lg:mt-20">
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...REEL, ...REEL].map((client, i) => (
              <LogoItem key={`${client.name}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

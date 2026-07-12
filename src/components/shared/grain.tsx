/*
 * Textura de grão sobre a página inteira — reforça a sensação de
 * documento impresso. SVG feTurbulence inline, sem requisição extra.
 */
const NOISE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.06] mix-blend-overlay"
      style={{ backgroundImage: NOISE, backgroundSize: "240px 240px" }}
    />
  );
}

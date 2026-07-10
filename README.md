# Atlas — Site institucional

Site institucional da **Atlas**, fintech de infraestrutura para averbação de crédito consignado que conecta órgãos públicos, instituições financeiras e servidores.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) com design system próprio (paleta, tipografia e tokens em `src/styles/globals.css`)
- [Framer Motion](https://motion.dev) para animações e microinterações
- [Lucide Icons](https://lucide.dev)
- Componentes na arquitetura shadcn/ui (`cva` + `cn`), totalmente customizados

## Comandos

```bash
npm install     # instalar dependências
npm run dev     # ambiente de desenvolvimento (http://localhost:3000)
npm run build   # build de produção
npm start       # servir o build de produção
```

## Estrutura

```
src/
├── app/                  # App Router (layout, página, favicon)
├── components/
│   ├── ui/               # componentes base (button, input)
│   ├── sections/         # seções da landing page
│   └── shared/           # navbar, footer, logo, reveal, headings
├── lib/                  # utilitários (cn)
└── styles/               # globals.css — tokens do design system
```

## Pontos para personalizar antes de publicar

- **Números da seção "Números"** — placeholders em `src/components/sections/metrics.tsx` (marcados com `TODO`).
- **Envio do formulário** — hoje é apenas client-side (estado de sucesso); conectar a uma API/CRM.
- **Razão social no rodapé** — confirmar se "Atlas Averbadora" é a razão social oficial (CNPJ já preenchido).

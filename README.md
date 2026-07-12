# Atlas — Site institucional

Site institucional da **Atlas**, fintech de infraestrutura para averbação de crédito consignado que conecta órgãos públicos, instituições financeiras e servidores.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript (site estático, sem backend)
- [Tailwind CSS v4](https://tailwindcss.com) com design system próprio (paleta, tipografia e tokens em `src/styles/globals.css`)
- [Framer Motion](https://motion.dev) para animações e microinterações
- [Lucide Icons](https://lucide.dev)
- Componentes na arquitetura shadcn/ui (`cva` + `cn`), totalmente customizados

## Comandos

```bash
npm install     # instalar dependências
npm run dev     # ambiente de desenvolvimento (http://localhost:5173)
npm run build   # checagem de tipos + build de produção (gera dist/)
npm run preview # servir o build de produção localmente
```

## Deploy

O deploy é automático via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)): todo push na branch `main` roda o build e envia a pasta `dist/` para a hospedagem via FTP.

Secrets necessários no repositório (Settings → Secrets and variables → Actions):

- `FTP_HOST` — endereço do servidor FTP (ex.: `ftp.atlasaverbadora.com.br`)
- `FTP_USERNAME` — usuário do FTP
- `FTP_PASSWORD` — senha do FTP

A pasta de destino está configurada como `/public_html/` — confirme no painel da hospedagem e ajuste `server-dir` no workflow se for diferente.

## Estrutura

```
src/
├── main.tsx              # entrada da aplicação
├── app.tsx               # composição da página
├── components/
│   ├── ui/               # componentes base (button, input)
│   ├── sections/         # seções da landing page
│   └── shared/           # navbar, footer, logo, reveal, headings
├── lib/                  # utilitários (cn)
└── styles/               # globals.css — tokens do design system
```

## Pontos para personalizar antes de publicar

- **Números da seção "Números"** — placeholders em `src/components/sections/metrics.tsx` (marcados com `TODO`).
- **Formulário de contato** — envia via [FormSubmit](https://formsubmit.co) para `desenvolvimento@atlasaverbadora.com.br`. No primeiro envio em produção, o FormSubmit manda um e-mail de ativação para esse endereço — é preciso confirmá-lo uma única vez para os leads começarem a chegar.
- **Razão social no rodapé** — confirmar se "Atlas Averbadora" é a razão social oficial (CNPJ já preenchido).

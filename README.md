<div align="center">
  <img src="https://nano.net.br/assets/programacao-DzAvORjU.png" width="50" alt="Logo NANO" />
  
  # NANO
  
  ### TECNOLOGIA SOB MEDIDA
</div>

---

<div align="center">

# Site Hometechs

**Site institucional da Hometechs — Segurança e Automação**

[![Deploy](https://img.shields.io/github/actions/workflow/status/sandropeixoto/Site-Hometechs/nextjs.yml?branch=main&label=deploy&style=flat-square)](https://github.com/sandropeixoto/Site-Hometechs/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/licença-privado-red?style=flat-square)](#)

</div>

---

## Visão Geral

O **Site Hometechs** é o site institucional da [Hometechs](https://hometechs.com.br), empresa paraense especializada em soluções de controle de ponto, controle de acesso, segurança eletrônica e automação predial.

O projeto foi construído como uma **Single Page Application (SPA) estática**, otimizada para publicação via **GitHub Pages**, com foco em performance, SEO técnico avançado e experiência visual de alto padrão. Toda a interação ocorre no lado do cliente, sem necessidade de servidor Node.js em produção.

**Problema resolvido:** centralizar a presença digital da Hometechs com um canal de contato direto, apresentação de portfólio de soluções e credibilidade institucional para clientes corporativos na região Norte do Brasil.

---

## Funcionalidades Principais

> **Navegação responsiva com menu fixo adaptativo** — navbar flutua com efeito de blur ao rolar a página; menu lateral animado em dispositivos móveis.

> **Seção Hero com identidade visual corporativa** — apresentação de diferenciais competitivos e métricas de experiência da empresa.

> **Portfólio de soluções categorizado** — quatro categorias de produtos e serviços (Controle de Ponto e Acesso, Segurança Eletrônica, Automação e Infraestrutura) com cards interativos.

> **Vitrine de parceiros tecnológicos** — exibição das marcas parceiras com logos (Control ID, RWTech, Secullum, Intelbras).

> **Formulário de contato com proteção anti-spam** — envio de orçamentos via API externa com honeypot, validação de tempo mínimo de preenchimento e limites de tamanho por campo.

> **Botão flutuante de WhatsApp** — acesso direto ao atendimento via WhatsApp com mensagem pré-definida.

> **SEO técnico completo** — Open Graph, Twitter Cards, Schema.org (JSON-LD tipo `LegalService`), canonical URL e metadados estruturados.

> **Security headers via meta tags** — CSP, X-Frame-Options, X-Content-Type-Options e Referrer-Policy aplicados no `<head>` para proteção dos usuários no contexto de site estático.

---

## Stack Técnica

| Categoria | Tecnologia |
|---|---|
| **Framework** | Next.js 15 (App Router, Static Export) |
| **Linguagem** | TypeScript 5.9 — modo `strict` ativado |
| **UI / Estilização** | Tailwind CSS 4 |
| **Animações** | Motion (Framer Motion) 12 |
| **Ícones** | Lucide React |
| **Utilitários CSS** | clsx + tailwind-merge |
| **Linting** | ESLint 9 + eslint-config-next |
| **Build** | Next.js Compiler (SWC) |
| **Output** | Exportação estática (`output: export`) — gera `/out` com HTML/CSS/JS puros |
| **Deploy** | GitHub Pages via GitHub Actions |
| **CI/CD** | GitHub Actions (`.github/workflows/nextjs.yml`) |
| **API de E-mail** | Proxy externo em Google Cloud Run |
| **SEO** | Schema.org JSON-LD, Open Graph, Twitter Cards |

---

## Arquitetura do Projeto

O projeto adota a estrutura padrão do **Next.js App Router** com exportação estática. Não há rotas de API, SSR ou SSG com revalidação — todo o conteúdo é gerado em tempo de build como HTML/CSS/JS estáticos.

### Organização de Pastas

```
app/
├── globals.css        # Import global do Tailwind CSS
├── layout.tsx         # Layout raiz: <html>, metadados, JSON-LD, security meta tags
├── not-found.tsx      # Página 404 customizada
└── page.tsx           # Página principal (SPA completa — única rota)

hooks/
└── use-mobile.ts      # Hook para detecção de viewport mobile (MediaQuery)

lib/
└── utils.ts           # cn() (clsx + twMerge) e getAssetPath()

public/
├── image.png          # Logo principal / OG Image
├── logo-topo.png      # Variação de logo
├── favicon.png        # Ícone do site
└── parceiro-*.png     # Logos dos parceiros tecnológicos

.github/workflows/
└── nextjs.yml         # Pipeline de build e deploy para GitHub Pages
```

### Separação de Responsabilidades

- **`layout.tsx`** — responsável por metadados globais (SEO, Open Graph, Schema.org), security headers via meta tags e estrutura HTML raiz.
- **`page.tsx`** — contém toda a lógica da SPA: estado do formulário, proteções anti-spam, formatação de telefone e renderização de todas as seções.
- **`lib/utils.ts`** — funções utilitárias puras, sem efeitos colaterais.
- **`hooks/`** — hooks React reutilizáveis desacoplados da lógica de negócio.

### Fluxo da Aplicação

```
Usuário acessa o site
      │
      ▼
GitHub Pages entrega HTML estático (gerado pelo Next.js build)
      │
      ▼
React hidrata a SPA no cliente
      │
      ├─► Navegação por âncoras (#sobre, #solucoes, #portfolio, #parceiros, #contato)
      │
      └─► Formulário de contato
              │
              ├─► Validação client-side (honeypot + tempo mínimo + maxLength)
              │
              └─► POST → Cloud Run (mail-proxy) → E-mail para a Hometechs
```

---

## Instalação e Execução

### Pré-requisitos

- **Node.js** `>= 22.x`
- **npm** `>= 10.x`

### Instalação

```bash
# Clone o repositório
git clone https://github.com/sandropeixoto/Site-Hometechs.git
cd Site-Hometechs

# Instale as dependências (usa package-lock.json para instalação determinística)
npm ci
```

### Variáveis de Ambiente

O projeto não requer variáveis de ambiente para funcionar localmente. O arquivo `.env.example` documenta variáveis reservadas para integrações futuras:

```bash
# Copie o exemplo (opcional)
cp .env.example .env.local
```

| Variável | Descrição |
|---|---|
| `GEMINI_API_KEY` | Chave para integração com Gemini AI (reservada para uso futuro) |
| `APP_URL` | URL base da aplicação (para callbacks e links auto-referenciais) |

### Execução Local

```bash
# Servidor de desenvolvimento com hot reload
npm run dev
```

Acesse em: `http://localhost:3000`

### Build de Produção

```bash
# Gera o site estático na pasta /out
npm run build
```

O diretório `./out` contém os arquivos prontos para hospedagem em qualquer CDN ou servidor de arquivos estáticos.

---

## Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento Next.js com hot reload |
| `npm run build` | Compila o projeto em modo produção e exporta HTML estático para `./out` |
| `npm run start` | Inicia o servidor Next.js em modo produção (requer build prévia) |
| `npm run lint` | Executa o ESLint em todos os arquivos TypeScript/TSX do projeto |
| `npm run clean` | Remove o cache e artefatos de build do Next.js |

---

## Estrutura de Pastas

```
Site-Hometechs/
├── .github/
│   └── workflows/
│       └── nextjs.yml          # CI/CD: build + deploy para GitHub Pages
├── app/
│   ├── globals.css             # Estilos globais (Tailwind import)
│   ├── layout.tsx              # Layout raiz, metadados e security headers
│   ├── not-found.tsx           # Página 404
│   └── page.tsx                # SPA principal (todas as seções)
├── hooks/
│   └── use-mobile.ts           # Hook de detecção de dispositivo móvel
├── lib/
│   └── utils.ts                # Utilitários: cn(), getAssetPath()
├── public/
│   ├── image.png               # Logo / OG Image
│   ├── favicon.png             # Favicon
│   └── parceiro-[1-4].png      # Logos dos parceiros
├── .env.example                # Referência de variáveis de ambiente
├── eslint.config.mjs           # Configuração ESLint flat config (v9)
├── next.config.ts              # Configuração Next.js (static export, imagens, webpack)
├── package.json                # Dependências e scripts
├── package-lock.json           # Lockfile para builds determinísticos
├── postcss.config.mjs          # Configuração PostCSS (Tailwind)
└── tsconfig.json               # Configuração TypeScript (strict mode)
```

---

## Deploy

O deploy é totalmente automatizado via **GitHub Actions** ao realizar push na branch `main`.

### Fluxo do Pipeline (`.github/workflows/nextjs.yml`)

```
push → main
    │
    ▼
[Job: build]
├── Checkout do código
├── Setup Node.js 22
├── Configuração do GitHub Pages
├── Restauração de cache (.next/cache)
├── npm ci (instalação determinística)
├── npm run lint
├── npm run build  →  gera ./out
└── Upload do artefato ./out

    │
    ▼
[Job: deploy]
└── actions/deploy-pages → publica no GitHub Pages
```

### URL de Produção

O site é publicado automaticamente em:
```
https://hometechs.com.br
```
_(via domínio customizado configurado no GitHub Pages)_

### Deploy Manual

Para testar o build de produção localmente:

```bash
npm run build

# Sirva os arquivos estáticos com qualquer servidor HTTP estático
npx serve ./out
```

---

## Considerações Técnicas

### Segurança

- **Proteção anti-spam no formulário:** campo honeypot oculto + validação de tempo mínimo de preenchimento (3 segundos) bloqueiam submissões automatizadas sem dependências externas.
- **Limites de payload:** todos os campos do formulário possuem `maxLength` definido (nome: 100, e-mail: 254, telefone: 15, mensagem: 1.000 caracteres).
- **Security headers:** `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options` e `Referrer-Policy` aplicados via meta tags (compatível com exportação estática). Para deployments em servidor Node.js, os headers HTTP equivalentes estão documentados em `next.config.ts`.
- **Segredos:** arquivos `.env*` estão no `.gitignore`; nenhuma chave ou credencial é exposta no repositório.

### Performance

- **Static Export:** todo o site é gerado em tempo de build — sem processamento server-side em tempo de requisição, latência mínima via CDN.
- **Imagens otimizadas:** componente `<Image>` do Next.js com lazy loading nativo.
- **Cache de build:** o pipeline de CI restaura o cache `.next/cache` entre execuções, reduzindo tempo de build em pushes incrementais.
- **Animações com Motion:** uso de `whileInView` com `viewport: { once: true }` garante que animações executem apenas uma vez, evitando recálculos desnecessários.

### TypeScript

- Modo `strict` habilitado globalmente no `tsconfig.json`.
- `ignoreBuildErrors: false` no `next.config.ts` — erros de tipo bloqueiam o build de produção.
- Path alias `@/*` configurado para imports absolutos a partir da raiz do projeto.

### SEO e Indexação

- Metadados estruturados via **Schema.org JSON-LD** (`LegalService`) no `<head>` para rich results no Google.
- **Open Graph** e **Twitter Cards** completos para compartilhamento em redes sociais.
- URL canônica definida e `metadataBase` configurado para evitar URLs relativas nos metadados.

### Escalabilidade

A arquitetura de SPA estática é intrinsecamente escalável: o site pode ser servido de qualquer CDN global sem configuração adicional de infraestrutura. Para evolução do projeto com funcionalidades dinâmicas (autenticação, painel administrativo, CMS), a migração para o modo servidor do Next.js está preparada — os headers de segurança já estão documentados em `next.config.ts` e podem ser ativados removendo `output: 'export'`.

---

## 🚀 Desenvolvido por

> **Sandro Peixoto**  
> https://www.sandropeixoto.com.br
>
> **NANO**  
> https://nano.net.br

<div align="center">
  <img src="https://nano.net.br/assets/programacao-DzAvORjU.png" width="50" alt="Logo NANO" />
  
  # NANO
  
  ### TECNOLOGIA SOB MEDIDA
</div>

---

## Visão Geral

A aplicação web da **Hometechs** é uma landing page corporativa e institucional voltada para a oferta de soluções em Segurança Eletrônica, Controle de Acesso e Automação Residencial. O projeto foi desenhado sob uma arquitetura serverless-ready para apresentar o portfólio da empresa de forma veloz, moderna e otimizada para SEO. O sistema age como um vetor primário de captação de clientes, contando com um formulário de contato rápido integrado a um proxy de e-mail seguro, sem expor configurações sensíveis no lado do cliente.

---

## Funcionalidades Principais

> **Apresentação de Serviços**
> Catálogo interativo destacando soluções de CFTV, alarmes monitorados, cercas elétricas e biometria digital.

> **Interface Dinâmica e Fluida**
> Renderização de componentes responsivos baseada em animações sofisticadas e micro-interações, garantindo uma experiência de navegação imersiva.

> **Formulário de Captação e Orçamentos**
> Integração de formulário de contato assíncrono validado, conectado via REST a um Worker remetente hospedado no Cloud Run. Feedback de UI limpo de processamento de solicitações de propostas.

---

## Stack Técnica

| Categoria | Tecnologia |
|---|---|
| **Frontend Framework** | Next.js 15 (App Router) |
| **Linguagem** | TypeScript |
| **Biblioteca de UI** | React 19 |
| **Estilização** | Tailwind CSS v4 |
| **Animações e Estado** | Motion (Framer Motion) |
| **Ícones** | Lucide React |
| **Serviço de Mensageria** | Mail Proxy em GCP Cloud Run |
| **Build & CI/CD** | GitHub Actions Pipeline |
| **Deploy** | GitHub Pages (Exportação Estática) |

---

## Arquitetura do Projeto

O modelo arquitetural do frontend visa o desempenho máximo utilizando as instâncias de Renderização Client-Side e Static Site Generation (SSG). 

- **Camadas de Visão**: O frontend utiliza a estrutura do App Router (`app/`) abstraindo lógicas complexas e roteamento para interfaces rápidas, garantindo SEO de alto desempenho.
- **Isolamento de Estado**: Como o projeto foi implementado para hospedar-se em ambientes puramente estáticos (`output: 'export'`), as necessidades de dinamicidade (Envio de formulários) isolam-se do backend monolítico.
- **Gateway de Comunicação Externa**: O formulário se comunica de maneira assíncrona (`via fetch API`) a um gateway no Cloud Run, abstraindo chaves SMTP e lógica de controle de acesso fora da visão do navegador.
- **Estratégia de Assets Estáticos**: Os módulos de referenciamento de imagens respeitam padrões de domínios customizados.

---

## Instalação e Execução

### Pré-requisitos
Certifique-se de que dispõe de:
- **Node.js** (versão 18.17 ou superior).
- **Gerenciador de pacotes NPM** ou equivalente funcional.

### Instalação

Clone o repositório e instale as dependências executando o comando no diretório raiz:

```bash
npm install
```

### Execução Local

Para iniciar o servidor de ambiente de desenvolvimento com fast-refresh:

```bash
npm run dev
```
> O acesso se dará pela porta local do Node: `http://localhost:3000`

### Build para Produção

Gera os bundles otimizados visando implantações estáticas de alta velocidade:

```bash
npm run build
```

---

## Scripts Disponíveis

| Script | Descrição |
|---|---|
| `dev` | Levanta o ecossistema local do Next.js de desenvolvimento em observação ativa. |
| `build` | Faz o transpilling do TypeScript, reduz o CSS pelo PostCSS e exporta as páginas finalizadas. |
| `start` | Inicializa o servidor Node web production default (Ignorado se em deploy puramente estático). |
| `lint` | Efetua testes estáticos rigorosos de análise nas árvores do código procurando padrões de escape indesejados. |

---

## Estrutura de Pastas

```text
├── .github/
│   └── workflows/
│       └── nextjs.yml      # CI/CD: Automatização de implantação do Github Pages
├── app/
│   ├── globals.css         # Variáveis e importações diretivas do TailwindCSS e fontes
│   ├── layout.tsx          # Wrapper principal do DOM HTML5
│   └── page.tsx            # Árvore principal e lógica cliente da aplicação Web
├── lib/
│   └── utils.ts            # Funções helpers genéricas padronizadas (Absolute Paths)
├── public/                 # Banco virtual de media assets puros acessível web
│   ├── image.png
│   └── logo-topo.png
├── eslint.config.mjs       # Validador Semântico de Linguagem
├── next.config.ts          # Core compilador, build configs de saída SSG
├── postcss.config.mjs      # Otimização em Caskade para Tailwind
├── package.json            # Árvore de versionamento das bibliotecas do Node
└── tsconfig.json           # Superset do Compilador Estrito.
```

---

## Deploy

A estratégia de implantação foi automatizada por CI/CD:

- **Controle de Versão**: Configurado pelo `GitHub Actions` no arquivo `deploy.yml`. 
- **Triggering Base**: Acionado toda vez que se realiza um git PUSH em ramificações monitoradas, o projeto executa linting, building, empacotando apenas a saída estática (pasta `/out`).
- **Hospedagem Estática Global**: Como base global foi definido Github Pages utilizando configuração `next.config.ts` específica (`unoptimized: true`) permitindo hospedar domínios proprietários como Cloudflare ou diretos evitando complexidade extra de computadores na ponta.

---

## Considerações Técnicas

- **Performance**: As práticas de `Static Site Generation (SSG)` fornecem carga imediata. Ao não rodar servidor ativo Node no host, reduz o TTFB a valores insignificativos para redes em CDNs.
- **Modularização de Utilidades**: Padrões de código focados na reaproveitamento, especialmente visando tratamento autônomo de caminhos relativos ao migrar para domínios raiz.
- **Segurança de Gateway**: Todas as execuções de interações, como captura de e-mails via HTTP POST, se destinam a microserviços (Cloud Run GCP). Dados e chaves permanecem intocáveis a varreduras de DOM.
- **Robustez**: O uso exaustivo do TypeScript traz confiança na esteira de dev e o Tailwind garante refatoração segura, permitindo escalar sub-páginas no futuro sem acúmulo de débito técnico em arquivos CSS.

---

## 🚀 Desenvolvido por

> **Sandro Peixoto**  
> https://www.sandropeixoto.com.br
>
> **NANO**  
> https://nano.net.br

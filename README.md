# Quero Saco — QS Plastic & Paper

Site institucional + catálogo de produtos da **QS Plastic & Paper (Quero Saco)**,
fábrica e atacadista de descartáveis institucionais em Duque de Caxias - RJ.

Site estático, rápido e otimizado para SEO, construído em **Astro**. Conteúdo em
português (PT-BR).

## Stack

- **Astro 5** (saída estática) + **TypeScript**
- **Tailwind CSS 3** (tokens da marca em `tailwind.config.mjs`)
- Fonte **Outfit** auto-hospedada (`@fontsource/outfit`)
- Ícones **Phosphor** via `astro-icon`
- **Content Collections** para o catálogo de produtos
- **Web3Forms** (envio de formulário sem servidor) + WhatsApp
- Sitemap (`@astrojs/sitemap`), `robots.txt`, JSON-LD `LocalBusiness`
- Testes com **Vitest**

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/ (estático)
npm run preview  # serve o build localmente
npm run check    # type check (astro check)
npm test         # testes unitários (vitest)
```

## Variável de ambiente

Crie um `.env` (veja `.env.example`):

```
PUBLIC_WEB3FORMS_KEY=
```

- Gere uma **access key gratuita** em https://web3forms.com usando o e-mail
  `contato@querosaco.com.br`. Com a key, os formulários (Orçamento, Contato,
  Trabalhe Conosco) enviam direto para esse e-mail.
- **Sem a key**, os formulários entram em modo *fallback*: orientam o visitante a
  usar o **WhatsApp** (e, em Trabalhe Conosco, o e-mail). O site funciona normalmente.
- Observação: anexo de currículo (Trabalhe Conosco) usa upload de arquivo do
  Web3Forms, recurso de plano pago. No plano gratuito, mantenha o e-mail como
  alternativa (já presente na página).

## Estrutura

```
src/
  data/site.ts          # contato, navegação, endereço (fonte única)
  lib/whatsapp.ts       # gerador de link wa.me
  content/
    config.ts           # schemas (zod) das collections
    categorias/*.md      # categorias do catálogo
    produtos/*.md        # produtos (frontmatter = specs)
  layouts/BaseLayout.astro
  components/            # Header, Footer, Button, ProductCard, QuoteForm, etc.
  pages/                # index, sobre, produtos, produtos/[slug], orcamento,
                        # contato, trabalhe-conosco, 404
public/images/          # imagens do site e dos produtos
```

## Como adicionar / editar um produto

Crie um arquivo em `src/content/produtos/<slug>.md`:

```md
---
nome: Saco de Lixo 200L
categoria: sacos-de-lixo        # id de um arquivo em src/content/categorias/
resumo: Saco reforçado de 200 litros para uso industrial.
especificacoes:
  - { label: Capacidade, valor: 200 litros }
  - { label: Cor, valor: Preto }
aplicacoes:
  - Indústrias e galpões
destaque: false
imagem: /images/produtos/saco-de-lixo.webp
ordem: 10
---

Texto descritivo do produto.
```

O produto aparece automaticamente no catálogo (`/produtos`) e ganha sua própria
página (`/produtos/<slug>`).

> **Conteúdo a revisar:** 7 produtos têm especificações *placeholder* marcadas com
> `<!-- REVISAR: dados placeholder -->` (sacos de lixo, rolão, insumos, comodato).
> Substitua por dados reais quando disponíveis. Interfolha (branco e celulose) já
> está com conteúdo real.

## Deploy (Vercel)

1. Faça push deste repositório para o GitHub.
2. Em https://vercel.com → **Add New Project** → importe o repositório.
   O `vercel.json` já define framework Astro, build e output.
3. Em **Settings → Environment Variables**, adicione `PUBLIC_WEB3FORMS_KEY`.
4. Deploy. A Vercel gera HTTPS e uma URL de preview a cada commit.
5. **Domínio:** em **Settings → Domains**, adicione `querosaco.com.br` e ajuste o
   DNS conforme indicado pela Vercel (requer acesso ao DNS do domínio).

Alternativa via CLI: `npm i -g vercel && vercel` (a CLI não vem instalada por padrão).

## Roadmap (fora do escopo atual)

CMS para edição sem código, multi-idioma, e produtos em destaque na home via o
campo `destaque` (já existente no schema, reservado para uso futuro).

# Spec — Site robusto QS Plastic & Paper (Quero Saco)

- **Data:** 2026-06-07
- **Status:** aprovado (design), pronto para plano de implementação
- **Base visual:** `DESIGN.md` + homepage validada em `.aidesigner/mcp-latest.html`

## 1. Objetivo

Transformar o rebranding (hoje uma única homepage HTML de protótipo) em um
**site institucional robusto e completo** para a QS Plastic & Paper — fábrica e
atacadista de descartáveis institucionais (Duque de Caxias, RJ), com **catálogo
de produtos detalhado**. O site deve transmitir profissionalismo e autoridade,
ser rápido, achável no Google (SEO B2B) e fácil de manter.

Sucesso = site multipágina no ar, responsivo, com catálogo navegável + busca,
formulários funcionando (e-mail + WhatsApp), SEO sólido, e deploy gerenciado.

## 2. Escopo

### Dentro
- Site institucional completo: Home, Sobre, Produtos (catálogo), Produto
  (detalhe), Orçamento, Contato (com mapa/localização), Trabalhe Conosco, 404.
- Catálogo de produtos detalhado: categorias, página por produto, especificações
  técnicas, busca e filtro por categoria.
- Conteúdo extraído do site atual (`querosaco.com.br`) + placeholder realista.
- Idioma: **somente PT-BR**.
- Formulários: e-mail (`contato@querosaco.com.br`) via serviço + botões WhatsApp.
- SEO (sitemap, robots, meta/OG, JSON-LD LocalBusiness), acessibilidade, responsivo.
- Deploy estático gerenciado (Vercel) + orientação de apontamento de domínio.

### Fora (YAGNI — caminho aberto para depois)
- CMS / painel de edição próprio.
- Multi-idioma (EN/ES).
- E-commerce (carrinho, checkout, pagamento), preços públicos.
- Login/área de cliente, pedidos online.
- Blog/notícias.
- Backend próprio / banco de dados (formulário usa serviço externo).

## 3. Stack

- **Astro** (estático, `output: 'static'`) + **TypeScript**.
- **Tailwind CSS** via `@astrojs/tailwind` (build real, sem CDN), tema com os
  tokens do `DESIGN.md`.
- **Outfit** auto-hospedada via `@fontsource/outfit` (sem CDN).
- Ícones **Phosphor** via `astro-icon` (`@iconify-json/ph`), sem script externo.
- **@astrojs/sitemap** para sitemap automático.
- Busca/filtro: ilha interativa leve (Astro island; vanilla TS ou Preact).
- Formulário: **Web3Forms** (gratuito, sem servidor) → e-mail. Access key em
  variável de ambiente (`PUBLIC_WEB3FORMS_KEY`). Sem key → fallback WhatsApp.
- Deploy: **Vercel** (estático, via integração Git). Netlify como alternativa.

## 4. Estrutura do projeto

```
quero-saco/
  astro.config.mjs
  tailwind.config.mjs
  tsconfig.json
  package.json
  .env.example            # PUBLIC_WEB3FORMS_KEY=
  public/
    favicon.svg
    og-default.jpg
    robots.txt
    images/produtos/...   # imagens extraídas + placeholders
    images/site/...       # fábrica, frota, etc.
  src/
    data/
      site.ts             # contato, nav, social, endereço, horários (fonte única)
    content/
      config.ts           # schemas (zod) das collections
      produtos/*.md       # 1 arquivo por produto (frontmatter = specs)
      categorias/*.md     # 1 arquivo por categoria
    layouts/
      BaseLayout.astro    # <head>, SEO, JSON-LD, Header, Footer, slot
    components/
      Header.astro  Footer.astro  Button.astro  WhatsAppButton.astro
      ProductCard.astro  CategoryFilter.astro (island)  SpecTable.astro
      Breadcrumbs.astro  QuoteForm.astro  SectionHeading.astro
      Logo.astro          # badge QS (placeholder do logo definitivo)
      Seo.astro           # meta/OG por página
    pages/
      index.astro
      sobre.astro
      produtos/index.astro
      produtos/[slug].astro
      orcamento.astro
      contato.astro
      trabalhe-conosco.astro
      404.astro
    styles/global.css
```

## 5. Modelo de dados (Content Collections)

**`produtos`** (frontmatter):
- `nome: string`
- `categoria: reference('categorias')`
- `slug` (derivado do id do arquivo)
- `resumo: string` (1–2 linhas, usado no card)
- `descricao: string` (corpo markdown)
- `especificacoes: { label: string, valor: string }[]` (capacidade, medida, gramatura, cor, embalagem…)
- `aplicacoes: string[]` (opcional)
- `imagem: string` · `galeria: string[]` (opcional)
- `destaque: boolean` (aparece na Home)
- `ordem: number` (opcional, para ordenação)

**`categorias`** (frontmatter):
- `nome: string` · `slug` · `descricao: string` · `icone: string` · `ordem: number`

Categorias iniciais: Sacos de lixo, Papel higiênico rolão, Papel interfolha,
Insumos industriais, Comodato para lojistas.

## 6. Especificação das páginas

1. **Home (`/`)** — porte da homepage aprovada: hero, faixa de confiança,
   produtos em destaque (de `destaque: true`), frota/logística, "Por que a QS",
   Missão/Visão/Valores condensado, CTA orçamento, footer. Links reais.
2. **Sobre (`/sobre`)** — quem somos (QS Plastic & Paper), texto institucional,
   Missão/Visão/Valores completos, diferenciais, frota, fotos.
3. **Produtos (`/produtos`)** — heading + `CategoryFilter` (ilha) + grid de
   `ProductCard`. Busca por texto e filtro por categoria, client-side.
4. **Produto (`/produtos/[slug]`)** — `getStaticPaths` das collections:
   breadcrumb, imagem/galeria, descrição, `SpecTable`, aplicações, CTA "Pedir
   orçamento deste produto" (pré-preenche produto no form e na mensagem WhatsApp),
   produtos relacionados (mesma categoria).
5. **Orçamento (`/orcamento`)** — `QuoteForm` completo: nome, empresa, e-mail,
   telefone, produto(s) de interesse, mensagem → Web3Forms (e-mail). Botão
   WhatsApp alternativo. Aceita `?produto=slug` para pré-preencher.
6. **Contato (`/contato`)** — canais (Atacadista (21) 3193-9393, Comercial
   (21) 98485-4577, e-mail, horários), formulário curto, **mapa Google embed**,
   endereço completo. Âncora `#localizacao` para o item de menu "Localização".
7. **Trabalhe Conosco (`/trabalhe-conosco`)** — texto + formulário com anexo de
   currículo (Web3Forms com upload) ou e-mail direto.
8. **404 (`/404`)** — mensagem com a marca + atalhos.

## 7. Componentes (responsabilidade única)

- `BaseLayout` — casca HTML, SEO, JSON-LD, Header/Footer. Entrada: title,
  description, og, slot.
- `Header` — logo, navegação, CTA orçamento, menu mobile (ilha/disclosure).
- `Footer` — navegação, portfólio, dados da planta, social, copyright.
- `Button` / `WhatsAppButton` — variantes primária/secundária; WhatsApp monta
  link `wa.me` com texto pré-preenchido.
- `ProductCard` — imagem, nome, resumo, categoria, link.
- `CategoryFilter` — ilha: filtra a grid por categoria + busca textual.
- `SpecTable` — renderiza `especificacoes`.
- `QuoteForm` — formulário reutilizável (Orçamento e Contato), validação básica,
  submit Web3Forms, estado de sucesso/erro, fallback WhatsApp.
- `Breadcrumbs`, `SectionHeading`, `Logo`, `Seo` — utilitários de UI/SEO.

Dados de contato/navegação centralizados em `src/data/site.ts`.

## 8. Formulários (detalhe)

- Web3Forms via POST `https://api.web3forms.com/submit` com `access_key`.
- Campos honeypot anti-spam; mensagem de sucesso inline; tratamento de erro.
- Sem key configurada → o form mostra aviso e direciona ao WhatsApp.
- Trabalhe Conosco: campo de arquivo (PDF/DOC) suportado pelo Web3Forms.

## 9. SEO e qualidade

- `@astrojs/sitemap` + `robots.txt`.
- `Seo` por página: title, description, canonical, Open Graph, Twitter.
- **JSON-LD** `LocalBusiness`/`Organization` no `BaseLayout` (nome, endereço,
  telefones, horários, geo) — relevante para busca local B2B.
- HTML semântico, headings hierárquicos, `alt` em imagens, foco visível,
  contraste adequado, navegação por teclado.
- Imagens otimizadas (`astro:assets` quando possível), lazy-loading.
- Meta de performance: Lighthouse alto (estático ajuda).

## 10. Extração de conteúdo

- Via gstack `browse`: capturar `Publicacao.aspx?id=497420` (Sobre) e
  `id=497421` (Produtos), além da Home já capturada.
- Baixar imagens reais (logo, produtos, frota) para `public/images/`.
- Mapear produtos/categorias para as collections; completar specs faltantes com
  placeholder realista marcado para revisão.

## 11. Deploy

- Build estático (`astro build` → `dist/`).
- Vercel via integração Git (a CLI não está instalada no ambiente; alternativa:
  `npm i -g vercel`). Variável `PUBLIC_WEB3FORMS_KEY` no painel.
- Domínio `querosaco.com.br`: adicionar no Vercel e ajustar DNS (A/CNAME) —
  requer acesso do cliente ao DNS. HTTPS automático.

## 12. Sistema de design

Reaproveita `DESIGN.md`: tokens (azul `#0033CC`, grafite `#1A1A1A`, cinza
`#666666`, surface `#F4F4F5`), tipografia Outfit (900 caixa-alta nos títulos),
princípios (respiro, grid limpo, bordas marcantes, bento de produtos, CTAs
recorrentes, micro-interações). A homepage validada serve de referência de porte.

## 13. Critérios de sucesso

- Todas as 8 páginas no ar, navegáveis, responsivas (mobile/tablet/desktop).
- Catálogo com busca + filtro funcionando; páginas de produto geradas das collections.
- Formulários enviando (ou fallback WhatsApp) sem erros no console.
- `astro build` sem erros; sitemap e meta presentes; JSON-LD válido.
- Visual fiel ao `DESIGN.md`; sem Tailwind CDN; fontes/ícones auto-hospedados.
- Deploy publicado na Vercel com preview.

## 14. Riscos e questões em aberto

- **Access key Web3Forms**: depende do cliente gerar com `contato@querosaco.com.br`.
  Sem ela, formulário opera em modo WhatsApp-only até configurar.
- **Acesso ao DNS** do domínio: necessário para apontar `querosaco.com.br`.
- **Qualidade/quantidade do conteúdo extraído**: specs de produto podem vir
  incompletas; serão placeholders até o cliente fornecer dados reais.
- **Direitos das imagens** do site atual: confirmar que são da empresa antes de
  reusar; senão, usar placeholders/banco licenciado.
- **Logo definitivo**: hoje é o badge QS em CSS; substituir por SVG quando aprovado.
```

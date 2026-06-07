# QS Plastic & Paper (Quero Saco) — Sistema de Design

Fonte de verdade visual do rebranding. Direção: **Industrial Confiável** — sólido,
corporativo, autoritário. B2B industrial (fábrica + atacado de descartáveis
institucionais), Duque de Caxias - RJ. Todo o conteúdo em **PT-BR**.

## Marca

- Nome comercial: **Quero Saco** · Razão de marca: **QS Plastic & Paper**
- Tagline de apoio: *Fábrica e Atacadista*
- Logo: **badge "QS"** (quadrado arredondado azul sólido, "QS" branco em sans
  geométrica bold) + wordmark "QUERO SACO" em grafite, com "PLASTIC & PAPER" em
  azul, menor, abaixo. Usado no header e no footer.
- Brand kit AIDesigner (conta 3xis.contato@gmail.com): regerar a partir do board
  Tile 02 quando precisar de assets de logo refinados. Board de referência em
  `.aidesigner/reference/brandkit-board.webp`.

## Tokens

```
--blue:    #0033CC   /* primária — dominante, CTAs, destaques */
--dark:    #1A1A1A   /* grafite — seções escuras, texto forte */
--gray:    #666666   /* texto secundário, bordas suaves */
--light:   #FFFFFF   /* fundo claro */
--surface: #F4F4F5   /* superfícies/seções alternadas */
```

Sem arco-íris, sem pastéis. Azul é a cor da marca; grafite para blocos escuros.

## Tipografia

- Família: **Outfit** (Google Fonts), pesos 300/400/500/700/900.
- Títulos (`.heading-font`): **900**, CAIXA ALTA, `letter-spacing: -0.03em`.
- Hero fluido: `clamp(3rem, 6vw, 6rem)`; H2: `clamp(2rem, 5vw, 4.5rem)`.
- Corpo: 400/500, cinza `#666666` para texto de apoio.

## Princípios de layout

- Muito respiro, hierarquia tipográfica grande, grid limpo, geometria sólida.
- Bordas marcantes (2px grafite) e blocos divididos (split layouts assimétricos).
- Bento grid para produtos. Faixa de confiança com 4 diferenciais.
- Imagens reais (galpão, frota, produto) com leve overlay azul/grafite. Sem clip-art.
- CTAs recorrentes: **"Pedir orçamento"** (primário, azul) + **WhatsApp** (secundário).
- Micro-interações: hover físico nos botões, zoom sutil em imagem, reveal no scroll.

## Estrutura da homepage (implementada)

Header fixo → Hero (escala/autoridade + stats) → Faixa de confiança (fábrica
própria, frota dedicada, preço de atacado, sustentável) → Produtos (Sacos de
lixo, Papel higiênico rolão, Papel interfolha, Insumos industriais, Comodato) →
Logística/Nossa frota (FOB/CIF, raio RJ) → Por que a QS (4 pilares) →
Orçamento (dados de contato + formulário) → Footer (navegação, portfólio, planta).

## Contato (dados reais)

- E-mail: contato@querosaco.com.br
- Atacadista: (21) 3193-9393 · Comercial/WhatsApp: (21) 98485-4577
- Horário: Seg–Qui 7h–17h · Sex 7h–16h
- Endereço: Rua própria, 362 - Galpão A, Vila Maria Helena, Duque de Caxias - RJ, CEP 25251-285

## Pendências para produção

- Trocar **Tailwind CDN** por build (Tailwind CLI/PostCSS) antes de produção.
- Hospedar imagens localmente (hoje via Unsplash) e usar fotos reais da fábrica/frota/produtos.
- Wire real do **formulário de orçamento** (hoje é um `alert()` de simulação).
- Logo: substituir o badge "QS" CSS por SVG do logo definitivo quando aprovado.
- Páginas internas (Sobre, Produtos, Contato, Trabalhe Conosco, Localização) seguindo este sistema.
```

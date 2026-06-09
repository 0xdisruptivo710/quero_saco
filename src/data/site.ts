export const site = {
  name: 'Quero Saco',
  legalName: 'QS Plastic & Paper',
  tagline: 'Fábrica e Atacadista',
  slogan: 'Soluções Inteligentes em Produtos Plásticos e Institucionais',
  description:
    'Fábrica e atacadista de descartáveis e produtos plásticos institucionais no Rio de Janeiro: sacos de lixo, sacos para entulho, gelo e cesta básica, papel interfolha, higiênico institucional, rolão e lençol hospitalar.',
  email: 'contato@querosaco.com.br',
  phones: { atacadista: '(21) 3193-9393', comercial: '(21) 98485-4577' },
  whatsapp: '5521984854577',
  hours: ['Seg–Qui: 7h às 17h', 'Sex: 7h às 16h'],
  address: {
    street: 'Rua própria, 362 - Galpão A',
    district: 'Vila Maria Helena',
    city: 'Duque de Caxias - RJ',
    cep: 'CEP: 25251-285',
    postalCode: '25251-285',
    mapsQuery: 'Rua própria, 362, Vila Maria Helena, Duque de Caxias - RJ, 25251-285',
  },
  social: { instagram: 'https://www.instagram.com/querosaco.ltda', linkedin: '#' },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Representantes', href: '/representantes' },
  { label: 'Orçamento', href: '/orcamento' },
  { label: 'Contato', href: '/contato' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
] as const;

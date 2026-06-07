import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categorias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categorias' }),
  schema: z.object({
    nome: z.string(),
    descricao: z.string(),
    icone: z.string().default('ph:package'),
    ordem: z.number().default(0),
  }),
});

const produtos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produtos' }),
  schema: z.object({
    nome: z.string(),
    categoria: reference('categorias'),
    resumo: z.string(),
    especificacoes: z.array(z.object({ label: z.string(), valor: z.string() })).default([]),
    aplicacoes: z.array(z.string()).default([]),
    imagem: z.string().default('/images/produtos/placeholder.webp'),
    galeria: z.array(z.string()).default([]),
    destaque: z.boolean().default(false),
    ordem: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    imagem: z.string().default('/images/site/hero-galpao.webp'),
    autor: z.string().default('Equipe Quero Saco'),
  }),
});

export const collections = { categorias, produtos, blog };

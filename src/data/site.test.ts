import { describe, it, expect } from 'vitest';
import { site, nav } from './site';

describe('site data', () => {
  it('has the real contact channels', () => {
    expect(site.email).toBe('contato@querosaco.com.br');
    expect(site.phones.atacadista).toBe('(21) 3193-9393');
    expect(site.phones.comercial).toBe('(21) 98485-4577');
    expect(site.whatsapp).toBe('5521984854577');
  });
  it('exposes the full navigation', () => {
    const hrefs = nav.map((n) => n.href);
    expect(hrefs).toEqual(
      ['/', '/sobre', '/produtos', '/representantes', '/orcamento', '/contato', '/trabalhe-conosco']
    );
  });
});

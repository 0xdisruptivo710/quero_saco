import { describe, it, expect } from 'vitest';
import { whatsappLink } from './whatsapp';

describe('whatsappLink', () => {
  it('builds a wa.me link with encoded message', () => {
    expect(whatsappLink('5521984854577', 'Olá, quero orçamento'))
      .toBe('https://wa.me/5521984854577?text=Ol%C3%A1%2C%20quero%20or%C3%A7amento');
  });
  it('omits text param when message is empty', () => {
    expect(whatsappLink('5521984854577')).toBe('https://wa.me/5521984854577');
  });
});

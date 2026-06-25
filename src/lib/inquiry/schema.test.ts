import { describe, it, expect } from 'vitest';
import { inquirySchema } from './schema';

describe('inquirySchema — couple', () => {
  it('accepts a valid couple inquiry and applies defaults', () => {
    const result = inquirySchema.safeParse({
      type: 'couple',
      name: '  Jordan Reyes ',
      email: 'JORDAN@example.com',
      services: ['Aisle Sitters'],
    });
    expect(result.success).toBe(true);
    if (result.success && result.data.type === 'couple') {
      expect(result.data.name).toBe('Jordan Reyes'); // trimmed
      expect(result.data.phone).toBe(''); // default
      expect(result.data.services).toEqual(['Aisle Sitters']);
    }
  });

  it('rejects an invalid email', () => {
    const result = inquirySchema.safeParse({ type: 'couple', name: 'Jo', email: 'not-an-email' });
    expect(result.success).toBe(false);
  });

  it('rejects a missing name', () => {
    const result = inquirySchema.safeParse({ type: 'couple', name: '', email: 'a@b.com' });
    expect(result.success).toBe(false);
  });

  it('ignores unknown extra fields', () => {
    const result = inquirySchema.safeParse({
      type: 'couple', name: 'Jo', email: 'a@b.com', somethingExtra: 'x',
    });
    expect(result.success).toBe(true);
  });
});

describe('inquirySchema — vendor', () => {
  it('accepts a valid vendor inquiry', () => {
    const result = inquirySchema.safeParse({
      type: 'vendor', name: 'Pat Lee', email: 'pat@venue.com', venueFirm: 'The Treasury',
    });
    expect(result.success).toBe(true);
  });

  it('requires venueFirm', () => {
    const result = inquirySchema.safeParse({ type: 'vendor', name: 'Pat', email: 'pat@venue.com' });
    expect(result.success).toBe(false);
  });
});

describe('inquirySchema — discriminator', () => {
  it('rejects an unknown type', () => {
    const result = inquirySchema.safeParse({ type: 'spam', name: 'x', email: 'a@b.com' });
    expect(result.success).toBe(false);
  });
});

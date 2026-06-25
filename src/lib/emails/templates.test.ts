import { describe, it, expect } from 'vitest';
import { enquirerConfirmation, maureenNotification } from './templates';
import type { Inquiry } from '@/lib/inquiry/schema';

const couple: Inquiry = {
  type: 'couple',
  name: 'Jordan Reyes',
  email: 'jordan@example.com',
  phone: '904-555-0100',
  weddingDate: '2026-10-17',
  venue: 'The Treasury',
  children: '3',
  pets: '1',
  services: ['Aisle Sitters', 'Pet of Honor'],
  message: 'Looking forward to it!',
};

describe('enquirerConfirmation', () => {
  it('greets by first name and recaps details', () => {
    const { subject, html } = enquirerConfirmation(couple);
    expect(subject).toMatch(/received your inquiry/i);
    expect(html).toContain('Thank you, Jordan.');
    expect(html).toContain('The Treasury');
    expect(html).toContain('Maureen Ella');
  });
});

describe('maureenNotification', () => {
  it('builds a wedding subject with the name', () => {
    const { subject } = maureenNotification(couple);
    expect(subject).toBe('New wedding inquiry — Jordan Reyes');
  });

  it('builds a vendor subject with name and firm', () => {
    const vendor: Inquiry = {
      type: 'vendor', name: 'Pat Lee', email: 'pat@venue.com',
      venueFirm: 'Omni Amelia', role: 'Planner', message: '',
    };
    const { subject } = maureenNotification(vendor);
    expect(subject).toBe('New vendor inquiry — Pat Lee (Omni Amelia)');
  });
});

describe('HTML escaping (XSS safety)', () => {
  it('escapes angle brackets and quotes in user input', () => {
    const evil: Inquiry = {
      ...couple,
      name: '<script>alert(1)</script>',
      message: 'Hi "there" <b>bold</b>',
    };
    const { html } = maureenNotification(evil);
    expect(html).not.toContain('<script>alert(1)</script>');
    expect(html).toContain('&lt;script&gt;');
    expect(html).toContain('&lt;b&gt;bold&lt;/b&gt;');
  });
});

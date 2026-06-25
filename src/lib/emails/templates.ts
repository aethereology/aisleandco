import type { Inquiry } from '@/lib/inquiry/schema';
import {
  emailShell,
  heading,
  paragraph,
  signature,
  detailsTable,
  calloutBox,
  esc,
} from './layout';

export interface BuiltEmail {
  subject: string;
  html: string;
}

function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || name.trim();
}

/** Detail rows describing an inquiry, for the recap + notification. */
function inquiryRows(inquiry: Inquiry): Array<[string, string]> {
  if (inquiry.type === 'couple') {
    return [
      ['Name', esc(inquiry.name)],
      ['Email', esc(inquiry.email)],
      ['Phone', esc(inquiry.phone)],
      ['Wedding date', esc(inquiry.weddingDate)],
      ['Venue', esc(inquiry.venue)],
      ['Children', esc(inquiry.children)],
      ['Pets', esc(inquiry.pets)],
      ['Services', esc(inquiry.services.join(', '))],
      ['Message', inquiry.message ? esc(inquiry.message).replace(/\n/g, '<br>') : ''],
    ];
  }
  return [
    ['Name', esc(inquiry.name)],
    ['Email', esc(inquiry.email)],
    ['Venue / firm', esc(inquiry.venueFirm)],
    ['Role', esc(inquiry.role)],
    ['Message', inquiry.message ? esc(inquiry.message).replace(/\n/g, '<br>') : ''],
  ];
}

/** Branded confirmation sent to the person who submitted the form. */
export function enquirerConfirmation(inquiry: Inquiry): BuiltEmail {
  const name = firstName(inquiry.name);
  const intro =
    inquiry.type === 'couple'
      ? `We've received your inquiry, and we're so glad you're thinking of Aisle &amp; Co. for your wedding day.`
      : `Thank you for reaching out about a partnership — we'd love to support your couples.`;

  const content = `
    ${heading(`Thank you, ${esc(name)}.`)}
    ${paragraph(intro)}
    ${paragraph(`A real person on our team will reply <strong>within 24 hours</strong> — usually sooner. Here's a copy of what you shared:`)}
    ${calloutBox(detailsTable(inquiryRows(inquiry)))}
    ${paragraph(`If anything changes or you'd like to add detail, just reply to this email.`)}
    ${signature()}
  `;

  return {
    subject: "We've received your inquiry — Aisle & Co.",
    html: emailShell({
      title: "We've received your inquiry",
      preheader: 'Thank you — a real person will reply within 24 hours.',
      contentHtml: content,
    }),
  };
}

/** Branded notification sent to Maureen (hello@aisleand.co). Reply-to = enquirer. */
export function maureenNotification(inquiry: Inquiry): BuiltEmail {
  const kind = inquiry.type === 'couple' ? 'wedding' : 'vendor';
  const subject =
    inquiry.type === 'couple'
      ? `New wedding inquiry — ${inquiry.name}`
      : `New vendor inquiry — ${inquiry.name} (${inquiry.venueFirm})`;

  const content = `
    ${heading(`New ${kind} inquiry`)}
    ${paragraph(`A new ${kind} inquiry just came in through the website. Reply directly to this email to respond to <strong>${esc(firstName(inquiry.name))}</strong>.`)}
    ${detailsTable(inquiryRows(inquiry))}
  `;

  return {
    subject,
    html: emailShell({
      title: subject,
      preheader: `${inquiry.name} · ${inquiry.email}`,
      contentHtml: content,
    }),
  };
}

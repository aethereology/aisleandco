# Inquiry Pipeline + Branded Emails — Design

**Date:** 2026-06-24
**Status:** Approved

## Goal
Make the `/contact` (couples/clients) and `/for-vendors` (venues/planners) forms fully
functional. On submit, send two branded, design-matched emails:
1. **Confirmation** to the enquirer.
2. **Notification** to Maureen at `hello@aisleand.co` (reply-to = enquirer).

## Decisions
- **Delivery:** Microsoft 365 Graph `sendMail`, app-only (client-credentials) auth, from `hello@aisleand.co`.
- **Notify address:** `hello@aisleand.co`.
- **Scope:** both forms, shared send pipeline, two inquiry variants (`couple`, `vendor`).
- **Mailbox:** convert `hello@aisleand.co` from an alias on Maureen into a **dedicated shared mailbox**
  (Maureen granted FullAccess + SendAs + auto-mapping). Isolates automated sending; lets the access
  policy scope to just this mailbox.

## Architecture / flow
```
Form (client) ──POST /api/inquiry──▶ Route handler (Node runtime)
  controlled fields + honeypot          1. validate (zod)
  submitting / success / error UI       2. honeypot check
                                         3. Graph token (app-only, in-memory cached)
                                         4. send 2 emails (Graph sendMail):
                                            • Maureen notification → hello@aisleand.co (reply-to = enquirer) [required]
                                            • Enquirer confirmation → their email                            [best-effort]
                                         5. return { ok } | { error }
```

## Files
- `src/lib/inquiry/schema.ts` — zod schemas + types for `couple` and `vendor` inquiries (new dep: `zod`).
- `src/lib/graph/mailer.ts` — client-credentials token (cached) + `sendMail({from,to,subject,html,replyTo})`.
- `src/lib/emails/layout.ts` — branded email-safe HTML shell (table layout, inline styles, Georgia
  serif headings as Cormorant fallback, cream `#F4EFE6` bg, white card, gold `#C9A86A` hairline,
  blue `#1F4E79` headings, "Aisle & Co." wordmark, footer w/ service area).
- `src/lib/emails/templates.ts` — `enquirerConfirmation(type,data)` + `maureenNotification(type,data)`.
- `src/app/api/inquiry/route.ts` — POST handler.
- `src/app/contact/page.tsx` / `src/app/for-vendors/page.tsx` — wired to controlled state, submit,
  success/error UI, hidden honeypot. Existing markup/styling preserved.

## Data shapes
- **couple:** name, email, phone?, weddingDate?, venue?, children?, pets?, services[], message?, honeypot
- **vendor:** name, email, venueFirm, role, message?, honeypot

## M365 / security setup (automated via m365 CLI + EXO PowerShell)
1. Convert `hello@aisleand.co` alias → dedicated **shared mailbox**; grant Maureen FullAccess + SendAs.
2. Entra **app registration** + `Mail.Send` application permission + admin consent + client secret.
3. Exchange **Application Access Policy** restricting the app to send as only `hello@aisleand.co`.
4. Enable DKIM for aisleand.co (retry from earlier provisioning lag).
5. Secrets → `.env.local` + Vercel env: `MS_TENANT_ID`, `MS_CLIENT_ID`, `MS_CLIENT_SECRET`,
   `INQUIRY_FROM=hello@aisleand.co`, `INQUIRY_NOTIFY=hello@aisleand.co`.

## Error handling & spam
- Validation → 400 + inline field errors. Send failure → 500 + graceful fallback ("email us at hello@aisleand.co").
- Maureen's notification must succeed for a 200; enquirer confirmation best-effort (logged on failure).
- Honeypot hidden field. Rate-limiting deferred (not MVP).

## Testing
- Unit: schema validation, template rendering, mailer (mocked fetch).
- Manual: submit both forms in dev; confirm both emails arrive.

## Non-goals (YAGNI)
- No database / inquiry storage (email-only).
- No CAPTCHA, no rate-limiting in v1.
- No React Email (HTML strings, since delivery is Graph not Resend).

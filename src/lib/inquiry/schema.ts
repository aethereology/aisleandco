import { z } from 'zod';

export const coupleInquirySchema = z.object({
  type: z.literal('couple'),
  name: z.string().trim().min(1, 'Please enter your name').max(120),
  email: z.string().trim().email('Please enter a valid email').max(200),
  phone: z.string().trim().max(40).default(''),
  weddingDate: z.string().trim().max(40).default(''),
  venue: z.string().trim().max(200).default(''),
  children: z.string().trim().max(10).default(''),
  pets: z.string().trim().max(10).default(''),
  services: z.array(z.string().max(60)).max(12).default([]),
  message: z.string().trim().max(5000).default(''),
});

export const vendorInquirySchema = z.object({
  type: z.literal('vendor'),
  name: z.string().trim().min(1, 'Please enter your name').max(120),
  email: z.string().trim().email('Please enter a valid email').max(200),
  venueFirm: z.string().trim().min(1, 'Please enter your venue or firm name').max(200),
  role: z.string().trim().max(60).default(''),
  message: z.string().trim().max(5000).default(''),
});

export const inquirySchema = z.discriminatedUnion('type', [
  coupleInquirySchema,
  vendorInquirySchema,
]);

export type CoupleInquiry = z.infer<typeof coupleInquirySchema>;
export type VendorInquiry = z.infer<typeof vendorInquirySchema>;
export type Inquiry = z.infer<typeof inquirySchema>;

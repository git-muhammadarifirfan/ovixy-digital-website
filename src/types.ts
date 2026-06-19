/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  category: "Web Dev" | "Mobile App" | "Branding" | "UI/UX" | "F&B" | "Jasa" | "Retail" | "App" | "Media" | "SaaS" | "Kontraktor" | "Edukasi";
  filterCategory: "Web Dev" | "Mobile App" | "Branding" | "UI/UX" | "All";
  description: string;
  image: string;
  dataAlt: string;
  detailUrl?: string;
  features?: string[];
  detailOverview?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  hasDottedBg?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  type: "large" | "small-dark" | "small-light";
  iconName?: string;
  badges?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

import { faq } from "@/data/faq";

export function getFeaturedFAQ(limit = 4) {
  return faq.filter((item) => item.featured).slice(0, limit);
}

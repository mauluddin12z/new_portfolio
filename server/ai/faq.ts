import Fuse from "fuse.js";

import faqData from "@/data/faq.json";

const fuse = new Fuse(faqData, {
  keys: ["question"],
  threshold: 0.35,
});

export function findFAQAnswer(question: string) {
  const result = fuse.search(question);

  if (!result.length) {
    return null;
  }

  return result[0].item.answer;
}

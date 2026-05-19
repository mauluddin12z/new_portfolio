import Fuse from "fuse.js";
import faqData from "@/data/faq.json";

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const fuse = new Fuse(faqData, {
  keys: ["question"],
  threshold: 0.35,
});
export function findFAQAnswer(question: string) {
  const q = normalize(question);

  // EXACT MATCH (best possible path)
  const exact = faqData.find((f) => normalize(f.question) === q);

  if (exact) return exact.answer;
  const result = fuse.search(q);

  if (!result.length) return null;

  const best = result[0];
  const score = best.score ?? 1;

  // only accept reasonably confident matches
  if (score > 0.4) return null;

  return best.item.answer;
}

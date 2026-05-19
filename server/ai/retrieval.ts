import knowledge from "@/data/knowledge.json";

const KEYWORD_WEIGHTS: Record<string, number> = {
  nextjs: 3,
  react: 2,
  nodejs: 3,
  express: 2,
  mysql: 2,

  machinelearning: 3,
  ai: 4,
  ml: 3,
  cnn: 4,
  unet: 4,
  ann: 4,

  backend: 1,
  frontend: 1,
  developer: 1,
};

function expandQuery(query: string) {
  let q = query.toLowerCase();

  if (q.includes("machine learning") || q.includes("ml")) {
    q += " cnn unet ann ai deep learning";
  }

  if (q.includes("backend")) {
    q += " nodejs express api mysql";
  }

  if (q.includes("frontend")) {
    q += " nextjs react ui";
  }

  return q;
}

export function retrieveContext(query: string) {
  const expanded = expandQuery(query);

  const scored = knowledge.map((item) => {
    let score = 0;

    for (const keyword of item.keywords) {
      if (expanded.includes(keyword.toLowerCase())) {
        score += KEYWORD_WEIGHTS[keyword] || 1;
      }
    }

    return {
      text: item.text,
      score,
    };
  });

  const MIN_SCORE = 2;

  return scored
    .filter((item) => item.score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.text);
}

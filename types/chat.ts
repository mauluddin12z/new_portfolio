export type ChatSource = "faq" | "ai" | "fallback";

export type ChatResponse = {
  answer: string;
  source: ChatSource;
};

export type ChatAPIResponse = {
  response: ChatResponse;
};

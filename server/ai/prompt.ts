import { ChatMessage } from "@/types/chat";

export function buildPrompt(
  question: string,
  contexts: string[],
  history: ChatMessage[],
) {
  const recentHistory = history
    .slice(-4)
    .map((msg) => `${msg.role}: ${msg.content}`)
    .join("\n");

  return `
You are a professional portfolio assistant for Muhammad Hidayat Mauluddin.

Recent Conversation:
${recentHistory}

Context:
${contexts.join("\n\n")}

Rules:
- Only answer from context
- Keep concise
- Maximum 3 sentences
- Professional tone

Question:
${question}

Answer:
`;
}
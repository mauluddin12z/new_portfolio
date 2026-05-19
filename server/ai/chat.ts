import { callGemini } from "@/lib/gemini/callGemini";

import { findFAQAnswer } from "./faq";
import { retrieveContext } from "./retrieval";
import { buildPrompt } from "./prompt";
import { ChatMessage } from "@/types/chat";

export type ChatSource = "faq" | "ai" | "fallback";

export type ChatResponse = {
  answer: string;
  source: ChatSource;
};

export async function generateChatResponse(
  message: string,
  history: ChatMessage[] = [],
): Promise<ChatResponse> {
  /**
   * FAQ LAYER
   */
  const faqAnswer = findFAQAnswer(message);

  if (faqAnswer) {
    return {
      answer: faqAnswer,
      source: "faq",
    };
  }

  /**
   * RETRIEVAL
   */
  const contexts = retrieveContext(message);

  if (!contexts.length) {
    return {
      answer:
        "I don't have enough information to answer that accurately. Please contact me directly for detailed discussion about this topic.",
      source: "fallback",
    };
  }
  /**
   * PROMPT
   */
  const prompt = buildPrompt(message, contexts, history);

  /**
   * GEMINI
   */
  const response = await callGemini<string>(prompt);
  return {
    answer: response,
    source: "ai",
  };
}

import { callGemini } from "@/lib/gemini/callGemini";

import { findFAQAnswer } from "./faq";
import { retrieveContext } from "./retrieval";
import { buildPrompt } from "./prompt";

export type ChatSource = "faq" | "ai" | "fallback";

export type ChatResponse = {
  answer: string;
  source: ChatSource;
};

export async function generateChatResponse(
  message: string,
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
      answer: "Please contact me directly for more information.",
      source: "fallback",
    };
  }
  /**
   * PROMPT
   */
  const prompt = buildPrompt(message, contexts);

  /**
   * GEMINI
   */
  const response = await callGemini<string>(prompt);
  return {
    answer: response,
    source: "ai",
  };
}

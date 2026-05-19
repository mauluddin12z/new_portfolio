import { ChatAPIResponse } from "@/types/chat";

export async function sendChatMessage(
  message: string,
  history: { role: string; content: string }[] = [],
) {
  const res = await fetch(`/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, history }),
  });

  const data: ChatAPIResponse = await res.json();

  if (!res.ok) {
    throw new Error("Chat API failed");
  }

  return data.response;
}

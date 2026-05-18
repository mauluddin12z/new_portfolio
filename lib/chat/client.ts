import { ChatAPIResponse } from "@/types/chat";

const API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_CHATBOT_API_URL is not defined");
}

export async function sendChatMessage(message: string) {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data: ChatAPIResponse = await res.json();

  if (!res.ok) {
    throw new Error("Chat API failed");
  }

  return data.response;
}
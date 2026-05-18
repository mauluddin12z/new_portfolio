import { ChatAPIResponse } from "@/types/chat";


export async function sendChatMessage(message: string) {
  const res = await fetch(`/api/chat`, {
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
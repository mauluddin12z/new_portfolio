import { NextRequest, NextResponse } from "next/server";

import { generateChatResponse } from "@/server/ai/chat";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const message = body.message;
    const history = (body.history ?? []).slice(-6);

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const response = await generateChatResponse(message, history);

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
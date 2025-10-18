// app/api/groq-chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Bad request: messages must be an array" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing GROQ_API_KEY" }, { status: 500 });
    }

    // Call Groq's Chat Completions-compatible endpoint
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
body: JSON.stringify({
  model: "llama-3.1-8b-instant", // or your chosen model
  messages: [
    {
      role: "system",
      content:
        "You are IRSdebtAI. Format answers in short sections with headings and bullet points. Keep paragraphs under 3 lines. Use numbered or bulleted lists for steps. Be concise, supportive, and avoid giant blocks of text."
    },
    ...messages
  ],
  temperature: 0.2
})

    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      return NextResponse.json({ error: "Groq error", detail: errText }, { status: 502 });
    }

    const data = await groqRes.json();
    const reply = data?.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ reply });
  } catch (e: any) {
    return NextResponse.json({ error: "Proxy error", detail: String(e) }, { status: 500 });
  }
}

// Simple health check so you can test in a browser
export async function GET() {
  return NextResponse.json({ ok: true });
}

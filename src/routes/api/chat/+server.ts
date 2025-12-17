import type { RequestHandler } from '@sveltejs/kit';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export const POST: RequestHandler = async ({ request }) => {
	const { who, message } = await request.json();

	if (!OPENAI_API_KEY) {
		return new Response(JSON.stringify({ reply: "⚠️ OPENAI_API_KEY belum diatur" }), { status: 400 });
	}

	const res = await fetch("https://api.openai.com/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${OPENAI_API_KEY}`
		},
		body: JSON.stringify({
			model: "gpt-4o-mini",
			messages: [
				{ role: "system", content: `${who} adalah asisten AI yang sedang berdiskusi dengan AI lain.` },
				{ role: "user", content: message }
			],
			max_tokens: 120
		})
	});

	const data = await res.json();
	const reply = data.choices?.[0]?.message?.content ?? "Tidak ada respons";
	return new Response(JSON.stringify({ reply }), { status: 200 });
};

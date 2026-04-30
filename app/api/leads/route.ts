import { NextResponse } from "next/server";
import { z } from "zod";

const MAKE_WEBHOOK_URL =
  "https://hook.us1.make.com/0pvwq216ao7av6kimlcwc7kp9pwl0gmq";

const bodySchema = z.object({
  nome: z.string().min(2).max(120),
  email: z.string().email().max(200),
  whatsapp: z.string().min(8).max(30),
  utm_source: z.string().max(120).nullable().optional(),
  utm_medium: z.string().max(120).nullable().optional(),
  utm_campaign: z.string().max(120).nullable().optional(),
  utm_content: z.string().max(120).nullable().optional(),
});

export async function POST(req: Request) {
  let payload: z.infer<typeof bodySchema>;

  try {
    const json = await req.json();
    payload = bodySchema.parse(json);
  } catch (err) {
    const message =
      err instanceof z.ZodError
        ? "Dados inválidos."
        : "Payload inválido.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    const webhookRes = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: payload.nome,
        email: payload.email.toLowerCase(),
        whatsapp: payload.whatsapp,
        origem: "hub-ia-industrial",
        utm_source: payload.utm_source ?? null,
        utm_medium: payload.utm_medium ?? null,
        utm_campaign: payload.utm_campaign ?? null,
        utm_content: payload.utm_content ?? null,
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!webhookRes.ok) {
      console.error(
        "[leads] Webhook Make respondeu com status",
        webhookRes.status
      );
    }
  } catch (webhookErr) {
    console.error("[leads] Falha ao enviar webhook Make:", webhookErr);
  }

  // O acesso ao hub não deve depender da disponibilidade do Make.
  return NextResponse.json({ ok: true }, { status: 201 });
}

import { NextResponse } from "next/server";

/*
 * Recebe os leads do formulário de contato.
 *
 * Envio de e-mail: configure RESEND_API_KEY no .env.local (conta gratuita em
 * https://resend.com). Sem a chave, o lead é apenas registrado no log do
 * servidor — o formulário continua respondendo sucesso ao visitante.
 */

type ContactPayload = {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
};

const MAX_FIELD = 200;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const name = clean(payload.name);
  const company = clean(payload.company);
  const role = clean(payload.role);
  const email = clean(payload.email);
  const phone = clean(payload.phone);

  if (!name || !company || !email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Preencha nome, empresa e um e-mail válido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[contato] novo lead (RESEND_API_KEY não configurada):", {
      name,
      company,
      role,
      email,
      phone,
    });
    return NextResponse.json({ ok: true });
  }

  const to =
    process.env.CONTACT_TO_EMAIL ?? "desenvolvimento@atlasaverbadora.com.br";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Atlas Site <onboarding@resend.dev>";

  const text = [
    `Nome: ${name}`,
    `Empresa/Órgão: ${company}`,
    `Cargo: ${role || "—"}`,
    `E-mail: ${email}`,
    `Telefone: ${phone || "—"}`,
    "",
    "Enviado pelo formulário do site.",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Novo contato pelo site — ${name} (${company})`,
      text,
    }),
  });

  if (!response.ok) {
    console.error("[contato] falha no envio via Resend:", await response.text());
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

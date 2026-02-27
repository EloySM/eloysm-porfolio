import { Resend } from "resend";

export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL;
  const from = import.meta.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return new Response(JSON.stringify({ ok: false, error: "Server not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio contact — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Resend is initialized HERE (inside function) not at top level
  // This means it only runs when someone actually submits the form
  // NOT during build time — so no missing API key error during docker build
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'portfolio@virpages.com',
      to: 'virendranawkar1@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #e2e8f0; padding: 24px; border-radius: 8px; border: 1px solid rgba(0,255,157,0.3);">
          <h2 style="color: #00ff9d; margin-bottom: 16px;">New Portfolio Contact</h2>
          <p><strong style="color: #00cfff;">From:</strong> ${name}</p>
          <p><strong style="color: #00cfff;">Email:</strong> ${email}</p>
          <hr style="border-color: rgba(0,255,157,0.2); margin: 16px 0;" />
          <p><strong style="color: #00cfff;">Message:</strong></p>
          <p style="white-space: pre-wrap; margin-top: 8px;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

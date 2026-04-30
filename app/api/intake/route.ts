import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, industry, asking_price, financials_available, timeline } = body

    // Validate required fields
    if (!name || !email || !industry || !asking_price || !financials_available || !timeline) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // Store in DB
    await prisma.lead.create({
      data: { name, email, phone: phone || null, industry, asking_price, financials_available, timeline },
    })

    // Send notification email
    const toEmail = process.env.TO_EMAIL
    if (toEmail && process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Footings Intake <onboarding@resend.dev>',
        to: toEmail,
        subject: `New lead: ${name} — ${industry} deal, ${asking_price}`,
        html: `
          <div style="font-family: monospace; max-width: 560px; background: #09090b; color: #f4f4f5; padding: 32px; border: 1px solid #27272a;">
            <div style="color: #F59E0B; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 24px;">
              FOOTINGS — NEW INTAKE SUBMISSION
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 8px 0; color: #71717a; width: 180px;">Name</td>
                <td style="padding: 8px 0; color: #f4f4f5;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #71717a;">Email</td>
                <td style="padding: 8px 0; color: #f4f4f5;"><a href="mailto:${email}" style="color: #F59E0B;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; color: #71717a;">Phone</td>
                <td style="padding: 8px 0; color: #f4f4f5;">${phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: #71717a;">Industry</td>
                <td style="padding: 8px 0; color: #f4f4f5;">${industry}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #71717a;">Asking Price</td>
                <td style="padding: 8px 0; color: #f4f4f5;">${asking_price}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #71717a;">Financials Available</td>
                <td style="padding: 8px 0; color: #f4f4f5;">${financials_available}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #71717a;">Timeline / Stage</td>
                <td style="padding: 8px 0; color: #f4f4f5;">${timeline}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #27272a; font-size: 11px; color: #52525b;">
              Submitted via footings.com intake form
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[intake] error:', err)
    return NextResponse.json(
      { error: 'Submission failed. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}

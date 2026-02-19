import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateField } from './service';
import { welcomeEmailTemplate } from '@/components/welcome-email';

export async function POST(req: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '';

  const resend = new Resend(RESEND_API_KEY);

  const { email } = await req.json();
  const hasEmail = validateField(email, "Email");
  const hasAudienceId = validateField(RESEND_AUDIENCE_ID, "Audience Id");

  if (!hasEmail || !hasAudienceId) {
    return new NextResponse(JSON.stringify(hasEmail || hasAudienceId), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    // Add user to audience list
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: RESEND_AUDIENCE_ID,
    });

    // Send welcome email
    await resend.emails.send({
      from: 'Sasha Ray <sasha.ray@n8ndevelopers.com>',
      to: email,
      subject: 'You\'ve Earned 10 Free Hours — Let\'s Get You Started 🚀',
      html: welcomeEmailTemplate(),
    });

    // Success added to audience list
    return NextResponse.json(
      {
        message: "contact added",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "error",
      },
      {
        status: 500,
      }
    );
  }
}
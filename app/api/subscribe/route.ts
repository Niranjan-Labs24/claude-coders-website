import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateField } from './service';

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || ''
const RESEND_BROADCAST_ID = process.env.RESEND_BROADCAST_ID || ''

const resend = new Resend(RESEND_API_KEY);

export async function POST(req: NextRequest) {
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

  // Add new subscribers to list
  try {
    const contact = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: RESEND_AUDIENCE_ID,
    });
    if (!contact.data?.id) {
      throw new Error("Contact not created");
    }

    // Send "Welcome email"
    await resend.broadcasts.send(RESEND_BROADCAST_ID);

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
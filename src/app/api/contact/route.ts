import { Contact } from "@/interfaces/contact";
import { createContactEmail } from "@/utils/email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const contact: Contact = body;

    const bodyEmail = {
      from: "BellArte Joyería <info-no-reply@bellartejoyeria.com>",
      to: [
        body.email,
        "contacto@bellartejoyeria.com",
        "joyeriabellarte@gmail.com",
      ],
      subject: "Solicitud de información",
      html: createContactEmail(contact),
    };

    const response = await resend.emails.send(bodyEmail);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

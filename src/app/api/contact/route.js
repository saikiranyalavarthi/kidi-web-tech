import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, mobile, service, message } = await request.json();

    // Validate fields
    if (!name || !email || !mobile || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    // Check Gmail environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail environment variables are missing");

      return NextResponse.json(
        {
          success: false,
          message: "Email configuration is missing",
        },
        { status: 500 },
      );
    }

    // Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify Gmail SMTP connection
    await transporter.verify();

    // Send enquiry
    await transporter.sendMail({
      from: `"KIDIWEBTECH Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Inquiry - ${service}`,

      text: `
New Business Inquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Service: ${service}

Project Details:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">

          <h2 style="margin-bottom: 20px;">
            🚀 New Business Inquiry
          </h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Mobile:</strong> ${mobile}
          </p>

          <p>
            <strong>Service:</strong> ${service}
          </p>

          <h3>Project Details</h3>

          <p>
            ${message.replace(/\n/g, "<br>")}
          </p>

          <hr />

          <p>
            <strong>Sent from KIDIWEBTECH website contact form</strong>
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Gmail Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, mobile, service, message } = await request.json();

    if (!name || !email || !mobile || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.GODADDY_EMAIL,
        pass: process.env.GODADDY_EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"KIDIWEBTECH Website" <${process.env.GODADDY_EMAIL}>`,
      to: process.env.GODADDY_EMAIL,
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
        <h2>🚀 New Business Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Service:</strong> ${service}</p>

        <h3>Project Details</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    );
  }
}

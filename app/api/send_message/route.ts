import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false, 
    },
});

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log("Received Data:", data);

        const mailOptions = {
            from: `"Timog's Website" <${process.env.EMAIL_USER}>`,
            to: "ogunleyetimilehin15@gmail.com",
            subject: "📩 New Contact Form Submission",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
                    <h2 style="color: #007BFF;">New Message Received</h2>
                    <p><strong>Name:</strong> ${data.username}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data?.phoneNumber}</p>
                    <p><strong>Location:</strong> ${data?.location}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="background-color: #f8f9fa; padding: 10px; border-left: 4px solid #007BFF;">
                        ${data.message}
                    </blockquote>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: "Message sent" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}

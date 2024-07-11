const nodemailer = require("nodemailer");
import { NextRequest } from "next/server";
import { z } from "zod";

export const dynamic = 'force-static'

// Define the schema using Zod for validation
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string(),
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, // Add an app password here https://myaccount.google.com/apppasswords
  },
});

function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const validatedData = formSchema.parse(formData);

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `🎉 New message from ${validatedData.name}`,
      text: `You have a new message from ${validatedData.name} (${validatedData.email}): ${validatedData.message}`,
    };

    transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Success!", status: 200 }));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          message: "Bad Request",
          errors: error.errors.map((e) => e.message),
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: (error as any).message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

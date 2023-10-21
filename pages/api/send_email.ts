import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { formData } = req.body;
    console.log(req.body)
    const transporter = nodemailer.createTransport({
      host: "smtp.fzxmedia.com.ng",
      // port: 587,
      // port: 993,
      port: 465,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log({
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    })

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: `New message from ${formData.firstName}`,
        text: `${formData.message}\n\nFrom: ${formData.firstName} <${formData.email}>`,
      });
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}


// import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/email_template';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const data = await resend.emails.send({
//       from: 'ODLC <contact@odlc.unical.edu.ng>',
//       to: ['emorylebo@gmail.com'],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'John' }),
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };
// // import type { NextApiRequest, NextApiResponse } from 'next';
// // import { EmailTemplate } from '../../components/email_template';
// // import { Resend } from 'resend';


// // const resend = new Resend(process.env.RESEND_API_KEY);

// // export default async (req: NextApiRequest, res: NextApiResponse) => {
// //   try {
// //     const data = await resend.emails.send({
// //       from: 'ODLC <contact@odlc.unical.edu.ng>',
// //       to: ['emorylebo@gmail.com'],
// //       subject: 'Hello world',
// //       react: EmailTemplate({ firstName: 'John' }),
// //     });

// //     res.status(200).json(data);
// //   } catch (error) {
// //     res.status(400).json(error);
// //   }
// // };

// // export const sendMail = async (formData: FormData) => {
// //   console.log('sending mail');
// //   resend.emails.send({
// //     from: 'onboarding@resend.dev',
// //     subject: 'Is it going',
// //     to: 'emorylebo@gmail.com'

// //   })
// // }
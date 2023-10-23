// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { formData } = req.body;
//     console.log(req.body)
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       // port: 587,
//       // port: 993,
//       port: 465,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_ADDRESS,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     console.log({
//       user: process.env.EMAIL_ADDRESS,
//       pass: process.env.EMAIL_PASSWORD,
//     })

//     try {
//       await transporter.sendMail({
//         from: process.env.EMAIL_ADDRESS,
//         to: process.env.EMAIL_ADDRESS,
//         subject: `New message from ${formData.firstName}`,
//         text: `${formData.message}\n\nFrom: ${formData.firstName} <${formData.email}>`,
//       });
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }


import { EmailTemplate } from '@/components/EmailTemplate';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    try {
        // const body = await req.json()
        const { formData } = req.body;
        console.log(formData)
        const data = await resend.emails.send({
            from: "ODLC-UNICAL <info@odlc.unical.edu.ng>",
            to: formData.email,
            // to: ['delivered@resend.dev'],
            subject: 'Inquiry from ODLC Unical',
            react: EmailTemplate({ firstName: formData.firstName }),
            text: '',
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

export default sendEmail;

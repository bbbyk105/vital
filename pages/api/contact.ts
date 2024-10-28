import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  //   管理人が受け取るメール
  const toHostMailData = {
    from: req.body.email,
    to: "bbbyk105@yahoo.co.jp",
    subject: '[お問い合わせ] $(req.body.name)様より',
    text: `$(req.body.message) Send from $(req.body.email)`
  };
}

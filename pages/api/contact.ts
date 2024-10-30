import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendGmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  // 管理人が受け取るメール
  const toHostMailData = {
    from: req.body.email,
    to: "bbbyk105@yahoo.co.jp",
    subject: `[お問い合わせ] ${
      req.body.company !== "なし" && req.body.company !== "無し"
        ? `(${req.body.company}) `
        : ""
    }${req.body.name}様より`,
    text: `${req.body.message} Send from ${req.body.email}`,
    html: `
      <p>会社名: ${req.body.company}</p>
      <p>名前: ${req.body.name}</p>
      <p>メールアドレス: ${req.body.email}</p>
      <p>メッセージ: ${req.body.message}</p>
    `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "メール送信に失敗しました", error: err.toString() });
    } else {
      console.log(info);
      return res.status(200).json({ message: "メール送信完了" });
    }
  });
}

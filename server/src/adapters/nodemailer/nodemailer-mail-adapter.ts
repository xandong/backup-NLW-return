import { IMailAdapter, ISendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6abfabe01bf871",
    pass: "66a5647d321a12",
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: ISendMailData) {
    await transport.sendMail({
      from: "Equipe Ventus Digital <ventusdigital@gmail.com>",
      to: "Alexandre Gurgel <xandongurgel@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}

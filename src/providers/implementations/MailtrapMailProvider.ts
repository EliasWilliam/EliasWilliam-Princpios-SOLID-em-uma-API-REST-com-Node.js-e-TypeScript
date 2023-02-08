import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {
 private transporter: Mail;

 constructor() {
    this.transporter = nodemailer.createTransport({
     host:'smtp.mailtrap.io',
     port: 2525,
     auth: {
        user: 'e5f1f9a4bbe5c0',
        pass: '7a29ab1d0cc9ad'
     }
      
    })
 }   
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
  })
}
}
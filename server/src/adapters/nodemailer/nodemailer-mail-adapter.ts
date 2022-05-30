import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "99a7cdb143a6b1",
        pass: "5402bc1ffdedfc"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        // Função assíncrona para aguardar essa função antes de ir para o retorno
        await transport.sendMail({
            from: 'Equip Feedget <equipe@feedget.com>',
            to: 'Lucas Aprigio <lucsaprigio@hotmail.com>',
            subject: 'Novo feedback',
            html: body
        })
    };
}
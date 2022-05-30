// Dados do E-mail
export interface SendMailData {
    subject: string;
    body: string;
}

// Método de envio de -e-mail.
export interface MailAdapter {
    sendMail: (data: SendMailData) => Promise<void>;
}
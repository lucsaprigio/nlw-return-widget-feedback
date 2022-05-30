import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/FeedbacksRepository";

// Camada de Regra de Negócio da aplicação
interface SubmitFeedbackUSeCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

// Executa uma submissão de um novo Feedback
export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}

    async execute(request: SubmitFeedbackUSeCaseRequest) {
        // Salvar o Feedback no Banco (Execução)
        const { type, comment, screenshot } = request;

        if (!type) {
            throw new Error ('Type is required')
        }

        if (!comment) {
            throw new Error ('Comment is required')
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error ('Invalid screenshot format')
        }

        await this.feedbacksRepository.create({
            type, 
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-ferif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n'),
        })
    }
}
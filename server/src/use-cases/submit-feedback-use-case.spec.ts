import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";


describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,71263781fsq',
        })).resolves.not.toThrow();
    })


    it('should be able to submit a feedback without type', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        )

        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,71263781fsq',
        })).rejects.toThrow();
    })

    it('should be able to submit a feedback without comment', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,71263781fsq',
        })).rejects.toThrow();
    })

    it('should be able to submit a feedback ', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: '123',
        })).rejects.toThrow();
    })
});
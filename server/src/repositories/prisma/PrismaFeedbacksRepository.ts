import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../FeedbacksRepository";

// Método de criação de um feedback
export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    }
}
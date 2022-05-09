import { IFeedbacksRepository } from "../feedbacks-repository";

export interface ISubmitFeedBackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(private feedbacksRepository: IFeedbacksRepository) {}
  async execute(request: ISubmitFeedBackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
  }
}

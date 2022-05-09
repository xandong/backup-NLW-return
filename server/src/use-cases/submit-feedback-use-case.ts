import { IMailAdapter } from "../adapters/mail-adapter";
import { IFeedbacksRepository } from "../repositories/feedbacks-repository";

export interface ISubmitFeedBackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: IFeedbacksRepository,
    private mailAdapter: IMailAdapter
  ) {}

  async execute(request: ISubmitFeedBackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("Comment is required.");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="display: flex; flex-direction: column; padding: 24px; font-family: sans-serif; font-size: 16px; color: whitesmoke; background-color: rgba(0,0,0,0.8);">`,
        `<h1>Você recebeu um novo feedback</h1>`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `<img style="min-height: 240px; width: auto" src=${screenshot} alt="Screenshot do motivo feedback">`,
        `<small style="text-align: center;">Este é um email automático.<br>Equipe Ventus Digital.</small>`,
        `</div>`,
      ].join("\n"),
    });
  }
}

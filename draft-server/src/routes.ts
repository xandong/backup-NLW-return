import express from "express";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./repositories/use-cases/submit-feedback-use-case";

export const routes = express.Router();

// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "6abfabe01bf871",
//     pass: "66a5647d321a12",
//   },
// });

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await submitFeedbackUseCase.execute({
    type,
    comment: comment,
    screenshot: screenshot,
  });

  // await transport.sendMail({
  //   from: "Equipe Ventus Digital <ventusdigital@gmail.com>",
  //   to: "Alexandre Gurgel <xandongurgel@gmail.com>",
  //   subject: "Novo feedback",
  //   html: [
  //     `<div style="display: flex; flex-direction: column; padding: 24px; font-family: sans-serif; font-size: 16px; color: whitesmoke; background-color: rgba(0,0,0,0.8);">`,
  //     `<h1>Você recebeu um novo feedback</h1>`,
  //     `<p>Tipo do Feedback: ${type}</p>`,
  //     `<p>Comentário: ${comment}</p>`,
  //     `<img style="min-height: 240px; width: auto" src=${screenshot} alt="Screenshot do motivo feedback">`,
  //     `<small style="text-align: center;">Este é um email automático.<br>Equipe Ventus Digital.</small>`,
  //     `</div>`,
  //   ].join("\n"),
  // });

  return res.status(201).send();
});

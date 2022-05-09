import express from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json);

const port = 3000;

app.use(routes);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log("\u001b[32m" + `Server on:\nhttp://localhost:${port}`);
});

// import express from "express";
// import nodemailer from "nodemailer";
// import { prisma } from "./prisma";

// const app = express();
// app.use(express.json());
// const port = 3000;

// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "6abfabe01bf871",
//     pass: "66a5647d321a12",
//   },
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/feedbacks", async (req, res) => {
//   const { type, comment, screenshot } = req.body;

//   await prisma.feedback.create({
//     data: {
//       type, // shorthand
//       comment: comment,
//       screenshot: screenshot,
//     },
//   });

//   await transport.sendMail({
//     from: "Equipe Ventus Digital <ventusdigital@gmail.com>",
//     to: "Alexandre Gurgel <xandongurgel@gmail.com>",
//     subject: "Novo feedback",
//     html: [
//       `<div style="display: flex; flex-direction: column; padding: 24px; font-family: sans-serif; font-size: 16px; color: whitesmoke; background-color: rgba(0,0,0,0.8);">`,
//       `<h1>Você recebeu um novo feedback</h1>`,
//       `<p>Tipo do Feedback: ${type}</p>`,
//       `<p>Comentário: ${comment}</p>`,
//       `<img style="min-height: 240px; width: auto" src=${screenshot} alt="Screenshot do motivo feedback">`,
//       `<small style="text-align: center;">Este é um email automático.<br>Equipe Ventus Digital.</small>`,
//       `</div>`,
//     ].join("\n"),
//   });

//   // return res.status(201).json({ data: feedback });
//   return res.status(201).send(`Cliente criado com sucesso!\n`);
// });

// let verde = "\u001b[32m";
// app.listen(port, () => {
//   console.log(verde + `Server on:\nhttp://localhost:${port}`);
// });

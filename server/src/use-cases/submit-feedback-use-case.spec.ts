import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// test("sum 2 + 2", () => {
//   expect(2 + 2).toBe(4);
// });
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy }, // || async () => {} },
  { sendMail: sendMailSpy } // || async () => {} }
);

describe("Submit feedback", () => {
  test("submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Testando 1, 2, 3",
        screenshot: "data:image/png;base64",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toBeCalled();
    expect(sendMailSpy).toBeCalled();
  });

  test("not submit a feedback, type invalid", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Testando 1, 2, 3",
        screenshot: "data:image/png;base64",
      })
    ).rejects.toThrow();
  });

  test("not submit a feedback, comment invalid", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64",
      })
    ).rejects.toThrow();
  });

  test("not submit a feedback, screenshot invalid", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Testando 1, 2, 3",
        screenshot: "formatInvalid",
      })
    ).rejects.toThrow();
  });
});

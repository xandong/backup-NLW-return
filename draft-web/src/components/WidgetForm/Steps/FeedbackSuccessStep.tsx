import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

interface IFeedbackSuccessStepProps {
  sendNewFeedback: (type: boolean) => void;
}

export function FeedbackSuccessStep({
  sendNewFeedback,
}: IFeedbackSuccessStepProps) {
  return (
    <>
      <header className="flex gap-2">
        <label>Enviado ✅</label>
        <CloseButton />
      </header>
      <label className="p-6">Agradecemos seu Feedback!</label>
      <footer>
        <button
          onClick={() => sendNewFeedback(false)}
          className="text-sm w-full p-2 mb-6 bg-brand-500 border-transparent rounded hover:bg-brand-300 focus:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          type="submit"
        >
          Enviar outro feedback
        </button>
      </footer>
    </>
  );
}

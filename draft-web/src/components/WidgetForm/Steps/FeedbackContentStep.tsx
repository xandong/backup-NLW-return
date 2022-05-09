import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";

import { PrintScreenshot } from "../../PrintScreenshot";

interface IFeedbackContentStep {
  feedbackType: FeedbackType;
  resetType: (type: null) => void;
  w: (type: boolean) => void;
}

export function FeedbackContentStep({
  feedbackType,
  resetType,
  onFeedbackSent,
}: IFeedbackContentStep) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [textarea, setTextarea] = useState("");
  const [onLoading, setOnLoading] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const feedbackTitle = feedbackTypeInfo.title;

  function handlerSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setOnLoading(true);
    setTimeout(() => {
      onFeedbackSent(true);
      setOnLoading(false);
    }, 1000);

    console.log({
      feedbackTitle,
      textarea,
      screenshot,
    });
  }

  return (
    <>
      <header className="flex gap-2">
        <button
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          title="Voltar para a seleção de Feedback"
        >
          <ArrowLeft onClick={() => resetType(null)} className="h-4 w-4" />
        </button>

        <CloseButton />
        <img
          className="w-6 h-6"
          src={feedbackTypeInfo.image.source}
          alt={feedbackTypeInfo.image.alt}
        />
        <label className="text-xl leading-6">{feedbackTypeInfo.title}</label>
      </header>
      <form onSubmit={handlerSubmitFeedback} className="my-4 w-full">
        <textarea
          onChange={(event) => setTextarea(event.target.value)}
          className="md:w-[19rem] w-full min-h-[112px] h-[5rem] bg-zinc-800 placeholder-zinc-400 text-zinc-100 border-zinc-700 rounded-lg focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Está com algum problema? Insira aqui para que possamos lhe ajudar."
        />

        <footer className="relative mt-2 flex gap-2">
          <PrintScreenshot
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            disabled={screenshot == null ? textarea.length <= 8 : false}
            className="text-sm flex-1 flex items-center justify-center p-2 bg-brand-500 border-transparent rounded hover:bg-brand-300 focus:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            type="submit"
          >
            {onLoading ? <Loading /> : <p>Enviar</p>}
          </button>
        </footer>
      </form>
    </>
  );
}

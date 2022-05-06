import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

// CHAVE DE (o tipo) da variavel => BUG | IDEA | OTHER
export type FeedbackType = keyof typeof feedbackTypes;
// Object.entries(feedbackTypes) =>
// [
//   ['BUG', {...}],
//   ['IDEA', {...}],
//   ['OTHER', {...}]
// ]

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  return (
    <div className="mb-2 p-4 bg-zinc-900 text-zinc-100 rounded-lg flex flex-col items-center shadow-lg shadow-zinc-800 border-2 border-zinc-800 w-[calc(100vw-2rem)] md:w-auto">
      {/*NAO TEM 'feedbackType'? se sim faz isso : se não faz isso */}
      {feedbackSent ? (
        <FeedbackSuccessStep sendNewFeedback={setFeedbackSent} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={setFeedbackSent}
              feedbackType={feedbackType}
              resetType={setFeedbackType}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito por{" "}
        <a
          className="underline underline-offset-2"
          href="https://instagram.com/xandongurgel"
          target="_blank"
        >
          Alexandre Gurgel
        </a>
      </footer>
    </div>
  );
}

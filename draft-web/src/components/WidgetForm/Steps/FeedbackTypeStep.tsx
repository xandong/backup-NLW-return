import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface IFeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: IFeedbackTypeStepProps) {
  return (
    <>
      <header className="flex">
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>
      <main className="flex py-8 gap-2 w-full flex-wrap">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              // KEY SEMPRE VAI SER DO TIPO FeedbackType
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="flex flex-col  items-center flex-1 w-24 min-w-[5rem] h-auto  py-4 gap-4 bg-zinc-800 rounded-lg border-2 border-transparent hover:border-[#8257E5] focus:border-[#8257E5] focus:outline-none"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <label>{value.title}</label>
            </button>
          );
        })}
      </main>
    </>
  );
}

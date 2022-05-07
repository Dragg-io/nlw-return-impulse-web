import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../../libs/api";
import { CloseButton } from "../../CloseButton/CloseButton";
import { Loading } from "../../Loading/Loading";
import { ScreenshotButton } from "../ScreenshotButton/ScreenshotButton";
import { FeedbackType, feedBackTypes } from "../WidgetForm";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackSent: () => void;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const feedBackTypeInfos = feedBackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />{ }
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedBackTypeInfos.image.source} alt={feedBackTypeInfos.image.alt} className="w-6 h-6" />
          {feedBackTypeInfos.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full">
        <textarea
          onChange={event => setComment(event.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-400 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />
          <button
            type="submit"
            onClick={handleSubmitFeedback}
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}

          </button>
        </footer>
      </form>
    </>

  )
}
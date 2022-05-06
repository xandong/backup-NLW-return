import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";

import lixeiraUrl from "../assets/trash-16px.svg";
import { useState } from "react";
import { Loading } from "./Loading";

interface IPrintScreenshotProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function PrintScreenshot({
  screenshot,
  onScreenshotTook,
}: IPrintScreenshotProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);

    const base64image = canvas.toDataURL("image/png");

    setTimeout(() => {
      setIsTakingScreenshot(false);
      onScreenshotTook(base64image);
    }, 300);
  }

  function deleteScreenshot() {
    onScreenshotTook(null);
    setIsTakingScreenshot(true);
    setTimeout(() => {
      setIsTakingScreenshot(false);
    }, 300);
  }

  if (screenshot) {
    return (
      <button
        onClick={deleteScreenshot}
        className="text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 focus:text-zinc-300 p-1 bg-zinc-900 rounded-md  transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 overflow-hidden"
      >
        <img
          src={screenshot}
          alt="Screenshot do problema"
          className="w-8 h-8 rounded"
        />
        <Trash
          weight="fill"
          className="absolute bottom-[.75rem] left-[0.75rem]"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 " />}
    </button>
  );
}

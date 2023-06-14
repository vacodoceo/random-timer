"use client";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { getRandomSound } from "../helpers/get-random-sound";

export const CambiazoAnnounce = () => {
  useEffect(() => {
    const sound = new Audio(getRandomSound());
    sound.play();
    console.log({ sound });
  }, []);

  const [secondsLeft, setSecondsLeft] = useState(10);
  const [animation, setAnimation] = useState("animate-bounce");

  useEffect(() => {
    if (secondsLeft === 9) {
      setAnimation("animate-none");
    } else if (secondsLeft === 7) {
      setAnimation("animate-spin");
    } else if (secondsLeft === 5) {
      setAnimation("animate-none");
    } else if (secondsLeft === 2) {
      setAnimation("animate-ping");
    }

    const timerId = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 500);

    return () => clearTimeout(timerId);
  }, [secondsLeft]);

  return (
    <div className="absolute inset-y-0 flex items-center justify-center inset-x-0 overflow-hidden">
      <ReactConfetti numberOfPieces={1000} />
      <h1
        className={`transition duration-1000 ease-in-out text-[160px] ${animation} font-bold gradient-text drop-shadow-xl`}
      >
        CAAAAMBIAAZOO
      </h1>
    </div>
  );
};

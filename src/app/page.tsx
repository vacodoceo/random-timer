"use client";

import { useEffect, useState } from "react";
import { TimerDisplay } from "./components/timer";
import { CambiazoAnnounce } from "./components/cambiazo-announce";
import { random } from "lodash-es";

export type TimerStatus = "running" | "stopped";

export default function Home() {
  const [timerStatus, setTimerStatus] = useState<TimerStatus>("stopped");
  const [secondsLeft, setSecondsLeft] = useState(random(10, 30));
  const [isCambiazo, setIsCambiazo] = useState(false);

  useEffect(() => {
    if (secondsLeft > 0 && timerStatus === "running") {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [secondsLeft, timerStatus]);

  useEffect(() => {
    if (secondsLeft === 0) {
      setIsCambiazo(true);

      const timerId = setTimeout(() => {
        setSecondsLeft(random(10, 30));
        setIsCambiazo(false);
      }, 5000);

      return () => clearTimeout(timerId);
    }
  }, [secondsLeft]);

  const toggleTimerStatus = () => {
    if (timerStatus === "running") {
      setTimerStatus("stopped");
    } else {
      setTimerStatus("running");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {isCambiazo ? (
        <CambiazoAnnounce />
      ) : (
        <TimerDisplay
          secondsLeft={secondsLeft}
          toggleTimerStatus={toggleTimerStatus}
          timerStatus={timerStatus}
        />
      )}
    </div>
  );
}

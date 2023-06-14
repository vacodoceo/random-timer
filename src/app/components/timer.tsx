import { Transition, TransitionStatus } from "react-transition-group";
import { TimerStatus } from "../page";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: Partial<Record<TransitionStatus, any>> = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

export const TimerDisplay = ({
  secondsLeft,
  toggleTimerStatus,
  timerStatus,
}: {
  secondsLeft: number;
  toggleTimerStatus: () => void;
  timerStatus: TimerStatus;
}) => (
  <Transition in={true} timeout={duration} appear>
    {(state) => (
      <div
        className="flex flex-col w-2/3 justify-center items-center py-16 rounded-3xl bg-pink-50"
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <span className="text-cyan-500 text-5xl">Siguiente cambiazo:</span>
        <span className="text-cyan-500 text-[144px] font-bold">
          {secondsLeft} segundos
        </span>
        <button
          type="button"
          onClick={toggleTimerStatus}
          className="rounded-lg bg-cyan-500 px-6 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-cyan-700 mt-8"
        >
          {timerStatus === "stopped" ? "Reanudar" : "Detener"}
        </button>
      </div>
    )}
  </Transition>
);

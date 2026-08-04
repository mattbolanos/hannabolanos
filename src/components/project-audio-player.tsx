"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectAudioPlayerProps {
  label: string;
  src: string;
}

const AUDIO_LINE_MOTION = [
  "motion-safe:animate-[audio-line_820ms_ease-in-out_infinite]",
  "motion-safe:animate-[audio-line_1040ms_ease-in-out_-260ms_infinite]",
  "motion-safe:animate-[audio-line_720ms_ease-in-out_-120ms_infinite]",
  "motion-safe:animate-[audio-line_940ms_ease-in-out_-380ms_infinite]",
];

function formatTime(seconds: number | null) {
  if (seconds === null || !Number.isFinite(seconds) || seconds < 0) {
    return "--:--";
  }

  const totalSeconds = Math.floor(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function AudioLinesIcon({ isPlaying }: { isPlaying: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-4 shrink-0 items-center justify-center gap-px"
    >
      {AUDIO_LINE_MOTION.map((motionClass, index) => (
        <span
          className={cn(
            "h-3 w-0.5 origin-center rounded-full bg-current",
            ["scale-y-40", "scale-y-75", "scale-y-100", "scale-y-60"][index],
            isPlaying && motionClass,
          )}
          key={motionClass}
        />
      ))}
    </span>
  );
}

function ProjectAudioPlayer({ label, src }: ProjectAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const syncCurrentTime = () => setCurrentTime(audio.currentTime);
    const syncDuration = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : null);
    };
    const play = () => setIsPlaying(true);
    const stop = () => setIsPlaying(false);
    const reset = () => {
      setCurrentTime(0);
      setDuration(null);
      setIsPlaying(false);
    };

    syncCurrentTime();
    syncDuration();

    audio.addEventListener("durationchange", syncDuration);
    audio.addEventListener("emptied", reset);
    audio.addEventListener("ended", stop);
    audio.addEventListener("loadedmetadata", syncDuration);
    audio.addEventListener("pause", stop);
    audio.addEventListener("play", play);
    audio.addEventListener("timeupdate", syncCurrentTime);

    return () => {
      audio.removeEventListener("durationchange", syncDuration);
      audio.removeEventListener("emptied", reset);
      audio.removeEventListener("ended", stop);
      audio.removeEventListener("loadedmetadata", syncDuration);
      audio.removeEventListener("pause", stop);
      audio.removeEventListener("play", play);
      audio.removeEventListener("timeupdate", syncCurrentTime);
    };
  }, []);

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  }

  function seekAudio(event: ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    const nextTime = Number(event.currentTarget.value);

    if (!audio || !Number.isFinite(nextTime)) return;

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  const progress = duration ? Math.min(currentTime / duration, 1) : 0;
  const progressPercentage = `${progress * 100}%`;
  const playbackStatus = isPlaying
    ? "Playing"
    : currentTime > 0
      ? "Paused"
      : "Listen now";

  return (
    <div className="w-full max-w-[23rem]">
      {/* biome-ignore lint/a11y/useMediaCaption: Audio-only source files do not have timed caption tracks. */}
      <audio preload="metadata" ref={audioRef} src={src} />

      <div className="group/player grid min-h-20 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-[2rem] bg-white p-2 pe-4 text-[#253551] shadow-[0_0_0_1px_oklch(0_0_0/0.06),0_2px_4px_oklch(0_0_0/0.06),0_18px_40px_-22px_oklch(0_0_0/0.42)] transition-[box-shadow] duration-150 ease-out hover:shadow-[0_0_0_1px_oklch(0_0_0/0.08),0_3px_6px_oklch(0_0_0/0.08),0_22px_44px_-22px_oklch(0_0_0/0.48)] motion-reduce:transition-none">
        <button
          aria-label={`${isPlaying ? "Pause" : "Play"} ${label}`}
          className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-[#253551] text-white shadow-[0_0_0_1px_oklch(0_0_0/0.08),0_6px_14px_-6px_oklch(0_0_0/0.48)] transition-[background-color,box-shadow,scale] duration-150 ease-out hover:bg-[#1c2940] hover:shadow-[0_0_0_1px_oklch(0_0_0/0.1),0_8px_18px_-7px_oklch(0_0_0/0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#253551] active:scale-[0.96] motion-reduce:transition-none"
          onClick={togglePlayback}
          type="button"
        >
          <PlayIcon
            aria-hidden="true"
            className={cn(
              "absolute size-4 translate-x-px fill-current transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
              isPlaying
                ? "scale-25 opacity-0 blur-[4px]"
                : "blur-0 scale-100 opacity-100",
            )}
            strokeWidth={2}
          />
          <PauseIcon
            aria-hidden="true"
            className={cn(
              "absolute size-4 fill-current transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none",
              isPlaying
                ? "blur-0 scale-100 opacity-100"
                : "scale-25 opacity-0 blur-[4px]",
            )}
            strokeWidth={2}
          />
        </button>

        <div className="min-w-0 py-1">
          <div className="flex items-center justify-between gap-3">
            <span className="font-heading inline-flex min-w-0 items-center gap-1.5 text-[0.6875rem] leading-none font-semibold tracking-[0.12em] text-[#253551]/65 uppercase">
              <AudioLinesIcon isPlaying={isPlaying} />
              <span className="truncate">{playbackStatus}</span>
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-[0.6875rem] leading-none font-medium text-[#253551]/60 tabular-nums"
            >
              {formatTime(currentTime)}
              <span className="px-1 text-[#253551]/30">/</span>
              {formatTime(duration)}
            </span>
          </div>

          <p
            className="font-heading mt-1 truncate text-sm leading-5 font-semibold"
            title={label}
          >
            {label}
          </p>

          <div className="relative mt-1.5 flex h-6 items-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 h-1 overflow-hidden rounded-full bg-[#253551]/12"
            >
              <span
                className="block h-full rounded-full bg-[#253551] transition-[width] duration-200 ease-linear motion-reduce:transition-none"
                style={{ width: progressPercentage }}
              />
            </span>
            <input
              aria-label={`Seek ${label}`}
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
              className="absolute inset-0 h-6 w-full cursor-pointer appearance-none rounded-full bg-transparent focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#253551] disabled:cursor-default [&::-moz-range-progress]:bg-transparent [&::-moz-range-thumb]:size-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#253551] [&::-moz-range-thumb]:shadow-[0_0_0_3px_white] disabled:[&::-moz-range-thumb]:opacity-0 [&::-moz-range-track]:h-1 [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:mt-[-0.25rem] [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#253551] [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_white] disabled:[&::-webkit-slider-thumb]:opacity-0"
              disabled={duration === null}
              max={duration ?? 0}
              min="0"
              onChange={seekAudio}
              step="0.01"
              type="range"
              value={duration === null ? 0 : Math.min(currentTime, duration)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectAudioPlayer };

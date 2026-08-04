"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ProjectAudioPlayerProps {
  label: string;
  src: string;
}

function ProjectAudioPlayer({ label, src }: ProjectAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const stop = () => setIsPlaying(false);
    audio.addEventListener("ended", stop);
    audio.addEventListener("pause", stop);

    return () => {
      audio.removeEventListener("ended", stop);
      audio.removeEventListener("pause", stop);
    };
  }, []);

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  }

  return (
    <div>
      {/* biome-ignore lint/a11y/useMediaCaption: Audio-only source files do not have timed caption tracks. */}
      <audio preload="metadata" ref={audioRef} src={src} />
      <button
        aria-label={`${isPlaying ? "Pause" : "Play"} ${label}`}
        className="group/player flex min-h-16 min-w-64 items-stretch overflow-hidden rounded-full bg-white text-left text-[#171717] shadow-[0_1px_0_oklch(0_0_0/0.08),0_8px_24px_oklch(0_0_0/0.1)] transition-transform duration-150 ease-out active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
        onClick={togglePlayback}
        type="button"
      >
        <span className="relative flex w-16 shrink-0 items-center justify-center border-r border-black/10">
          <PlayIcon
            aria-hidden="true"
            className={`absolute size-5 translate-x-px fill-current transition-[opacity,scale,filter] duration-150 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none ${
              isPlaying
                ? "scale-25 opacity-0 blur-[4px]"
                : "scale-100 opacity-100 blur-0"
            }`}
            strokeWidth={2}
          />
          <PauseIcon
            aria-hidden="true"
            className={`absolute size-5 fill-current transition-[opacity,scale,filter] duration-150 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none ${
              isPlaying
                ? "scale-100 opacity-100 blur-0"
                : "scale-25 opacity-0 blur-[4px]"
            }`}
            strokeWidth={2}
          />
        </span>
        <span className="flex min-w-0 flex-col justify-center px-4 py-3">
          <span className="font-heading text-sm font-semibold">Listen Now</span>
          <span className="max-w-48 truncate text-xs text-black/50">
            {label}
          </span>
        </span>
      </button>
    </div>
  );
}

export { ProjectAudioPlayer };

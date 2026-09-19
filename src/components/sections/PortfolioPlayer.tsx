import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/data/portfolio";

export function PortfolioPlayer({ item }: { item: PortfolioItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showQuality, setShowQuality] = useState(false);
  const [quality, setQuality] = useState(item.sources[0].quality);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const changeQuality = (q: typeof quality) => {
    const v = videoRef.current;
    if (!v) return;
    const time = v.currentTime;
    const wasPlaying = !v.paused;
    setQuality(q);
    setShowQuality(false);
    const newSrc = item.sources.find((s) => s.quality === q)?.src;
    if (newSrc) {
      v.src = newSrc;
      v.currentTime = time;
      if (wasPlaying) v.play();
    }
  };

  const currentSrc = item.sources.find((s) => s.quality === quality)?.src;

  const [w, h] = item.aspectRatio.split("/").map(Number);
  const isPortrait = w / h < 1;

  return (
    <div
      style={{ aspectRatio: item.aspectRatio.replace("/", " / ") }}
      className={cn(
        "relative overflow-hidden group w-full mx-auto transition-[max-width] duration-500",
        isPortrait ? "max-w-xs sm:max-w-sm" : "max-w-4xl",
      )}
    >
      <video
        ref={videoRef}
        src={currentSrc}
        muted
        playsInline
        preload="metadata"
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        onLoadedMetadata={(e) => {
          e.currentTarget.currentTime = 0.001;
        }}
        onContextMenu={(e) => e.preventDefault()}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* subtle gradient for legibility — always visible on mobile, hover on desktop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

      {/* controls — always visible on mobile, hover on desktop */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 p-4 opacity-100 translate-y-0 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0 transition-all duration-500">
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="h-10 w-10 rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-md flex items-center justify-center text-white hover:bg-white/[0.18] hover:border-white/25 transition-colors duration-300"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause size={16} />
            ) : (
              <Play size={16} className="ml-0.5" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="h-10 w-10 rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-md flex items-center justify-center text-white hover:bg-white/[0.18] hover:border-white/25 transition-colors duration-300"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2">
          {item.sources.length > 1 && (
            <div className="relative">
              <button
                onClick={() => setShowQuality((v) => !v)}
                className="flex items-center gap-1 h-10 rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-md px-3 text-xs tracking-widest uppercase text-white hover:bg-white/[0.18] hover:border-white/25 transition-colors duration-300"
              >
                {quality}
                <ChevronDown size={12} />
              </button>
              {showQuality && (
                <div className="absolute bottom-full mb-2 right-0 rounded-lg border border-white/15 bg-black/90 backdrop-blur-md overflow-hidden min-w-[72px]">
                  {item.sources.map((s) => (
                    <button
                      key={s.quality}
                      onClick={() => changeQuality(s.quality)}
                      className={cn(
                        "block w-full text-left px-3 py-2 text-xs tracking-widest uppercase text-white/70 hover:bg-white/10 hover:text-white transition-colors",
                        s.quality === quality && "text-gold",
                      )}
                    >
                      {s.quality}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => videoRef.current?.requestFullscreen()}
            className="h-10 w-10 rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-md flex items-center justify-center text-white hover:bg-white/[0.18] hover:border-white/25 transition-colors duration-300"
            aria-label="Fullscreen"
          >
            <Maximize size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

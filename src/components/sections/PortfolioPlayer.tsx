import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/data/portfolio";

export function PortfolioPlayer({ item }: { item: PortfolioItem }) {
  const [w, h] = item.aspectRatio.split("/").map(Number);
  const isPortrait = w / h < 1;

  return (
    <div
      style={{ aspectRatio: item.aspectRatio.replace("/", " / ") }}
      className={cn(
        "relative overflow-hidden bg-black w-full mx-auto transition-[max-width] duration-500",
        isPortrait ? "max-w-xs sm:max-w-sm" : "max-w-4xl",
      )}
    >
      <iframe
        src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
        title={item.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}

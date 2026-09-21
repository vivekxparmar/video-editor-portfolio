import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { PortfolioPlayer } from "./PortfolioPlayer";
import { Reveal } from "@/components/common/Reveal";

export function Portfolio() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % PORTFOLIO_ITEMS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length);

  const current = PORTFOLIO_ITEMS[index];
  const total = PORTFOLIO_ITEMS.length;

  return (
    <section id="portfolio" className="relative py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* header — editorial */}
        <Reveal className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
              02
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
            <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              Portfolio
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="font-[Playfair_Display] text-5xl sm:text-6xl font-bold text-foreground leading-[1.05] max-w-2xl">
                Selected work.
              </h2>
              <p className="mt-6 max-w-lg text-foreground/55 text-lg leading-relaxed">
                A curated set of edits, cinematic, promotional, and
                social-first.
              </p>
            </div>
            {/* counter */}
            <div className="font-[Playfair_Display] text-xs tracking-[0.35em] text-foreground/40 tabular-nums shrink-0">
              <span className="text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mx-2">/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </div>
          </div>
        </Reveal>

        {/* player */}
        <Reveal delay={0.1}>
          <PortfolioPlayer item={current} />
        </Reveal>

        {/* meta row: title + navigation */}
        <Reveal
          delay={0.15}
          className="mt-10 grid grid-cols-[1fr_auto] gap-6 items-end"
        >
          {/* current item meta */}
          <div className="min-w-0">
            <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              {current.category}
            </span>
            <h3 className="mt-3 font-[Playfair_Display] text-2xl sm:text-3xl font-bold text-foreground truncate">
              {current.title}
            </h3>
          </div>

          {/* nav */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="group h-11 w-11 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/60 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-0.5 transition-transform duration-300"
              />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="group h-11 w-11 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/60 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </button>
          </div>
        </Reveal>

        {/* progress line */}
        <Reveal delay={0.2} className="mt-8">
          <div className="relative h-px w-full bg-foreground/10">
            <div
              className="absolute top-0 left-0 h-px bg-gold transition-all duration-500 ease-out"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

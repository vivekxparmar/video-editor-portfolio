import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { GRAPHIC_ITEMS } from "@/data/graphics";
import { Reveal } from "@/components/common/Reveal";

const ALL = "All";

export function GraphicDesign() {
  const [filter, setFilter] = useState(ALL);
  const [active, setActive] = useState<number | null>(null); // index in `items`
  const touchX = useRef<number | null>(null);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(GRAPHIC_ITEMS.map((i) => i.category)))],
    [],
  );

  const items = useMemo(
    () =>
      filter === ALL
        ? GRAPHIC_ITEMS
        : GRAPHIC_ITEMS.filter((i) => i.category === filter),
    [filter],
  );

  const total = items.length;
  const current = active !== null ? items[active] : null;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % total)),
    [total],
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + total) % total)),
    [total],
  );

  // keyboard + body scroll lock while lightbox is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, next, prev]);

  // swipe on mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section id="graphics" className="relative py-12 px-6">
      <div className="mx-auto max-w-6xl sm:px-6 px-0">
        {/* header — editorial */}
        <Reveal className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
              03
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
            <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              Graphic Design
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="font-[Anta] text-5xl sm:text-6xl font-bold text-foreground leading-[1.05] max-w-2xl">
                Visual work.
              </h2>
              <p className="mt-6 max-w-lg text-foreground/55 text-lg leading-relaxed">
                Posters, thumbnails, and brand visuals, built to stop the
                scroll.
              </p>
            </div>
            <div className="font-[Anta] text-xs tracking-[0.35em] text-foreground/40 tabular-nums shrink-0">
              <span className="text-gold">
                {String(total).padStart(2, "0")}
              </span>
              <span className="mx-2">/</span>
              <span>{String(GRAPHIC_ITEMS.length).padStart(2, "0")}</span>
            </div>
          </div>
        </Reveal>

        {/* filters */}
        {categories.length > 2 && (
          <Reveal delay={0.1} className="mb-10">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`relative pb-2 text-[11px] tracking-[0.35em] uppercase transition-colors duration-300 ${
                    filter === c
                      ? "text-gold"
                      : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  {c}
                  <span
                    className={`absolute left-0 bottom-0 h-px bg-gold transition-all duration-500 ease-out ${
                      filter === c ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* masonry grid — keeps each image's original aspect ratio */}
        <div className="flex flex-wrap justify-center gap-5">
          {items.map((item, i) => (
            <Reveal
              key={`${filter}-${item.id}`}
              delay={Math.min(i, 6) * 0.05}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <button
                onClick={() => setActive(i)}
                aria-label={`Open ${item.title}`}
                className="group relative block w-full aspect-[4/5] overflow-hidden rounded-xl border border-foreground/10 hover:border-gold/60 transition-colors duration-500 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[10px] tracking-[0.35em] text-gold uppercase">
                    {item.category}
                  </span>
                  <p className="mt-1 font-[Anta] text-lg text-white truncate">
                    {item.title}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-foreground/50">Nothing in this category yet.</p>
        )}
      </div>

      {/* lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-xl"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* top bar */}
          <div
            className="flex items-center justify-between px-5 sm:px-8 py-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-[Anta] text-xs tracking-[0.35em] text-white/40 tabular-nums">
              <span className="text-gold">
                {String(active! + 1).padStart(2, "0")}
              </span>
              <span className="mx-2">/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </div>
            <button
              onClick={close}
              aria-label="Close"
              className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              <X size={16} />
            </button>
          </div>

          {/* image */}
          <div className="flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20">
            <img
              key={current.id}
              src={current.src}
              alt={current.title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          </div>

          {/* meta + nav */}
          <div
            className="px-5 sm:px-8 pt-5 pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-w-6xl grid grid-cols-[1fr_auto] gap-6 items-end">
              <div className="min-w-0">
                <span className="text-[11px] tracking-[0.35em] text-white/40 uppercase">
                  {current.category}
                </span>
                <h3 className="mt-2 font-[Anta] text-xl sm:text-3xl font-bold text-white truncate">
                  {current.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="group h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  <ArrowLeft
                    size={16}
                    className="group-hover:-translate-x-0.5 transition-transform duration-300"
                  />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="group h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>

            {/* progress line */}
            <div className="mx-auto max-w-6xl mt-6 relative h-px w-full bg-white/10">
              <div
                className="absolute top-0 left-0 h-px bg-gold transition-all duration-500 ease-out"
                style={{ width: `${((active! + 1) / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { Film, Megaphone, Clapperboard, Camera } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

const SERVICES = [
  {
    icon: Film,
    title: "Cinematic Storytelling",
    desc: "Documentary-style and narrative edits that turn raw footage into a compelling story with proper pacing and emotion.",
  },
  {
    icon: Megaphone,
    title: "Brand Promotional Content",
    desc: "Product, service, and event promos designed to convert viewers into customers, punchy, fast-paced, and on-brand.",
  },
  {
    icon: Camera,
    title: "Social Media Content",
    desc: "Reels, shorts, and talking-head edits optimized for retention and algorithm-friendly pacing across platforms.",
  },
  {
    icon: Clapperboard,
    title: "Motion Graphics & Titles",
    desc: "Custom typography, intros/outros, and motion graphics that give your content a polished, professional identity.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* header — editorial */}
        <Reveal className="mb-20">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
              02
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
            <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              Services
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-5xl sm:text-6xl font-bold text-foreground leading-[1.05] max-w-2xl">
            What I can do for you.
          </h2>
          <p className="mt-6 max-w-lg text-foreground/55 text-lg leading-relaxed">
            From raw footage to scroll-stopping edits, every frame crafted with
            intent.
          </p>
        </Reveal>

        {/* services — numbered editorial list */}
        <div className="border-t border-foreground/10">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_2fr] gap-6 md:gap-10 py-8 border-b border-foreground/10">
                  {/* number + icon */}
                  <div className="flex flex-col items-center gap-3 pt-1">
                    <span className="font-[Playfair_Display] text-xs text-foreground/30 tabular-nums group-hover:text-gold transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      size={16}
                      className="text-foreground/40 group-hover:text-gold transition-colors duration-300"
                    />
                  </div>

                  {/* title */}
                  <h3 className="font-[Playfair_Display] text-xl sm:text-2xl font-bold text-foreground leading-snug group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>

                  {/* description */}
                  <p className="col-start-2 md:col-start-3 text-sm text-foreground/60 leading-relaxed max-w-md">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

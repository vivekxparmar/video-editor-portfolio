import {
  FaCut,
  FaFilm,
  FaLayerGroup,
  FaFont,
  FaShoppingBag,
  FaBullhorn,
  FaCalendarAlt,
  FaUser,
  FaMicrophone,
  FaBookOpen,
  FaMagic,
  FaImage,
  FaAdversal,
} from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";

import { Reveal } from "@/components/common/Reveal";

const EDITING_STYLES = [
  { icon: FaCut, label: "Basic Cuts & Pacing" },
  { icon: FaFilm, label: "Documentary Style" },
  { icon: FaLayerGroup, label: "Motion Graphics" },
  { icon: FaFont, label: "Kinetic Typography" },
  { icon: FaShoppingBag, label: "Product Promotional" },
  { icon: FaBullhorn, label: "Service Promotional" },
  { icon: FaCalendarAlt, label: "Event Promotional" },
  { icon: FaUser, label: "Talking Head Style" },
  { icon: FaMicrophone, label: "Podcast Clipping" },
  { icon: FaBookOpen, label: "Storytelling Edits" },
  { icon: FaClapperboard, label: "Trailer Style" },
  { icon: FaMagic, label: "Intros & Outros" },
  { icon: FaImage, label: "Poster Editing" },
  { icon: FaAdversal, label: "Product Ads & Reviews" },
];

const TOOLS = [
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Topaz Video AI",
  "FFmpeg",
  "DaVinci Resolve",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* header — left aligned, editorial */}
        <Reveal className="mb-20">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
              03
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
            <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              Expertise
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-5xl sm:text-6xl font-bold text-foreground leading-[1.05] max-w-2xl">
            Styles I master.
          </h2>
          <p className="mt-6 max-w-lg text-foreground/55 text-lg leading-relaxed">
            From cinematic storytelling to conversion-driven promos<br></br>{" "}
            every style the modern content market demands.
          </p>
        </Reveal>

        {/* styles — numbered list, no boxes */}
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-0 border-t border-foreground/10">
          {EDITING_STYLES.map((style, i) => {
            const Icon = style.icon;
            return (
              <Reveal key={i} delay={(i % 2) * 0.04}>
                <div className="group flex items-center gap-4 py-5 border-b border-foreground/10 transition-colors duration-300">
                  <span className="font-[Playfair_Display] text-xs text-foreground/30 w-6 tabular-nums group-hover:text-gold transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    size={15}
                    className="text-foreground/40 group-hover:text-gold transition-colors duration-300 shrink-0"
                  />
                  <span className="text-[15px] text-foreground/80 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                    {style.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* tools — simple inline text */}
        <Reveal delay={0.2} className="mt-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              Toolkit
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-2 sm:gap-x-8 sm:gap-y-3">
            {TOOLS.map((tool, i) => (
              <span
                key={i}
                className="font-[Playfair_Display] text-xl sm:text-2xl text-foreground/70 hover:text-gold transition-colors duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

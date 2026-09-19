import { GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

const TIMELINE = [
  {
    year: "Schooling",
    title: "St. Xavier's High School",
    desc: "Built the foundation, discipline and curiosity that later shaped a technical + creative mindset.",
  },
  {
    year: "B.Tech IT",
    title: "G H Patel College of Engineering & Technology",
    desc: "Graduated with a 9.09 CGPA, CVM University, while simultaneously building a video editing practice on the side.",
  },
  {
    year: "Internship",
    title: "Tech Elecon Pvt. Ltd.",
    desc: "6-month hands-on industry experience, sharpening both technical and creative problem-solving.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-0 sm:py-5 md:py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* header — editorial */}
        <Reveal className="mb-20">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
              01
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
            <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              About
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-5xl sm:text-6xl font-bold text-foreground leading-[1.05] max-w-2xl">
            The person behind the edit.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* left — bio */}
          <Reveal className="md:col-span-5">
            <div className="flex items-center gap-2 text-foreground/40 text-[11px] tracking-[0.35em] uppercase mb-8">
              <MapPin size={12} />
              Anand, Gujarat, India
            </div>

            <p className="text-foreground/70 leading-relaxed">
              I'm <span className="text-foreground font-medium">Vivek</span>, a
              21-year-old video editor and visual storyteller. I blend a strong
              technical foundation from my Computer Engineering background with
              a sharp creative eye, every edit isn't just beautiful, it's built
              with precision and purpose.
            </p>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              What started as a passion project editing anime and phonk content
              has evolved into a full creative practice, from cinematic
              storytelling to high-conversion promotional work for brands.
            </p>
          </Reveal>

          {/* right — timeline as numbered editorial list */}
          <div className="md:col-span-7">
            <div className="border-t border-foreground/10">
              {TIMELINE.map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group grid grid-cols-[auto_1fr] gap-6 py-7 border-b border-foreground/10">
                    {/* number + icon column */}
                    <div className="flex flex-col items-center gap-3 pt-1">
                      <span className="font-[Playfair_Display] text-xs text-foreground/30 tabular-nums group-hover:text-gold transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <GraduationCap
                        size={15}
                        className="text-foreground/40 group-hover:text-gold transition-colors duration-300"
                      />
                    </div>

                    {/* content */}
                    <div>
                      <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
                        {item.year}
                      </span>
                      <h3 className="mt-2 font-[Playfair_Display] text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

type Channel =
  | {
      icon: typeof MdEmail;
      label: string;
      value: string;
      href: string;
      copyable?: false;
    }
  | {
      icon: typeof MdEmail;
      label: string;
      value: string;
      copyable: true;
    };

const CHANNELS: Channel[] = [
  {
    icon: MdEmail,
    label: "Email",
    value: "parmarvivek04102004@gmail.com",
    href: "mailto:parmarvivek04102004@gmail.com",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    value: "called_as_toji",
    href: "https://discord.com/users/",
  },
];

export function Contact() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1800);
    } catch {
      // silent fail
    }
  };

  return (
    <section id="contact" className="relative py-12 px-6">
      <div className="mx-auto max-w-5xl">
        {/* header — editorial */}
        <Reveal className="mb-20">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
              05
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
            <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              Contact
            </span>
          </div>
          <h2 className="font-[Playfair_Display] text-5xl sm:text-6xl font-bold text-foreground leading-[1.05] max-w-2xl">
            Let's create something great.
          </h2>
          <p className="mt-6 max-w-lg text-foreground/55 text-lg leading-relaxed">
            Have a project in mind? Feel free to reach out; let's work together.
          </p>
        </Reveal>

        {/* channels — numbered editorial list */}
        <div className="border-t border-foreground/10">
          {CHANNELS.map((channel, i) => {
            const Icon = channel.icon;
            const isCopied = copiedIndex === i;

            const content = (
              <>
                {/* number + icon */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <span className="font-[Playfair_Display] text-xs text-foreground/30 tabular-nums group-hover:text-gold transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    size={16}
                    className="text-foreground/40 group-hover:text-gold transition-colors duration-300"
                  />
                </div>

                {/* label + value */}
                <div className="min-w-0">
                  <span className="text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
                    {channel.label}
                  </span>
                  <p className="mt-2 font-[Playfair_Display] text-lg sm:text-2xl font-bold text-foreground truncate group-hover:translate-x-1 transition-transform duration-300">
                    {channel.value}
                  </p>
                </div>

                {/* arrow / check */}
                <div className="shrink-0">
                  {isCopied ? (
                    <Check
                      size={20}
                      className="text-gold transition-all duration-300"
                    />
                  ) : (
                    <ArrowUpRight
                      size={20}
                      className="text-foreground/30 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  )}
                </div>
              </>
            );

            const rowClass =
              "group grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 md:gap-10 items-center py-7 border-b border-foreground/10 transition-colors duration-300 cursor-pointer";

            return (
              <Reveal key={i} delay={i * 0.08}>
                {channel.copyable ? (
                  <button
                    type="button"
                    onClick={() => handleCopy(channel.value, i)}
                    className={`${rowClass} w-full text-left`}
                  >
                    {content}
                  </button>
                ) : (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    {content}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* footer line */}
        <Reveal
          delay={0.2}
          className="mt-16 flex items-center justify-between text-[11px] tracking-[0.35em] text-foreground/30 uppercase"
        >
          <span>Available for work</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Open 2026
          </span>
        </Reveal>
      </div>
    </section>
  );
}

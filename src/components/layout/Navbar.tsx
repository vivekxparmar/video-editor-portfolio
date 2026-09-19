import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const onMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();

      nav.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      nav.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    nav.addEventListener("mousemove", onMove);

    return () => {
      nav.removeEventListener("mousemove", onMove);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <nav
        ref={navRef}
        style={
          {
            "--mx": "50%",
            "--my": "50%",
          } as React.CSSProperties
        }
        className="relative mx-auto flex h-[64px] max-w-6xl items-center justify-between px-6"
      >
        <div
          className={cn(
            "absolute inset-0 overflow-hidden rounded-2xl",
            scrolled ? "visible opacity-100" : "invisible opacity-0",
          )}
        >
          <div
            className="absolute inset-0 rounded-2xl backdrop-blur-2xl backdrop-saturate-[180%]"
            style={{
              background: "rgba(255, 255, 255, 0.10)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(420px circle at var(--mx) var(--my), rgba(255,255,255,0.18), transparent 50%)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(300px circle at var(--mx) var(--my), rgba(212,175,55,0.10), transparent 55%)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            }}
          />

          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20 dark:border-white/10" />

          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)]" />
        </div>

        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="group relative z-10 font-[Playfair_Display] text-xl font-bold tracking-wide text-foreground md:text-2xl"
        >
          Vivek
          <span className="text-gold transition-none">.</span>
        </a>

        <ul className="relative z-10 hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative text-sm font-medium",
                  "text-muted-foreground",
                  "hover:text-foreground",
                  "transition-none",
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="relative z-10 hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className={cn(
              "rounded-full px-5 py-2.5",
              "border border-white/20",
              "bg-white/10",
              "text-sm font-medium",
              "text-foreground",
              "shadow-sm",
              "backdrop-blur-xl",
              "hover:bg-white/20",
              "transition-none",
            )}
          >
            Hire Me
          </button>
        </div>

        <div className="relative z-10 flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/40 backdrop-blur-xl"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl px-4 md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/20">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-white/10 hover:text-foreground transition-none"
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-left text-sm font-medium text-foreground transition-none"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

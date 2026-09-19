// import { Play } from "lucide-react";
// import { motion } from "framer-motion";

// // const NAME = "Vivek".split("");
// const NAME = ["Vivek", "Parmar"];

// export function Hero() {
//   const scrollTo = (id: string) => {
//     document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="home"
//       className="relative sm:min-h-screen flex flex-col justify-start pt-36 sm:pt-28 md:pt-36 pb-16 px-6"
//     >
//       <div className="relative mx-auto max-w-5xl w-full">
//         {/* top meta line */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="flex items-baseline gap-4 mb-16"
//         >
//           <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
//             00
//           </span>
//           <div className="h-px flex-1 bg-foreground/10" />
//           <span className="flex items-center gap-2 text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
//             <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
//             Available for freelance
//           </span>
//         </motion.div>

//         {/* name */}
//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
//           className="font-[Playfair_Display] font-bold leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground"
//         >
//           {NAME.map((word, wi) => (
//             <span key={wi} className="block">
//               {word.split("").map((ch, i) => (
//                 <motion.span
//                   key={i}
//                   variants={{
//                     hidden: { opacity: 0, y: 40 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   className="inline-block"
//                 >
//                   {ch}
//                 </motion.span>
//               ))}
//               {wi === NAME.length - 1 && (
//                 <motion.span
//                   variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//                   transition={{ duration: 0.7, delay: 0.35 }}
//                   className="text-gold"
//                 >
//                   .
//                 </motion.span>
//               )}
//             </span>
//           ))}
//         </motion.h1>

//         {/* role */}
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="mt-6 font-[Playfair_Display] italic text-2xl sm:text-3xl text-foreground/60"
//         >
//           Video editor &amp; visual storyteller
//         </motion.p>

//         {/* description */}
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.65 }}
//           className="mt-10 max-w-lg text-base sm:text-lg text-foreground/55 leading-relaxed"
//         >
//           Crafting cinematic edits, motion graphics, and scroll-stopping
//           content, from documentary storytelling to high-energy product promos.
//           Every frame, engineered to keep your audience watching.
//         </motion.p>

//         {/* actions */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
//         >
//           <button
//             onClick={() => scrollTo("#portfolio")}
//             className="group inline-flex items-center gap-3 text-sm font-medium text-foreground border-b border-foreground/20 hover:border-gold pb-1.5 transition-colors duration-300"
//           >
//             <Play
//               size={13}
//               className="fill-foreground group-hover:fill-gold group-hover:text-gold transition-colors duration-300"
//             />
//             <span className="group-hover:text-gold transition-colors duration-300">
//               View my work
//             </span>
//           </button>

//           <button
//             onClick={() => scrollTo("#contact")}
//             className="group inline-flex items-center gap-3 text-sm font-medium text-foreground/60 hover:text-gold border-b border-transparent hover:border-gold pb-1.5 transition-colors duration-300"
//           >
//             Let's talk
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { TojiModel } from "@/components/ui/TojiModel";

const NAME = ["Vivek", "Parmar"];

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative sm:min-h-screen flex flex-col justify-start pt-32 sm:pt-28 md:pt-16 pb-16 px-6 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
        {/* ─── LEFT: text content ─── */}
        <div className="relative z-10">
          {/* top meta line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-baseline gap-4 mb-16"
          >
            <span className="text-[11px] tracking-[0.35em] text-gold uppercase">
              00
            </span>
            <div className="h-px flex-1 bg-foreground/10 max-w-[200px]" />
            <span className="flex items-center gap-2 text-[11px] tracking-[0.35em] text-foreground/40 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Available for freelance
            </span>
          </motion.div>

          {/* name */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="font-[Playfair_Display] font-bold leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground"
          >
            {NAME.map((word, wi) => (
              <span key={wi} className="block">
                {word.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
                {wi === NAME.length - 1 && (
                  <motion.span
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="text-gold"
                  >
                    .
                  </motion.span>
                )}
              </span>
            ))}
          </motion.h1>

          {/* role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 font-[Playfair_Display] italic text-2xl sm:text-3xl text-foreground/60"
          >
            Video editor &amp; visual storyteller
          </motion.p>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 max-w-lg text-base sm:text-lg text-foreground/55 leading-relaxed"
          >
            Crafting cinematic edits, motion graphics, and scroll-stopping
            content, from documentary storytelling to high-energy product
            promos. Every frame, engineered to keep your audience watching.
          </motion.p>

          {/* actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <button
              onClick={() => scrollTo("#portfolio")}
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground border-b border-foreground/20 hover:border-gold pb-1.5 transition-colors duration-300"
            >
              <Play
                size={13}
                className="fill-foreground group-hover:fill-gold group-hover:text-gold transition-colors duration-300"
              />
              <span className="group-hover:text-gold transition-colors duration-300">
                View my work
              </span>
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground/60 hover:text-gold border-b border-transparent hover:border-gold pb-1.5 transition-colors duration-300"
            >
              Let's talk
            </button>
          </motion.div>
        </div>

        {/* ─── RIGHT: Toji 3D model ─── */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative hidden lg:block w-[380px] xl:w-[460px] h-[600px] xl:h-[700px]"
        >
          <TojiModel />
        </motion.div>
      </div>
    </section>
  );
}

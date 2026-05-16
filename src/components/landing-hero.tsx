import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { BiLogoGithub, BiLogoLinkedin, BiMailSend, BiSolidPhoneCall } from "react-icons/bi";
import { siteMetadata } from "@/data/siteMetaData.js";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Inas Saab
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Flutter Mobile App Developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I am a Mobile App Developer with over 4 years of experience in
                IT, focused on building high-quality, user-friendly Android and
                iOS applications.
                <br></br>
                My core stack is{" "}
                <span className="font-semibold text-accent">Flutter</span>,{" "}
                <span className="font-semibold text-accent">Dart</span>, and{" "}
                <span className="font-semibold text-accent">
                  BLoC / Cubit
                </span>{" "}
                for scalable state management.
                <br></br>
                I work with{" "}
                <span className="font-semibold text-accent">Firebase</span>,{" "}
                <span className="font-semibold text-accent">Hive</span>,{" "}
                <span className="font-semibold text-accent">REST APIs</span>,{" "}
                <span className="font-semibold text-accent">Google Maps</span>,{" "}
                <span className="font-semibold text-accent">Stripe</span>, and{" "}
                <span className="font-semibold text-accent">FCM</span>, with a
                background in Computer and Automation Engineering and a passion
                for clean, efficient code.
              </div>
            </FadeUp>
            <FadeUp key="contact-icons" duration={0.6} delay={0.4}>
              <div className="pointer-events-auto mt-8 flex items-center gap-6">
                <a
                  href={siteMetadata.github}
                  aria-label="GitHub"
                  className="text-2xl text-zinc-900 transition-colors hover:text-accent dark:text-zinc-100"
                >
                  <BiLogoGithub />
                </a>
                <a
                  href={siteMetadata.linkedin}
                  aria-label="GitHub"
                  className="text-2xl text-zinc-900 transition-colors hover:text-accent dark:text-zinc-100"
                >
                  <BiLogoLinkedin />
                </a>
                <a
                  href={"mailto:" + siteMetadata.email}
                  aria-label="Email"
                  className="text-2xl text-zinc-900 transition-colors hover:text-accent dark:text-zinc-100"
                >
                  <BiMailSend />
                </a>
                <a
                  href={"tel:" + siteMetadata.phone}
                  aria-label="Phone"
                  className="text-2xl text-zinc-900 transition-colors hover:text-accent dark:text-zinc-100"
                >
                  <BiSolidPhoneCall />
                </a>
              </div>
            </FadeUp>
            <FadeUp key="contact-icons" duration={0.6} delay={0.4}>
              <div className="pointer-events-auto mt-8 flex items-center gap-6">
                <a
                  href="/cv.pdf"
                  download="Inas_Saab_CV.pdf"
                  aria-label="Download CV"
                  className="hover:bg-accent-dark dark:bg-accent-dark dark:hover:bg-accent-light mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:scale-105"
                >
                  Download CV
                </a>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

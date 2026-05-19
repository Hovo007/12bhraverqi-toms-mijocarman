import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroBg from "../assets/hero-bg.jpg";
import classImg from "../assets/class.jpg";
import teacherImg from "../assets/teacher.jpg";
import graduateImg from "../assets/graduate.jpg";
import eveningImg from "../assets/evening.jpg";

import { Particles } from "../components/Particles";
import { MemorySlider } from "../components/MemorySlider";
import { Countdown } from "../components/Countdown";
import { RsvpForm } from "../components/RsvpForm";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "12B Graduation Evening 2026 — Հրավիրատոմս" },
      {
        name: "description",
        content:
          "12B դասարանի ավարտական երեկո՝ 22.05.2026, ժամը 11:00։ Միացեք մեզ անմոռանալի երեկոյին։",
      },
      { property: "og:title", content: "12B Graduation Evening 2026" },
      {
        property: "og:description",
        content: "Մի երեկո, որը կմնա հիշողությունների ամենագեղեցիկ էջերում.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 py-20 sm:py-32 ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      {...fadeUp}
      className="text-center font-serif text-4xl sm:text-6xl font-light tracking-tight gold-text"
    >
      {children}
    </motion.h2>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <span className="hairline w-16 sm:w-24" />
      <span className="text-[color:var(--gold)] text-sm">✦</span>
      <span className="hairline w-16 sm:w-24" />
    </div>
  );
}

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="lux-bg relative min-h-screen text-white">
      <Particles count={28} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mb-6 text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[color:var(--gold)]/80"
          >
            ✦ Class of 2026 ✦
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
            transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] gold-text"
          >
            12B Graduation
            <br />
            <span className="italic font-light">Evening 2026</span>
          </motion.h1>

          <Ornament />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="font-serif italic text-xl sm:text-2xl text-[color:var(--silver)]/90 max-w-2xl mx-auto"
          >
            «Մի երեկո, որը կմնա հիշողությունների ամենագեղեցիկ էջերում…»
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="mt-6 text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Սիրով հրավիրում ենք Ձեզ մեր կյանքի ամենահիշարժան երեկոյին՝ կիսելու
            ուրախությունը, ժպիտներն ու անմոռանալի պահերը մեզ հետ։
          </motion.p>

          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.button
                key="open"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                onClick={() => {
                  setOpened(true);
                  setTimeout(() => {
                    document
                      .getElementById("invitation")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 400);
                }}
                className="glow-btn mt-12 inline-flex rounded-full px-10 py-4 text-sm sm:text-base font-medium"
              >
                Բացել հրավիրատոմսը
              </motion.button>
            ) : (
              <motion.div
                key="opened"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-12 text-[color:var(--gold)] text-sm tracking-[0.3em] uppercase"
              >
                ✦ Բարի գալուստ ✦
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, y: [0, 8, 0] }}
          transition={{ delay: 2, duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[color:var(--gold)]/70 text-xs tracking-[0.4em]"
        >
          SCROLL
        </motion.div>
      </section>

      <AnimatePresence>
        {opened && (
          <motion.div
            id="invitation"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {/* SECTION 2 — CLASS */}
            <Section>
              <div className="max-w-6xl mx-auto">
                <SectionTitle>Մեր Դասարանը</SectionTitle>
                <Ornament />
                <motion.div
                  {...fadeUp}
                  className="glass-strong rounded-3xl overflow-hidden p-2 sm:p-3 mt-10"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                    <img
                      src={classImg}
                      alt="12B դասարան"
                      width={1600}
                      height={1024}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </motion.div>
                <motion.h3
                  {...fadeUp}
                  className="mt-10 text-center font-serif text-3xl sm:text-5xl gold-text"
                >
                  12B Դասարան
                </motion.h3>
              </div>
            </Section>

            {/* SECTION 3 — CARDS */}
            <Section>
              <div className="max-w-6xl mx-auto">
                <SectionTitle>Հատուկ Ներկայացում</SectionTitle>
                <Ornament />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    {
                      title: "Դասղեկ",
                      text: "Գայանե Օրդոյան",
                      img: teacherImg,
                    },
                    {
                      title: "Ավարտական",
                      text: "Մարտին Խաչատրյան",
                      img: graduateImg,
                    },
                    {
                      title: "Հատուկ Երեկո",
                      text: "Հիշողություններով, երաժշտությամբ ու ամենաջերմ պահերով լի անմոռանալի երեկո",
                      img: eveningImg,
                    },
                  ].map((c, i) => (
                    <motion.article
                      key={c.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
                      whileHover={{ y: -6 }}
                      className="glass rounded-3xl overflow-hidden group"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          src={c.img}
                          alt={c.text}
                          width={800}
                          height={1024}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      </div>
                      <div className="p-7 text-center">
                        <div className="text-[10px] tracking-[0.4em] uppercase text-[color:var(--gold)]/80 mb-3">
                          {c.title}
                        </div>
                        <div className="font-serif text-2xl sm:text-3xl silver-text leading-snug">
                          {c.text}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </Section>

            {/* SECTION 4 — SLIDER */}
            <Section>
              <div className="max-w-6xl mx-auto">
                <SectionTitle>Մեր Հիշողությունները</SectionTitle>
                <Ornament />
                <div className="mt-10">
                  <MemorySlider />
                </div>
              </div>
            </Section>

            {/* SECTION 5 — DATE */}
            <Section>
              <div className="max-w-3xl mx-auto text-center">
                <motion.div {...fadeUp} className="glass-strong pulse-glow rounded-3xl p-10 sm:p-16">
                  <div className="text-[10px] tracking-[0.5em] uppercase text-[color:var(--gold)]/80 mb-6">
                    Save the date
                  </div>
                  <div className="font-serif text-5xl sm:text-7xl md:text-8xl font-light gold-text tabular-nums">
                    22.05.2026
                  </div>
                  <Ornament />
                  <div className="font-serif text-2xl sm:text-3xl silver-text italic">
                    Ժամը 11:00
                  </div>
                </motion.div>
              </div>
            </Section>

            {/* SECTION 6 — COUNTDOWN */}
            <Section>
              <div className="max-w-5xl mx-auto">
                <SectionTitle>Հաշվարկ մինչև երեկոն</SectionTitle>
                <Ornament />
                <div className="mt-10">
                  <Countdown />
                </div>
              </div>
            </Section>

            {/* SECTION 7 — REGISTRATION */}
            <Section>
              <div className="max-w-3xl mx-auto">
                <SectionTitle>Հաստատեք Ձեր Մասնակցությունը</SectionTitle>
                <Ornament />
                <motion.div {...fadeUp} className="glass-strong rounded-3xl p-7 sm:p-12 mt-8">
                  <RsvpForm />
                </motion.div>
              </div>
            </Section>

            {/* FINAL */}
            <section className="relative px-5 sm:px-8 py-28 sm:py-40 overflow-hidden">
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(212,175,106,0.25), transparent 60%)",
                }}
              />
              <motion.div
                {...fadeUp}
                className="relative max-w-3xl mx-auto text-center glass-strong pulse-glow rounded-3xl p-10 sm:p-16"
              >
                <div className="text-[10px] tracking-[0.5em] uppercase text-[color:var(--gold)]/80 mb-6">
                  ✦ Հանդիպում ✦
                </div>
                <div className="font-serif text-3xl sm:text-5xl font-light gold-text leading-tight">
                  Սպասում ենք Ձեզ
                </div>
                <div className="mt-6 font-serif text-4xl sm:text-6xl gold-text tabular-nums">
                  22.05.2026
                </div>
                <div className="mt-3 font-serif text-2xl sm:text-3xl silver-text italic">
                  Ժամը 11:00
                </div>
                <Ornament />
                <div className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[color:var(--silver)]/70">
                  12B Graduation Evening
                </div>
              </motion.div>

              <div className="relative mt-16 text-center text-[10px] tracking-[0.3em] uppercase text-white/30">
                © 2026 · Class of 12B · Made with love
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-05-22T11:00:00+04:00").getTime();

function diff() {
  const now = Date.now();
  const d = Math.max(0, TARGET - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

const LABELS: Record<string, string> = {
  days: "Օր",
  hours: "Ժամ",
  minutes: "Րոպե",
  seconds: "Վայրկյան",
};

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
      {(["days", "hours", "minutes", "seconds"] as const).map((k, i) => (
        <motion.div
          key={k}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
          className="glass pulse-glow rounded-2xl p-5 sm:p-7 text-center"
        >
          <div className="font-serif text-4xl sm:text-6xl font-light gold-text tabular-nums">
            {String(t[k]).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[color:var(--silver)]/70">
            {LABELS[k]}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

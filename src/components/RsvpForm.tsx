import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const RECIPIENT = "barseghyannn777@gmail.com";

// Optional: set these in src/lib/emailjs.ts to enable real sending via EmailJS.
// If left empty the form falls back to mailto so it always works.
const EMAILJS_SERVICE_ID = "";
const EMAILJS_TEMPLATE_ID = "";
const EMAILJS_PUBLIC_KEY = "";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim().slice(0, 100);
    const trimmedEmail = email.trim().slice(0, 255);
    if (!trimmedName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_email: RECIPIENT,
            from_name: trimmedName,
            reply_to: trimmedEmail,
            message: `Նոր գրանցում 12B Graduation Evening 2026\n\nԱնուն: ${trimmedName}\nEmail: ${trimmedEmail}`,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      } else {
        // Fallback: open user's mail client with prefilled message.
        const subject = encodeURIComponent("Նոր գրանցում — 12B Graduation Evening 2026");
        const body = encodeURIComponent(
          `Անուն Ազգանուն: ${trimmedName}\nEmail: ${trimmedEmail}\n\n22.05.2026 — Ժամը 11:00`
        );
        window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
      }
      setStatus("ok");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-5">
      <div>
        <label className="block text-[11px] tracking-[0.3em] uppercase text-[color:var(--silver)]/70 mb-2">
          Անուն Ազգանուն
        </label>
        <input
          required
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ձեր անունը"
          className="w-full glass rounded-xl px-5 py-4 bg-transparent text-white placeholder:text-white/30 focus:outline-none focus:border-[color:var(--gold)] transition"
        />
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.3em] uppercase text-[color:var(--silver)]/70 mb-2">
          Email
        </label>
        <input
          required
          type="email"
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full glass rounded-xl px-5 py-4 bg-transparent text-white placeholder:text-white/30 focus:outline-none focus:border-[color:var(--gold)] transition"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="glow-btn w-full rounded-xl px-8 py-4 text-sm sm:text-base font-medium disabled:opacity-60"
      >
        {status === "sending" ? "Ուղարկվում է…" : "Գրանցվել"}
      </motion.button>

      <AnimatePresence>
        {status === "ok" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm gold-text font-serif text-lg"
          >
            Շնորհակալություն ✦ Ձեր մասնակցությունը հաստատված է
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-red-300/80"
          >
            Խնդրում ենք ստուգել տվյալները և փորձել կրկին
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

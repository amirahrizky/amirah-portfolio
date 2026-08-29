import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/portfolioData.js";

const bars = [
  { h: 88, delay: 0 },
  { h: 132, delay: 0.15 },
  { h: 104, delay: 0.3 },
  { h: 160, delay: 0.45 },
  { h: 76, delay: 0.6 },
];

const chips = [
  { label: "Python", top: "6%", left: "4%", duration: 5.5 },
  { label: "SQL", top: "46%", left: "80%", duration: 6.2 },
  { label: "Power BI", top: "78%", left: "8%", duration: 5 },
  { label: "R", top: "84%", left: "72%", duration: 6.8 },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <motion.div variants={container} initial="hidden" animate="show" className="hero-copy">
          <motion.div variants={fadeUp} className="clay-chip hero-loc">
            <MapPin size={15} /> {profile.location}
          </motion.div>

          <motion.h1 variants={fadeUp} className="hero-title">
            Halo, saya <span className="grad-text">{profile.name}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-role">
            <Sparkles size={17} /> {profile.role} · Fresh Graduate Sains Data
          </motion.p>

          <motion.p variants={fadeUp} className="hero-summary">
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="hero-actions">
            <a href="#experience" className="clay-btn clay-btn-primary">
              Lihat Pengalaman <ArrowDown size={16} />
            </a>
            <a href="#contact" className="clay-btn">
              Hubungi Saya
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="clay hero-stage">
            <div className="bars-row" aria-hidden="true">
              {bars.map((b, i) => (
                <motion.div
                  key={i}
                  className="clay-bar"
                  style={{ height: b.h }}
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: b.delay,
                  }}
                />
              ))}
            </div>

            <motion.div
              className="clay gpa-badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="gpa-num">3.84</span>
              <span className="gpa-label">IPK / 4.0</span>
            </motion.div>
          </div>

          {chips.map((c) => (
            <motion.div
              key={c.label}
              className="clay-chip float-chip"
              style={{ top: c.top, left: c.left }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut" }}
            >
              {c.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero {
          padding-top: 56px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .hero-loc {
          margin-bottom: 22px;
        }
        .hero-title {
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .hero-role {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 17px;
          color: var(--accent-dark);
          margin-bottom: 22px;
        }
        .hero-summary {
          max-width: 540px;
          font-size: 16px;
          margin-bottom: 34px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .hero-visual {
          position: relative;
          height: 460px;
        }
        .hero-stage {
          position: relative;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 40px;
          overflow: hidden;
        }
        .bars-row {
          display: flex;
          align-items: flex-end;
          gap: 16px;
        }
        .clay-bar {
          width: 34px;
          border-radius: 18px;
          background: linear-gradient(160deg, var(--surface-raised), var(--surface));
          box-shadow:
            6px 6px 14px var(--shadow-dark),
            -6px -6px 14px var(--shadow-light);
        }
        .clay-bar:nth-child(2), .clay-bar:nth-child(4) {
          background: linear-gradient(160deg, #a3b3f6, var(--primary));
          box-shadow: 6px 6px 14px var(--shadow-dark-strong), -5px -5px 12px #ffffffb0;
        }
        .gpa-badge {
          position: absolute;
          top: 30px;
          right: 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 108px;
          height: 108px;
          border-radius: 50%;
          background: linear-gradient(160deg, var(--accent-soft), var(--surface));
        }
        .gpa-num {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 24px;
          color: var(--accent-dark);
        }
        .gpa-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-soft);
          margin-top: 2px;
        }
        .float-chip {
          position: absolute;
          font-size: 13px;
          padding: 8px 16px;
        }
        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-visual {
            height: 380px;
            order: -1;
          }
        }
        @media (max-width: 520px) {
          .hero-summary { font-size: 15px; }
          .float-chip { font-size: 11px; padding: 6px 12px; }
        }
      `}</style>
    </section>
  );
}

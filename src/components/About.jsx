import { motion } from "framer-motion";
import { profile, stats } from "../data/portfolioData.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <motion.div
          className="clay avatar-wrap"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="avatar-circle">{profile.initials}</div>
          <div className="avatar-ring" aria-hidden="true" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={item} className="eyebrow">Tentang Saya</motion.div>
          <motion.h2 variants={item} className="section-title">
            Berpikir analitis, teliti mengolah data.
          </motion.h2>
          <motion.p variants={item} className="section-sub about-text">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="stat-grid">
            {stats.map((s) => (
              <div key={s.label} className="clay-card stat-card">
                <span className="stat-value">
                  {s.value}
                  <small>{s.suffix}</small>
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 0.55fr 1.45fr;
          gap: 56px;
          align-items: center;
        }
        .avatar-wrap {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 30px;
        }
        .avatar-circle {
          width: 78%;
          height: 78%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(44px, 8vw, 72px);
          color: var(--primary-dark);
          background: linear-gradient(150deg, var(--primary-soft), var(--surface));
          box-shadow: inset 8px 8px 18px var(--shadow-dark), inset -8px -8px 18px var(--shadow-light);
        }
        .avatar-ring {
          position: absolute;
          inset: 8%;
          border-radius: 50%;
          border: 2px dashed var(--primary-soft);
        }
        .about-text {
          max-width: 620px;
        }
        .stat-grid {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .stat-card {
          padding: 22px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stat-value {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 28px;
          color: var(--primary-dark);
        }
        .stat-value small {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-faint);
        }
        .stat-label {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-soft);
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; }
          .avatar-wrap { max-width: 240px; margin: 0 auto; }
        }
        @media (max-width: 560px) {
          .stat-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}

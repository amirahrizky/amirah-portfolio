import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Pengalaman Kerja</div>
          <h2 className="section-title">Perjalanan profesional saya sejauh ini.</h2>
          <p className="section-sub">
            Empat peran dengan fokus berbeda — dari analisis data hingga operasional — yang membentuk cara saya bekerja dengan data dan orang.
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.org}
              className="timeline-row"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="clay-icon-circle timeline-dot">
                <Briefcase size={19} />
              </div>
              <div className="clay-card timeline-card">
                <div className="timeline-card-head">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-org">{exp.org}</p>
                  </div>
                  <span className="clay-chip timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-loc">
                  <MapPin size={13} /> {exp.location}
                </p>
                <ul className="timeline-points">
                  {exp.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .timeline-line {
          position: absolute;
          left: 26px;
          top: 10px;
          bottom: 10px;
          width: 3px;
          border-radius: 4px;
          background: linear-gradient(var(--primary-soft), var(--accent-soft));
        }
        .timeline-row {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 24px;
          align-items: flex-start;
        }
        .timeline-dot {
          position: relative;
          z-index: 1;
        }
        .timeline-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          flex-wrap: wrap;
        }
        .timeline-role {
          font-size: 19px;
          font-weight: 700;
        }
        .timeline-org {
          font-weight: 600;
          color: var(--primary-dark);
          margin-top: 2px;
          font-size: 14.5px;
        }
        .timeline-period {
          font-size: 12.5px;
          white-space: nowrap;
        }
        .timeline-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-faint);
          margin-top: 10px;
        }
        .timeline-points {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .timeline-points li {
          position: relative;
          padding-left: 20px;
          font-size: 14.5px;
          color: var(--text-soft);
          line-height: 1.6;
        }
        .timeline-points li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
        }
        @media (max-width: 620px) {
          .timeline-row { grid-template-columns: 40px 1fr; gap: 14px; }
          .timeline-line { left: 20px; }
          .timeline-dot { width: 40px; height: 40px; }
        }
      `}</style>
    </section>
  );
}

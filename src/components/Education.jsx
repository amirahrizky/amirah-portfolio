import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { certification, education } from "../data/portfolioData.js";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container edu-grid">
        <motion.div
          className="clay-card edu-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="clay-icon-circle edu-icon">
            <GraduationCap size={20} />
          </div>
          <div className="eyebrow">Pendidikan</div>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-school">{education.school}</p>
          <span className="clay-chip edu-period">{education.period}</span>

          <div className="clay-inset gpa-inset">
            <span className="gpa-big">{education.gpa}</span>
            <span className="gpa-small">dari {education.gpaMax} IPK</span>
          </div>
        </motion.div>

        <motion.div
          className="clay-card cert-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="clay-icon-circle edu-icon accent">
            <Award size={20} />
          </div>
          <div className="eyebrow">Sertifikasi</div>
          <h3 className="edu-degree">{certification.title}</h3>
          <p className="edu-school">{certification.issuer}</p>
          <div className="cert-meta">
            <span className="clay-chip edu-period">{certification.period}</span>
            <span className="cert-id">ID: {certification.credential}</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .edu-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
        }
        .edu-card, .cert-card {
          padding: 34px;
          position: relative;
        }
        .edu-icon {
          margin-bottom: 16px;
        }
        .edu-icon.accent {
          color: var(--accent-dark);
        }
        .edu-degree {
          font-size: 19px;
          font-weight: 700;
          line-height: 1.35;
          margin-top: 4px;
        }
        .edu-school {
          margin-top: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary-dark);
        }
        .edu-period {
          margin-top: 16px;
          width: fit-content;
          font-size: 12.5px;
        }
        .gpa-inset {
          margin-top: 26px;
          padding: 20px 24px;
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .gpa-big {
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 700;
          color: var(--primary-dark);
        }
        .gpa-small {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-faint);
        }
        .cert-meta {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .cert-id {
          font-size: 12px;
          color: var(--text-faint);
          font-weight: 600;
        }
        @media (max-width: 820px) {
          .edu-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

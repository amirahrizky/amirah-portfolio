import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { organizations } from "../data/portfolioData.js";

export default function Organizations() {
  return (
    <section id="organizations" className="section organizations">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Organisasi & Volunteer</div>
          <h2 className="section-title">Aktif berkontribusi di luar kelas.</h2>
          <p className="section-sub">
            Mengasah komunikasi, kepemimpinan, dan ketelitian administratif lewat enam peran organisasi dan pengabdian masyarakat.
          </p>
        </motion.div>

        <div className="org-grid">
          {organizations.map((o, i) => (
            <motion.div
              key={o.role + o.org}
              className="clay-card org-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: "easeOut" }}
            >
              <div className="clay-icon-circle org-icon">
                <Users size={18} />
              </div>
              <h3 className="org-role">{o.role}</h3>
              <p className="org-name">{o.org}</p>
              <span className="clay-chip org-period">{o.period}</span>
              <p className="org-desc">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .org-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .org-card {
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .org-icon {
          width: 44px;
          height: 44px;
          margin-bottom: 12px;
        }
        .org-role {
          font-size: 16.5px;
          font-weight: 700;
          line-height: 1.35;
        }
        .org-name {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--primary-dark);
          margin-top: 4px;
        }
        .org-period {
          margin-top: 14px;
          width: fit-content;
          font-size: 12px;
          padding: 6px 14px;
        }
        .org-desc {
          margin-top: 14px;
          font-size: 13.5px;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .org-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .org-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

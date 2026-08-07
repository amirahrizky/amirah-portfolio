import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { publications } from "../data/portfolioData.js";

export default function Publications() {
  return (
    <section id="publications" className="section publications">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Publikasi Ilmiah</div>
          <h2 className="section-title">Riset yang telah saya tulis dan terbitkan.</h2>
          <p className="section-sub">
            Tiga publikasi seputar pemodelan stokastik, deep learning, dan ekonometrika terapan.
          </p>
        </motion.div>

        <div className="pub-list">
          {publications.map((p, i) => (
            <motion.article
              key={p.title}
              className="clay-card pub-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="clay-icon-circle pub-icon">
                <BookOpen size={19} />
              </div>
              <div className="pub-body">
                <div className="pub-head">
                  <h3 className="pub-title">{p.title}</h3>
                  <span className="clay-chip pub-period">{p.period}</span>
                </div>
                <p className="pub-journal">{p.journal}</p>
                <p className="pub-desc">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .pub-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .pub-card {
          display: flex;
          gap: 22px;
          align-items: flex-start;
        }
        .pub-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          flex-wrap: wrap;
        }
        .pub-title {
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;
          max-width: 640px;
        }
        .pub-period {
          font-size: 12px;
          white-space: nowrap;
          padding: 6px 14px;
        }
        .pub-journal {
          margin-top: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--primary-dark);
        }
        .pub-desc {
          margin-top: 10px;
          font-size: 14px;
        }
        @media (max-width: 600px) {
          .pub-card { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Download,
  ExternalLink,
  FileText,
  LayoutDashboard,
  X,
  ZoomIn,
} from "lucide-react";
import { dashboards } from "../data/portfolioData.js";

export default function Dashboards() {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex === null ? null : dashboards[activeIndex];

  return (
    <section id="dashboards" className="section dashboards">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Dashboards</div>
          <h2 className="section-title">Dashboard interaktif yang saya bangun dengan Power BI.</h2>
          <p className="section-sub">
            Dua studi kasus analisis data end-to-end, mulai dari data mentah hingga dashboard siap pakai.
          </p>
        </motion.div>

        <div className="dash-grid">
          {dashboards.map((d, i) => (
            <motion.article
              key={d.title}
              className="clay-card dash-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="dash-photo-wrap">
                <img
                  src={d.thumbnail}
                  alt={`Preview ${d.title}`}
                  className="dash-photo"
                  loading="lazy"
                />
              </div>
              <div className="clay-icon-circle dash-icon">
                <LayoutDashboard size={18} />
              </div>
              <h3 className="dash-title">{d.title}</h3>
              <p className="dash-desc">{d.description}</p>
              <button
                type="button"
                className="clay-btn clay-btn-primary dash-btn"
                onClick={() => setActiveIndex(i)}
              >
                See Details <ExternalLink size={15} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <DashboardModal project={active} onClose={() => setActiveIndex(null)} />
        )}
      </AnimatePresence>

      <style>{`
        .dash-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .dash-card {
          padding: 28px 26px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow: hidden;
        }
        .dash-photo-wrap {
          margin: -28px -26px 18px;
          height: 190px;
          overflow: hidden;
        }
        .dash-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .dash-card:hover .dash-photo {
          transform: scale(1.05);
        }
        .dash-icon {
          width: 44px;
          height: 44px;
          margin-bottom: 12px;
        }
        .dash-title {
          font-size: 17.5px;
          font-weight: 700;
          line-height: 1.35;
        }
        .dash-desc {
          margin-top: 10px;
          font-size: 13.5px;
          line-height: 1.6;
          flex-grow: 1;
        }
        .dash-btn {
          margin-top: 20px;
          width: fit-content;
          font-size: 13.5px;
          padding: 12px 22px;
        }
        @media (max-width: 820px) {
          .dash-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function DashboardModal({ project, onClose }) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (zoomed) setZoomed(false);
        else onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, zoomed]);

  return (
    <motion.div
      className="dash-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={onClose}
    >
      <motion.div
        className="clay dash-modal"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <button
          type="button"
          className="clay-icon-circle dash-modal-close"
          onClick={onClose}
          aria-label="Tutup"
        >
          <X size={18} />
        </button>

        <div className="dash-modal-body">
          <h3 className="dash-modal-title">{project.title}</h3>

          <button
            type="button"
            className="dash-modal-image-btn"
            onClick={() => setZoomed(true)}
            aria-label="Perbesar gambar dashboard"
          >
            <img src={project.image} alt={`Dashboard ${project.title}`} className="dash-modal-image" />
            <span className="dash-zoom-hint">
              <ZoomIn size={14} /> Perbesar
            </span>
          </button>

          <div className="dash-modal-section">
            <div className="dash-modal-eyebrow">
              <BarChart3 size={15} /> Key Insights
            </div>
            <ul className="insight-list">
              {project.insights.map((insight) => (
                <li key={insight}>{insight}</li>
              ))}
            </ul>
          </div>

          <div className="dash-modal-section">
            <div className="dash-modal-eyebrow">🛠️ Tools & Methodology</div>
            <div className="dash-modal-tools">
              <div className="dash-tools-chips">
                {project.tools.map((t) => (
                  <span key={t} className="clay-chip dash-tool-chip">
                    {t}
                  </span>
                ))}
              </div>
              <p className="dash-modal-text">
                <strong>Dataset:</strong>{" "}
                <a
                  href={project.dataset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dash-dataset-link"
                >
                  {project.dataset.label} <ExternalLink size={12} />
                </a>
              </p>
              <p className="dash-modal-text">
                <strong>Analysis:</strong> {project.analysis}
              </p>
            </div>
          </div>

          <div className="dash-modal-cta">
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-btn-primary dash-cta-btn"
            >
              <FileText size={16} /> Lihat PDF Lengkap
            </a>
            <a
              href={project.pbixUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn dash-cta-btn"
            >
              <Download size={16} /> Download PBIX
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            className="dash-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(false);
            }}
          >
            <img src={project.image} alt={`Dashboard ${project.title} (perbesar)`} />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .dash-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(56, 60, 94, 0.55);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .dash-modal {
          position: relative;
          width: 100%;
          max-width: 720px;
          max-height: 88vh;
          overflow-y: auto;
          padding: 40px;
        }
        .dash-modal-close {
          position: sticky;
          float: right;
          top: 0;
          margin-left: 12px;
          margin-bottom: 12px;
          width: 40px;
          height: 40px;
          z-index: 2;
        }
        .dash-modal-title {
          font-size: 24px;
          font-weight: 700;
          line-height: 1.3;
          padding-right: 48px;
          margin-bottom: 22px;
        }
        .dash-modal-image-btn {
          display: block;
          width: 100%;
          padding: 0;
          border-radius: var(--radius-sm);
          overflow: hidden;
          position: relative;
          box-shadow: 6px 6px 14px var(--shadow-dark), -6px -6px 14px var(--shadow-light);
        }
        .dash-modal-image {
          width: 100%;
          display: block;
        }
        .dash-zoom-hint {
          position: absolute;
          right: 12px;
          bottom: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: var(--radius-pill);
          background: rgba(56, 60, 94, 0.65);
          color: #fff;
        }
        .dash-modal-section {
          margin-top: 28px;
        }
        .dash-modal-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 14px;
        }
        .insight-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .insight-list li {
          position: relative;
          padding-left: 20px;
          font-size: 14px;
          line-height: 1.65;
          color: var(--text-soft);
        }
        .insight-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
        }
        .dash-tools-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 16px;
        }
        .dash-tool-chip {
          font-size: 12.5px;
          padding: 8px 16px;
        }
        .dash-modal-text {
          font-size: 14px;
          margin-top: 8px;
        }
        .dash-modal-text strong {
          color: var(--text);
        }
        .dash-dataset-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--accent-dark);
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .dash-modal-cta {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .dash-cta-btn {
          font-size: 13.5px;
          padding: 13px 22px;
        }
        .dash-lightbox {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: rgba(20, 22, 40, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          cursor: zoom-out;
        }
        .dash-lightbox img {
          max-width: 100%;
          max-height: 100%;
          border-radius: var(--radius-sm);
        }
        @media (max-width: 600px) {
          .dash-modal {
            padding: 28px 20px;
            max-height: 92vh;
          }
          .dash-modal-title {
            font-size: 20px;
          }
          .dash-modal-cta {
            flex-direction: column;
          }
          .dash-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </motion.div>
  );
}

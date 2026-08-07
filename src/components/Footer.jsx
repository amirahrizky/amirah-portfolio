import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Dibuat dengan React & Framer Motion.</p>
        <a href="#home" className="clay-icon-circle back-top" aria-label="Kembali ke atas">
          <ArrowUp size={18} />
        </a>
      </div>

      <style>{`
        .footer {
          padding: 36px 0 48px;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .footer-inner p {
          font-size: 13px;
          color: var(--text-faint);
        }
      `}</style>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="navbar-wrap">
      <div className={`container navbar ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#home" className="brand clay-icon-circle" aria-label="Kembali ke beranda">
          {profile.initials}
        </a>

        <nav className="nav-links clay" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="clay-btn clay-btn-primary nav-cta">
          Hubungi Saya
        </a>

        <button
          className="clay-icon-circle nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu clay container"
            initial={{ opacity: 0, y: -16, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -16, height: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            aria-label="Navigasi mobile"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="clay-btn clay-btn-primary" onClick={() => setOpen(false)}>
              Hubungi Saya
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-wrap {
          position: sticky;
          top: 0;
          z-index: 50;
          padding-top: 20px;
        }
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          transition: padding 0.3s ease;
        }
        .brand {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 15px;
          color: var(--primary-dark);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 10px;
          border-radius: var(--radius-pill);
        }
        .nav-links a {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-soft);
          padding: 10px 16px;
          border-radius: var(--radius-pill);
          transition: color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .nav-links a:hover {
          color: var(--primary-dark);
          box-shadow: inset 3px 3px 8px var(--shadow-dark), inset -3px -3px 8px var(--shadow-light);
        }
        .nav-cta {
          padding: 12px 22px;
          font-size: 13px;
        }
        .nav-toggle {
          display: none;
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 860px) {
          .nav-links, .nav-cta {
            display: none;
          }
          .nav-toggle {
            display: inline-flex;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 14px;
            padding: 20px;
            overflow: hidden;
          }
          .mobile-menu a {
            padding: 12px 8px;
            font-weight: 600;
            font-size: 15px;
            border-radius: var(--radius-sm);
          }
          .mobile-menu .clay-btn {
            justify-content: center;
            margin-top: 8px;
          }
        }
      `}</style>
    </header>
  );
}

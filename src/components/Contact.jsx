import { motion } from "framer-motion";
import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolioData.js";

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: Linkedin, label: profile.linkedin, href: profile.linkedinHref },
  { icon: Github, label: profile.github, href: profile.githubHref },
  { icon: Globe, label: profile.site, href: profile.siteHref },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="clay contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="eyebrow">Kontak</div>
          <h2 className="section-title contact-title">
            Mari berkolaborasi mengubah data menjadi keputusan.
          </h2>
          <p className="section-sub contact-sub">
            Terbuka untuk peluang magang, posisi entry-level, maupun kolaborasi riset di bidang data analytics dan data science.
          </p>

          <div className="contact-links">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className="clay-btn contact-link"
                >
                  <Icon size={17} /> {l.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-card {
          padding: 64px 48px;
          text-align: center;
          background: linear-gradient(155deg, var(--accent-soft), var(--surface) 55%);
        }
        .contact-title {
          margin: 0 auto 16px;
          max-width: 620px;
        }
        .contact-sub {
          margin: 0 auto 36px;
          max-width: 520px;
        }
        .contact-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }
        .contact-link {
          font-size: 13.5px;
          padding: 14px 22px;
        }
        @media (max-width: 620px) {
          .contact-card { padding: 44px 22px; }
        }
      `}</style>
    </section>
  );
}

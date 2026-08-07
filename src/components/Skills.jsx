import { motion } from "framer-motion";
import { BarChart3, Code2, Users2 } from "lucide-react";
import { skills } from "../data/portfolioData.js";

const icons = {
  "Data Analytics": BarChart3,
  "Tech Stack": Code2,
  "Soft Skills": Users2,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Skill</div>
          <h2 className="section-title">Alat dan kemampuan yang saya pakai sehari-hari.</h2>
        </motion.div>

        <div className="skill-groups">
          {skills.map((group, gi) => {
            const Icon = icons[group.group];
            return (
              <motion.div
                key={group.group}
                className="clay-card skill-group"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: gi * 0.1, ease: "easeOut" }}
              >
                <div className="skill-group-head">
                  <div className="clay-icon-circle skill-icon">
                    <Icon size={18} />
                  </div>
                  <h3>{group.group}</h3>
                </div>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item} className="clay-chip skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-groups {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .skill-group {
          padding: 30px 26px;
        }
        .skill-group-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }
        .skill-group-head h3 {
          font-size: 16.5px;
          font-weight: 700;
        }
        .skill-icon {
          width: 44px;
          height: 44px;
        }
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-chip {
          font-size: 13px;
          padding: 8px 16px;
        }
        @media (max-width: 900px) {
          .skill-groups { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

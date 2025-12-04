import React from "react";
import Link from "@docusaurus/Link";
import { ArrowRight, ExternalLink } from "lucide-react";
import styles from "./style.module.css";

const GlassCard = ({
  icon: Icon,
  title,
  description,
  buttonText = "Mulai Menjelajah",
  buttonTextSecondary = "Pelajari Lebih Lanjut",
  link, // ← Tambahkan prop link
  linkSecondary, // ← Tambahkan prop link secondary (optional)
}) => {
  // Cek apakah link external atau internal
  const isExternal = link && (link.startsWith('http://') || link.startsWith('https://'));
  const isExternalSecondary = linkSecondary && (linkSecondary.startsWith('http://') || linkSecondary.startsWith('https://'));

  return (
    <div className={styles.glassCard}>
      <div className={styles.glassCard_content}>
        <div className={styles.glassCard_icon}>
          <Icon size={84} strokeWidth={1.5} />
        </div>

        <h3 className={styles.glassCard_title}>{title}</h3>

        <p className={styles.glassCard_description}>{description}</p>

        <div className={styles.glassCard_buttons}>
          {/* Primary Button */}
          {link && (
            isExternal ? (
              <a
                href={link}
                className={`${styles.glassCard_button} ${styles.glassCard_button_primary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonText}
                <ExternalLink size={18} className={styles.button_icon} />
              </a>
            ) : (
              <Link
                to={link}
                className={`${styles.glassCard_button} ${styles.glassCard_button_primary}`}
              >
                {buttonText}
                <ArrowRight size={18} className={styles.button_icon} />
              </Link>
            )
          )}

          {/* Secondary Button (Optional) */}
          {linkSecondary && (
            isExternalSecondary ? (
              <a
                href={linkSecondary}
                className={`${styles.glassCard_button} ${styles.glassCard_button_secondary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonTextSecondary}
                <ExternalLink size={18} className={styles.button_icon} />
              </a>
            ) : (
              <Link
                to={linkSecondary}
                className={`${styles.glassCard_button} ${styles.glassCard_button_secondary}`}
              >
                {buttonTextSecondary}
                <ArrowRight size={18} className={styles.button_icon} />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;

import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styles from "@site/src/pages/index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from '@docusaurus/Link';

const heroImg = require('@site/static/img/whiteboard-light.png').default;

const DOWNLOADS = [
  {
    label: 'MacOS',
    hint: 'Mac App Store',
    href: 'https://apps.apple.com/us/app/nexthena/id6756844674',
  },
  {
    label: 'Windows',
    hint: 'GitHub Releases',
    href: 'https://github.com/blackstar-baba/nexthena-asset/releases/tag/v1.3.3',
  },
  {
    label: 'Linux',
    hint: 'GitHub Releases',
    href: 'https://github.com/blackstar-baba/nexthena-asset/releases/tag/v1.3.3',
  },
];

const HeroAnimation = () => {
  const {siteConfig} = useDocusaurusContext();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glowBg} aria-hidden="true" />

      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroLeft}
          initial={{opacity: 0, y: 20}}
          animate={mounted ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
        >
          <span className={styles.eyebrow}>v1.3.3</span>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>

          <div className={styles.buttonRow}>
            <Link className={styles.btnPrimary} to="/docs/intro">
              Get started
              <span aria-hidden="true">→</span>
            </Link>

            <div className={styles.menuWrap} ref={menuRef}>
              <button
                type="button"
                className={styles.btnSecondary}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                Download
                <span aria-hidden="true" className={styles.caret}>
                  {menuOpen ? '▲' : '▼'}
                </span>
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.ul
                    className={styles.menu}
                    role="menu"
                    initial={{opacity: 0, y: -6}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -6}}
                    transition={{duration: 0.15}}
                  >
                    {DOWNLOADS.map((d) => (
                      <li key={d.label} role="none">
                        <a
                          role="menuitem"
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.menuItem}
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className={styles.menuLabel}>{d.label}</span>
                          <span className={styles.menuHint}>{d.hint}</span>
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroRight}
          initial={{opacity: 0, scale: 0.96}}
          animate={mounted ? {opacity: 1, scale: 1} : {}}
          transition={{duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1]}}
        >
          <div className={styles.heroImgWrap}>
            <img src={heroImg} alt="Nexthena whiteboard preview" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAnimation;

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

/**
 * HERO BANNER IMAGE
 * ─────────────────────────────────────────────────
 * Add ONE file to /public/images/:
 *   hero-banner.png  — Full-width hero banner
 *                      (wide landscape, all crewmates, space bg)
 *                      Recommended: 1920×900px
 * ─────────────────────────────────────────────────
 */

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero} id="hero">

      {/* ── SINGLE HERO BANNER IMAGE ── */}
      <div className={styles.bannerWrap}>
        <img
          src={`${import.meta.env.BASE_URL}images/hero-banner.jpg`}
          alt="Among Us crewmates floating in space — hero banner"
          className={styles.bannerImg}
          onLoad={(e) => {
            e.target.style.opacity = '1'
            e.target.nextSibling.style.display = 'none'
          }}
          onError={(e) => {
            e.target.style.display = 'none'
          }}
          style={{ opacity: 0, transition: 'opacity 0.5s ease' }}
        />

        {/* Fallback shown until image is added */}
        <div className={styles.bannerPlaceholder} aria-hidden="true" style={{ display: 'none' }}>
          <span className={styles.placeholderIcon}>🖼️</span>
          <span className={styles.placeholderFile}>hero-banner.png</span>
          <span className={styles.placeholderHint}>Add to /public/images/ — Recommended: 1920×900px</span>
        </div>

        {/* Gradient overlays for text legibility — always present */}
        <div className={styles.gradLeft} />
        <div className={styles.gradBottom} />
        <div className={styles.gradTop} />
      </div>

      {/* ── CENTERED CONTENT ── */}
      <div className={`${styles.content} ${loaded ? styles.loaded : ''}`}>
        <h1 className={styles.title} id="hero-title">Vighno Spark 2.0</h1>

        <button className={styles.ctaBtn} id="hero-cta-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch the trailer
          (Upcoming)
        </button>
      </div>

    </section>
  )
}

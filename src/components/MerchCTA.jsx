import styles from './MerchCTA.module.css'
import ImgPlaceholder from './ImgPlaceholder'

/**
 * MERCH CTA SECTION IMAGE PLACEHOLDERS
 * ─────────────────────────────────────────────────────────
 * Add this file to /public/images/:
 *   merch-bg.png  — Full-width merch background illustration
 *                   (market stall with purple/red crewmates, warm lighting)
 * ─────────────────────────────────────────────────────────
 */

export default function MerchCTA() {
  return (
    <section className={styles.merch} id="merch-cta">

      {/* ── BACKGROUND IMAGE ── */}
      <div className={styles.bgWrap}>
        <ImgPlaceholder
          src={`${import.meta.env.BASE_URL}images/merch-store-bg.jpg`}
          alt="Among Us merchandise market stall with crewmate characters"
          fill
          accentColor="#f59e0b"
          label="merch-bg.png"
        />
        {/* Dark gradient overlay — keeps text readable */}
        <div className={styles.overlay} />
      </div>

      {/* ── TEXT CONTENT ── */}
      <div className={styles.container}>
        <div className={styles.content} id="merch-content">
          <span className={styles.badge}>Official Rewards</span>
          <h2 className={styles.heading} id="merch-heading">Get rewards</h2>
          <p className={styles.subtext}>From{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ff8c00 60%, #ff4500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
            }}>VSDC</span>&trade; &amp; more
          </p>
          <a
            href="https://forms.gle/LjuRTEQpvgkLn8ih8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button className={styles.shopBtn} id="merch-shop-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Enroll Now
            </button>
          </a>
        </div>
      </div>

    </section>
  )
}

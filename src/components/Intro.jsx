import styles from './Intro.module.css'
import ImgPlaceholder from './ImgPlaceholder'

/**
 * INTRO SECTION IMAGE PLACEHOLDERS
 * ─────────────────────────────────────────────────────────
 * Add these files to /public/images/:
 *   crewmate-yellow.png   — Yellow crewmate accent (left side)
 *   crewmate-red.png      — Red crewmate accent (right side)
 * ─────────────────────────────────────────────────────────
 */

export default function Intro() {
  return (
    <section className={`${styles.intro} star-bg`} id="intro">
      <div className={styles.container}>

        {/* ── LEFT CREWMATE ── */}
        <div className={styles.accentLeft} aria-hidden="true">
          <div className={styles.floatLeft}>
            <ImgPlaceholder
              src="/images/floating_in_the_background_2.png"
              alt="Yellow crewmate character"
              width={72}
              height={86}
              contain
              accentColor="#f59e0b"
              label="crewmate-yellow.png"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>

        {/* ── RIGHT CREWMATE ── */}
        <div className={styles.accentRight} aria-hidden="true">
          <div className={styles.floatRight}>
            <ImgPlaceholder
              src="/images/floating_in_the_background_1.png"
              alt="Red crewmate character"
              width={60}
              height={72}
              contain
              accentColor="#dc2626"
              label="crewmate-red.png"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>

        {/* ── TEXT CONTENT ── */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading} id="intro-heading">
            This is one of the best opportunity to<br />
            <span className={styles.highlight}>Upskill</span> and{' '}
            <span className={styles.highlightRed}>Connect.</span>
          </h2>
          <p className={styles.subtext} id="intro-subtext">
            Don't miss out on this opportunity to expand your horizons and forge meaningful connections.
          </p>

          {/* Platform badges */}
          <div className={styles.platforms}>
            {['Learn', 'Connect', 'Grow', 'Innovate', 'Compete', 'Win'].map((platform) => (
              <div key={platform} className={styles.platformBadge} title={platform}>
                <span className={styles.platformLabel}>{platform}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

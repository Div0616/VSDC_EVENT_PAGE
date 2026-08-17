import styles from './Footer.module.css'

const DiscordIcon = () => (
  <svg width="18" height="14" viewBox="0 0 24 18" fill="currentColor">
    <path d="M20.317 1.492A19.824 19.824 0 0015.285.13a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 1.492a.07.07 0 00-.032.027C.533 5.946-.32 10.276.099 14.547a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.066a.061.061 0 00-.031-.03z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoText}>Vighno Spark 2.0</span>
            <p className={styles.tagline}>The ultimate opportunity to showcase your skills and ideas.</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Game</h4>
              <a href="#" className={styles.link}>Download</a>
            </div>
            {/* <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Company</h4>
              <a href="#" className={styles.link}>About Vighnolearn</a>
            </div> */}
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Community</h4>
              <a href="https://www.instagram.com/vsdc.vighnolearn?igsh=aGo4cXY3a3Y5Z2gx" className={styles.link}>Instagram</a>

            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2024 VSDC
          </p>
        </div>
      </div>
    </footer>
  )
}

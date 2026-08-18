import styles from './Screenshots.module.css'

const screenshots = [
  { id: 'ss1' },
  { id: 'ss2' },
  { id: 'ss3' },
  { id: 'ss4' },
  { id: 'ss5' },
  { id: 'ss6' },
  { id: 'ss7' },
]

export default function Screenshots() {
  return (
    <section className={styles.screenshots} id="screenshots">
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow} id="screenshots-label">📸 EVENT GALLERY</span>
          <h2 className={styles.heading} id="screenshots-heading">See It In Action</h2>
        </div>

        <div className={styles.grid} id="screenshots-grid">
          {screenshots.map((ss) => (
            <div key={ss.id} className={styles.ssCard} id={`screenshot-${ss.id}`}>
              <div className={styles.comingSoonCard}>
                <span className={styles.comingSoonText}>Coming Soon</span>
              </div>
              {ss.tag && (
                <div className={styles.tag} style={{ color: ss.tagColor, borderColor: ss.tagColor }}>
                  {ss.tag}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


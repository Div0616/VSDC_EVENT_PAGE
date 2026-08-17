import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  return (
    <div className={styles.bar} id="announcement-bar" role="banner">
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.outNow}>🚨 OUT NOW!</span>
          <span className={styles.date}>August 29, 2026</span>
          <span className={styles.msg}>— Participate in our new event 'AI Software Development'.</span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.right}>
          <span className={styles.ticker}>
            <span className={styles.tickerContent}>
              PARTICIPATE IN OUR NEW EVENT 'AI SOFTWARE DEVELOPMENT'&nbsp;&nbsp;|&nbsp;&nbsp;Last Date of Registration: 20th august...
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

import styles from './HowToPlay.module.css'
import ImgPlaceholder from './ImgPlaceholder'

// ── CREW TASKS — each with a contextual inline SVG icon ──────────────────────
const crewTasks = [
  {
    accent: '#4ade80',
    text: 'This is a 9 days learning program',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    accent: '#3aa0ff',
    text: 'An opportunity to Learn and Grow',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    accent: '#22d3ee',
    text: 'Students who want practical implementation skills',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    accent: '#fbbf24',
    text: 'Exposure to modern software tools, full-stack concepts, teamwork.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07" />
      </svg>
    ),
  },
  {
    accent: '#a78bfa',
    text: 'Develop your pitching style, presentation skills, branding your ideas.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    accent: '#f472b6',
    text: 'Meet the mentors who are industry experts, have technical expertise.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

// ── IMPOSTOR TASKS — each with a contextual inline SVG icon ──────────────────
const impostorTasks = [
  {
    accent: '#f87171',
    text: 'Think of innovative ideas, software solutions.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
      </svg>
    ),
  },
  {
    accent: '#fb923c',
    text: 'Pitch in the way you eliminate the competition.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    accent: '#a78bfa',
    text: 'Sneak through others ideas and end your competition.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <line x1="3" y1="3" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    accent: '#f43f5e',
    text: "It's an opportunity to show what you know.",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    accent: '#dc2626',
    text: 'Close doors and show them the power of your ideas.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    accent: '#ef4444',
    text: 'Do everything you can to stay in the game.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

function TaskList({ tasks, theme }) {
  return (
    <div className={`${styles.taskGrid} ${theme === 'impostor' ? styles.impostorGrid : ''}`}>
      {tasks.map((task, i) => (
        <div key={i} className={styles.taskItem} id={`task-${theme}-${i + 1}`}>
          <div
            className={styles.taskIconWrap}
            style={{
              borderColor: task.accent,
              background: `${task.accent}1a`,
              color: task.accent,
            }}
          >
            {task.svg}
          </div>
          <p className={styles.taskText}>{task.text}</p>
        </div>
      ))}
    </div>
  )
}

export default function HowToPlay() {
  return (
    <section className={`${styles.howToPlay} star-bg`} id="how-to-play">
      <div className={styles.container}>

        {/* ── HEADER with crewmate accents ── */}
        <div className={styles.header}>
          <div className={styles.crewAccentLeft}>
            <ImgPlaceholder
              src={`${import.meta.env.BASE_URL}images/floating_in_the_background_1.png`}
              alt="Red crewmate character"
              width={60}
              height={72}
              contain
              accentColor="#dc2626"
              label="floating_in_the_background_1.png"
              style={{ borderRadius: '8px' }}
            />
          </div>
          <h2 className={styles.heading} id="how-to-play-heading">How to Play</h2>
          <div className={styles.crewAccentRight}>
            <ImgPlaceholder
              src={`${import.meta.env.BASE_URL}images/floating_in_the_background_2.png`}
              alt="Yellow crewmate character"
              width={60}
              height={72}
              contain
              accentColor="#f59e0b"
              label="floating_in_the_background_2.png"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>

        {/* ── INTRO PARAGRAPH ── */}
        <p className={styles.introPara} id="how-to-play-intro">
          Participate Solo or with your own crew{' '}
          <span className={styles.pinkHighlight}>attempt to hold your position together and survive</span>
          , but be careful. Every other crew will try to kill you from the competition!
        </p>

        {/* ══════════════════════════════════════════
            7a. THE CREW BANNER
        ══════════════════════════════════════════ */}
        <div className={styles.bannerSection} id="crew-section">
          <div className={`${styles.banner} ${styles.crewBanner}`}>
            {/* ── CREW BANNER IMAGE ── */}
            <img
              src={`${import.meta.env.BASE_URL}images/crew-banner.jpg`}
              alt="The Crew banner"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'left center',
                opacity: 0.65,
              }}
            />
          </div>
          <div className={styles.objectiveLine}>
            <span className={styles.objectiveLabel}>Objective:</span>
            <span className={styles.objectiveText}>"Be unique and different from the crowd"</span>
          </div>
          <TaskList tasks={crewTasks} theme="crew" />
        </div>

        {/* ══════════════════════════════════════════
            7b. THE IMPOSTOR BANNER
        ══════════════════════════════════════════ */}
        <div className={styles.bannerSection} id="impostor-section">
          <div className={`${styles.banner} ${styles.impostorBanner}`}>
            {/* ── IMPOSTOR BANNER IMAGE ── */}
            <img
              src={`${import.meta.env.BASE_URL}images/imposter-banner-img.jpg`}
              alt="The Impostor banner"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                opacity: 0.7,
              }}
            />
          </div>
          <div className={styles.objectiveLine}>
            <span className={styles.objectiveLabel}>Objective:</span>
            <span className={`${styles.objectiveText} ${styles.impostorObjective}`}>"Kill of the Competition"</span>
          </div>
          <TaskList tasks={impostorTasks} theme="impostor" />
        </div>

      </div>
    </section>
  )
}

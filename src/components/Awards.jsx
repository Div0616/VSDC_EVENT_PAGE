import styles from './Awards.module.css'

/**
 * THE CREW SECTION
 * ─────────────────────────────────────────────────────────
 * Add team member photos to /public/images/:
 *   team-1.png through team-7.png  (recommended: 400×480px, portrait)
 * ─────────────────────────────────────────────────────────
 */

const crew = [
  {
    id: 'member-1',
    img: 'manas-shukla.jpeg',
    name: 'Manas Shukla',
    position: 'President',
    contact: '+91 8928290947',
    accentColor: '#ff8c00',
  },
  {
    id: 'member-2',
    img: 'mahima-singh.jpeg',
    name: 'Mahima Singh',
    position: 'Vice President',
    contact: '+91 7498520936',
    accentColor: '#3aa0ff',
  },
  {
    id: 'member-3',
    img: 'Gyanankur.jpeg',
    name: 'Gyanankur Baruah',
    position: 'Technical Lead',
    contact: '+91 9136149564',
    accentColor: '#4ade80',
  },
  {
    id: 'member-4',
    img: 'amiti-naik.jpeg',
    name: 'Amiti Naik',
    position: 'Marketing Head',
    contact: '+91 9892847915',
    accentColor: '#f472b6',
  },
  {
    id: 'member-5',
    img: 'whatsapp-image-2026-08-09.jpeg',
    name: 'Divyanshu Singh',
    position: 'Secretary',
    contact: '+91 8446638364',
    accentColor: '#a78bfa',
  },
  {
    id: 'member-6',
    img: 'asyush-singh.jpeg',
    name: 'Aayush Singh',
    position: 'PR Head',
    contact: '+91 7276793362',
    accentColor: '#22d3ee',
  },
  {
    id: 'member-7',
    img: 'asmi.jpeg',
    name: 'Asmi Patel',
    position: 'Event Coordinator',
    contact: '+91 9324096259',
    accentColor: '#fbbf24',
  },
  {
    id: 'member-8',
    img: 'team-8.jpeg',
    name: 'Rahul Verma',
    position: 'Design Lead',
    contact: '+91 9000000001',
    accentColor: '#f87171',
  },
  {
    id: 'member-9',
    img: 'team-9.jpeg',
    name: 'Priya Sharma',
    position: 'Content Head',
    contact: '+91 9000000002',
    accentColor: '#34d399',
  },
  {
    id: 'member-10',
    img: 'team-10.jpeg',
    name: 'Aryan Mehta',
    position: 'Dev Lead',
    contact: '+91 9000000003',
    accentColor: '#818cf8',
  },
  {
    id: 'member-11',
    img: 'team-11.jpeg',
    name: 'Sneha Kapoor',
    position: 'Operations',
    contact: '+91 9000000004',
    accentColor: '#fb923c',
  },
  {
    id: 'member-12',
    img: 'team-12.jpeg',
    name: 'Vikram Nair',
    position: 'Finance Head',
    contact: '+91 9000000005',
    accentColor: '#2dd4bf',
  },
  {
    id: 'member-13',
    img: 'team-13.jpeg',
    name: 'Kavya Reddy',
    position: 'Outreach Lead',
    contact: '+91 9000000006',
    accentColor: '#e879f9',
  },
]

export default function Awards() {
  return (
    <section className={styles.awards} id="awards">
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>👥 Meet the Team</span>
          <h2 className={styles.heading} id="awards-heading">The Crew</h2>
          <p className={styles.subtext}>The people behind the magic — passionate, driven, and ready to make this happen.</p>
        </div>

        <div className={styles.grid} id="awards-grid">
          {crew.map((member) => (
            <div
              key={member.id}
              className={styles.card}
              id={member.id}
              style={{ '--accent': member.accentColor }}
            >
              {/* ── PHOTO ── */}
              <div className={styles.photoWrap}>
                <img
                  src={`${import.meta.env.BASE_URL}images/${member.img}`}
                  alt={`${member.name} — ${member.position}`}
                  className={styles.photo}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback placeholder if image is missing */}
                <div className={styles.photoPlaceholder} aria-hidden="true">
                  <span className={styles.placeholderIcon}>👤</span>
                  <span className={styles.placeholderLabel}>{member.img}</span>
                </div>
              </div>

              {/* ── SLIDE-UP OVERLAY ── */}
              <div className={styles.overlay}>
                <div className={styles.overlayInner}>
                  <div className={styles.memberName}>{member.name}</div>
                  <div className={styles.memberPosition} style={{ color: member.accentColor }}>
                    {member.position}
                  </div>
                  <div className={styles.dividerLine} style={{ background: member.accentColor }} />
                  <div className={styles.memberContact}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7, flexShrink: 0 }}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    {member.contact}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

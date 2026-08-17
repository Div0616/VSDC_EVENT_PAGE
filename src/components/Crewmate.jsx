/**
 * Shared authentic Among Us crewmate SVG component
 * Used across Hero, Intro, HowToPlay, and other sections
 */

const DARK_SHADES = {
  '#dc2626': '#9b1c1c',
  '#3b82f6': '#1e40af',
  '#7c3aed': '#4c1d95',
  '#a78bfa': '#5b21b6',
  '#ec4899': '#9d174d',
  '#f59e0b': '#92400e',
  '#fbbf24': '#92400e',
  '#22d3ee': '#0e7490',
  '#f97316': '#9a3412',
  '#4ade80': '#166534',
  '#84cc16': '#3f6212',
  '#6b7280': '#374151',
  '#78716c': '#292524',
  '#b91c1c': '#7f1d1d',
}

const getDark = (color) => DARK_SHADES[color] || '#111827'

let gradId = 0

export function Crewmate({ color = '#dc2626', size = 80, rotate = 0, flip = false, style = {}, className = '', glow = false, name = '' }) {
  const dark = getDark(color)
  const id = `cg_${color.replace('#', '')}`

  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 80 96"
      fill="none"
      className={className}
      aria-label={name ? `${name} crewmate` : undefined}
      aria-hidden={!name}
      style={{
        transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
        filter: glow
          ? `drop-shadow(0 0 18px ${color}88) drop-shadow(0 4px 8px rgba(0,0,0,0.6))`
          : `drop-shadow(0 4px 10px rgba(0,0,0,0.55))`,
        ...style,
      }}
    >
      {/* Body */}
      <ellipse cx="40" cy="38" rx="30" ry="34" fill={color} />
      {/* Shadow on body */}
      <ellipse cx="50" cy="50" rx="18" ry="20" fill={dark} opacity="0.35" />
      {/* Backpack */}
      <rect x="55" y="26" width="15" height="24" rx="5" fill={dark} />
      <rect x="56" y="27" width="13" height="22" rx="4" fill={color} opacity="0.55" />
      <rect x="55" y="26" width="15" height="24" rx="5" stroke="#111" strokeWidth="2" fill="none" />
      {/* Visor */}
      <ellipse cx="36" cy="28" rx="19" ry="13" fill="#1a3050" />
      <ellipse cx="36" cy="28" rx="19" ry="13" fill={`url(#${id})`} />
      {/* Glass shine */}
      <ellipse cx="30" cy="23" rx="7" ry="5" fill="rgba(255,255,255,0.25)" />
      <ellipse cx="27.5" cy="21.5" rx="3" ry="2" fill="rgba(255,255,255,0.38)" />
      {/* Left leg */}
      <path d="M14 62 Q14 88 25 88 Q36 88 36 62 Z" fill={color} />
      {/* Right leg */}
      <path d="M44 62 Q44 88 55 88 Q66 88 66 62 Z" fill={color} />
      {/* Leg shadows */}
      <path d="M14 62 Q14 88 25 88 Q36 88 36 62 Z" fill={dark} opacity="0.2" />
      <path d="M44 62 Q44 88 55 88 Q66 88 66 62 Z" fill={dark} opacity="0.2" />

      {/* ===== OUTLINES ===== */}
      <ellipse cx="40" cy="38" rx="30" ry="34" stroke="#111" strokeWidth="3" fill="none" />
      <ellipse cx="36" cy="28" rx="19" ry="13" stroke="#111" strokeWidth="2.5" fill="none" />
      <path d="M14 62 Q14 88 25 88 Q36 88 36 62 Z" stroke="#111" strokeWidth="2.5" fill="none" />
      <path d="M44 62 Q44 88 55 88 Q66 88 66 62 Z" stroke="#111" strokeWidth="2.5" fill="none" />

      <defs>
        <radialGradient id={id} cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#071428" stopOpacity="0.95" />
        </radialGradient>
      </defs>
    </svg>
  )
}

/** Among Us Impostor with knife */
export function Impostor({ size = 200, glow = true }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 80 96"
      fill="none"
      aria-label="Red impostor crewmate with knife"
      style={{
        filter: glow
          ? 'drop-shadow(0 0 40px rgba(220,38,38,0.55)) drop-shadow(0 8px 16px rgba(0,0,0,0.7))'
          : 'drop-shadow(0 4px 10px rgba(0,0,0,0.6))',
      }}
    >
      {/* Body */}
      <ellipse cx="40" cy="38" rx="30" ry="34" fill="#dc2626" />
      <ellipse cx="50" cy="50" rx="18" ry="20" fill="#9b1c1c" opacity="0.35" />
      {/* Backpack */}
      <rect x="55" y="26" width="15" height="24" rx="5" fill="#9b1c1c" />
      <rect x="56" y="27" width="13" height="22" rx="4" fill="#dc2626" opacity="0.55" />
      <rect x="55" y="26" width="15" height="24" rx="5" stroke="#111" strokeWidth="2" fill="none" />
      {/* Visor */}
      <ellipse cx="36" cy="28" rx="19" ry="13" fill="#1a3050" />
      <ellipse cx="36" cy="28" rx="19" ry="13" fill="url(#impVisor)" />
      <ellipse cx="30" cy="23" rx="7" ry="5" fill="rgba(255,255,255,0.25)" />
      <ellipse cx="27.5" cy="21.5" rx="3" ry="2" fill="rgba(255,255,255,0.38)" />
      {/* Knife held in right hand area */}
      <g transform="translate(7 50) rotate(-20)">
        {/* Blade */}
        <polygon points="4,0 7,18 1,18" fill="#d1d5db" />
        <polygon points="4,0 7,8 4,6" fill="#f9fafb" opacity="0.6" />
        {/* Guard */}
        <rect x="-1" y="18" width="10" height="3" rx="1" fill="#6b7280" />
        {/* Handle */}
        <rect x="1" y="21" width="6" height="9" rx="2" fill="#78350f" />
        <rect x="2" y="22" width="4" height="7" rx="1" fill="#92400e" opacity="0.6" />
      </g>
      {/* Legs */}
      <path d="M14 62 Q14 88 25 88 Q36 88 36 62 Z" fill="#dc2626" />
      <path d="M44 62 Q44 88 55 88 Q66 88 66 62 Z" fill="#dc2626" />
      <path d="M14 62 Q14 88 25 88 Q36 88 36 62 Z" fill="#9b1c1c" opacity="0.2" />
      <path d="M44 62 Q44 88 55 88 Q66 88 66 62 Z" fill="#9b1c1c" opacity="0.2" />
      {/* Outlines */}
      <ellipse cx="40" cy="38" rx="30" ry="34" stroke="#111" strokeWidth="3" fill="none" />
      <ellipse cx="36" cy="28" rx="19" ry="13" stroke="#111" strokeWidth="2.5" fill="none" />
      <path d="M14 62 Q14 88 25 88 Q36 88 36 62 Z" stroke="#111" strokeWidth="2.5" fill="none" />
      <path d="M44 62 Q44 88 55 88 Q66 88 66 62 Z" stroke="#111" strokeWidth="2.5" fill="none" />
      <defs>
        <radialGradient id="impVisor" cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#071428" stopOpacity="0.95" />
        </radialGradient>
      </defs>
    </svg>
  )
}

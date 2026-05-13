// primitives.jsx — Yallah design tokens, zellige geometry, mascot, icons

// ─── TOKENS ──────────────────────────────────────────────────
const TOKENS = {
  // light
  sand:        '#FBF6EE',
  sand2:       '#F5EDDD',
  ink:         '#1B1B1F',
  ink2:        '#3A3A42',
  ink3:        '#6B6B75',
  ink4:        '#A8A8B0',
  hairline:    'rgba(27,27,31,0.08)',
  // brand
  terracotta:  '#E2725B',
  terracotta2: '#C95A45',
  terracottaT: 'rgba(226,114,91,0.12)',
  majorelle:   '#3D5AFE',
  majorelle2:  '#2A3FE0',
  majorelleT:  'rgba(61,90,254,0.10)',
  saffron:     '#F4B400',
  saffron2:    '#D89A00',
  mint:        '#2BB673',
  mint2:       '#1F9A60',
  mintT:       'rgba(43,182,115,0.12)',
  // dark
  darkBg:      '#15131A',
  darkBg2:     '#1E1B24',
  darkSurface: '#262230',
  darkInk:     '#F4F0E8',
  darkInk2:    '#C4C0B8',
  darkInk3:    '#7E7A88',
  darkHair:    'rgba(244,240,232,0.10)',
};

// Theme helper
const themed = (dark) => dark ? {
  bg: TOKENS.darkBg, bg2: TOKENS.darkBg2, surface: TOKENS.darkSurface,
  ink: TOKENS.darkInk, ink2: TOKENS.darkInk2, ink3: TOKENS.darkInk3,
  hair: TOKENS.darkHair,
} : {
  bg: TOKENS.sand, bg2: TOKENS.sand2, surface: '#FFFFFF',
  ink: TOKENS.ink, ink2: TOKENS.ink2, ink3: TOKENS.ink3,
  hair: TOKENS.hairline,
};

// ─── ZELLIGE PATTERN ─────────────────────────────────────────
// 8-point star tile. Used as background overlay & badge shape.
function ZelligeBg({ opacity = 0.06, color = '#1B1B1F', size = 80, style = {} }) {
  const id = 'zg-' + Math.random().toString(36).slice(2, 8);
  // 8-point star path inside a 100x100 tile
  const star = "M50 0 L61 28 L89 11 L72 39 L100 50 L72 61 L89 89 L61 72 L50 100 L39 72 L11 89 L28 61 L0 50 L28 39 L11 11 L39 28 Z";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill="none" stroke="${color}" stroke-width="1.2" opacity="${opacity}"><path d="${star}"/><circle cx="50" cy="50" r="18"/><path d="M50 32 L50 68 M32 50 L68 50 M37 37 L63 63 M63 37 L37 63" stroke-width="0.8"/></g></svg>`;
  const url = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  return <div style={{ position: 'absolute', inset: 0, backgroundImage: url, backgroundSize: `${size}px ${size}px`, pointerEvents: 'none', ...style }} />;
}

// Solid 8-point star (for badges, nodes)
function ZelligeStar({ size = 64, fill = '#E2725B', stroke, strokeWidth = 0, children, style = {} }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0 }}>
        <path d="M50 2 L60.5 28 L88 12 L72 39.5 L98 50 L72 60.5 L88 88 L60.5 72 L50 98 L39.5 72 L12 88 L28 60.5 L2 50 L28 39.5 L12 12 L39.5 28 Z"
          fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
      </svg>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

// 12-point rosette (for higher-tier badges)
function ZelligeRosette({ size = 64, fill = '#3D5AFE', stroke, strokeWidth = 0, children, style = {} }) {
  // 12 points
  const pts = [];
  for (let i = 0; i < 24; i++) {
    const r = i % 2 === 0 ? 48 : 30;
    const a = (i * Math.PI) / 12 - Math.PI / 2;
    pts.push(`${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`);
  }
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0 }}>
        <polygon points={pts.join(' ')} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
      </svg>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

// Hexagon (for path nodes)
function ZelligeHex({ size = 64, fill = '#E2725B', stroke, strokeWidth = 0, children, style = {} }) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 - Math.PI / 2;
    pts.push(`${50 + 48 * Math.cos(a)},${50 + 48 * Math.sin(a)}`);
  }
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0 }}>
        <polygon points={pts.join(' ')} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
      </svg>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

// ─── MASCOT — ATAY (tea glass) ──────────────────────────────
// Original geometric character. A tea glass with mint sprig & steam.
// Expression via eye/mouth swap. Steam = activity indicator.
function Atay({ size = 120, mood = 'happy', style = {}, outfit = 'none' }) {
  const w = size;
  const h = size * 1.2;
  // mood maps
  const eyes = mood === 'wink'
    ? <><circle cx="42" cy="58" r="2.2" fill="#1B1B1F" /><path d="M52 58 q3 -2 6 0" stroke="#1B1B1F" strokeWidth="1.8" fill="none" strokeLinecap="round"/></>
    : mood === 'sleep'
    ? <><path d="M40 58 q2 -2 4 0" stroke="#1B1B1F" strokeWidth="1.8" fill="none" strokeLinecap="round"/><path d="M56 58 q2 -2 4 0" stroke="#1B1B1F" strokeWidth="1.8" fill="none" strokeLinecap="round"/></>
    : mood === 'cheer'
    ? <><path d="M40 58 q2 -3 4 0" stroke="#1B1B1F" strokeWidth="1.8" fill="none" strokeLinecap="round"/><path d="M56 58 q2 -3 4 0" stroke="#1B1B1F" strokeWidth="1.8" fill="none" strokeLinecap="round"/></>
    : <><circle cx="42" cy="58" r="2.2" fill="#1B1B1F" /><circle cx="58" cy="58" r="2.2" fill="#1B1B1F" /></>;
  const mouth = mood === 'sleep'
    ? <ellipse cx="50" cy="68" rx="3" ry="1.5" fill="#1B1B1F" />
    : mood === 'cheer'
    ? <path d="M44 65 q6 8 12 0" stroke="#1B1B1F" strokeWidth="2.2" fill="#E2725B" strokeLinecap="round" strokeLinejoin="round"/>
    : <path d="M45 66 q5 4 10 0" stroke="#1B1B1F" strokeWidth="2" fill="none" strokeLinecap="round"/>;

  return (
    <svg width={w} height={h} viewBox="0 0 100 120" style={style}>
      {/* steam */}
      <g opacity="0.5">
        <path d="M35 8 q-3 6 0 12 q3 6 0 12" stroke="#A8A8B0" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M50 4 q-3 6 0 12 q3 6 0 12" stroke="#A8A8B0" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M65 8 q-3 6 0 12 q3 6 0 12" stroke="#A8A8B0" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </g>
      {/* glass body */}
      <path d="M22 38 L78 38 L74 110 Q74 115 68 115 L32 115 Q26 115 26 110 Z"
        fill="#FBF6EE" stroke="#1B1B1F" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* tea fill */}
      <path d="M24 50 L76 50 L73 108 Q73 112 68 112 L32 112 Q27 112 27 108 Z"
        fill="#E2725B" />
      {/* highlight */}
      <path d="M30 54 L33 100" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round"/>
      {/* mint sprig */}
      <g transform="translate(58 30)">
        <path d="M0 8 Q4 0 8 4 Q12 -2 14 6" stroke="#2BB673" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <ellipse cx="4" cy="3" rx="3" ry="2" fill="#2BB673" transform="rotate(-30 4 3)"/>
        <ellipse cx="11" cy="2" rx="3" ry="2" fill="#1F9A60" transform="rotate(20 11 2)"/>
      </g>
      {/* face */}
      {eyes}
      {/* cheeks */}
      <circle cx="35" cy="68" r="3" fill="#F4B400" opacity="0.5"/>
      <circle cx="65" cy="68" r="3" fill="#F4B400" opacity="0.5"/>
      {mouth}
      {/* outfit overlays */}
      {outfit === 'tarboush' && (
        <g>
          <path d="M28 38 L72 38 L68 22 L32 22 Z" fill="#C95A45" stroke="#1B1B1F" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="50" cy="20" r="3" fill="#1B1B1F"/>
          <path d="M48 17 L52 5" stroke="#1B1B1F" strokeWidth="2" strokeLinecap="round"/>
        </g>
      )}
      {outfit === 'djellaba' && (
        <g>
          <path d="M22 80 L78 80 L82 118 L18 118 Z" fill="#3D5AFE" stroke="#1B1B1F" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M42 80 L50 95 L58 80" stroke="#1B1B1F" strokeWidth="1.5" fill="none"/>
          <path d="M30 90 L70 90" stroke="#F4B400" strokeWidth="1" opacity="0.6"/>
        </g>
      )}
      {outfit === 'sunglasses' && (
        <g>
          <rect x="36" y="54" width="11" height="8" rx="2" fill="#1B1B1F"/>
          <rect x="53" y="54" width="11" height="8" rx="2" fill="#1B1B1F"/>
          <path d="M47 58 L53 58" stroke="#1B1B1F" strokeWidth="2"/>
        </g>
      )}
    </svg>
  );
}

// ─── ICONS ───────────────────────────────────────────────────
const Icon = {
  flame: ({ size = 20, color = '#F4B400' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2 C13 6 17 8 17 13 C17 17 14.5 20 12 20 C9.5 20 7 17 7 13 C7 11 8 10 9 9 C9 11 10 12 11 12 C10 9 11 5 12 2 Z"/>
    </svg>
  ),
  heart: ({ size = 20, color = '#E2725B', filled = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="2">
      <path d="M12 21 C12 21 4 14 4 8.5 C4 5.5 6.5 3 9.5 3 C11 3 12 4 12 4 C12 4 13 3 14.5 3 C17.5 3 20 5.5 20 8.5 C20 14 12 21 12 21 Z"/>
    </svg>
  ),
  coin: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#F4B400"/>
      <circle cx="12" cy="12" r="7.5" fill="none" stroke="#D89A00" strokeWidth="1"/>
      <text x="12" y="16" fontSize="11" fontWeight="800" textAnchor="middle" fill="#D89A00" fontFamily="system-ui">د</text>
    </svg>
  ),
  gem: ({ size = 20, color = '#3D5AFE' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M6 4 L18 4 L22 10 L12 22 L2 10 Z" stroke="#fff" strokeWidth="0.5" strokeLinejoin="round"/>
      <path d="M6 4 L12 10 L18 4 M2 10 L22 10" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
    </svg>
  ),
  check: ({ size = 16, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8 L7 12 L13 4"/>
    </svg>
  ),
  x: ({ size = 16, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <path d="M4 4 L12 12 M12 4 L4 12"/>
    </svg>
  ),
  lock: ({ size = 18, color = '#A8A8B0' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="5" y="11" width="14" height="10" rx="2"/>
      <path d="M8 11 V7 a4 4 0 0 1 8 0 V11" stroke={color} strokeWidth="2" fill="none"/>
    </svg>
  ),
  play: ({ size = 18, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M7 4 L20 12 L7 20 Z"/></svg>
  ),
  speaker: ({ size = 22, color = '#3D5AFE' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M3 9 V15 H7 L13 20 V4 L7 9 Z"/>
      <path d="M16 8 Q19 12 16 16 M18 5 Q23 12 18 19" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  mic: ({ size = 28, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="9" y="2" width="6" height="13" rx="3"/>
      <path d="M5 11 a7 7 0 0 0 14 0 M12 18 V22 M8 22 H16" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  back: ({ size = 22, color = '#1B1B1F' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 5 L8 12 L15 19"/>
    </svg>
  ),
  close: ({ size = 22, color = '#1B1B1F' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <path d="M6 6 L18 18 M18 6 L6 18"/>
    </svg>
  ),
  settings: ({ size = 22, color = '#1B1B1F' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2 V5 M12 19 V22 M2 12 H5 M19 12 H22 M4.9 4.9 L7 7 M17 17 L19.1 19.1 M4.9 19.1 L7 17 M17 7 L19.1 4.9"/>
    </svg>
  ),
  navHome: ({ size = 26, active, color }) => (
    <svg width={size} height={size} viewBox="0 0 26 26" fill={active ? color : 'none'} stroke={color} strokeWidth="2" strokeLinejoin="round">
      <path d="M3 11 L13 3 L23 11 V22 H16 V15 H10 V22 H3 Z"/>
    </svg>
  ),
  navTrophy: ({ size = 26, active, color }) => (
    <svg width={size} height={size} viewBox="0 0 26 26" fill={active ? color : 'none'} stroke={color} strokeWidth="2" strokeLinejoin="round">
      <path d="M7 4 H19 V11 a6 6 0 0 1 -12 0 Z M3 5 V8 a3 3 0 0 0 4 3 M23 5 V8 a3 3 0 0 1 -4 3 M10 17 H16 V22 H10 Z M8 22 H18"/>
    </svg>
  ),
  navShop: ({ size = 26, active, color }) => (
    <svg width={size} height={size} viewBox="0 0 26 26" fill={active ? color : 'none'} stroke={color} strokeWidth="2" strokeLinejoin="round">
      <path d="M5 9 H21 L19 22 H7 Z M9 9 V6 a4 4 0 0 1 8 0 V9"/>
    </svg>
  ),
  navUser: ({ size = 26, active, color }) => (
    <svg width={size} height={size} viewBox="0 0 26 26" fill={active ? color : 'none'} stroke={color} strokeWidth="2">
      <circle cx="13" cy="9" r="4"/>
      <path d="M4 22 a9 9 0 0 1 18 0" strokeLinecap="round"/>
    </svg>
  ),
  bell: ({ size = 22, color = '#1B1B1F' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round">
      <path d="M5 18 H19 L17 15 V11 a5 5 0 0 0 -10 0 V15 Z M10 21 a2 2 0 0 0 4 0"/>
    </svg>
  ),
};

// ─── PRIMITIVES ──────────────────────────────────────────────
// 3D-shadow press button (offset bottom shadow, depresses on active)
function PressButton({ children, color = TOKENS.terracotta, shadow, textColor = '#fff', height = 56, fontSize = 16, full = true, onClick, disabled, style = {} }) {
  const sh = shadow || (color === TOKENS.terracotta ? TOKENS.terracotta2
    : color === TOKENS.majorelle ? TOKENS.majorelle2
    : color === TOKENS.mint ? TOKENS.mint2
    : color === TOKENS.saffron ? TOKENS.saffron2
    : 'rgba(0,0,0,0.18)');
  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => !disabled && setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onClick={onClick}
      disabled={disabled}
      style={{
        position: 'relative', width: full ? '100%' : 'auto',
        background: 'transparent', border: 'none',
        padding: 0, cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.5 : 1, ...style,
      }}>
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 4, bottom: 0,
        background: sh, borderRadius: 16,
      }}/>
      <div style={{
        position: 'relative', height,
        background: color, color: textColor,
        borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize, letterSpacing: 0.4,
        textTransform: 'uppercase',
        transform: pressed ? 'translateY(4px)' : 'translateY(0)',
        transition: 'transform 0.05s',
        fontFamily: '"Sora", system-ui, sans-serif',
      }}>{children}</div>
    </button>
  );
}

// Ghost / outlined button
function GhostButton({ children, color = TOKENS.ink3, height = 56, full = true, onClick, dark = false, style = {} }) {
  const t = themed(dark);
  return (
    <button onClick={onClick} style={{
      width: full ? '100%' : 'auto', height,
      background: 'transparent',
      border: `2px solid ${dark ? TOKENS.darkHair : TOKENS.hairline}`,
      borderRadius: 16, color: t.ink2,
      fontWeight: 700, fontSize: 14, letterSpacing: 0.4,
      textTransform: 'uppercase', cursor: 'pointer',
      fontFamily: '"Sora", system-ui, sans-serif', ...style,
    }}>{children}</button>
  );
}

// Linear progress bar
function ProgressBar({ value, max = 100, color = TOKENS.mint, height = 14, dark = false }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{
      height, borderRadius: height,
      background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(27,27,31,0.08)',
      overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        width: `${pct}%`, height: '100%', background: color,
        borderRadius: height, position: 'relative',
        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{
          position: 'absolute', top: 3, left: 6, right: 6, height: 3,
          background: 'rgba(255,255,255,0.5)', borderRadius: 2,
        }}/>
      </div>
    </div>
  );
}

// Ring progress
function ProgressRing({ value, max = 100, size = 80, stroke = 8, color = TOKENS.saffron, bg = 'rgba(27,27,31,0.08)', children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, value / max));
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} stroke={bg} strokeWidth={stroke} fill="none"/>
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
          strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}/>
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );
}

// Stat pill (streak, hearts, coins in header)
function StatPill({ icon, value, color = TOKENS.ink, dark = false }) {
  const t = themed(dark);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 4,
      padding: '6px 10px 6px 8px',
      background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(27,27,31,0.04)',
      borderRadius: 999,
      fontWeight: 800, color: dark ? t.ink : color, fontSize: 15,
      fontFamily: '"Sora", system-ui',
      fontVariantNumeric: 'tabular-nums',
    }}>
      {icon}
      <span>{value}</span>
    </div>
  );
}

// Card surface
function Card({ children, dark = false, padding = 16, style = {} }) {
  return (
    <div style={{
      background: dark ? TOKENS.darkSurface : '#FFFFFF',
      borderRadius: 20, padding,
      border: `1px solid ${dark ? TOKENS.darkHair : TOKENS.hairline}`,
      boxShadow: dark ? 'none' : '0 1px 0 rgba(27,27,31,0.04), 0 4px 16px rgba(27,27,31,0.04)',
      ...style,
    }}>{children}</div>
  );
}

// Chip (sentence builder token)
function Chip({ children, sub, selected, used, onClick, dark = false, size = 'md', style = {} }) {
  const t = themed(dark);
  const padX = size === 'sm' ? 12 : 16;
  const padY = size === 'sm' ? 8 : 12;
  return (
    <button onClick={onClick} disabled={used} style={{
      position: 'relative',
      padding: `${padY}px ${padX}px`,
      background: used ? 'transparent' : (dark ? TOKENS.darkSurface : '#fff'),
      border: `2px solid ${used ? (dark ? TOKENS.darkHair : TOKENS.hairline) : (selected ? TOKENS.majorelle : (dark ? TOKENS.darkHair : 'rgba(27,27,31,0.10)'))}`,
      borderRadius: 14,
      color: used ? 'transparent' : t.ink,
      fontWeight: 700, fontSize: size === 'sm' ? 14 : 17,
      fontFamily: '"Sora", system-ui',
      cursor: used ? 'default' : 'pointer',
      boxShadow: used ? 'none' : `0 3px 0 ${selected ? TOKENS.majorelle2 : (dark ? 'rgba(0,0,0,0.3)' : 'rgba(27,27,31,0.08)')}`,
      transition: 'transform 0.08s, box-shadow 0.08s',
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2,
      ...style,
    }}>
      <span>{children}</span>
      {sub && <span style={{ fontSize: 11, color: t.ink3, fontWeight: 500, fontFamily: 'Tajawal, system-ui', direction: 'rtl' }}>{sub}</span>}
    </button>
  );
}

Object.assign(window, {
  TOKENS, themed,
  ZelligeBg, ZelligeStar, ZelligeRosette, ZelligeHex,
  Atay, Icon,
  PressButton, GhostButton, ProgressBar, ProgressRing, StatPill, Card, Chip,
});

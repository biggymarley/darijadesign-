// screens-home.jsx — Home/Path screen, Profile, Shop

const T2 = TOKENS;

// ─── HOME / PATH ─────────────────────────────────────────────
function PathHeader({ dark = false }) {
  const t = themed(dark);
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 5, background: dark ? T2.darkBg : T2.sand, paddingTop: 60 }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 16px', gap: 8 }}>
        {/* Unit context — tap to open all units */}
        <div style={{ flex: 1, padding: '10px 14px', background: T2.terracotta, borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10, boxShadow: `0 3px 0 ${T2.terracotta2}` }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Unit 2 · The Medina</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginTop: 2, fontFamily: 'Sora, system-ui' }}>Café & marketplace basics</div>
          </div>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontWeight: 800, fontFamily: 'Sora, system-ui', flexShrink: 0 }}>›</div>
        </div>
        <StatPill icon={<Icon.flame size={16} color={T2.saffron}/>} value="12" color={T2.saffron2} dark={dark}/>
        <StatPill icon={<Icon.heart size={16} color={T2.terracotta} filled/>} value="4" dark={dark}/>
      </div>
    </div>
  );
}

// Lesson kind glyphs (small icon shown ON each node, not just the play arrow)
function LessonGlyph({ kind, size = 24, color = '#fff' }) {
  if (kind === 'audio') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10v4M7 7v10M11 4v16M15 8v8M19 11v2"/>
    </svg>
  );
  if (kind === 'pairs') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="7" height="5" rx="1.5"/><rect x="14" y="6" width="7" height="5" rx="1.5"/>
      <rect x="3" y="13" width="7" height="5" rx="1.5"/><rect x="14" y="13" width="7" height="5" rx="1.5"/>
    </svg>
  );
  if (kind === 'mic') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>
    </svg>
  );
  if (kind === 'story') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14l-4-3H6a2 2 0 0 1-2-2z"/>
      <path d="M8 9h8M8 13h5"/>
    </svg>
  );
  if (kind === 'build') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="6" height="6" rx="1.5"/><rect x="11" y="9" width="6" height="6" rx="1.5"/><rect x="19" y="9" width="2" height="6" rx="1"/>
    </svg>
  );
  return <Icon.play size={size} color={color}/>;
}

// One node on the winding path. Positioned absolutely by parent.
function PathNode({ left, top, label, status, kind = 'star', glyph = 'play', dark, onTap, isFirst, isLast, indexLabel }) {
  const fill = status === 'done' ? T2.mint
    : status === 'current' ? T2.terracotta
    : status === 'boss' ? T2.majorelle
    : (dark ? '#3A3340' : '#E8DEC8');
  const sh = status === 'done' ? T2.mint2
    : status === 'current' ? T2.terracotta2
    : status === 'boss' ? T2.majorelle2
    : (dark ? '#262030' : '#D5C8AE');
  const Shape = kind === 'rosette' ? ZelligeRosette : kind === 'hex' ? ZelligeHex : ZelligeStar;
  const size = status === 'boss' ? 96 : 72;
  const t = themed(dark);

  return (
    <div onClick={onTap} style={{
      position: 'absolute',
      left: left - size / 2, top: top - size / 2,
      width: size, height: size + 28,
      cursor: status === 'locked' ? 'default' : 'pointer',
    }}>
      {/* halo for current */}
      {status === 'current' && (
        <div style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: `radial-gradient(circle, ${T2.terracotta}33 0%, transparent 65%)`, pointerEvents: 'none' }}/>
      )}

      {/* depth shadow underneath */}
      <div style={{ position: 'absolute', top: 7, left: 0, width: size, height: size }}>
        <Shape size={size} fill={sh}/>
      </div>

      {/* main node */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: size, height: size }}>
        <Shape size={size} fill={fill} stroke={status === 'locked' ? '' : 'rgba(255,255,255,0.28)'} strokeWidth={status === 'locked' ? 0 : 2.5}>
          {status === 'done' ? <Icon.check size={status === 'boss' ? 36 : 28} color="#fff"/> :
           status === 'locked' ? <Icon.lock size={24} color={dark ? '#5A5468' : '#A8A8B0'}/> :
           status === 'boss' ? <span style={{ fontSize: 38 }}>👑</span> :
           <LessonGlyph kind={glyph} size={26} color="#fff"/>}
        </Shape>
        {/* tiny number badge — top-left of node */}
        {indexLabel && status !== 'locked' && (
          <div style={{ position: 'absolute', top: -4, left: -4, width: 22, height: 22, borderRadius: 11, background: dark ? T2.darkBg : '#fff', border: `2px solid ${fill}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: fill, fontFamily: 'Sora, system-ui' }}>{indexLabel}</div>
        )}
      </div>

      {/* label below */}
      {label && (
        <div style={{ position: 'absolute', top: size + 4, left: -20, width: size + 40, textAlign: 'center', fontSize: 10.5, fontWeight: 700, color: status === 'locked' ? t.ink3 : (dark ? T2.darkInk : T2.ink), fontFamily: 'Sora, system-ui', letterSpacing: 0.2, lineHeight: 1.2 }}>{label}</div>
      )}
    </div>
  );
}

// "Continue" card that floats next to the current node.
function NextUpCard({ left, top, dark, lesson }) {
  const t = themed(dark);
  return (
    <div style={{ position: 'absolute', left, top, width: 200, transform: 'translateY(-50%)', zIndex: 4, animation: 'pulse 2s ease-in-out infinite' }}>
      {/* speech-bubble tail pointing left toward node */}
      <div style={{ position: 'absolute', left: -7, top: '50%', marginTop: -7, width: 14, height: 14, background: '#fff', transform: 'rotate(45deg)', borderLeft: `2px solid ${T2.terracotta}`, borderBottom: `2px solid ${T2.terracotta}`, borderRadius: 2 }}/>
      <div style={{ background: '#fff', borderRadius: 14, border: `2px solid ${T2.terracotta}`, boxShadow: `0 4px 0 ${T2.terracotta2}`, padding: '10px 12px', position: 'relative' }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: T2.terracotta, letterSpacing: 1.2, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Continue</div>
        <div style={{ fontSize: 13, fontWeight: 800, color: T2.ink, fontFamily: 'Sora, system-ui', marginTop: 2, lineHeight: 1.2 }}>{lesson.title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 10, fontWeight: 700, color: T2.ink3, fontFamily: 'Sora, system-ui' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            {lesson.minutes} min
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 10, fontWeight: 700, color: T2.saffron2, fontFamily: 'Sora, system-ui' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 6.8H22l-6 4.4 2.3 7.1L12 16l-6.3 4.3L8 13.2 2 8.8h7.6z"/></svg>
            +{lesson.xp} XP
          </div>
        </div>
      </div>
    </div>
  );
}

function MilestoneBanner({ left, top, dark, label, sub }) {
  return (
    <div style={{ position: 'absolute', left: 24, right: 24, top, display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 1, background: `repeating-linear-gradient(to right, ${dark ? T2.darkHair : 'rgba(27,27,31,0.18)'} 0, ${dark ? T2.darkHair : 'rgba(27,27,31,0.18)'} 4px, transparent 4px, transparent 10px)` }}/>
      <div style={{ padding: '6px 12px', background: dark ? T2.darkSurface : '#fff', border: `1.5px solid ${dark ? T2.darkHair : T2.hairline}`, borderRadius: 999, fontSize: 10, fontWeight: 800, color: dark ? T2.darkInk2 : T2.ink2, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', whiteSpace: 'nowrap' }}>{label}</div>
      <div style={{ flex: 1, height: 1, background: `repeating-linear-gradient(to right, ${dark ? T2.darkHair : 'rgba(27,27,31,0.18)'} 0, ${dark ? T2.darkHair : 'rgba(27,27,31,0.18)'} 4px, transparent 4px, transparent 10px)` }}/>
    </div>
  );
}

// Tiny zellige fragment decorations along the path edges
function PathDecor({ left, top, color, size = 18, rotate = 0, opacity = 0.5 }) {
  return (
    <div style={{ position: 'absolute', left, top, transform: `rotate(${rotate}deg)`, opacity, pointerEvents: 'none' }}>
      <ZelligeStar size={size} fill={color}/>
    </div>
  );
}

function ScrHomePath({ dark = false }) {
  const t = themed(dark);
  const PHONE_W = 390;

  // Compute node positions on a sinusoidal path.
  // Center column at 195. Amplitude 90. 10 nodes vertically spaced ~110px.
  const lessons = [
    { label: 'Hello',         status: 'done',    kind: 'star',    glyph: 'audio', section: 'unit2-a' },
    { label: 'Greetings',     status: 'done',    kind: 'star',    glyph: 'pairs', section: 'unit2-a' },
    { label: 'Numbers',       status: 'done',    kind: 'hex',     glyph: 'build', section: 'unit2-a' },
    { label: 'Family',        status: 'done',    kind: 'star',    glyph: 'audio', section: 'unit2-a' },
    // milestone here
    { label: 'At the café',   status: 'current', kind: 'star',    glyph: 'build', section: 'unit2-b', title: 'At the café', minutes: 5, xp: 10 },
    { label: 'Ordering',      status: 'locked',  kind: 'star',    glyph: 'audio', section: 'unit2-b' },
    { label: 'Money talk',    status: 'locked',  kind: 'hex',     glyph: 'mic',   section: 'unit2-b' },
    { label: 'Bargaining',    status: 'locked',  kind: 'rosette', glyph: 'pairs', section: 'unit2-b' },
    { label: 'Story · souk',  status: 'locked',  kind: 'star',    glyph: 'story', section: 'unit2-b' },
    { label: 'Unit 2 boss',   status: 'boss',    kind: 'rosette', glyph: 'boss',  section: 'unit2-b' },
  ];

  // Sinusoidal node layout
  const cx = PHONE_W / 2;
  const amp = 88;
  const startY = 50;
  const stepY = 108;
  const positions = lessons.map((_, i) => ({
    x: cx + Math.sin(i * 0.85 + 0.3) * amp,
    y: startY + i * stepY,
  }));
  const milestoneAfter = 4; // banner after node index 3
  const totalH = startY + (lessons.length - 1) * stepY + 220;

  // Build smooth SVG path through positions
  const buildPath = () => {
    let d = `M ${positions[0].x} ${positions[0].y}`;
    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i - 1];
      const cur = positions[i];
      const midX = (prev.x + cur.x) / 2;
      const midY = (prev.y + cur.y) / 2;
      d += ` Q ${prev.x} ${midY} ${midX} ${midY} T ${cur.x} ${cur.y}`;
    }
    return d;
  };

  // Progress path — solid up to current, dashed after
  const currentIdx = lessons.findIndex(l => l.status === 'current');
  const progressEnd = positions[currentIdx];

  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes pulse { 0%,100% { transform: translateY(-50%) scale(1); } 50% { transform: translateY(-50%) scale(1.02); } }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
      `}</style>
      <ZelligeBg color={dark ? T2.darkInk : T2.ink} opacity={0.04} size={140}/>

      <PathHeader dark={dark}/>

      {/* Sub-header: daily ring + atay + section pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 20px 6px', position: 'relative' }}>
        <ProgressRing value={14} max={20} size={64} stroke={7} color={T2.saffron} bg={dark ? 'rgba(255,255,255,0.08)' : 'rgba(27,27,31,0.06)'}>
          <div style={{ textAlign: 'center', lineHeight: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 16, color: t.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>14</div>
            <div style={{ fontSize: 9, color: t.ink3, fontWeight: 600 }}>/20 XP</div>
          </div>
        </ProgressRing>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: t.ink3, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Daily goal</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui', lineHeight: 1.2, marginTop: 2 }}>6 XP to go — yallah!</div>
        </div>
        <div style={{ animation: 'bob 2.4s ease-in-out infinite' }}>
          <Atay size={56} mood="cheer"/>
        </div>
      </div>

      {/* Section header strip */}
      <div style={{ padding: '4px 20px 8px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: dark ? T2.darkSurface : '#fff', border: `1.5px solid ${dark ? T2.darkHair : T2.hairline}`, borderRadius: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: T2.terracottaT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ZelligeStar size={18} fill={T2.terracotta}/>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: t.ink3, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Section A · Around town</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: t.ink, fontFamily: 'Sora, system-ui', marginTop: 1 }}>4 of 10 lessons</div>
          </div>
          <button style={{ padding: '6px 10px', background: 'transparent', border: `1.5px solid ${dark ? T2.darkHair : T2.hairline}`, borderRadius: 8, fontSize: 10, fontWeight: 800, color: t.ink2, letterSpacing: 0.6, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', cursor: 'pointer' }}>Guidebook</button>
        </div>
      </div>

      {/* Path canvas (scrollable) */}
      <div style={{ flex: 1, overflow: 'auto', position: 'relative', paddingBottom: 110 }}>
        <div style={{ position: 'relative', width: '100%', height: totalH }}>

          {/* Side decoration zellige stars */}
          <PathDecor left={20} top={130} color={T2.terracotta} size={16} rotate={12} opacity={dark ? 0.18 : 0.22}/>
          <PathDecor left={350} top={260} color={T2.saffron} size={20} rotate={-8} opacity={dark ? 0.18 : 0.22}/>
          <PathDecor left={28} top={520} color={T2.majorelle} size={14} rotate={20} opacity={dark ? 0.18 : 0.22}/>
          <PathDecor left={350} top={720} color={T2.mint} size={18} rotate={-16} opacity={dark ? 0.18 : 0.22}/>
          <PathDecor left={28} top={900} color={T2.terracotta} size={16} rotate={6} opacity={dark ? 0.18 : 0.22}/>

          {/* Connector path SVG */}
          <svg width="100%" height={totalH} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={T2.mint}/>
                <stop offset="100%" stopColor={T2.terracotta}/>
              </linearGradient>
            </defs>
            {/* base dotted track (full) */}
            <path d={buildPath()} stroke={dark ? T2.darkHair : 'rgba(27,27,31,0.16)'} strokeWidth="4" strokeDasharray="2 9" fill="none" strokeLinecap="round"/>
            {/* solid colored progress (mask up to current node) */}
            <path d={buildPath()} stroke="url(#pathGrad)" strokeWidth="4" fill="none" strokeLinecap="round"
              strokeDasharray={`${currentIdx * 130} 9999`}
            />
          </svg>

          {/* Milestone banner between section A and B */}
          {(() => {
            const mid = (positions[milestoneAfter - 1].y + positions[milestoneAfter].y) / 2;
            return <MilestoneBanner top={mid - 12} dark={dark} label="Halfway · 4/10"/>;
          })()}

          {/* Nodes */}
          {lessons.map((l, i) => (
            <PathNode key={i}
              left={positions[i].x} top={positions[i].y}
              label={l.label} status={l.status} kind={l.kind} glyph={l.glyph}
              dark={dark} indexLabel={i + 1}
            />
          ))}

          {/* Next-up card next to current node */}
          {currentIdx >= 0 && (() => {
            const p = positions[currentIdx];
            // place card on the side opposite the node from center
            const onLeft = p.x > cx;
            const cardLeft = onLeft ? p.x - 250 : p.x + 50;
            return <NextUpCard left={cardLeft} top={p.y} dark={dark} lesson={lessons[currentIdx]}/>;
          })()}
        </div>
      </div>

      <TabBar active="home" dark={dark}/>
    </div>
  );
}

// ─── TAB BAR ────────────────────────────────────────────────
function TabBar({ active = 'home', dark = false }) {
  const t = themed(dark);
  const items = [
    { key: 'home', icon: Icon.navHome, label: 'Path' },
    { key: 'leagues', icon: Icon.navTrophy, label: 'Leagues' },
    { key: 'shop', icon: Icon.navShop, label: 'Shop' },
    { key: 'profile', icon: Icon.navUser, label: 'You' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: dark ? 'rgba(21,19,26,0.92)' : 'rgba(251,246,238,0.92)',
      backdropFilter: 'blur(20px)',
      borderTop: `1px solid ${dark ? T2.darkHair : T2.hairline}`,
      padding: '10px 4px 28px',
      display: 'flex', justifyContent: 'space-around',
    }}>
      {items.map(it => (
        <div key={it.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '4px 12px', minWidth: 60 }}>
          <it.icon active={active === it.key} color={active === it.key ? T2.terracotta : t.ink3}/>
          <div style={{ fontSize: 10, fontWeight: 700, color: active === it.key ? T2.terracotta : t.ink3, fontFamily: 'Sora, system-ui', letterSpacing: 0.4 }}>{it.label}</div>
        </div>
      ))}
    </div>
  );
}

// ─── PROFILE / STATS ─────────────────────────────────────────
function ScrProfile({ dark = false }) {
  const t = themed(dark);
  const cal = Array.from({ length: 28 }, (_, i) => {
    const states = ['done','done','done','done','done','done','off',
      'done','done','done','off','done','done','done',
      'done','done','done','done','done','done','done',
      'done','off','done','done','done','today',null];
    return states[i];
  });
  const badges = [
    { kind: 'star', color: T2.terracotta, label: 'First steps', got: true, icon: '✓' },
    { kind: 'star', color: T2.saffron, label: '7-day fire', got: true, icon: '🔥' },
    { kind: 'rosette', color: T2.majorelle, label: '100 words', got: true, icon: '★' },
    { kind: 'hex', color: T2.mint, label: 'Quiz ace', got: true, icon: '✓' },
    { kind: 'star', color: T2.ink4, label: '30 days', got: false, icon: '?' },
    { kind: 'rosette', color: T2.ink4, label: 'Boss slayer', got: false, icon: '?' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative', overflow: 'auto', paddingTop: 60 }}>
      <ZelligeBg color={dark ? T2.darkInk : T2.ink} opacity={0.04} size={120}/>
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', position: 'relative' }}>
        <Icon.back size={24} color={t.ink}/>
        <div style={{ flex: 1 }}/>
        <Icon.settings size={22} color={t.ink2}/>
      </div>
      {/* identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 24px 20px', position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <ZelligeStar size={84} fill={T2.terracottaT} stroke={T2.terracotta} strokeWidth={2}/>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Atay size={56} mood="happy" outfit="tarboush"/>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: t.ink, letterSpacing: -0.3, fontFamily: 'Sora, system-ui' }}>Layla M.</div>
          <div style={{ fontSize: 13, color: t.ink3, marginTop: 2 }}>Joined March 2026 · Atlas League</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 6, padding: '3px 8px', background: T2.majorelleT, borderRadius: 6, fontSize: 11, fontWeight: 800, color: T2.majorelle, letterSpacing: 0.5, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}><Icon.gem size={12} color={T2.majorelle}/> Yallah+</div>
        </div>
      </div>
      {/* stat row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, padding: '0 16px', position: 'relative' }}>
        <Card dark={dark} padding={12} style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}><Icon.flame size={22} color={T2.saffron}/></div>
          <div style={{ fontSize: 22, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>12</div>
          <div style={{ fontSize: 10, color: t.ink3, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Day streak</div>
        </Card>
        <Card dark={dark} padding={12} style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}><Icon.gem size={22} color={T2.majorelle}/></div>
          <div style={{ fontSize: 22, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>2,840</div>
          <div style={{ fontSize: 10, color: t.ink3, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Total XP</div>
        </Card>
        <Card dark={dark} padding={12} style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}><Icon.coin size={22}/></div>
          <div style={{ fontSize: 22, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>1,205</div>
          <div style={{ fontSize: 10, color: t.ink3, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Drahem</div>
        </Card>
      </div>
      {/* streak calendar */}
      <div style={{ padding: '20px 16px 0', position: 'relative' }}>
        <Card dark={dark}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui' }}>April</div>
            <div style={{ fontSize: 11, color: t.ink3, fontWeight: 600 }}>26 active days</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5 }}>
            {['M','T','W','T','F','S','S'].map((d, i) => (
              <div key={i} style={{ fontSize: 9, color: t.ink3, textAlign: 'center', fontWeight: 700, fontFamily: 'Sora, system-ui' }}>{d}</div>
            ))}
            {cal.map((s, i) => (
              <div key={i} style={{
                aspectRatio: '1', borderRadius: 6,
                background: s === 'done' ? T2.saffron : s === 'today' ? T2.terracotta : s === 'off' ? (dark ? T2.darkHair : T2.hairline) : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s === 'done' && <Icon.flame size={11} color="#fff"/>}
                {s === 'today' && <div style={{ width: 6, height: 6, borderRadius: 3, background: '#fff' }}/>}
              </div>
            ))}
          </div>
        </Card>
      </div>
      {/* achievements */}
      <div style={{ padding: '20px 16px 0', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 4px 10px' }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui' }}>Achievements</div>
          <div style={{ fontSize: 12, color: T2.terracotta, fontWeight: 700 }}>See all ›</div>
        </div>
        <Card dark={dark}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {badges.map((b, i) => {
              const Shape = b.kind === 'rosette' ? ZelligeRosette : b.kind === 'hex' ? ZelligeHex : ZelligeStar;
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: b.got ? 1 : 0.45 }}>
                  <Shape size={64} fill={b.color} stroke="rgba(255,255,255,0.3)" strokeWidth={1.5}>
                    <span style={{ fontSize: 24 }}>{b.icon}</span>
                  </Shape>
                  <div style={{ fontSize: 11, fontWeight: 700, color: t.ink2, textAlign: 'center', fontFamily: 'Sora, system-ui' }}>{b.label}</div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
      <div style={{ height: 110 }}/>
      <TabBar active="profile" dark={dark}/>
    </div>
  );
}

// ─── SHOP ────────────────────────────────────────────────────
function ScrShop() {
  const items = [
    { kind: 'outfit', name: 'Tarboush', sub: 'Mascot hat', price: 250, color: T2.terracotta, mood: 'happy', outfit: 'tarboush' },
    { kind: 'outfit', name: 'Djellaba', sub: 'Royal blue robe', price: 400, color: T2.majorelle, mood: 'happy', outfit: 'djellaba' },
    { kind: 'outfit', name: 'Shades', sub: 'Casablanca cool', price: 180, color: T2.saffron, mood: 'happy', outfit: 'sunglasses' },
    { kind: 'powerup', name: 'Streak Freeze', sub: 'One missed day, no problem', price: 200, color: T2.saffron },
    { kind: 'powerup', name: 'Heart Refill', sub: 'Back to 5 ♡', price: 350, color: T2.terracotta },
    { kind: 'theme', name: 'Atlas Skin', sub: 'Dawn-over-mountains theme', price: 600, color: T2.majorelle },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: T2.sand, position: 'relative', overflow: 'auto', paddingTop: 60 }}>
      <ZelligeBg color={T2.saffron2} opacity={0.05} size={100}/>
      {/* header w/ balance */}
      <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: T2.ink, letterSpacing: -0.4, fontFamily: 'Sora, system-ui' }}>Souk</div>
          <div style={{ fontSize: 12, color: T2.ink3, fontWeight: 500 }}>Spend Drahem on outfits & power-ups</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px 8px 10px', background: '#fff', borderRadius: 999, border: `2px solid ${T2.saffron}`, boxShadow: `0 3px 0 ${T2.saffron2}` }}>
          <Icon.coin size={20}/>
          <span style={{ fontWeight: 800, color: T2.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>1,205</span>
        </div>
      </div>
      {/* tabs */}
      <div style={{ display: 'flex', gap: 8, padding: '12px 16px', position: 'relative' }}>
        {['Outfits', 'Power-ups', 'Themes'].map((tab, i) => (
          <div key={tab} style={{ padding: '8px 14px', borderRadius: 999, background: i === 0 ? T2.ink : 'transparent', border: i === 0 ? 'none' : `1.5px solid ${T2.hairline}`, color: i === 0 ? '#fff' : T2.ink2, fontWeight: 700, fontSize: 13, fontFamily: 'Sora, system-ui' }}>{tab}</div>
        ))}
      </div>

      {/* featured */}
      <div style={{ padding: '8px 16px', position: 'relative' }}>
        <div style={{ background: `linear-gradient(135deg, ${T2.terracotta} 0%, ${T2.terracotta2} 100%)`, borderRadius: 20, padding: 16, position: 'relative', overflow: 'hidden' }}>
          <ZelligeBg color="#fff" opacity={0.15} size={80}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative' }}>
            <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 14, padding: 8 }}>
              <Atay size={64} mood="cheer" outfit="tarboush"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Limited drop</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.2, fontFamily: 'Sora, system-ui' }}>Ramadan bundle</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>Outfit + 5 streak freezes</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', textDecoration: 'line-through', fontFamily: 'Sora, system-ui' }}>800</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', background: '#fff', borderRadius: 999, fontWeight: 800, color: T2.ink, fontFamily: 'Sora, system-ui', fontSize: 14 }}>
                <Icon.coin size={14}/>500
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '14px 16px 110px', position: 'relative' }}>
        {items.map((it, i) => (
          <Card key={i} padding={12} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ height: 110, background: T2.sand2, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <ZelligeBg color={it.color} opacity={0.12} size={50}/>
              {it.kind === 'outfit' ? <Atay size={86} mood={it.mood} outfit={it.outfit}/> :
               it.kind === 'powerup' && it.name.includes('Freeze') ? <div style={{ fontSize: 44 }}>❄</div> :
               it.kind === 'powerup' ? <Icon.heart size={56} color={T2.terracotta} filled/> :
               <ZelligeRosette size={70} fill={it.color}/>}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: T2.ink, fontFamily: 'Sora, system-ui' }}>{it.name}</div>
              <div style={{ fontSize: 11, color: T2.ink3, marginTop: 1 }}>{it.sub}</div>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 800, color: T2.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>
                <Icon.coin size={16}/>{it.price}
              </div>
              <button style={{ padding: '6px 12px', background: T2.mint, color: '#fff', border: 'none', borderRadius: 10, fontWeight: 800, fontSize: 12, fontFamily: 'Sora, system-ui', boxShadow: `0 2px 0 ${T2.mint2}`, cursor: 'pointer' }}>BUY</button>
            </div>
          </Card>
        ))}
      </div>
      <TabBar active="shop"/>
    </div>
  );
}

// ─── UNITS / COURSE OVERVIEW ─────────────────────────────────
// Reached from Home → tap the unit context pill at the top of the path.
// Shows the full course as a vertical list of units (sections), with
// per-unit progress, lesson count, status, and a CTA to jump in.
function ScrUnits({ dark = false }) {
  const t = themed(dark);
  const units = [
    {
      n: 1, title: 'First words', sub: 'Salam, choukran, smitek?',
      lessons: 8, done: 8, status: 'complete', kind: 'star', color: T2.mint,
      blurb: 'Greetings, names, basic politeness.',
    },
    {
      n: 2, title: 'The Medina', sub: 'Café & marketplace basics',
      lessons: 10, done: 4, status: 'current', kind: 'star', color: T2.terracotta,
      blurb: 'Order atay, ask for a kilo, find your way.',
    },
    {
      n: 3, title: 'Numbers & money', sub: 'Counting and bargaining',
      lessons: 9, done: 0, status: 'locked', kind: 'hex', color: T2.majorelle,
      blurb: 'Bchhal? Numbers 1–1000, Drahem talk.',
    },
    {
      n: 4, title: 'Family & home', sub: 'Mama, baba, dar, derb',
      lessons: 11, done: 0, status: 'locked', kind: 'star', color: T2.terracotta,
      blurb: 'Talk about your people and your place.',
    },
    {
      n: 5, title: 'Food & feasts', sub: 'Tagine, msemen, harira',
      lessons: 9, done: 0, status: 'locked', kind: 'hex', color: T2.saffron,
      blurb: 'Order, cook, and praise like a local.',
    },
    {
      n: 6, title: 'Travel the country', sub: 'Atlas → Sahara → Atlantic',
      lessons: 12, done: 0, status: 'locked', kind: 'star', color: T2.majorelle,
      blurb: 'Trains, taxis, riads, and "kayn?"',
    },
    {
      n: 7, title: 'Stories of Morocco', sub: 'Dialogues and culture',
      lessons: 10, done: 0, status: 'locked', kind: 'rosette', color: T2.terracotta,
      blurb: 'Listen to real conversations from Fes to Essaouira.',
    },
  ];

  const totalLessons = units.reduce((a, u) => a + u.lessons, 0);
  const totalDone = units.reduce((a, u) => a + u.done, 0);
  const pct = Math.round((totalDone / totalLessons) * 100);

  return (
    <div style={{ width: '100%', height: '100%', background: t.bg, position: 'relative', overflow: 'auto', paddingTop: 60 }}>
      <ZelligeBg color={dark ? T2.darkInk : T2.ink} opacity={0.04} size={120}/>

      {/* nav header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', position: 'relative' }}>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: dark ? T2.darkSurface : '#fff', border: `1.5px solid ${dark ? T2.darkHair : T2.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon.back size={20} color={t.ink}/>
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 14, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui' }}>Course</div>
        <div style={{ width: 36 }}/>
      </div>

      {/* hero summary */}
      <div style={{ padding: '4px 20px 16px', position: 'relative' }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: T2.terracotta, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Beginner Darija</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: t.ink, letterSpacing: -0.6, lineHeight: 1.05, marginTop: 4, fontFamily: 'Sora, system-ui' }}>From "salam" to the souk</div>
        <div style={{ fontSize: 13, color: t.ink3, marginTop: 6, lineHeight: 1.45, maxWidth: 300 }}>7 units · {totalLessons} lessons · ~6 weeks at 15 min/day</div>

        {/* overall progress */}
        <div style={{ marginTop: 14, padding: 14, background: dark ? T2.darkSurface : '#fff', border: `1.5px solid ${dark ? T2.darkHair : T2.hairline}`, borderRadius: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
          <ProgressRing value={totalDone} max={totalLessons} size={56} stroke={6} color={T2.terracotta} bg={dark ? 'rgba(255,255,255,0.08)' : 'rgba(27,27,31,0.06)'}>
            <div style={{ fontSize: 13, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>{pct}%</div>
          </ProgressRing>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui' }}>{totalDone} of {totalLessons} lessons done</div>
            <div style={{ fontSize: 11, color: t.ink3, marginTop: 2 }}>Mzyan! Keep going — Sahara League awaits.</div>
          </div>
        </div>
      </div>

      {/* unit list */}
      <div style={{ padding: '0 16px 110px', display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
        {units.map(u => {
          const Shape = u.kind === 'rosette' ? ZelligeRosette : u.kind === 'hex' ? ZelligeHex : ZelligeStar;
          const locked = u.status === 'locked';
          const current = u.status === 'current';
          const done = u.status === 'complete';
          const tone = locked ? (dark ? T2.darkHair : T2.hairline) : u.color;
          const upct = Math.round((u.done / u.lessons) * 100);
          return (
            <div key={u.n} style={{
              background: dark ? T2.darkSurface : '#fff',
              border: current ? `2px solid ${T2.terracotta}` : `1.5px solid ${dark ? T2.darkHair : T2.hairline}`,
              borderRadius: 18, padding: 14, position: 'relative', overflow: 'hidden',
              boxShadow: current ? `0 4px 0 ${T2.terracotta2}` : 'none',
              opacity: locked ? 0.7 : 1,
            }}>
              {current && (
                <div style={{ position: 'absolute', top: 0, right: 0, padding: '4px 10px', background: T2.terracotta, color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', borderRadius: '0 0 0 10px' }}>Now</div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {/* unit medallion */}
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <Shape size={64} fill={tone} stroke={locked ? 'transparent' : 'rgba(255,255,255,0.25)'} strokeWidth={locked ? 0 : 2}>
                    {done ? <Icon.check size={26} color="#fff"/> :
                     locked ? <Icon.lock size={22} color={dark ? '#5A5468' : '#A8A8B0'}/> :
                     <span style={{ fontSize: 18, fontWeight: 900, color: '#fff', fontFamily: 'Sora, system-ui' }}>{u.n}</span>}
                  </Shape>
                </div>
                {/* meta */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: t.ink3, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Unit {u.n}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui', letterSpacing: -0.2, lineHeight: 1.15, marginTop: 1 }}>{u.title}</div>
                  <div style={{ fontSize: 12, color: t.ink3, marginTop: 2, lineHeight: 1.35 }}>{u.sub}</div>
                </div>
              </div>

              {/* progress + cta row */}
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <ProgressBar value={u.done} max={u.lessons} color={done ? T2.mint : current ? T2.terracotta : tone} bg={dark ? T2.darkHair : T2.hairline} height={8}/>
                  <div style={{ fontSize: 10, color: t.ink3, marginTop: 5, fontWeight: 600, fontFamily: 'Sora, system-ui', letterSpacing: 0.3 }}>
                    {done ? `All ${u.lessons} lessons complete` : `${u.done} of ${u.lessons} lessons`}
                  </div>
                </div>
                <button style={{
                  padding: '8px 14px',
                  background: locked ? (dark ? T2.darkHair : T2.sand2) : current ? T2.terracotta : done ? T2.mint : T2.ink,
                  color: locked ? t.ink3 : '#fff',
                  border: 'none', borderRadius: 12,
                  fontWeight: 800, fontSize: 12, fontFamily: 'Sora, system-ui',
                  letterSpacing: 0.5, textTransform: 'uppercase',
                  boxShadow: locked ? 'none' : `0 3px 0 ${current ? T2.terracotta2 : done ? T2.mint2 : '#000'}`,
                  cursor: locked ? 'default' : 'pointer',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  {locked ? <><Icon.lock size={12} color={t.ink3}/> Locked</> :
                   done ? 'Review' :
                   current ? 'Continue' : 'Start'}
                </button>
              </div>

              {!locked && (
                <div style={{ marginTop: 10, fontSize: 12, color: t.ink2, lineHeight: 1.45, fontStyle: 'italic' }}>{u.blurb}</div>
              )}
            </div>
          );
        })}

        {/* test out */}
        <div style={{ marginTop: 4, padding: 14, background: T2.majorelleT, border: `1.5px dashed ${T2.majorelle}`, borderRadius: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: T2.majorelle, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 22 }}>⚡</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: t.ink, fontFamily: 'Sora, system-ui' }}>Already know some Darija?</div>
            <div style={{ fontSize: 11, color: t.ink3, marginTop: 2 }}>Test out of a unit — skip what you've got.</div>
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, color: T2.majorelle, fontFamily: 'Sora, system-ui' }}>›</span>
        </div>
      </div>

      <TabBar active="home" dark={dark}/>
    </div>
  );
}

Object.assign(window, { ScrHomePath, ScrProfile, ScrShop, ScrUnits, TabBar, PathHeader });

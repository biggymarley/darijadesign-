// screens-onboarding.jsx — Onboarding, Quiz, Settings, Daily Challenge

const T = TOKENS;

// ─── ONBOARDING ──────────────────────────────────────────────
function ScrOnboarding1() {
  return (
    <div style={{ width: '100%', height: '100%', background: T.sand, position: 'relative', overflow: 'hidden', paddingTop: 60 }}>
      <ZelligeBg color={T.terracotta} opacity={0.08} size={120}/>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 20px', position: 'relative' }}>
        <button style={{ background: 'transparent', border: 'none', color: T.ink3, fontSize: 14, fontWeight: 600 }}>Skip</button>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 24, height: 4, background: T.terracotta, borderRadius: 2 }}/>
          <div style={{ width: 24, height: 4, background: T.hairline, borderRadius: 2 }}/>
          <div style={{ width: 24, height: 4, background: T.hairline, borderRadius: 2 }}/>
        </div>
        <div style={{ width: 32 }}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, padding: '40px 32px', position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <ZelligeStar size={220} fill={T.terracottaT} stroke={T.terracotta} strokeWidth={1.5}/>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Atay size={140} mood="cheer"/>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.terracotta, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 10, fontFamily: 'Sora, system-ui' }}>Salam, ahlan!</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: T.ink, lineHeight: 1.15, letterSpacing: -0.5, fontFamily: 'Sora, system-ui', marginBottom: 14 }}>Speak Darija like a local in 5&nbsp;minutes a day.</div>
          <div style={{ fontSize: 15, color: T.ink2, lineHeight: 1.5, padding: '0 8px' }}>Pocket-sized lessons grounded in real Moroccan conversations — from medina markets to family dinner.</div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <PressButton color={T.terracotta}>Yallah, let's go</PressButton>
      </div>
    </div>
  );
}

function ScrOnboarding2() {
  return (
    <div style={{ width: '100%', height: '100%', background: T.sand, position: 'relative', overflow: 'hidden', paddingTop: 60 }}>
      <ZelligeBg color={T.majorelle} opacity={0.06} size={100}/>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 20px', position: 'relative' }}>
        <button style={{ background: 'transparent', border: 'none', color: T.ink3, fontSize: 14, fontWeight: 600 }}>Skip</button>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 24, height: 4, background: T.hairline, borderRadius: 2 }}/>
          <div style={{ width: 24, height: 4, background: T.terracotta, borderRadius: 2 }}/>
          <div style={{ width: 24, height: 4, background: T.hairline, borderRadius: 2 }}/>
        </div>
        <div style={{ width: 32 }}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, padding: '32px 32px', position: 'relative' }}>
        <div style={{ position: 'relative', width: 240, height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ZelligeRosette size={240} fill={T.majorelleT} stroke={T.majorelle} strokeWidth={1}/>
          <div style={{ position: 'absolute' }}><Atay size={130} mood="happy"/></div>
          {/* speech bubble */}
          <div style={{ position: 'absolute', top: 10, right: 0, background: '#fff', padding: '10px 14px', borderRadius: 16, borderBottomRightRadius: 4, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: `1px solid ${T.hairline}` }}>
            <div style={{ fontWeight: 800, color: T.terracotta, fontSize: 14, fontFamily: 'Sora, system-ui' }}>Smiti Atay!</div>
            <div style={{ fontSize: 11, color: T.ink3 }}>I'm Atay 🍵</div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: T.ink, lineHeight: 1.15, letterSpacing: -0.5, fontFamily: 'Sora, system-ui', marginBottom: 12 }}>Meet your study buddy</div>
          <div style={{ fontSize: 15, color: T.ink2, lineHeight: 1.5 }}>Atay is here to cheer you on, drop street-smart phrases, and keep your streak warm — like a glass of mint tea.</div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <PressButton color={T.terracotta}>Continue</PressButton>
      </div>
    </div>
  );
}

function ScrOnboarding3() {
  const reasons = [
    { icon: '✈', label: 'Travel', sub: 'Marrakech, Fes, Chefchaouen', color: T.terracotta },
    { icon: '♡', label: 'Family', sub: 'Connect with loved ones', color: T.mint },
    { icon: '◈', label: 'Culture', sub: 'Music, film, food', color: T.majorelle },
    { icon: '✦', label: 'Work', sub: 'Business in Morocco', color: T.saffron2 },
  ];
  const [sel, setSel] = React.useState(0);
  return (
    <div style={{ width: '100%', height: '100%', background: T.sand, position: 'relative', overflow: 'hidden', paddingTop: 60 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 20px' }}>
        <button style={{ background: 'transparent', border: 'none', color: T.ink3, fontSize: 14, fontWeight: 600 }}>Skip</button>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 24, height: 4, background: T.hairline, borderRadius: 2 }}/>
          <div style={{ width: 24, height: 4, background: T.hairline, borderRadius: 2 }}/>
          <div style={{ width: 24, height: 4, background: T.terracotta, borderRadius: 2 }}/>
        </div>
        <div style={{ width: 32 }}/>
      </div>
      <div style={{ padding: '24px 24px 0' }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, lineHeight: 1.2, letterSpacing: -0.5, fontFamily: 'Sora, system-ui' }}>What brings you to Darija?</div>
        <div style={{ fontSize: 14, color: T.ink3, marginTop: 6 }}>We'll tailor your path. Pick one — you can change it later.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '24px' }}>
        {reasons.map((r, i) => (
          <button key={i} onClick={() => setSel(i)} style={{
            background: sel === i ? '#fff' : 'transparent',
            border: `2px solid ${sel === i ? r.color : T.hairline}`,
            borderRadius: 18, padding: '20px 14px',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10,
            cursor: 'pointer', textAlign: 'left',
            boxShadow: sel === i ? `0 4px 0 ${r.color}` : 'none',
            transition: 'all 0.15s',
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: r.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800 }}>{r.icon}</div>
            <div>
              <div style={{ fontWeight: 800, color: T.ink, fontSize: 16, fontFamily: 'Sora, system-ui' }}>{r.label}</div>
              <div style={{ fontSize: 11, color: T.ink3, marginTop: 2 }}>{r.sub}</div>
            </div>
          </button>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <PressButton color={T.terracotta}>Continue</PressButton>
      </div>
    </div>
  );
}

// ─── PLACEMENT QUIZ ──────────────────────────────────────────
function ScrQuiz() {
  const tokens = ['mzyan', 'rah', 'l-makla', 'bzaf'];
  const [picked, setPicked] = React.useState(['l-makla', 'mzyan']);
  return (
    <div style={{ width: '100%', height: '100%', background: T.sand, position: 'relative', overflow: 'hidden', paddingTop: 60 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px' }}>
        <Icon.close size={22}/>
        <div style={{ flex: 1 }}><ProgressBar value={3} max={8} color={T.terracotta} height={10}/></div>
        <Icon.heart size={22} color={T.terracotta} filled={true}/>
        <span style={{ fontWeight: 800, color: T.terracotta, fontFamily: 'Sora, system-ui' }}>5</span>
      </div>
      <div style={{ padding: '16px 24px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: T.majorelle, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8, fontFamily: 'Sora, system-ui' }}>Placement · question 3 of 8</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: T.ink, lineHeight: 1.25, letterSpacing: -0.3, fontFamily: 'Sora, system-ui' }}>Build the Darija sentence: <span style={{ color: T.terracotta }}>"The food is very good"</span></div>
      </div>
      {/* native row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px', marginTop: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: T.majorelle, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 3px 0 ${T.majorelle2}` }}>
          <Icon.speaker size={22} color="#fff"/>
        </div>
        <div style={{ flex: 1, padding: '12px 14px', background: '#fff', borderRadius: 14, border: `1px solid ${T.hairline}` }}>
          <div style={{ fontFamily: 'Tajawal, system-ui', fontSize: 18, color: T.ink, direction: 'rtl' }}>الماكلة مزيانة بزاف</div>
        </div>
      </div>
      {/* answer slots */}
      <div style={{ margin: '32px 24px 0', minHeight: 76, borderTop: `2px dashed ${T.hairline}`, borderBottom: `2px dashed ${T.hairline}`, padding: '14px 4px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
        {picked.map((p, i) => (
          <Chip key={i} onClick={() => setPicked(picked.filter((_, j) => j !== i))}>{p}</Chip>
        ))}
        {picked.length < 4 && <div style={{ flex: 1, minHeight: 4, borderBottom: `2px solid ${T.hairline}` }}/>}
      </div>
      {/* token bank */}
      <div style={{ padding: '24px 24px', display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {tokens.map((t, i) => (
          <Chip key={i} used={picked.includes(t)} onClick={() => !picked.includes(t) && setPicked([...picked, t])}>{t}</Chip>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <PressButton color={picked.length === 4 ? T.mint : T.ink4} disabled={picked.length !== 4}>{picked.length === 4 ? 'Check' : 'Pick the words'}</PressButton>
      </div>
    </div>
  );
}

// ─── DAILY CHALLENGE MODAL ───────────────────────────────────
function ScrDailyChallenge() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'rgba(27,27,31,0.6)', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ width: '100%', background: T.sand, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: '12px 24px 32px', position: 'relative', overflow: 'hidden' }}>
        <ZelligeBg color={T.saffron2} opacity={0.07} size={80}/>
        <div style={{ width: 48, height: 5, background: T.hairline, borderRadius: 3, margin: '0 auto 20px' }}/>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14, position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <ZelligeStar size={120} fill={T.saffron} stroke={T.saffron2} strokeWidth={2}>
              <div style={{ fontSize: 44 }}>⚡</div>
            </ZelligeStar>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 24, position: 'relative' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.saffron2, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Today's challenge</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: T.ink, lineHeight: 1.2, letterSpacing: -0.4, marginTop: 6, fontFamily: 'Sora, system-ui' }}>Order tea like a regular at the medina café</div>
          <div style={{ fontSize: 14, color: T.ink3, marginTop: 8, padding: '0 12px' }}>5 mini-tasks · 2× XP · 50 Drahem if you ace it</div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, position: 'relative' }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: T.hairline }}/>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 16px', background: '#fff', borderRadius: 16, marginBottom: 12, border: `1px solid ${T.hairline}`, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon.coin size={22}/>
            <span style={{ fontWeight: 700, color: T.ink, fontFamily: 'Sora, system-ui' }}>Reward</span>
          </div>
          <div style={{ fontWeight: 800, color: T.saffron2, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>+50 Drahem</div>
        </div>
        <div style={{ display: 'flex', gap: 12, position: 'relative' }}>
          <div style={{ flex: 1 }}><GhostButton>Later</GhostButton></div>
          <div style={{ flex: 2 }}><PressButton color={T.saffron} textColor="#1B1B1F">Start</PressButton></div>
        </div>
      </div>
    </div>
  );
}

// ─── SETTINGS ────────────────────────────────────────────────
function ScrSettings() {
  const Row = ({ label, sub, value, last }) => (
    <div style={{ padding: '14px 18px', borderBottom: last ? 'none' : `1px solid ${T.hairline}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: T.ink, fontFamily: 'Sora, system-ui' }}>{label}</div>
        {sub && <div style={{ fontSize: 12, color: T.ink3, marginTop: 2 }}>{sub}</div>}
      </div>
      <div style={{ fontSize: 14, color: T.ink3, display: 'flex', alignItems: 'center', gap: 6 }}>{value}<span style={{ color: T.ink4, fontSize: 18 }}>›</span></div>
    </div>
  );
  const Toggle = ({ on, label, sub, last }) => (
    <div style={{ padding: '14px 18px', borderBottom: last ? 'none' : `1px solid ${T.hairline}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: T.ink, fontFamily: 'Sora, system-ui' }}>{label}</div>
        {sub && <div style={{ fontSize: 12, color: T.ink3, marginTop: 2 }}>{sub}</div>}
      </div>
      <div style={{ width: 48, height: 28, background: on ? T.mint : T.ink4, borderRadius: 999, padding: 3, display: 'flex', justifyContent: on ? 'flex-end' : 'flex-start' }}>
        <div style={{ width: 22, height: 22, borderRadius: 999, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}/>
      </div>
    </div>
  );
  return (
    <div style={{ width: '100%', height: '100%', background: T.sand, position: 'relative', overflow: 'auto', paddingTop: 60 }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px' }}>
        <Icon.back size={24}/>
        <div style={{ marginLeft: 14, fontSize: 22, fontWeight: 800, color: T.ink, letterSpacing: -0.3, fontFamily: 'Sora, system-ui' }}>Settings</div>
      </div>

      <div style={{ padding: '20px 16px 12px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.ink3, letterSpacing: 1, textTransform: 'uppercase', padding: '0 6px 8px', fontFamily: 'Sora, system-ui' }}>Script & language</div>
        <Card padding={0}>
          <div style={{ padding: '14px 18px', borderBottom: `1px solid ${T.hairline}` }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: T.ink, marginBottom: 10, fontFamily: 'Sora, system-ui' }}>Script preference</div>
            <div style={{ display: 'flex', gap: 6, padding: 4, background: T.sand2, borderRadius: 12 }}>
              {['Latin', 'Both', 'Arabic'].map((s, i) => (
                <div key={s} style={{ flex: 1, padding: '8px 4px', borderRadius: 8, background: i === 1 ? '#fff' : 'transparent', textAlign: 'center', fontSize: 13, fontWeight: 700, color: i === 1 ? T.ink : T.ink3, boxShadow: i === 1 ? '0 1px 2px rgba(0,0,0,0.06)' : 'none', fontFamily: 'Sora, system-ui' }}>{s}</div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: T.ink3, marginTop: 8 }}>Both shows transliteration + <span style={{ fontFamily: 'Tajawal, system-ui' }}>الحروف</span></div>
          </div>
          <Row label="Audio speed" sub="Native speakers' pace" value="1.0×"/>
          <Row label="Interface language" value="English" last/>
        </Card>
      </div>

      <div style={{ padding: '12px 16px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.ink3, letterSpacing: 1, textTransform: 'uppercase', padding: '0 6px 8px', fontFamily: 'Sora, system-ui' }}>Notifications</div>
        <Card padding={0}>
          <Toggle on={true} label="Daily reminder" sub="Wash nsiti? — 7:00 PM"/>
          <Toggle on={true} label="Streak warning" sub="Don't break your fire 🔥"/>
          <Toggle on={false} label="League updates" last/>
        </Card>
      </div>

      <div style={{ padding: '12px 16px 40px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.ink3, letterSpacing: 1, textTransform: 'uppercase', padding: '0 6px 8px', fontFamily: 'Sora, system-ui' }}>Account</div>
        <Card padding={0}>
          <Row label="Daily goal" value="20 XP"/>
          <Row label="Subscription" value="Yallah+"/>
          <Row label="Sign out" last/>
        </Card>
      </div>
    </div>
  );
}

Object.assign(window, {
  ScrOnboarding1, ScrOnboarding2, ScrOnboarding3,
  ScrQuiz, ScrDailyChallenge, ScrSettings,
});

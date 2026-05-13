// screens-lesson.jsx — Lesson variants + lesson complete + leaderboard

const TL = TOKENS;

// Lesson header: close, hearts, progress
function LessonHeader({ progress = 0.4, hearts = 4, dark = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '70px 20px 12px', position: 'relative', zIndex: 2 }}>
      <Icon.close size={24} color={dark ? TL.darkInk2 : TL.ink2}/>
      <div style={{ flex: 1, height: 14, background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(27,27,31,0.08)', borderRadius: 7, overflow: 'hidden', position: 'relative' }}>
        <div style={{ width: `${progress * 100}%`, height: '100%', background: TL.mint, borderRadius: 7, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 3, left: 6, right: 6, height: 3, background: 'rgba(255,255,255,0.5)', borderRadius: 2 }}/>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Icon.heart size={20} color={TL.terracotta} filled/>
        <span style={{ fontWeight: 800, color: TL.terracotta, fontFamily: 'Sora, system-ui', fontSize: 16 }}>{hearts}</span>
      </div>
    </div>
  );
}

// ─── LESSON: LISTEN & MATCH ──────────────────────────────────
function ScrLessonListenMatch() {
  const opts = [
    { l: 'Salam', a: 'سلام', sub: 'Hello' },
    { l: 'Bslama', a: 'بسلامة', sub: 'Goodbye' },
    { l: 'Shukran', a: 'شكرا', sub: 'Thank you' },
    { l: 'Smeh-li', a: 'سمح ليا', sub: 'Excuse me' },
  ];
  const [sel, setSel] = React.useState(2);
  return (
    <div style={{ width: '100%', height: '100%', background: TL.sand, position: 'relative', overflow: 'hidden' }}>
      <LessonHeader progress={0.25}/>
      <div style={{ padding: '12px 24px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: TL.majorelle, letterSpacing: 1.2, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Listen & match</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: TL.ink, marginTop: 6, lineHeight: 1.2, letterSpacing: -0.3, fontFamily: 'Sora, system-ui' }}>What did you hear?</div>
      </div>
      <div style={{ padding: '36px 24px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 180, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ZelligeStar size={180} fill={TL.majorelleT} stroke={TL.majorelle} strokeWidth={1.5}/>
          <button style={{ position: 'absolute', width: 90, height: 90, borderRadius: 999, background: TL.majorelle, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 5px 0 ${TL.majorelle2}`, cursor: 'pointer' }}>
            <Icon.speaker size={36} color="#fff"/>
          </button>
          {/* sound waves */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{ position: 'absolute', width: 90 + (i+1)*22, height: 90 + (i+1)*22, borderRadius: 999, border: `2px solid ${TL.majorelle}`, opacity: 0.5 - i*0.15 }}/>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 24px 16px', display: 'flex', justifyContent: 'center' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'transparent', border: `1.5px solid ${TL.hairline}`, borderRadius: 999, color: TL.ink2, fontSize: 13, fontWeight: 700, fontFamily: 'Sora, system-ui', cursor: 'pointer' }}>
          <span style={{ fontSize: 11 }}>🐢</span> Slow it down
        </button>
      </div>
      {/* options */}
      <div style={{ padding: '8px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {opts.map((o, i) => (
          <button key={i} onClick={() => setSel(i)} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 16px',
            background: sel === i ? '#fff' : 'transparent',
            border: `2px solid ${sel === i ? TL.majorelle : 'rgba(27,27,31,0.10)'}`,
            borderRadius: 16,
            boxShadow: sel === i ? `0 3px 0 ${TL.majorelle2}` : `0 3px 0 rgba(27,27,31,0.06)`,
            textAlign: 'left', cursor: 'pointer',
          }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: sel === i ? TL.majorelle : TL.hairline, color: sel === i ? '#fff' : TL.ink3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, fontFamily: 'Sora, system-ui' }}>{i+1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: TL.ink, fontFamily: 'Sora, system-ui' }}>{o.l}</div>
              <div style={{ fontSize: 13, fontFamily: 'Tajawal, system-ui', color: TL.ink3, direction: 'rtl' }}>{o.a}</div>
            </div>
            <div style={{ fontSize: 12, color: TL.ink3, fontStyle: 'italic' }}>{o.sub}</div>
          </button>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <PressButton color={TL.mint}>Check</PressButton>
      </div>
    </div>
  );
}

// ─── LESSON: TAP THE PAIRS ───────────────────────────────────
function ScrLessonPairs() {
  const left = [
    { id: 'a', l: 'atay' }, { id: 'b', l: 'l-khobz' }, { id: 'c', l: 'l-ma' },
    { id: 'd', l: 'qahwa' }, { id: 'e', l: 'l-makla' },
  ];
  const right = [
    { id: 'b', l: 'Bread' }, { id: 'd', l: 'Coffee' }, { id: 'a', l: 'Tea' },
    { id: 'e', l: 'Food' }, { id: 'c', l: 'Water' },
  ];
  const matched = ['a', 'd'];
  return (
    <div style={{ width: '100%', height: '100%', background: TL.sand, position: 'relative', overflow: 'hidden' }}>
      <LessonHeader progress={0.5}/>
      <div style={{ padding: '12px 24px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: TL.majorelle, letterSpacing: 1.2, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Tap the pairs</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: TL.ink, marginTop: 6, lineHeight: 1.2, letterSpacing: -0.3, fontFamily: 'Sora, system-ui' }}>Match Darija with English</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '32px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {left.map((it, i) => {
            const used = matched.includes(it.id);
            const sel = it.id === 'b';
            return (
              <button key={it.id} disabled={used} style={{
                padding: '18px 12px',
                background: used ? 'transparent' : '#fff',
                border: `2px solid ${used ? TL.hairline : sel ? TL.majorelle : 'rgba(27,27,31,0.10)'}`,
                borderRadius: 16,
                boxShadow: used ? 'none' : `0 3px 0 ${sel ? TL.majorelle2 : 'rgba(27,27,31,0.06)'}`,
                color: used ? 'transparent' : TL.ink,
                fontWeight: 800, fontSize: 16, fontFamily: 'Sora, system-ui', cursor: used ? 'default' : 'pointer',
              }}>{it.l}</button>
            );
          })}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {right.map((it, i) => {
            const used = matched.includes(it.id);
            return (
              <button key={i} disabled={used} style={{
                padding: '18px 12px',
                background: used ? 'transparent' : '#fff',
                border: `2px solid ${used ? TL.hairline : 'rgba(27,27,31,0.10)'}`,
                borderRadius: 16,
                boxShadow: used ? 'none' : `0 3px 0 rgba(27,27,31,0.06)`,
                color: used ? 'transparent' : TL.ink,
                fontWeight: 800, fontSize: 16, fontFamily: 'Sora, system-ui', cursor: used ? 'default' : 'pointer',
              }}>{it.l}</button>
            );
          })}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <GhostButton>Skip</GhostButton>
      </div>
    </div>
  );
}

// ─── LESSON: BUILD THE SENTENCE (interactive) ────────────────
function ScrLessonBuild({ script = 'both' }) {
  const all = [
    { l: 'kayna',     a: 'كاينة' },
    { l: 'l-qahwa',   a: 'القهوة' },
    { l: 'fin',       a: 'فين' },
    { l: 'qrib',      a: 'قريبة' },
    { l: 'min hna',   a: 'من هنا' },
    { l: 'mzyana',    a: 'مزيانة' },
  ];
  const correct = ['fin', 'kayna', 'l-qahwa', 'qrib', 'min hna'];
  const [picked, setPicked] = React.useState(['fin', 'kayna']);
  const Lbl = ({ l, a }) => (
    script === 'arabic' ? <span style={{ fontFamily: 'Tajawal, system-ui', direction: 'rtl' }}>{a}</span>
    : script === 'latin' ? <span>{l}</span>
    : <><span>{l}</span><span style={{ fontSize: 11, fontFamily: 'Tajawal, system-ui', color: TL.ink3, direction: 'rtl', display: 'block', marginTop: 2 }}>{a}</span></>
  );
  return (
    <div style={{ width: '100%', height: '100%', background: TL.sand, position: 'relative', overflow: 'hidden' }}>
      <LessonHeader progress={0.7}/>
      <div style={{ padding: '12px 24px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: TL.majorelle, letterSpacing: 1.2, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Build the sentence</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: TL.ink, marginTop: 6, lineHeight: 1.25, letterSpacing: -0.3, fontFamily: 'Sora, system-ui' }}>Translate: <span style={{ color: TL.terracotta }}>"Where is the nearest café?"</span></div>
      </div>
      {/* atay + audio prompt */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 24px 0' }}>
        <div style={{ position: 'relative' }}>
          <Atay size={64} mood="happy"/>
        </div>
        <div style={{ flex: 1, padding: '12px 14px', background: '#fff', borderRadius: 16, borderBottomLeftRadius: 4, border: `1px solid ${TL.hairline}`, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon.speaker size={20} color={TL.majorelle}/>
            <div style={{ fontSize: 13, color: TL.ink2, fontWeight: 600, fontStyle: 'italic' }}>"Where is the nearest café?"</div>
          </div>
        </div>
      </div>
      {/* answer line */}
      <div style={{ margin: '24px 24px 0', padding: '14px 4px', borderTop: `2px dashed ${TL.hairline}`, borderBottom: `2px dashed ${TL.hairline}`, minHeight: 80, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
        {picked.map((p, i) => {
          const w = all.find(x => x.l === p);
          return <Chip key={i} onClick={() => setPicked(picked.filter((_, j) => j !== i))}><Lbl l={w.l} a={w.a}/></Chip>;
        })}
      </div>
      <div style={{ fontSize: 11, color: TL.ink3, padding: '6px 28px', fontWeight: 600, fontFamily: 'Sora, system-ui' }}>Tap a word above to remove it</div>
      {/* token bank */}
      <div style={{ padding: '8px 20px', display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
        {all.map((w, i) => (
          <Chip key={i} used={picked.includes(w.l)} onClick={() => !picked.includes(w.l) && setPicked([...picked, w.l])}><Lbl l={w.l} a={w.a}/></Chip>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <PressButton color={picked.length >= 4 ? TL.mint : TL.ink4} disabled={picked.length < 4}>Check</PressButton>
      </div>
    </div>
  );
}

// ─── LESSON: SPEAK IT ────────────────────────────────────────
function ScrLessonSpeak() {
  const bars = Array.from({ length: 32 }, (_, i) => 8 + Math.sin(i * 0.7) * 14 + Math.cos(i * 0.4) * 8 + Math.random() * 6);
  return (
    <div style={{ width: '100%', height: '100%', background: TL.sand, position: 'relative', overflow: 'hidden' }}>
      <LessonHeader progress={0.85}/>
      <div style={{ padding: '12px 24px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: TL.terracotta, letterSpacing: 1.2, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Speak it</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: TL.ink, marginTop: 6, lineHeight: 1.2, letterSpacing: -0.3, fontFamily: 'Sora, system-ui' }}>Now you say it</div>
      </div>
      <div style={{ margin: '20px 24px 0', padding: 20, background: '#fff', borderRadius: 20, border: `1px solid ${TL.hairline}` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: TL.ink3, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', marginBottom: 8 }}>Phrase</div>
        <div style={{ fontSize: 26, fontWeight: 800, color: TL.ink, lineHeight: 1.2, fontFamily: 'Sora, system-ui' }}>Smeh-li, fin l-qahwa?</div>
        <div style={{ fontSize: 18, fontFamily: 'Tajawal, system-ui', color: TL.ink2, direction: 'rtl', marginTop: 6 }}>سمح ليا، فين القهوة؟</div>
        <div style={{ fontSize: 13, color: TL.ink3, marginTop: 8, fontStyle: 'italic' }}>"Excuse me, where's the coffee?"</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14, paddingTop: 14, borderTop: `1px solid ${TL.hairline}` }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: TL.majorelle, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon.speaker size={18} color="#fff"/>
          </div>
          <div style={{ flex: 1, height: 28, display: 'flex', alignItems: 'center', gap: 2 }}>
            {bars.slice(0, 24).map((h, i) => <div key={i} style={{ flex: 1, height: h, background: TL.majorelle, opacity: 0.6, borderRadius: 1 }}/>)}
          </div>
          <div style={{ fontSize: 11, color: TL.ink3, fontWeight: 600, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>0:02</div>
        </div>
      </div>
      {/* mic */}
      <div style={{ position: 'absolute', bottom: 100, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <div style={{ height: 60, display: 'flex', alignItems: 'center', gap: 3, padding: '0 24px' }}>
          {bars.map((h, i) => <div key={i} style={{ width: 4, height: h * 1.5, background: TL.terracotta, borderRadius: 2, opacity: 0.7 + Math.random() * 0.3 }}/>)}
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -16, borderRadius: 999, border: `2px solid ${TL.terracotta}`, opacity: 0.3 }}/>
          <div style={{ position: 'absolute', inset: -28, borderRadius: 999, border: `2px solid ${TL.terracotta}`, opacity: 0.15 }}/>
          <button style={{ width: 88, height: 88, borderRadius: 999, background: TL.terracotta, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 5px 0 ${TL.terracotta2}`, cursor: 'pointer' }}>
            <Icon.mic size={36} color="#fff"/>
          </button>
        </div>
        <div style={{ fontSize: 13, color: TL.ink3, fontWeight: 600, fontFamily: 'Sora, system-ui' }}>Tap to record · Hold for slow mode</div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <button style={{ width: '100%', padding: '14px', background: 'transparent', border: 'none', color: TL.ink3, fontWeight: 700, fontSize: 13, letterSpacing: 0.4, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', cursor: 'pointer' }}>Skip · I'll practice later</button>
      </div>
    </div>
  );
}

// ─── LESSON: STORY / DIALOGUE ────────────────────────────────
function ScrLessonStory() {
  const turns = [
    { who: 'waiter', name: 'Karim', l: 'Salam, ash bghiti?', a: 'سلام، أش بغيتي؟', en: 'Hi, what would you like?', side: 'left' },
    { who: 'you', l: 'Salam, atay b-na3na3 3afak.', a: 'سلام، أتاي بالنعناع عافاك.', en: 'Hi, mint tea please.', side: 'right' },
    { who: 'waiter', name: 'Karim', l: 'B-skkar wlla bla?', a: 'بالسكر ولا بلا؟', en: 'With sugar or without?', side: 'left' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: TL.sand, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <LessonHeader progress={0.6}/>
      <div style={{ padding: '4px 24px 12px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: TL.terracotta, letterSpacing: 1.2, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Story · Café Hassan</div>
      </div>
      {/* scene art */}
      <div style={{ margin: '0 24px', height: 130, borderRadius: 18, background: `linear-gradient(160deg, #F4D9A8 0%, #E8B872 100%)`, position: 'relative', overflow: 'hidden', border: `1px solid ${TL.hairline}` }}>
        <ZelligeBg color={TL.terracotta} opacity={0.15} size={50}/>
        {/* arch silhouette */}
        <svg width="100%" height="100%" viewBox="0 0 300 130" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          <path d="M30 130 V60 Q30 30 60 30 Q90 30 90 60 V130 Z" fill="rgba(27,27,31,0.18)"/>
          <path d="M120 130 V50 Q120 18 150 18 Q180 18 180 50 V130 Z" fill="rgba(27,27,31,0.22)"/>
          <path d="M210 130 V60 Q210 30 240 30 Q270 30 270 60 V130 Z" fill="rgba(27,27,31,0.18)"/>
        </svg>
        {/* tea glass */}
        <div style={{ position: 'absolute', bottom: 8, right: 14 }}>
          <Atay size={56} mood="happy"/>
        </div>
        <div style={{ position: 'absolute', top: 12, left: 14, padding: '4px 10px', background: 'rgba(27,27,31,0.8)', color: '#fff', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Scene 2 of 6</div>
      </div>
      {/* dialogue */}
      <div style={{ flex: 1, overflow: 'auto', padding: '16px 20px 110px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {turns.map((t, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: t.side === 'right' ? 'flex-end' : 'flex-start', gap: 8 }}>
            {t.side === 'left' && (
              <div style={{ width: 40, height: 40, borderRadius: 999, background: TL.majorelleT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1.5px solid ${TL.majorelle}` }}>
                <span style={{ fontSize: 18 }}>👨🏽</span>
              </div>
            )}
            <div style={{ maxWidth: '76%', padding: '10px 14px', background: t.side === 'right' ? TL.majorelle : '#fff', color: t.side === 'right' ? '#fff' : TL.ink, borderRadius: 18, [t.side === 'right' ? 'borderBottomRightRadius' : 'borderBottomLeftRadius']: 4, border: t.side === 'right' ? 'none' : `1px solid ${TL.hairline}` }}>
              {t.name && <div style={{ fontSize: 11, fontWeight: 800, color: t.side === 'right' ? 'rgba(255,255,255,0.8)' : TL.terracotta, letterSpacing: 0.3, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', marginBottom: 4 }}>{t.name}</div>}
              <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Sora, system-ui', lineHeight: 1.3 }}>{t.l}</div>
              <div style={{ fontSize: 14, fontFamily: 'Tajawal, system-ui', color: t.side === 'right' ? 'rgba(255,255,255,0.85)' : TL.ink3, direction: 'rtl', marginTop: 3 }}>{t.a}</div>
              <div style={{ fontSize: 12, color: t.side === 'right' ? 'rgba(255,255,255,0.7)' : TL.ink3, fontStyle: 'italic', marginTop: 4 }}>{t.en}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6, paddingTop: 6, borderTop: `1px solid ${t.side === 'right' ? 'rgba(255,255,255,0.2)' : TL.hairline}` }}>
                <Icon.speaker size={14} color={t.side === 'right' ? '#fff' : TL.majorelle}/>
                <div style={{ flex: 1, height: 4, display: 'flex', gap: 1 }}>
                  {Array.from({ length: 18 }, (_, j) => <div key={j} style={{ flex: 1, background: t.side === 'right' ? 'rgba(255,255,255,0.6)' : TL.majorelle, opacity: 0.4 + Math.random() * 0.6, borderRadius: 1 }}/>)}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* response prompt */}
        <div style={{ padding: 14, background: TL.terracottaT, borderRadius: 16, border: `2px dashed ${TL.terracotta}` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: TL.terracotta, letterSpacing: 0.6, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', marginBottom: 8 }}>Your turn — say "with sugar"</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Chip size="sm">B-skkar</Chip>
            <Chip size="sm">3afak</Chip>
            <Chip size="sm">bla skkar</Chip>
            <Chip size="sm">shukran</Chip>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <PressButton color={TL.terracotta}>Continue</PressButton>
      </div>
    </div>
  );
}

// ─── LESSON COMPLETE ─────────────────────────────────────────
function ScrLessonComplete() {
  const stats = [
    { label: 'Total XP', value: '+18', color: TL.saffron, icon: <Icon.gem size={22} color={TL.saffron2}/> },
    { label: 'Speed', value: '2:14', color: TL.majorelle, icon: <span style={{ fontSize: 18 }}>⚡</span> },
    { label: 'Accuracy', value: '94%', color: TL.mint, icon: <Icon.check size={20} color={TL.mint2}/> },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: `linear-gradient(180deg, ${TL.terracotta} 0%, ${TL.terracotta2} 100%)`, position: 'relative', overflow: 'hidden' }}>
      <ZelligeBg color="#fff" opacity={0.10} size={120}/>
      {/* confetti */}
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} width="100%" height="100%" viewBox="0 0 390 844">
        {Array.from({ length: 40 }).map((_, i) => {
          const x = Math.random() * 390, y = Math.random() * 400;
          const c = [TL.saffron, TL.mint, TL.majorelle, '#fff', '#FFD8CC'][i % 5];
          const r = Math.random() * 360;
          return <rect key={i} x={x} y={y} width="6" height="10" fill={c} transform={`rotate(${r} ${x+3} ${y+5})`} opacity={0.85}/>;
        })}
      </svg>
      {/* coin shower */}
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} width="100%" height="100%" viewBox="0 0 390 844">
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx={40 + (i*30)} cy={120 + Math.sin(i*1.2)*60} r={6+Math.random()*4} fill={TL.saffron} opacity={0.9}/>
        ))}
      </svg>
      <div style={{ paddingTop: 80, padding: '80px 24px 0', textAlign: 'center', position: 'relative' }}>
        <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.85)', letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Mzyan bzaf!</div>
        <div style={{ fontSize: 38, fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: -1, marginTop: 6, fontFamily: 'Sora, system-ui' }}>Lesson<br/>complete</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 12px', position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <ZelligeRosette size={200} fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.4)" strokeWidth={1}/>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ZelligeStar size={140} fill="#fff">
              <Atay size={92} mood="cheer"/>
            </ZelligeStar>
          </div>
        </div>
      </div>
      {/* streak update */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px 8px 12px', background: 'rgba(27,27,31,0.25)', borderRadius: 999, color: '#fff', fontWeight: 800, fontFamily: 'Sora, system-ui' }}>
          <Icon.flame size={18} color={TL.saffron}/>
          <span style={{ fontSize: 14 }}>13-day streak · ON FIRE</span>
        </div>
      </div>
      {/* stats */}
      <div style={{ padding: '0 20px', display: 'flex', gap: 8, position: 'relative' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ flex: 1, padding: '14px 8px', background: 'rgba(255,255,255,0.95)', borderRadius: 16, textAlign: 'center', boxShadow: '0 4px 0 rgba(0,0,0,0.18)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>{s.icon}</div>
            <div style={{ fontSize: 19, fontWeight: 800, color: TL.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums', letterSpacing: -0.3 }}>{s.value}</div>
            <div style={{ fontSize: 9, color: TL.ink3, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
      {/* coin reward bar */}
      <div style={{ margin: '14px 20px', padding: '12px 16px', background: 'rgba(255,255,255,0.95)', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
        <Icon.coin size={28}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: TL.ink3, letterSpacing: 0.8, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Drahem earned</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: TL.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>+25 <span style={{ fontSize: 11, color: TL.ink3, fontWeight: 600 }}>(new total: 1,230)</span></div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24 }}>
        <PressButton color="#fff" textColor={TL.terracotta} shadow="rgba(0,0,0,0.2)">Continue</PressButton>
      </div>
    </div>
  );
}

// ─── LEADERBOARD ─────────────────────────────────────────────
function ScrLeaderboard() {
  const players = [
    { rank: 1, name: 'Yousra', xp: 1840, you: false, color: TL.saffron },
    { rank: 2, name: 'Karim', xp: 1520, you: false, color: TL.ink4 },
    { rank: 3, name: 'Najat', xp: 1310, you: false, color: '#C68F3D' },
    { rank: 4, name: 'You', xp: 1180, you: true },
    { rank: 5, name: 'Anwar', xp: 1090 },
    { rank: 6, name: 'Salma', xp: 870 },
    { rank: 7, name: 'Hicham', xp: 810 },
    { rank: 8, name: 'Mehdi', xp: 720 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: TL.sand, position: 'relative', overflow: 'auto', paddingTop: 60 }}>
      <ZelligeBg color={TL.majorelle} opacity={0.05} size={120}/>
      {/* hero */}
      <div style={{ padding: '12px 20px 0', position: 'relative' }}>
        <div style={{ background: `linear-gradient(160deg, ${TL.majorelle} 0%, ${TL.majorelle2} 100%)`, borderRadius: 22, padding: 18, position: 'relative', overflow: 'hidden', color: '#fff' }}>
          <ZelligeBg color="#fff" opacity={0.13} size={70}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
            <ZelligeRosette size={70} fill="rgba(255,255,255,0.2)" stroke="#fff" strokeWidth={1.5}>
              <span style={{ fontSize: 32 }}>⛰</span>
            </ZelligeRosette>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', opacity: 0.85, fontFamily: 'Sora, system-ui' }}>You're in the</div>
              <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: -0.4, fontFamily: 'Sora, system-ui' }}>Atlas League</div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>4 days left · top 5 promote ↑</div>
            </div>
          </div>
          {/* league progression */}
          <div style={{ display: 'flex', gap: 6, marginTop: 14, position: 'relative' }}>
            {['Bronze', 'Atlas', 'Sahara', 'Royal'].map((l, i) => (
              <div key={l} style={{ flex: 1, padding: '6px 4px', background: i === 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)', borderRadius: 8, textAlign: 'center', fontSize: 10, fontWeight: 800, letterSpacing: 0.5, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', border: i === 1 ? '1.5px solid rgba(255,255,255,0.5)' : 'none' }}>{l}</div>
            ))}
          </div>
        </div>
      </div>

      {/* podium */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 8, padding: '24px 20px 8px', position: 'relative' }}>
        {[2, 1, 3].map((rank) => {
          const p = players.find(pl => pl.rank === rank);
          const h = rank === 1 ? 90 : rank === 2 ? 70 : 56;
          return (
            <div key={rank} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ position: 'relative' }}>
                <ZelligeStar size={rank === 1 ? 64 : 52} fill={p.color} stroke="#fff" strokeWidth={2}>
                  <span style={{ fontWeight: 900, fontSize: rank === 1 ? 22 : 18, color: '#fff', fontFamily: 'Sora, system-ui' }}>{rank}</span>
                </ZelligeStar>
                {rank === 1 && <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', fontSize: 22 }}>👑</div>}
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: TL.ink, fontFamily: 'Sora, system-ui' }}>{p.name}</div>
              <div style={{ fontSize: 11, color: TL.ink3, fontWeight: 700, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>{p.xp} XP</div>
              <div style={{ width: '100%', height: h, background: rank === 1 ? TL.saffron : rank === 2 ? '#D8D2C8' : '#C68F3D', borderRadius: '12px 12px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 24, fontFamily: 'Sora, system-ui', boxShadow: '0 -2px 0 rgba(0,0,0,0.1)' }}>{rank}</div>
            </div>
          );
        })}
      </div>

      {/* list */}
      <div style={{ padding: '8px 16px 110px', position: 'relative' }}>
        <Card padding={0}>
          {players.slice(3).map((p, i) => (
            <div key={p.rank} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: i < players.length - 4 ? `1px solid ${TL.hairline}` : 'none', background: p.you ? TL.terracottaT : 'transparent' }}>
              <div style={{ width: 28, textAlign: 'center', fontWeight: 800, color: p.you ? TL.terracotta : TL.ink3, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums' }}>{p.rank}</div>
              <div style={{ width: 38, height: 38, borderRadius: 999, background: p.you ? TL.terracotta : TL.sand2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.you ? '#fff' : TL.ink2, fontWeight: 800, fontFamily: 'Sora, system-ui' }}>{p.name[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: TL.ink, fontFamily: 'Sora, system-ui' }}>{p.name}{p.you && <span style={{ marginLeft: 6, fontSize: 10, color: TL.terracotta, letterSpacing: 0.5, textTransform: 'uppercase' }}>YOU</span>}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 800, color: TL.ink, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums', fontSize: 14 }}>
                <Icon.gem size={14} color={TL.majorelle}/>{p.xp}
              </div>
            </div>
          ))}
        </Card>
        <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'center', gap: 6, fontSize: 11, color: TL.ink3, fontWeight: 600 }}>
          <span>↑ promotion zone above · demotion zone below ↓</span>
        </div>
      </div>
      <TabBar active="leagues"/>
    </div>
  );
}

Object.assign(window, {
  ScrLessonListenMatch, ScrLessonPairs, ScrLessonBuild, ScrLessonSpeak, ScrLessonStory,
  ScrLessonComplete, ScrLeaderboard,
});

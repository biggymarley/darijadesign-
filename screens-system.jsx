// screens-system.jsx — Design system reference page

const TS = TOKENS;

function ScrDesignSystem() {
  const Sw = ({ name, hex, color, dark }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ height: 56, borderRadius: 12, background: color, border: `1px solid ${TS.hairline}`}}/>
      <div style={{ fontSize: 11, fontWeight: 700, color: TS.ink, fontFamily: 'Sora, system-ui' }}>{name}</div>
      <div style={{ fontSize: 10, color: TS.ink3, fontFamily: 'ui-monospace, monospace', fontVariantNumeric: 'tabular-nums' }}>{hex}</div>
    </div>
  );
  return (
    <div style={{ width: '100%', height: '100%', background: TS.sand, position: 'relative', overflow: 'auto', padding: 60 }}>
      <ZelligeBg color={TS.ink} opacity={0.03} size={140}/>
      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
          <ZelligeStar size={48} fill={TS.terracotta}/>
          <div>
            <div style={{ fontSize: 32, fontWeight: 900, color: TS.ink, letterSpacing: -0.6, fontFamily: 'Sora, system-ui' }}>Yallah Design System</div>
            <div style={{ fontSize: 14, color: TS.ink3 }}>Tokens, components & motion notes for the Darija app</div>
          </div>
        </div>
        <div style={{ fontSize: 12, color: TS.ink3, padding: '10px 14px', background: '#fff', borderRadius: 12, marginBottom: 24, border: `1px solid ${TS.hairline}` }}>
          <strong>Stack:</strong> React Native · Expo Router · NativeWind · Reanimated 3 · Lottie · Expo AV · Expo Haptics
        </div>

        {/* Colors */}
        <SectionTitle>Color tokens</SectionTitle>
        <Card>
          <div style={{ fontSize: 12, fontWeight: 700, color: TS.ink3, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 10, fontFamily: 'Sora, system-ui' }}>Brand</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 18 }}>
            <Sw name="Atlas Terracotta" hex="#E2725B" color={TS.terracotta}/>
            <Sw name="Majorelle Blue" hex="#3D5AFE" color={TS.majorelle}/>
            <Sw name="Saffron" hex="#F4B400" color={TS.saffron}/>
            <Sw name="Mint Success" hex="#2BB673" color={TS.mint}/>
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: TS.ink3, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 10, fontFamily: 'Sora, system-ui' }}>Surface · ink</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>
            <Sw name="Sand" hex="#FBF6EE" color={TS.sand}/>
            <Sw name="Sand 2" hex="#F5EDDD" color={TS.sand2}/>
            <Sw name="Surface" hex="#FFFFFF" color="#fff"/>
            <Sw name="Ink" hex="#1B1B1F" color={TS.ink}/>
            <Sw name="Dark BG" hex="#15131A" color={TS.darkBg}/>
            <Sw name="Dark Surface" hex="#262230" color={TS.darkSurface}/>
          </div>
        </Card>

        {/* Type */}
        <SectionTitle>Typography</SectionTitle>
        <Card>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: TS.ink3, letterSpacing: 0.8, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', marginBottom: 8 }}>Headings — Sora</div>
              <div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.05, letterSpacing: -0.8, fontFamily: 'Sora, system-ui', color: TS.ink }}>Mzyan bzaf!</div>
              <div style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Sora, system-ui', color: TS.ink, marginTop: 10 }}>At the medina café</div>
              <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Sora, system-ui', color: TS.ink, marginTop: 6 }}>Build the sentence</div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: TS.ink3, letterSpacing: 0.8, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', marginBottom: 8 }}>Body — Inter / system</div>
              <div style={{ fontSize: 16, lineHeight: 1.5, color: TS.ink2 }}>Pocket-sized lessons grounded in real Moroccan conversation — from medina markets to family dinner.</div>
              <div style={{ fontSize: 13, color: TS.ink3, marginTop: 12 }}>Caption · 13 / 1.4 · ink/3</div>
              <div style={{ marginTop: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: TS.ink3, letterSpacing: 0.8, textTransform: 'uppercase', fontFamily: 'Sora, system-ui', marginBottom: 8 }}>Arabic — Tajawal</div>
                <div style={{ fontSize: 26, fontFamily: 'Tajawal, system-ui', color: TS.ink, direction: 'rtl' }}>سلام، أش بغيتي؟</div>
                <div style={{ fontSize: 16, fontFamily: 'Tajawal, system-ui', color: TS.ink2, direction: 'rtl', marginTop: 4 }}>أتاي بالنعناع عافاك</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Buttons */}
        <SectionTitle>Buttons (3D press)</SectionTitle>
        <Card>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 12 }}>
            <PressButton color={TS.terracotta}>Primary</PressButton>
            <PressButton color={TS.majorelle}>Secondary</PressButton>
            <PressButton color={TS.mint}>Success</PressButton>
            <PressButton color={TS.saffron} textColor="#1B1B1F">Reward</PressButton>
            <PressButton color="#E14B4B">Destructive</PressButton>
            <PressButton color={TS.ink4} disabled>Disabled</PressButton>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            <GhostButton>Ghost button</GhostButton>
            <button style={{ padding: '14px', background: 'transparent', border: 'none', color: TS.terracotta, fontWeight: 800, fontSize: 13, letterSpacing: 0.4, textTransform: 'uppercase', fontFamily: 'Sora, system-ui' }}>Text · Skip</button>
          </div>
          <div style={{ fontSize: 11, color: TS.ink3, marginTop: 12, lineHeight: 1.5 }}>3D shadow: 4px Y-offset on press → translateY(4px), shadow color = primary -10L. Implement with Reanimated <code style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, background: TS.sand2, padding: '1px 4px', borderRadius: 3 }}>useSharedValue</code> + <code style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, background: TS.sand2, padding: '1px 4px', borderRadius: 3 }}>withSpring</code>; pair with <code style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10, background: TS.sand2, padding: '1px 4px', borderRadius: 3 }}>Haptics.selectionAsync()</code> on press-in.</div>
        </Card>

        {/* Progress */}
        <SectionTitle>Progress</SectionTitle>
        <Card>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <ProgressBar value={75} color={TS.mint}/>
              <ProgressBar value={40} color={TS.terracotta}/>
              <ProgressBar value={20} color={TS.saffron} height={10}/>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <ProgressRing value={14} max={20} size={80} color={TS.saffron}>
                <div style={{ textAlign: 'center', lineHeight: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 18, fontFamily: 'Sora, system-ui' }}>14</div>
                  <div style={{ fontSize: 9, color: TS.ink3, fontWeight: 600 }}>/20 XP</div>
                </div>
              </ProgressRing>
              <ProgressRing value={3} max={5} size={64} stroke={6} color={TS.terracotta}>
                <div style={{ fontWeight: 800, fontSize: 14, fontFamily: 'Sora, system-ui' }}>3/5</div>
              </ProgressRing>
            </div>
          </div>
        </Card>

        {/* Chips & cards */}
        <SectionTitle>Chips & cards</SectionTitle>
        <Card>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
            <Chip>kayna</Chip>
            <Chip selected>l-qahwa</Chip>
            <Chip used>fin</Chip>
            <Chip sub="القهوة">l-qahwa</Chip>
            <Chip size="sm">3afak</Chip>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { kind: 'star', color: TS.terracotta, label: 'First steps' },
              { kind: 'rosette', color: TS.majorelle, label: '100 words' },
              { kind: 'hex', color: TS.mint, label: 'Quiz ace' },
            ].map((b, i) => {
              const Shape = b.kind === 'rosette' ? ZelligeRosette : b.kind === 'hex' ? ZelligeHex : ZelligeStar;
              return (
                <div key={i} style={{ padding: 12, background: TS.sand, borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Shape size={48} fill={b.color}><span style={{ fontSize: 18, color: '#fff' }}>★</span></Shape>
                  <div style={{ fontSize: 12, fontWeight: 800, color: TS.ink, fontFamily: 'Sora, system-ui' }}>{b.label}</div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Stat pills + audio row */}
        <SectionTitle>Stats & audio</SectionTitle>
        <Card>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <StatPill icon={<Icon.flame size={16} color={TS.saffron}/>} value="12"/>
            <StatPill icon={<Icon.heart size={16} color={TS.terracotta} filled/>} value="4"/>
            <StatPill icon={<Icon.coin size={16}/>} value="1,205"/>
            <StatPill icon={<Icon.gem size={16} color={TS.majorelle}/>} value="2,840"/>
          </div>
          <div style={{ padding: '12px 14px', background: TS.sand, borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: TS.majorelle, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 3px 0 ${TS.majorelle2}` }}>
              <Icon.speaker size={20} color="#fff"/>
            </div>
            <div style={{ flex: 1, height: 24, display: 'flex', alignItems: 'center', gap: 2 }}>
              {Array.from({ length: 32 }).map((_, i) => <div key={i} style={{ flex: 1, height: 8 + Math.sin(i*0.7)*10 + Math.random()*8, background: TS.majorelle, opacity: 0.7, borderRadius: 1 }}/>)}
            </div>
            <div style={{ fontSize: 11, color: TS.ink3, fontFamily: 'Sora, system-ui', fontVariantNumeric: 'tabular-nums', fontWeight: 700 }}>0:04</div>
          </div>
        </Card>

        {/* Mascot moods */}
        <SectionTitle>Atay — moods & outfits</SectionTitle>
        <Card>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, alignItems: 'end' }}>
            {[
              { mood: 'happy', label: 'Happy' },
              { mood: 'cheer', label: 'Cheer' },
              { mood: 'wink', label: 'Wink' },
              { mood: 'sleep', label: 'Sleep' },
              { mood: 'happy', outfit: 'tarboush', label: 'Tarboush' },
              { mood: 'happy', outfit: 'djellaba', label: 'Djellaba' },
            ].map((m, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Atay size={88} mood={m.mood} outfit={m.outfit}/>
                <div style={{ fontSize: 11, fontWeight: 700, color: TS.ink2, fontFamily: 'Sora, system-ui' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Spacing & radii */}
        <SectionTitle>Spacing & radii</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Card>
            <div style={{ fontSize: 12, fontWeight: 700, color: TS.ink3, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 10, fontFamily: 'Sora, system-ui' }}>Spacing scale</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
              {[4, 8, 12, 16, 24, 32].map(s => (
                <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: s, height: s, background: TS.terracotta, borderRadius: 2 }}/>
                  <div style={{ fontSize: 10, fontFamily: 'ui-monospace, monospace', color: TS.ink3 }}>{s}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div style={{ fontSize: 12, fontWeight: 700, color: TS.ink3, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 10, fontFamily: 'Sora, system-ui' }}>Radii</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
              {[12, 16, 24, 999].map(r => (
                <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 50, height: 50, background: TS.majorelleT, border: `2px solid ${TS.majorelle}`, borderRadius: r }}/>
                  <div style={{ fontSize: 10, fontFamily: 'ui-monospace, monospace', color: TS.ink3 }}>{r === 999 ? 'full' : r}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Implementation notes */}
        <SectionTitle>Expo implementation notes</SectionTitle>
        <Card>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, fontSize: 13, color: TS.ink2, lineHeight: 1.55 }}>
            <div>
              <NoteRow title="Path animation" body="Reanimated 3 layout transitions on node unlock. Use shared transitions for the path-line stroke-dashoffset, easing: Easing.out(Easing.cubic)."/>
              <NoteRow title="Lesson celebrations" body="Lottie for confetti & coin shower; mascot dance is a 60-frame Lottie keyed off the lesson-complete event. Pair with Haptics.notificationAsync(Success)."/>
              <NoteRow title="Audio playback" body="Expo AV — preload Listen-and-Match clips on lesson mount; surface a slow-mode rate of 0.65 via setRateAsync. Native Darija speakers, lossy MP3 at 96kbps."/>
            </div>
            <div>
              <NoteRow title="Tap-the-pairs" body="Reanimated layout animation on match — tokens fade out (200ms) and the survivors snap up via LinearTransition. Track pair-IDs in Zustand."/>
              <NoteRow title="Speak it" body="expo-av Recording API; live waveform from getStatusAsync metering. Score with on-device whisper.cpp tflite (or skip + accept). Haptic light on threshold cross."/>
              <NoteRow title="Streak & hearts" body="Persist via expo-secure-store. Daily reminder = expo-notifications scheduled at user's chosen hour. Copy: 'Wash nsiti? Don't break your streak.'"/>
            </div>
          </div>
        </Card>

        <div style={{ height: 60 }}/>
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '32px 0 12px', position: 'relative' }}>
      <div style={{ width: 8, height: 8, borderRadius: 2, background: TOKENS.terracotta, transform: 'rotate(45deg)' }}/>
      <div style={{ fontSize: 18, fontWeight: 800, color: TOKENS.ink, fontFamily: 'Sora, system-ui', letterSpacing: -0.2 }}>{children}</div>
      <div style={{ flex: 1, height: 1, background: TOKENS.hairline }}/>
    </div>
  );
}

function NoteRow({ title, body }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: TOKENS.ink, fontFamily: 'Sora, system-ui', marginBottom: 2 }}>{title}</div>
      <div>{body}</div>
    </div>
  );
}

Object.assign(window, { ScrDesignSystem });

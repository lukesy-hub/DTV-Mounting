/** Illustrative living-room scene: before (TV on a console, tangled cables) and after (wall-mounted, clean). */
export function RoomScene({ after }: { after: boolean }) {
  const k = after ? "a" : "b";
  const cable = (d: string, c: string, w = 5) => <path d={d} fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" />;
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label={after ? "After: TV mounted on the wall with hidden cables" : "Before: TV on a console with tangled cables"}>
      <defs>
        <linearGradient id={`wall${k}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ebe6dd" /><stop offset="1" stopColor="#d5cec2" /></linearGradient>
        <linearGradient id={`floor${k}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a67c52" /><stop offset="1" stopColor="#7d5a3a" /></linearGradient>
        <linearGradient id={`scr${k}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#274bd6" /><stop offset=".55" stopColor="#101e52" /><stop offset="1" stopColor="#4a2f86" /></linearGradient>
        <linearGradient id={`glare${k}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".3" /><stop offset=".45" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <filter id={`sh${k}`} x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="10" floodOpacity=".35" /></filter>
      </defs>
      <rect width="800" height="500" fill={`url(#wall${k})`} />
      <rect y="412" width="800" height="88" fill={`url(#floor${k})`} />
      <rect y="402" width="800" height="12" fill="#f5f2ea" />
      {/* wall decor */}
      <rect x="84" y="140" width="92" height="124" fill="#fff" stroke="#b9ab90" strokeWidth="6" /><path d="M96 250l26-50 20 30 12-16 16 36z" fill="#9db4c9" />
      <ellipse cx="690" cy="392" rx="34" ry="8" fill="#000" opacity=".12" /><rect x="672" y="330" width="36" height="62" rx="6" fill="#c9683c" />
      <path d="M690 332c-30-30-34-58-10-84 6 30 22 40 30 60-4-22 6-44 26-56-2 40-14 62-46 80z" fill="#3f7d4e" />
      {/* console */}
      <rect x="170" y="332" width="460" height="72" rx="4" fill="#4a3728" /><rect x="170" y="332" width="460" height="8" fill="#5f4834" />
      <rect x="190" y="404" width="10" height="12" fill="#2d2118" /><rect x="600" y="404" width="10" height="12" fill="#2d2118" />
      {after ? (
        <g>
          <g filter={`url(#sh${k})`}><rect x="246" y="118" width="308" height="176" rx="6" fill="#0a0c12" /></g>
          <rect x="253" y="125" width="294" height="162" rx="3" fill={`url(#scr${k})`} />
          <circle cx="470" cy="180" r="34" fill="#fff" opacity=".12" /><path d="M253 250c60-30 110-10 170-24s90-30 124-24v61H253z" fill="#0b143a" opacity=".55" />
          <rect x="253" y="125" width="294" height="162" rx="3" fill={`url(#glare${k})`} />
          <rect x="300" y="316" width="200" height="14" rx="6" fill="#1b1d24" /><circle cx="316" cy="323" r="2" fill="#5ea0ff" />
        </g>
      ) : (
        <g>
          <g filter={`url(#sh${k})`}><rect x="262" y="176" width="276" height="152" rx="6" fill="#0a0c12" /></g>
          <rect x="271" y="185" width="258" height="134" rx="3" fill={`url(#scr${k})`} /><rect x="271" y="185" width="258" height="134" rx="3" fill={`url(#glare${k})`} />
          <rect x="378" y="326" width="44" height="8" rx="2" fill="#1a1c22" />
          {cable("M392 328C388 380 330 372 322 424S296 470 236 466", "#15171c")}
          {cable("M404 328C412 372 470 384 486 430S540 476 590 462", "#f1f1f1")}
          {cable("M398 328C420 388 360 396 356 440S410 478 470 470", "#2b4fbf", 4)}
          {cable("M410 328C392 360 300 350 286 410", "#15171c", 4)}
          <rect x="222" y="452" width="96" height="16" rx="5" fill="#dcdcdc" /><circle cx="236" cy="460" r="2.5" fill="#e04b3a" />
        </g>
      )}
    </svg>
  );
}

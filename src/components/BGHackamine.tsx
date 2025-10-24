{/* === Fondo tipo Hackamine === */ }
<div className="absolute inset-0 -z-10 overflow-hidden">
    {/* 1️⃣ Gradientes radiales y lineales */}
    <div
        className="absolute inset-0"
        style={{
            backgroundImage: `
        radial-gradient(circle at 80% 30%, rgba(237,90,36,0.22) 0%, transparent 45%),
        radial-gradient(circle at 15% 75%, rgba(4,43,115,0.35) 0%, transparent 60%),
        linear-gradient(180deg, #0f1155 0%, #042b73 100%)
      `,
            backgroundBlendMode: "screen, overlay, normal",
        }}
    />

    {/* 2️⃣ SVG de anillos y geometrías */}
    <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.22 }}
    >
        {/* anillos concéntricos */}
        <g transform="translate(1250,650)">
            {[40, 80, 120, 160, 200, 260, 320].map((r, i) => (
                <circle
                    key={i}
                    r={r}
                    fill="none"
                    stroke="#0b1d47"
                    strokeWidth="1"
                    opacity={0.25 - i * 0.03}
                />
            ))}
        </g>

        {/* rectángulos grandes translúcidos */}
        <rect x="850" y="60" width="420" height="300" fill="#07183a" opacity="0.12" />
        <rect x="200" y="680" width="300" height="200" fill="#0a1640" opacity="0.08" />

        {/* líneas horizontales */}
        <rect x="720" y="580" width="520" height="4" fill="#042b73" opacity="0.2" />
        <rect x="180" y="760" width="400" height="4" fill="#0f1155" opacity="0.15" />
    </svg>

    {/* 3️⃣ Textura ligera (ruido) */}
    <div
        className="absolute inset-0 pointer-events-none"
        style={{
            backgroundImage: 'url("/images/noise.png")',
            backgroundRepeat: "repeat",
            opacity: 0.05,
            mixBlendMode: "overlay",
        }}
    />
</div>

export function StatBar({ label, value, max, unit, acc, isDark }) {
  const pct = Math.min((value / max) * 100, 100);
  const m = isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.42)";
  const t = isDark ? "rgba(255,255,255,0.90)" : "rgba(0,0,0,0.85)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}>
        <span style={{ color: m, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {label}
        </span>
        <span style={{ color: t, fontWeight: 700 }}>
          {value}
          {unit}
        </span>
      </div>
      <div style={{ height: 5, borderRadius: 99, background: "rgba(255,255,255,0.10)", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: 99,
            background: `linear-gradient(90deg,${acc}66,${acc})`,
            transition: "width 1s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        />
      </div>
    </div>
  );
}

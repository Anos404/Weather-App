import { panel, panelLight } from "../utils/styles";

export function DetailCard({ icon, label, value, sub, acc, isDark }) {
  const bg = isDark
    ? panel({
        borderRadius: 16,
        padding: "16px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 9,
        cursor: "default",
        transition: "transform 0.25s,box-shadow 0.25s",
      })
    : panelLight({
        borderRadius: 16,
        padding: "16px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 9,
        cursor: "default",
        transition: "transform 0.25s,box-shadow 0.25s",
      });

  const m = isDark ? "rgba(255,255,255,0.36)" : "rgba(0,0,0,0.42)";
  const t = isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.85)";

  return (
    <div
      style={bg}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = `0 14px 36px ${acc}28`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: m }}>
          {label}
        </span>
        <span style={{ color: acc }}>{icon}</span>
      </div>
      <div style={{ fontSize: 20, fontWeight: 800, color: t, letterSpacing: "-0.02em", lineHeight: 1 }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: 10, color: m }}>{sub}</div>}
    </div>
  );
}

import { ISun2, IMoon2 } from "./Icons";

export function Toggle({ isDark, onToggle, acc }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        padding: "9px 15px",
        borderRadius: 99,
        border: `1px solid ${isDark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.13)"}`,
        background: isDark ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.80)",
        color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.60)",
        cursor: "pointer",
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "inherit",
        backdropFilter: "blur(12px)",
        transition: "all 0.25s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = acc;
        e.currentTarget.style.borderColor = `${acc}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.60)";
        e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.13)";
      }}
    >
      {isDark ? <ISun2 s={15} /> : <IMoon2 s={15} />}
      <span style={{ "@media (max-width: 640px)": { display: "none" } }}>
        {isDark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}

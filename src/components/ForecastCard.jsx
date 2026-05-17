import { WIcon } from "./Icons";

export function ForecastCard({ item, acc, isDark, active, onClick }) {
  const d = new Date(item.dt * 1000);
  const day = d.toLocaleDateString("en-US", { weekday: "short" });
  const time = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  const bg = active
    ? {
        background: `${acc}22`,
        border: `1.5px solid ${acc}66`,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }
    : isDark
      ? {
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }
      : {
          background: "rgba(255,255,255,0.72)",
          border: "1px solid rgba(0,0,0,0.10)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        };

  const m = isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.40)";
  const t = isDark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.85)";

  return (
    <div
      onClick={onClick}
      style={{
        ...bg,
        borderRadius: 16,
        padding: "14px 12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 7,
        minWidth: 82,
        cursor: "pointer",
        transition: "all 0.22s",
      }}
      onMouseEnter={(e) => !active && (e.currentTarget.style.transform = "scale(1.06)")}
      onMouseLeave={(e) => !active && (e.currentTarget.style.transform = "scale(1)")}
      onTouchStart={(e) => {
        e.currentTarget.style.transform = "scale(0.98)";
      }}
      onTouchEnd={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: m }}>
        {day}
      </span>
      <span style={{ fontSize: 9, color: m }}>{time}</span>
      <span
        style={{
          color: active ? acc : isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)",
        }}
      >
        <WIcon code={item.weather[0].icon} s={24} />
      </span>
      <span style={{ fontSize: 14, fontWeight: 800, color: t }}>{Math.round(item.main.temp)}°</span>
      <span style={{ fontSize: 9, color: m, textAlign: "center", textTransform: "capitalize", lineHeight: 1.3 }}>
        {item.weather[0].description}
      </span>
    </div>
  );
}

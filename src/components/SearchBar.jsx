import { useState } from "react";
import { ISearch, ILoad } from "./Icons";

export function SearchBar({ onSearch, loading, acc, isDark }) {
  const [city, setCity] = useState("");

  const go = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const ibg = isDark ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.80)";
  const iborder = isDark ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(0,0,0,0.12)";
  const icolor = isDark ? "rgba(255,255,255,0.90)" : "rgba(0,0,0,0.85)";
  const iph = isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.30)";

  return (
    <form onSubmit={go} style={{ display: "flex", gap: 8, width: "100%", flexWrap: "wrap", justifyContent: "center" }}>
      <style>{`.ww-ph::placeholder{color:${iph}}
        @media (max-width: 640px) {
          .ww-search-form { gap: 6px !important; }
          .ww-search-btn { flex: 1; min-width: 80px; }
        }
      `}</style>
      <div style={{ position: "relative", flex: 1, minWidth: "200px" }}>
        <span
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            color: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.30)",
            display: "flex",
          }}
        >
          <ISearch s={16} />
        </span>
        <input
          className="ww-ph"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city…"
          style={{
            width: "100%",
            paddingLeft: 42,
            paddingRight: 14,
            paddingTop: 13,
            paddingBottom: 13,
            borderRadius: 13,
            fontSize: 13,
            fontWeight: 500,
            color: icolor,
            outline: "none",
            fontFamily: "inherit",
            background: ibg,
            border: iborder,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            transition: "all 0.2s",
          }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="ww-search-btn"
        style={{
          padding: "13px 20px",
          borderRadius: 13,
          fontWeight: 700,
          fontSize: 13,
          color: "#fff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          fontFamily: "inherit",
          background: `linear-gradient(135deg,${acc}bb,${acc})`,
          opacity: loading ? 0.6 : 1,
          transition: "transform 0.15s,opacity 0.2s",
          minWidth: "100px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {loading ? <ILoad s={14} c="ww-spin" /> : <ISearch s={14} />}
        {loading ? "…" : "Search"}
      </button>
    </form>
  );
}

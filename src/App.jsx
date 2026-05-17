import { useState, useEffect, useCallback } from "react";
import { W_URL, F_URL } from "./constants/apiUrls";
import { getCond } from "./constants/conditions";
import { isNight } from "./utils/helpers";
import { IcSun, IAlert, ILoad, WIcon } from "./components/Icons";
import { SearchBar } from "./components/SearchBar";
import { Toggle } from "./components/Toggle";
import { WeatherDisplay } from "./components/WeatherDisplay";

export default function App() {
  const [weather,  setWeather]  = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState(null);
  const [condKey,  setCondKey]  = useState("default");
  const [isDark,   setIsDark]   = useState(true);
  const [bgLoaded, setBgLoaded] = useState(false);

  const cond  = getCond(condKey);
  const night = weather ? isNight(weather) : false;
  const bgUrl = night ? cond.night : cond.day;
  const { acc } = cond;

  // Preload background image
  useEffect(() => {
    setBgLoaded(false);
    const img = new Image();
    img.src = bgUrl;
    img.onload = () => setBgLoaded(true);
  }, [bgUrl]);

  // Fetch current weather + forecast
  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weatherRes = await fetch(W_URL(city));
      if (!weatherRes.ok) {
        throw new Error(
          weatherRes.status === 404
            ? "City not found — try again"
            : "API error — check your key"
        );
      }
      const weatherData = await weatherRes.json();

      const forecastRes = await fetch(F_URL(city));
      const forecastData = forecastRes.ok ? await forecastRes.json() : null;

      setWeather(weatherData);
      setForecast(forecastData);
      setCondKey(weatherData.weather[0].main);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load default city on mount
  useEffect(() => {
    fetchWeather("London");
  }, [fetchWeather]);

  const textPrimary = isDark ? "rgba(255,255,255,0.93)" : "rgba(0,0,0,0.87)";
  const textMuted   = isDark ? "rgba(255,255,255,0.40)" : "rgba(0,0,0,0.42)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }

        ::-webkit-scrollbar              { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track        { background: transparent; }
        ::-webkit-scrollbar-thumb        { background: rgba(180,180,180,0.25); border-radius: 9px; }

        @keyframes ww-float  { 0%, 100% { transform: translateY(0);     } 50% { transform: translateY(-16px);     } }
        @keyframes ww-up     { from     { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        @keyframes ww-fade   { from     { opacity: 0; } to { opacity: 1; } }
        @keyframes ww-spin   { to       { transform: rotate(360deg); } }
        @keyframes ww-bgfade { from     { opacity: 0; } to { opacity: 1; } }

        .ww-spin { animation: ww-spin 0.85s linear infinite; }

        @media (max-width: 768px) { .ww-container { gap: 12px !important; } }
        @media (max-width: 640px) {
          .ww-container { padding: 18px 14px 40px !important; gap: 10px !important; }
          .ww-search-form { gap: 6px !important; }
          .ww-search-btn  { flex: 1; min-width: 80px; }
          h3 { font-size: 10px !important; }
        }
        @media (max-width: 480px) {
          .ww-container { padding: 14px 10px 32px !important; }
        }
      `}</style>

      {/* Background layers */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, transition: "opacity 1s ease", opacity: bgLoaded ? 1 : 0 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover", backgroundPosition: "center",
          animation: "ww-bgfade 1s ease",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: isDark
            ? cond.overlay
            : cond.overlay.replace(/0\.\d+\)/g, (m) => String(Math.max(parseFloat(m) * 0.55, 0.08) + ")")),
          transition: "background 0.8s",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
      </div>

      {/* Fallback solid background */}
      <div style={{ position: "fixed", inset: 0, zIndex: -1, background: isDark ? "#080812" : "#f0f4f8" }} />

      {/* Main content */}
      <div
        className="ww-container"
        style={{
          position: "relative", zIndex: 10,
          minHeight: "100vh",
          padding: "26px 16px 52px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 18,
          maxWidth: 680, margin: "0 auto",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Header */}
        <header style={{
          width: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
          animation: "ww-fade 0.5s ease",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: `linear-gradient(135deg, ${acc}bb, ${acc})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff",
            }}>
              <IcSun s={19} />
            </div>
            <span style={{
              fontSize: 21, fontWeight: 900,
              color: "rgba(255,255,255,0.95)",
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.03em",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}>
              Weather<span style={{ color: acc }}>Wave</span>
            </span>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {weather && (
              <div style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "6px 12px", borderRadius: 99,
                background: "rgba(0,0,0,0.38)", border: `1px solid ${acc}44`,
                backdropFilter: "blur(12px)",
                fontSize: 11, fontWeight: 700,
                color: "rgba(255,255,255,0.85)", letterSpacing: "0.04em",
              }}>
                <span style={{ color: acc }}>
                  <WIcon code={weather.weather[0].icon} s={13} />
                </span>
                {cond.label}
              </div>
            )}
            <Toggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} acc={acc} />
          </div>
        </header>

        {/* Search */}
        <div style={{ width: "100%", animation: "ww-fade 0.6s ease" }}>
          <SearchBar onSearch={fetchWeather} loading={loading} acc={acc} isDark={isDark} />
        </div>

        {/* Loading state */}
        {loading && (
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            color: "rgba(255,255,255,0.55)", fontSize: 14,
            padding: "36px 0",
            textShadow: "0 1px 8px rgba(0,0,0,0.5)",
          }}>
            <span style={{ color: acc }} className="ww-spin">
              <ILoad s={22} />
            </span>
            Fetching weather data…
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div style={{
            width: "100%", padding: "20px 22px", borderRadius: 18,
            textAlign: "center",
            background: "rgba(10,10,20,0.52)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(24px)",
            color: "#fca5a5",
            animation: "ww-fade 0.4s ease",
          }}>
            <div style={{ display: "flex", justifyContent: "center", opacity: 0.7, marginBottom: 8 }}>
              <IAlert s={24} />
            </div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{error}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.30)", marginTop: 3 }}>
              Try a different city or check your API key
            </div>
          </div>
        )}

        {/* Weather data */}
        {weather && !loading && (
          <WeatherDisplay
            data={weather}
            forecast={forecast}
            cond={cond}
            isDark={isDark}
          />
        )}
      </div>
    </>
  );
}

import { useState } from "react";
import {
  WIcon,
  IPin,
  ICalendar,
  IDrop,
  IWind,
  IEye,
  ITherm,
  IPress,
  ISunrise,
  ISunset,
} from "./Icons";
import { panel, panelLight } from "../utils/styles";
import { windDir, fmtTime } from "../utils/helpers";
import { DetailCard } from "./DetailCard";
import { StatBar } from "./StatBar";
import { ForecastCard } from "./ForecastCard";

export function WeatherDisplay({ data, forecast, cond, isDark }) {
  const { acc } = cond;
  const [activeIdx, setActiveIdx] = useState(null);
  const sunrise = fmtTime(data.sys.sunrise, data.timezone);
  const sunset = fmtTime(data.sys.sunset, data.timezone);
  const t = isDark ? "rgba(255,255,255,0.93)" : "rgba(0,0,0,0.87)";
  const m = isDark ? "rgba(255,255,255,0.40)" : "rgba(0,0,0,0.42)";

  const details = [
    {
      icon: <IDrop />,
      label: "Humidity",
      value: `${data.main.humidity}%`,
      sub: "Relative humidity",
    },
    {
      icon: <IWind />,
      label: "Wind",
      value: `${data.wind.speed} m/s`,
      sub: `${windDir(data.wind.deg)} · ${(data.wind.speed * 3.6).toFixed(1)} km/h`,
    },
    { icon: <IPress />, label: "Pressure", value: `${data.main.pressure}`, sub: "hPa · Atmospheric" },
    {
      icon: <IEye />,
      label: "Visibility",
      value: `${(data.visibility / 1000).toFixed(1)} km`,
      sub: "Ground level",
    },
    {
      icon: <ITherm />,
      label: "Feels Like",
      value: `${Math.round(data.main.feels_like)}°C`,
      sub: "Apparent temperature",
    },
    { icon: <IEye />, label: "Cloud Cover", value: `${data.clouds.all}%`, sub: "Sky coverage" },
    { icon: <ISunrise />, label: "Sunrise", value: sunrise, sub: "Local time" },
    { icon: <ISunset />, label: "Sunset", value: sunset, sub: "Local time" },
  ];

  const selItem = activeIdx != null && forecast?.list ? forecast.list[activeIdx] : null;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        animation: "ww-up 0.55s ease forwards",
      }}
    >
      {/* Main Weather Card */}
      <div
        style={
          isDark
            ? panel({
                padding: "38px 30px",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
              })
            : panelLight({
                padding: "38px 30px",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                "@media (max-width: 640px)": { padding: "24px 18px" },
              })
        }
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 50% -10%, ${acc}44 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -90,
            right: -90,
            width: 260,
            height: 260,
            borderRadius: "50%",
            border: `1px solid ${acc}18`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: `1px solid ${acc}14`,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 4 }}>
            <span style={{ color: acc }}>
              <IPin s={15} />
            </span>
            <span
              style={{
                fontSize: 19,
                fontWeight: 800,
                color: t,
                letterSpacing: "-0.02em",
                "@media (max-width: 640px)": { fontSize: 16 },
              }}
            >
              {data.name}, {data.sys.country}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              fontSize: 11,
              color: m,
              marginBottom: 32,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <ICalendar s={11} />
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 20,
              color: acc,
              filter: `drop-shadow(0 0 32px ${acc}77)`,
              animation: "ww-float 4s ease-in-out infinite",
            }}
          >
            <WIcon code={data.weather[0].icon} s={104} />
          </div>

          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              color: t,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              marginBottom: 6,
              fontVariantNumeric: "tabular-nums",
              "@media (max-width: 768px)": { fontSize: 72 },
              "@media (max-width: 640px)": { fontSize: 56 },
              "@media (max-width: 480px)": { fontSize: 48 },
            }}
          >
            {Math.round(data.main.temp)}
            <span
              style={{
                fontSize: 44,
                color: m,
                fontWeight: 400,
                "@media (max-width: 768px)": { fontSize: 32 },
                "@media (max-width: 640px)": { fontSize: 24 },
                "@media (max-width: 480px)": { fontSize: 20 },
              }}
            >
              °C
            </span>
          </div>
          <div
            style={{
              fontSize: 19,
              textTransform: "capitalize",
              color: isDark ? "rgba(255,255,255,0.60)" : "rgba(0,0,0,0.52)",
              fontWeight: 500,
              marginBottom: 5,
            }}
          >
            {data.weather[0].description}
          </div>
          <div style={{ fontSize: 12, color: m }}>
            Feels like {Math.round(data.main.feels_like)}°C &nbsp;·&nbsp; High {Math.round(data.main.temp_max)}°
            &nbsp;Low {Math.round(data.main.temp_min)}°
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 22,
              flexWrap: "wrap",
            }}
          >
            {[
              { ic: <IDrop s={12} />, v: `${data.main.humidity}%`, l: "Humidity" },
              { ic: <IWind s={12} />, v: `${data.wind.speed} m/s`, l: "Wind" },
              { ic: <IEye s={12} />, v: `${(data.visibility / 1000).toFixed(0)} km`, l: "Visibility" },
            ].map((p) => (
              <div
                key={p.l}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 12px",
                  borderRadius: 99,
                  background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                  border: `1px solid ${acc}30`,
                  fontSize: 11,
                  fontWeight: 600,
                  color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.60)",
                }}
              >
                <span style={{ color: acc }}>{p.ic}</span>
                {p.v}
                <span style={{ color: m, fontWeight: 400 }}>{p.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))",
          gap: 10,
          "@media (max-width: 768px)": { gridTemplateColumns: "repeat(2,1fr)" },
          "@media (max-width: 480px)": { gridTemplateColumns: "1fr" },
        }}
      >
        {details.map((d) => (
          <DetailCard
            key={d.label}
            icon={d.icon}
            label={d.label}
            value={d.value}
            sub={d.sub}
            acc={acc}
            isDark={isDark}
          />
        ))}
      </div>

      {/* Atmospheric Overview */}
      <div
        style={
          isDark
            ? panel({ padding: 20, display: "flex", flexDirection: "column", gap: 14 })
            : panelLight({ padding: 20, display: "flex", flexDirection: "column", gap: 14 })
        }
      >
        <h3
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: m,
            marginBottom: 2,
          }}
        >
          Atmospheric overview
        </h3>
        <StatBar label="Humidity" value={data.main.humidity} max={100} unit="%" acc={acc} isDark={isDark} />
        <StatBar label="Cloud Cover" value={data.clouds.all} max={100} unit="%" acc={acc} isDark={isDark} />
        <StatBar label="Wind Speed" value={data.wind.speed} max={30} unit=" m/s" acc={acc} isDark={isDark} />
        <StatBar label="Pressure" value={data.main.pressure} max={1060} unit=" hPa" acc={acc} isDark={isDark} />
      </div>

      {/* Forecast */}
      {forecast?.list && (
        <div style={isDark ? panel({ padding: 20 }) : panelLight({ padding: 20 })}>
          <h3
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: m,
              marginBottom: 14,
            }}
          >
            5-Day · 3-Hour Forecast
          </h3>
          <div
            style={{
              display: "flex",
              gap: 8,
              overflowX: "auto",
              overflowY: "hidden",
              paddingBottom: 6,
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {forecast.list.slice(0, 12).map((item, i) => (
              <ForecastCard
                key={i}
                item={item}
                acc={acc}
                isDark={isDark}
                active={activeIdx === i}
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              />
            ))}
          </div>
          {selItem && (
            <div
              style={{
                marginTop: 12,
                padding: 14,
                borderRadius: 14,
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                border: `1px solid ${acc}33`,
                animation: "ww-fade 0.25s ease",
              }}
            >
              {[
                { ic: <ITherm s={13} />, l: "Temp", v: `${Math.round(selItem.main.temp)}°C` },
                { ic: <IDrop s={13} />, l: "Humidity", v: `${selItem.main.humidity}%` },
                { ic: <IWind s={13} />, l: "Wind", v: `${selItem.wind.speed} m/s` },
                { ic: <IPress s={13} />, l: "Pressure", v: `${selItem.main.pressure} hPa` },
              ].map((r) => (
                <div
                  key={r.l}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    color: isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.65)",
                  }}
                >
                  <span style={{ color: acc }}>{r.ic}</span>
                  <span style={{ color: m }}>{r.l}:</span>
                  <strong style={{ color: t, fontWeight: 700 }}>{r.v}</strong>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

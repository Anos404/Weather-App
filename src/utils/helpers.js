export const windDir = (d) => ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(d / 45) % 8];

export const fmtTime = (u, tz) => new Date((u + tz) * 1000).toUTCString().slice(17, 22);

export const isNight = (data) => {
  const now = data.dt + data.timezone;
  return now < data.sys.sunrise + data.timezone || now > data.sys.sunset + data.timezone;
};

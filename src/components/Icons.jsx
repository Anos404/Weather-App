const Ic = ({ s = 20, c = "", ch }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={c}
  >
    {ch}
  </svg>
);

export const IcSun = ({ s, c }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </>
    }
  />
);

export const IcMoon = ({ s, c }) => (
  <Ic s={s} c={c} ch={<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />} />
);

export const IcCldSun = ({ s, c }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2M19.07 4.93l-1.41 1.41M12 8a4 4 0 0 1 4 4" />
        <path d="M18 10a6 6 0 0 0-11.99-.37A4 4 0 1 0 8 18h9a3 3 0 0 0 1-5.83" />
      </>
    }
  />
);

export const IcCloud = ({ s, c }) => (
  <Ic s={s} c={c} ch={<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />} />
);

export const IcRain = ({ s, c }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <line x1="8" y1="19" x2="8" y2="21" />
        <line x1="8" y1="13" x2="8" y2="15" />
        <line x1="16" y1="19" x2="16" y2="21" />
        <line x1="16" y1="13" x2="16" y2="15" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="12" y1="15" x2="12" y2="17" />
      </>
    }
  />
);

export const IcStorm = ({ s, c }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
        <polyline points="13 11 9 17 15 17 11 23" />
      </>
    }
  />
);

export const IcSnow = ({ s, c }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <line x1="8" y1="16" x2="8" y2="20" />
        <line x1="16" y1="16" x2="16" y2="20" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </>
    }
  />
);

export const IcMist = ({ s, c }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <line x1="3" y1="8" x2="21" y2="8" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="16" x2="21" y2="16" />
      </>
    }
  />
);

export const WIcon = ({ code, s = 80 }) => {
  const m = {
    "01d": <IcSun s={s} />,
    "01n": <IcMoon s={s} />,
    "02d": <IcCldSun s={s} />,
    "02n": <IcCloud s={s} />,
    "03d": <IcCloud s={s} />,
    "03n": <IcCloud s={s} />,
    "04d": <IcCloud s={s} />,
    "04n": <IcCloud s={s} />,
    "09d": <IcRain s={s} />,
    "09n": <IcRain s={s} />,
    "10d": <IcRain s={s} />,
    "10n": <IcRain s={s} />,
    "11d": <IcStorm s={s} />,
    "11n": <IcStorm s={s} />,
    "13d": <IcSnow s={s} />,
    "13n": <IcSnow s={s} />,
    "50d": <IcMist s={s} />,
    "50n": <IcMist s={s} />,
  };
  return m[code] || <IcCloud s={s} />;
};

export const ISearch = ({ s = 18, c = "" }) => (
  <Ic s={s} c={c} ch={<><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>} />
);

export const IPin = ({ s = 15, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    }
  />
);

export const IDrop = ({ s = 15, c = "" }) => (
  <Ic s={s} c={c} ch={<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />} />
);

export const IWind = ({ s = 15, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </>
    }
  />
);

export const IPress = ({ s = 15, c = "" }) => (
  <Ic s={s} c={c} ch={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>} />
);

export const IEye = ({ s = 15, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>}
  />
);

export const ITherm = ({ s = 15, c = "" }) => (
  <Ic s={s} c={c} ch={<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />} />
);

export const IClouds = ({ s = 15, c = "" }) => (
  <Ic s={s} c={c} ch={<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />} />
);

export const ISunrise = ({ s = 15, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M17 18a5 5 0 0 0-10 0" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
        <line x1="1" y1="18" x2="3" y2="18" />
        <line x1="21" y1="18" x2="23" y2="18" />
        <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
        <line x1="23" y1="22" x2="1" y2="22" />
        <polyline points="16 5 12 9 8 5" />
      </>
    }
  />
);

export const ISunset = ({ s = 15, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M17 18a5 5 0 0 0-10 0" />
        <line x1="12" y1="9" x2="12" y2="2" />
        <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
        <line x1="1" y1="18" x2="3" y2="18" />
        <line x1="21" y1="18" x2="23" y2="18" />
        <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
        <line x1="23" y1="22" x2="1" y2="22" />
        <polyline points="8 5 12 9 16 5" />
      </>
    }
  />
);

export const IChev = ({ s = 15, c = "" }) => (
  <Ic s={s} c={c} ch={<polyline points="6 9 12 15 18 9" />} />
);

export const IAlert = ({ s = 28, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    }
  />
);

export const ILoad = ({ s = 20, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </>
    }
  />
);

export const ISun2 = ({ s = 17, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </>
    }
  />
);

export const IMoon2 = ({ s = 17, c = "" }) => (
  <Ic s={s} c={c} ch={<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />} />
);

export const ICalendar = ({ s = 13, c = "" }) => (
  <Ic
    s={s}
    c={c}
    ch={
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    }
  />
);

export const CONDITIONS = {
  Clear: {
    day: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    night: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=80",
    acc: "#f59e0b",
    label: "Clear Skies",
    overlay: "linear-gradient(120deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.55) 100%)",
  },
  Clouds: {
    day: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1600&q=80",
    night: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=1600&q=80",
    acc: "#94a3b8",
    label: "Cloudy",
    overlay: "linear-gradient(120deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.60) 100%)",
  },
  Rain: {
    day: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1600&q=80",
    night: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1600&q=80",
    acc: "#60a5fa",
    label: "Rainy",
    overlay: "linear-gradient(120deg, rgba(0,0,10,0.85) 0%, rgba(0,10,30,0.42) 60%, rgba(0,0,20,0.70) 100%)",
  },
  Drizzle: {
    day: "https://images.unsplash.com/photo-1556485689-33e55ab56127?w=1600&q=80",
    night: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1600&q=80",
    acc: "#7dd3fc",
    label: "Drizzle",
    overlay: "linear-gradient(120deg, rgba(0,0,10,0.82) 0%, rgba(0,10,30,0.40) 60%, rgba(0,0,20,0.65) 100%)",
  },
  Thunderstorm: {
    day: "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1600&q=80",
    night: "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?w=1600&q=80",
    acc: "#c4b5fd",
    label: "Thunderstorm",
    overlay: "linear-gradient(120deg, rgba(5,0,20,0.90) 0%, rgba(20,0,40,0.45) 60%, rgba(5,0,20,0.75) 100%)",
  },
  Snow: {
    day: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1600&q=80",
    night: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=1600&q=80",
    acc: "#bae6fd",
    label: "Snowing",
    overlay: "linear-gradient(120deg, rgba(0,5,20,0.78) 0%, rgba(0,10,30,0.30) 60%, rgba(0,5,20,0.60) 100%)",
  },
  Mist: {
    day: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=1600&q=80",
    night: "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=1600&q=80",
    acc: "#cbd5e1",
    label: "Misty",
    overlay: "linear-gradient(120deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.65) 100%)",
  },
  default: {
    day: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    night: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=80",
    acc: "#818cf8",
    label: "Weather",
    overlay: "linear-gradient(120deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.34) 60%, rgba(0,0,0,0.60) 100%)",
  },
};

export const getCond = (c) => CONDITIONS[c] || CONDITIONS.default;

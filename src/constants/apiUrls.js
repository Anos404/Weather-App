const API_KEY = "5cc816022f8f207dad081f23e100e129";

export const W_URL = (c) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(c)}&appid=${API_KEY}&units=metric`;

export const F_URL = (c) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(c)}&appid=${API_KEY}&units=metric`;

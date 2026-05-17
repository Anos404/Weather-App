export const panel = (extra = {}) => ({
  background: "rgba(10,10,20,0.52)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  borderRadius: 20,
  ...extra,
});

export const panelLight = (extra = {}) => ({
  background: "rgba(255,255,255,0.72)",
  border: "1px solid rgba(0,0,0,0.10)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  borderRadius: 20,
  ...extra,
});

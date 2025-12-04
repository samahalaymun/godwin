// Single source of truth for colors used by both the app and Tailwind
module.exports = {
  // keep a single base color for JS usage
  primary: "#35b6fa",
  // provide a full scale for Tailwind usage: primary-50 .. primary-900
  primaryScale: {
    50: "#eaf9ff",
    100: "#d6f2ff",
    200: "#addfff",
    300: "#86ccff",
    400: "#5db9ff",
    500: "#35b6fa",
    600: "#1ea0e6",
    700: "#1688c2",
    800: "#0f6a9d",
    900: "#0b4b73",
  },
  // secondary (text/muted) scale base is #6B7280
  secondary: "#6B7280",
  secondaryScale: {
    50: "#f7f8f9",
    100: "#eef0f2",
    200: "#d7dadd",
    300: "#bfc3c8",
    400: "#989da4",
    500: "#6B7280",
    600: "#58616b",
    700: "#434b55",
    800: "#2f373f",
    900: "#1b2226",
  },
  background: "#F3F4F6",
};

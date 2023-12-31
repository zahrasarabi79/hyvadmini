import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, experimental_sx as sx } from "@mui/material";
import { ReactNode, FC } from "react";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = createTheme({
    direction: "rtl",
    palette: {
      mode: "dark" as const,
      primary: {
        light: "rgba(85, 174, 255, 1)",
        main: "rgba(43, 154, 255, 1)",
        dark: "rgba(39, 139, 229, 1)",
        contrastText: "#fff",
      },
      secondary: {
        light: "rgba(226, 242, 228, 1)",
        main: "rgba(12, 88, 0, 1)",
        dark: "rgba(9, 65, 0, 1)",
        contrastText: "#fff",
      },
      error: {
        light: "rgba(255, 128, 150, 1)",
        main: "rgba(255, 0, 45, 1)",
        dark: "rgba(255, 0, 45, 0.5)",
        contrastText: "#fff",
      },
      success: {
        light: "rgba(34, 217, 60, 1)",
        main: "rgba(11, 150, 30, 1)",
        dark: "rgba(23, 158, 42, 1)",
        contrastText: "#fff",
      },
      warning: {
        light: "#FF9533",
        main: "rgba(255, 122, 0, 1)",
        dark: "#E56E00",
        contrastText: "#fff",
      },
      info: {
        light: "rgba(85, 174, 255, 1)",
        main: "rgba(43, 154, 255, 1)",
        dark: "rgba(39, 139, 229, 1)",
        contrastText: "#fff",
      },
      background: {
        paper: "#040035",
        default: "#080620",
      },
      divider: "rgba(255, 255, 255, 0.10)",
    },
    typography: {
      fontFamily: "vazirmatn, sans-serif",
    },
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Theme;

import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
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
      background: {
        default: "#1e1b4b", // Set the default background color here
      },
      text: {
        primary: "#FFFFFF", // Set the default text color here
      },
      primary: { main: "rgba(255, 255, 255, 0.10)", contrastText: "#FFFFFF" },
      secondary: {
        main: "rgba(195, 209, 221, 0.08)",
        contrastText: "#FFFFFF",
      },
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

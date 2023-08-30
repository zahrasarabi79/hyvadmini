import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    
  },
});
// export default {
//   server: {
//     proxy: {
//       "/api": "http://0.0.0.0:3001", // Replace with your Express server's IP and port
//     },
//   },
// };

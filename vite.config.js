import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@lib", replacement: "/src/lib" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@admin", replacement: "/src/routes/admin" },
      { find: "@main", replacement: "/src/routes/main" },
      { find: "@map", replacement: "/src/routes/map" },
      { find: "@notice", replacement: "/src/routes/notice" },
      { find: "@puzzle", replacement: "/src/routes/puzzle" },
      { find: "@review", replacement: "/src/routes/review" },
      { find: "@timetable", replacement: "/src/routes/timetable" },
    ],
  },
})

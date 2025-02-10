import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({

  theme:{
    extend:{
      colors: {
        primary : "#2885ff",
        secondary: "#EF863E"
      },
    },
  },
  plugins: [
    react(),
    tailwindcss()
  ],
});


{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}

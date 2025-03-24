import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react()],
          // server: {
      //   host: ''
      // },
      define: {
        'process.env.VITE_SUPABASE_KEY':JSON.stringify(process.env.VITE_SUPABASE_KEY)
      }
});
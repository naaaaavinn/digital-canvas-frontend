import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Add env variables defined in the env files
const envKeys = ["REACT_APP_BASE_API_URL"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnv = {};
  envKeys.forEach((key) => (processEnv[key] = env[key]));
  return {
    base: "/",
    define: {
      "process.env": processEnv,
    },
    plugins: [react()],
  };
});

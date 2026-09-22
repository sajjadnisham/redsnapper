import type { NextConfig } from "next";

// Set BASE_PATH when hosting under a sub-path (e.g. GitHub Pages: "/redsnapper").
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  // Fully static site: `npm run build` writes deployable HTML to /out.
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

import type { NextConfig } from "next";

// Static export for GitHub Pages. The site is served from the root of
// https://jmarkuz.github.io, so no basePath is needed. If the repository is
// renamed to anything other than `jmarkuz.github.io`, set basePath to "/<repo>".
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;

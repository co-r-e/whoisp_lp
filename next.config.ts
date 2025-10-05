import type { NextConfig } from "next";

const [repositoryOwner, repositoryName] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;
const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);
const isUserSiteRepo =
  repositoryOwner && repositoryName && repositoryName === `${repositoryOwner}.github.io`;
const derivedBasePath =
  basePathEnv ??
  (process.env.GITHUB_ACTIONS && repositoryName && !isUserSiteRepo ? `/${repositoryName}` : "");
const normalizedBasePath =
  derivedBasePath && derivedBasePath !== "/"
    ? ensureLeadingSlash(derivedBasePath.replace(/\/$/, ""))
    : "";
const assetPrefixEnv = process.env.NEXT_PUBLIC_ASSET_PREFIX;
const derivedAssetPrefix = normalizedBasePath ? `${normalizedBasePath}/` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: normalizedBasePath || undefined,
  assetPrefix: (assetPrefixEnv ?? derivedAssetPrefix) || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;

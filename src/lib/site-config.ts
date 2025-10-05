const [repositoryOwner, repositoryName] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserSiteRepo =
  repositoryOwner && repositoryName && repositoryName === `${repositoryOwner}.github.io`;

const inferredGitHubPagesUrl =
  repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io${isUserSiteRepo ? "" : `/${repositoryName}`}`
    : undefined;

const userDefinedUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = (userDefinedUrl ?? inferredGitHubPagesUrl ?? "http://localhost:3000").replace(
  /\/$/,
  ""
);

export const defaultLocale = "en" as const;
export const alternateLocales = ["ja"] as const;

const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;
const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);
const derivedBasePath =
  basePathEnv ??
  (process.env.GITHUB_ACTIONS && repositoryName && !isUserSiteRepo ? `/${repositoryName}` : "");
const normalizedBasePath =
  derivedBasePath && derivedBasePath !== "/"
    ? ensureLeadingSlash(derivedBasePath.replace(/\/$/, ""))
    : "";

export const basePath = normalizedBasePath;

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}

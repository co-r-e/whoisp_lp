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

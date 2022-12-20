const capitalize = (s: string): string => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const getGitHubOwnerAndRepoFromLink = (link: string): string => {
  const [, owner, repo] = link.match(/github.com\/([^/]+)\/([^/]+)/) || [];
  return `${owner}/${repo}`;
};

const cleanLink = (link: string): string => {
  return link.replace(/^https?:\/\//, "");
};

const isAbsoluteURL = (link: string): boolean => {
  return /^(?:[a-z+]+:)?\/\//i.test(link);
}

export { capitalize, getGitHubOwnerAndRepoFromLink, cleanLink, isAbsoluteURL };

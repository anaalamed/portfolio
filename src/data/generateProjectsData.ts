import projectsAdditionalData from "./projectsAdds.json";

export interface Repo {
  id: number;
  name: string;
  image_url: string;
  description: string;
  html_url: string;
  pushed_at: string;
  homepage: string;
  topics: [];
  order: number;
}

export type Repos = Repo[];

const githubReposLink =
  "https://api.github.com/users/anaalamed/repos?per_page=100";

const getReposFromGithub = async () => {
  try {
    const res = await fetch(githubReposLink);
    return await res.json();
  } catch (e) {
    console.log("Error occured during fetching projects data from Github: ", e);
  }
};

const mergeReposData = (repos: Repos) => {
  return repos.map((repo) => {
    const additionalData = projectsAdditionalData.find(
      (project) => repo.id === project.id
    );
    return { ...additionalData, ...repo };
  });
};

export const getSortedRepos = async () => {
  const reposFromGithub = await getReposFromGithub();
  const updatedRepos = mergeReposData(reposFromGithub);

  return updatedRepos
    .filter((repo: Repo) => repo.order != null)
    .sort(function (a, b) {
      var project1 = a.order || 100;
      var project2 = b.order || 100;
      return project1 - project2;
    });
};

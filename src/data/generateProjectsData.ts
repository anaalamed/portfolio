import projectsAdditionalData from "./projectsAdds.json";

const githubReposLink =
  "https://api.github.com/users/anaalamed/repos?per_page=100";

const getReposFromGithub = async () => {
  const res = await fetch(githubReposLink);
  return await res.json();
};

const mergeReposData = (repos) => {
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
    .filter((repo) => repo.order != null)
    .sort(function (a, b) {
      var project1 = a.order || 100;
      var project2 = b.order || 100;
      return project1 - project2;
    });
};

import React, { useEffect, useState, Suspense } from "react";
import styled from "styled-components";

import Projects from "./Projects/Projects";
import projects_adds from "../../data/projectsAdds.json"; // order + image
// const About = lazy(() => import('./About/About'));
import About from "./About/About";
import Blog from "./Blog/Blog";
import Timeline from "./Timeline/Timeline";
import { devices } from "../../styles/responsive";
import Awards from "./Awards/Awards";

const Main: React.FC = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    // repos from github API
    const res = await fetch(
      "https://api.github.com/users/anaalamed/repos?per_page=100"
    );
    const repos = await res.json();

    // merge repos with adds from json
    var merged_arr = repos.map((repo) => {
      let adds = projects_adds.find((project) => repo.id === project.id);
      return { ...adds, ...repo };
    });
    setRepos(merged_arr);
  };

  useEffect(() => {
    async function getRepos() {
      return await fetchRepos();
    }
    getRepos();
  }, []);

  const renderLoader = () => <p>Loading</p>;

  return (
    <Box>
      <Suspense fallback={renderLoader()}>
        <About></About>
      </Suspense>

      <Awards></Awards>
      <Timeline></Timeline>
      <Blog repos={repos}></Blog>
      <Projects repos={repos}></Projects>
    </Box>
  );
};
export default Main;

const Box = styled.main`
  width: 100%;
  background: ${(props) => props.theme.about};

  @media ${devices.tablet} {
    /* padding: 1rem; */
  }
  @media ${devices.mobile} {
    /* padding: 1rem; */
  }
`;

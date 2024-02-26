import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "antd/dist/antd.min.css";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { Title, SectionBox } from "../../../styles/global";
import PaginatonRender from "./Pagination";
import InfiniteScrollRender from "./InfiniteScrollRender";
import { getSortedRepos, Repos } from "../../../data/generateProjectsData";

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repos>([]);
  var windowSize = useWindowSize();

  useEffect(() => {
    async function getRepos() {
      const repos = await getSortedRepos();
      setRepos(repos);
    }
    getRepos();
  }, []);

  return (
    <Box id="projects">
      <Title>Projects</Title>

      {repos.length > 0 && windowSize[0] <= 812 ? (
        <InfiniteScrollRender repos={repos}></InfiniteScrollRender>
      ) : (
        <PaginatonRender repos={repos}></PaginatonRender>
      )}
    </Box>
  );
};
export default Projects;

const Box = styled(SectionBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

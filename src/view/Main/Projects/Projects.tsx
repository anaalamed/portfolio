import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { Title, SectionBox } from "../../../styles/global";
import PaginatonRender from "./Pagination";
import InfiniteScrollRender from "./InfiniteScrollRender";

interface Repos {
  [repo: number]: object;
}

const Projects: React.FC<Repos> = ({ repos }) => {
  var windowSize = useWindowSize();

  let filteredAndSortedRepos = [];
  // sort projects
  if (repos.length !== 0) {
    filteredAndSortedRepos = repos
      .filter((repo) => repo.order != null)
      .sort(function (a, b) {
        var pr1 = a.order || 100;
        var pr2 = b.order || 100;
        return pr1 - pr2;
      });
    console.log("repos: ", filteredAndSortedRepos);
  }

  return (
    <Box id="projects">
      <Title>Projects</Title>

      {filteredAndSortedRepos.length > 0 && windowSize[0] <= 812 ? (
        <InfiniteScrollRender
          repos={[...filteredAndSortedRepos]}
        ></InfiniteScrollRender>
      ) : (
        <PaginatonRender repos={filteredAndSortedRepos}></PaginatonRender>
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

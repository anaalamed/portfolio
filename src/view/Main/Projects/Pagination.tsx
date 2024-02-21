import React, { useState } from "react";
import styled from "styled-components";
import { Pagination } from "antd";
import "antd/dist/antd.css";

import Project from "./ProjectCard";
import { devices } from "../../../styles/responsive";
import { Repos } from "../../../data/generateProjectsData";

const PaginatonRender: React.FC<{ repos: Repos }> = ({ repos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(6);

  // sort projects
  if (repos.length !== 0) {
    repos.sort(function (a, b) {
      var pr1 = a.order || 100;
      var pr2 = b.order || 100;
      return pr1 - pr2;
    });
  }

  // slice for pages
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  var currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const handleChangePage = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <>
      <Pagination
        current={currentPage}
        onChange={handleChangePage}
        total={repos?.length || 0}
        pageSize={reposPerPage}
      />

      <Collection>
        {currentRepos?.map((repo) => (
          <Project key={repo.id} repo={repo}></Project>
        ))}
      </Collection>

      <Pagination
        current={currentPage}
        onChange={handleChangePage}
        total={repos?.length || 0}
        pageSize={reposPerPage}
      />
    </>
  );
};
export default PaginatonRender;

const Collection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 90%;
  grid-gap: 1rem;
  justify-content: space-evenly;

  @media ${devices.tablet} {
    grid-template-columns: auto auto;
  }
`;

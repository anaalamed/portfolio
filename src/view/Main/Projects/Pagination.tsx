import React, { useState } from "react";
import styled from "styled-components";
import { Pagination } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'antd/dist/antd.css';

import Project from './ProjectCard';
import { devices } from "../../../styles/responsive";

interface Repos {
    [repo: number]: object
}

const PaginatonRender: React.FC<Repos> = ({ repos }) => {
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

    const handleChangePage = pageNumber => setCurrentPage(pageNumber);


    return (
        <>
            <AnchorLink href='#projects' >
                <Pagination current={currentPage} onChange={handleChangePage} total={repos?.length || 0} pageSize={reposPerPage} />
            </AnchorLink>

            <Collection>
                {currentRepos?.map(repo =>
                    (<Project id={repo.id} name={repo.name} image_url={repo.image_url} description={repo.description} html_url={repo.html_url} updated_at={repo.updated_at} homepage={repo.homepage} topics={repo.topics} ></Project>) // key={repo.id} ts error
                )}
            </Collection>

            <AnchorLink href='#projects' >
                <Pagination current={currentPage} onChange={handleChangePage} total={repos?.length || 0} pageSize={reposPerPage} />
            </AnchorLink>
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
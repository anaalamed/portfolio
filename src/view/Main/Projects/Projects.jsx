import React, { useState } from "react";
import styled from "styled-components";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Project from './ProjectCard';
import { Title } from '../../../styles/global';

const Projects = ({ repos }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    // sort projects
    if (repos.length !== 0) {
        repos.sort(function (a, b) {
            var pr1 = a.order || 100;
            var pr2 = b.order || 100;
            return pr1 - pr2;
        });
    }

    // slice for pages
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentRepos = repos.slice(indexOfFirstPost, indexOfLastPost);

    const handleChangePage = pageNumber => setCurrentPage(pageNumber);

    return (
        <Box id='projects' >
            <Title>Projects</Title>
            <Collection>
                {currentRepos?.map(repo =>
                    (<Project repo={repo} key={repo.id} ></Project>)
                )}
            </Collection>

            <AnchorLink href='#projects' offset='140'>
                <Pagination current={currentPage} onChange={handleChangePage} total={30} />
            </AnchorLink>
        </Box>
    );
};
export default Projects;


const Box = styled.section`
  /* margin-bottom: 3rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Collection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
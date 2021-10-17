import React, { useEffect, useState } from "react";
import styled from "styled-components";

import About from './About/About';
import Projects from './Projects/Projects';
import projects_adds from '../../data/projectsAdds.json'; // order + image

const Main = () => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        // repos from github API
        const res = await fetch("https://api.github.com/users/anaalamed/repos");
        const repos = await res.json();

        // merge repos with adds from json
        var merged_arr = repos.map(repo => {
            let adds = projects_adds.find(project => repo.id === project.id);
            return { ...adds, ...repo };
        })
        setRepos(merged_arr);
    }

    useEffect(() => {
        async function getRepos() {
            return await fetchRepos();
        }
        getRepos();
    }, [])

    return (
        <Box >
            <About avatar={repos[0]?.owner.avatar_url}></About>
            <Projects repos={repos}></Projects>
        </Box>
    );
};
export default Main;

const Box = styled.main`
  width: 100%;
  background: ${props => props.theme.about};
  padding: 1rem 6rem;

  @media only screen and (max-width: 812px) {
    padding: 1rem ;
  }
`;





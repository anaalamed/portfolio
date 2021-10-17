import React from "react";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';

import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { IoDocumentAttachOutline } from 'react-icons/io5';

const Icons = () => {
  const tooltips = [{ name: "linkedin", note: "My LinkedIn profile" }, { name: "github", note: "My GitHub profile" }, { name: "cv", note: "My CV" }]

  return (
    <Box >
      <h2><a href="https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio.appspot.com/o/CV-Ana_Levit.pdf?alt=media&token=f735b9f7-e8ea-4800-9f0b-2c0ff03f7041" target="_blank" rel="noreferrer"><IoDocumentAttachOutline data-tip data-for="cv" /></a></h2>
      <h2><a href="https://github.com/anaalamed" target="_blank" rel="noreferrer"><GrGithub data-tip data-for="github" /></a></h2>
      <h2><a href="https://www.linkedin.com/in/ana-levit-2934a0150" target="_blank" rel="noreferrer" ><GrLinkedinOption data-tip data-for="linkedin" /></a></h2>

      {tooltips.map(tooltip =>
        (<ReactTooltip id={tooltip.name} place="top" effect="solid" backgroundColor={(props => props.theme.topBar)} textColor={"white"}>{tooltip.note}</ReactTooltip>)
      )}
    </Box >
  );
};
export default Icons;


const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 1rem;
        font-size: 4rem;
        cursor: pointer;

        a {
          color: white;
        }

        @media only screen and (max-width: 1200px) {
          font-size: 2.5rem;
        }

        @media only screen and (max-width: 812px) {
          font-size: 1.8rem;
        }

    }
`;

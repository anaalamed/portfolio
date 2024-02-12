import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import ReactTooltip from "react-tooltip";
import { devices } from "../styles/responsive";

import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { IoDocumentAttachOutline } from "react-icons/io5";

const Icons: React.FC = () => {
  const tooltips = [
    { name: "linkedin", note: "My LinkedIn profile" },
    { name: "github", note: "My GitHub profile" },
    { name: "cv", note: "My CV" },
  ];

  return (
    <ThemeConsumer>
      {(theme) => (
        <Box>
          <h2>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio-ts.appspot.com/o/CV-Ana_Levit.pdf?alt=media&token=cd7e0122-6351-424e-a2e6-d8306abccee3"
              target="_blank"
              rel="noreferrer"
            >
              <IoDocumentAttachOutline data-tip data-for="cv" />
            </a>
          </h2>
          <h2>
            <a
              href="https://github.com/anaalamed"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub data-tip data-for="github" />
            </a>
          </h2>
          <h2>
            <a
              href="https://www.linkedin.com/in/ana-levit"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedinOption data-tip data-for="linkedin" />
            </a>
          </h2>
          {tooltips.map((tooltip) => (
            <ReactTooltip
              id={tooltip.name}
              place="top"
              effect="solid"
              backgroundColor={theme.body}
              textColor={"white"}
            >
              {tooltip.note}
            </ReactTooltip>
          ))}
        </Box>
      )}
    </ThemeConsumer>
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

    @media ${devices.mobile} {
      font-size: 1.8rem;
    }

    @media ${devices.tablet} {
      font-size: 2.5rem;
    }
  }
`;

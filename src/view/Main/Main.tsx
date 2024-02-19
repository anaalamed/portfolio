import React, { Suspense } from "react";
import styled from "styled-components";

import Projects from "./Projects/Projects";
// const About = lazy(() => import('./About/About'));
import About from "./About/About";
import Blog from "./Blog/Blog";
import Timeline from "./Timeline/Timeline";
import { devices } from "../../styles/responsive";
import Awards from "./Awards/Awards";

const Main: React.FC = () => {
  const renderLoader = () => <p>Loading</p>;

  return (
    <Box>
      <Suspense fallback={renderLoader()}>
        <About></About>
      </Suspense>

      <Awards></Awards>
      <Timeline></Timeline>
      <Blog></Blog>
      <Projects></Projects>
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

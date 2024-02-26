import React from "react";
import styled from "styled-components";

const Story: React.FC = () => {
  return (
    <Details>
      <p>
        Software Engineer with 2 years of experience. My last position was at
        Google, working on GCP (Google Cloud Platform).
      </p>
      <p>
        I have completed my bachelor's degree in Electrical and Electronics
        Engineering. I'm also a graduate of Full Stack Development course.
      </p>
      <p>
        I come with a hands-on approach. I’m a fast learner, adaptive, and
        proactive. I'm very independent and also a great team player.
      </p>

      <p>
        I'm looking for full-time opportunities to contribute my expertise and
        collaborate with dynamic teams on cutting-edge projects.
      </p>
    </Details>
  );
};
export default Story;

const Details = styled.div`
  text-align: center;
`;

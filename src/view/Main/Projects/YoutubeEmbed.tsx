import React from "react";
import styled from "styled-components";
import { Title } from "../../../styles/global";
import { devices } from "../../../styles/responsive";


const YoutubeEmbed: React.FC = () => {

  return (
    <Box >
      <Title>Todo Cross-Platform App</Title>
      <Video
        src="https://www.youtube.com/embed/5IBjLLmK5IA"
        width="853"
        height="480"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  );
};
export default YoutubeEmbed;


const Box = styled.div`
  background: ${props => props.theme.topBar};
  padding: 1rem 5rem;
  border-radius: 1rem;
  margin-top: 5rem;
  align-self: center;
  /* width: 100%; */

  @media ${devices.mobile} {
    padding: 1rem 3rem;
  }

  @media ${devices.tablet} {
    max-width: 750px;
  }
`;

const Video = styled.iframe`
/* width: 100%; */
  @media ${devices.mobile} {
    height: 80%;
    width: 100%; 
  }
  @media ${devices.tablet} {
    max-width: 600px;
  }
`;
import React from "react";
import styled from "styled-components";
import { Title } from "../../../styles/global";


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

  @media only screen and (max-width: 812px) {
    padding: 1rem 3rem;
  }
`;

const Video = styled.iframe`
  @media only screen and (max-width: 812px) {
    height: 80%;
    width: 100%; 
  }
`;
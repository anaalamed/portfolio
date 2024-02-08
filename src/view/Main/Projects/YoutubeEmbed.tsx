import React from "react";
import styled from "styled-components";
import { devices } from "../../../styles/responsive";

const YoutubeEmbed: React.FC = ({ link }) => {
  console.log(link);

  return (
    <Box>
      <Video
        src={link}
        width="400"
        height="300"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
};
export default YoutubeEmbed;

const Box = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  align-self: center;

  @media ${devices.mobile} {
    padding: 1rem;
  }
`;

const Video = styled.iframe`
  @media ${devices.mobile} {
    height: 80%;
    width: 100%;
  }
`;

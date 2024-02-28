import React from "react";
import styled from "styled-components";

import { Title, SectionBox } from "../../../styles/global";
import { devices } from "../../../styles/responsive";
import data from "../../../data/blog.json";
import Post from "./Post";

const About: React.FC = () => {
  return (
    <Box id="blog">
      <Title>Blog</Title>

      <Content className="posts-wrapper">
        {data.map((post) => (
          <Post key={post.title} post={post}></Post>
        ))}
      </Content>
    </Box>
  );
};
export default About;

const Box = styled(SectionBox)`
  display: flex;
  flex-direction: column;

  @media ${devices.largeDesktop} {
    max-width: 1700px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

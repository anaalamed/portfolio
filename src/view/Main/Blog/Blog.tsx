import React from "react";
import styled from "styled-components";

import { Title, SectionBox } from "../../../styles/global";
import { devices } from "../../../styles/responsive";
import data from "../../../data/blog.json";
import Post from "./Post";
import { Flex } from "antd";

const About: React.FC = () => {
  return (
    <Box id="blog">
      <Title>Blog</Title>

      <Flex justify="center" align="center" gap={16} wrap="wrap">
        {data.map((post) => (
          <Post key={post.title} post={post}></Post>
        ))}
      </Flex>
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

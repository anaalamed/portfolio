import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { Title } from "../../../styles/global";
import { devices } from "../../../styles/responsive";
import data from "../../../data/blog.json";
import Post from "./Post";

interface Avatar {
  avatar: string;
}

const About: React.FC<Avatar> = ({ avatar }) => {
  console.log(data);

  return (
    <ThemeConsumer>
      {(theme) => (
        <Box id="blog">
          <Title>Blog</Title>

          <Content className="posts-wrapper">
            {data.map((post) => (
              <Post details={post}></Post>
            ))}
          </Content>
        </Box>
      )}
    </ThemeConsumer>
  );
};
export default About;

const Box = styled.section`
  margin-bottom: 5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

import React from "react";
import styled from "styled-components";

import { devices } from "../../../styles/responsive";
import YoutubeEmbed from "./YoutubeEmbed";

interface PostData {
  title: string;
  description: string;
  date: string;
  link: string;
  github: string;
}

const Post: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Box className="post">
      <Title>{post.title}</Title>

      <YoutubeEmbed link={post.link}></YoutubeEmbed>

      <Content>
        <div>
          <Date>{post.date}</Date>
          <Description>{post.description}</Description>
          <Button>
            <a href={post.github}>More...</a>
          </Button>
        </div>
      </Content>
    </Box>
  );
};
export default Post;

const Box = styled.div`
  background: ${(props) => props.theme.topBar};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem 0;
  max-width: 30%;
  border-radius: 1rem;
  border-bottom: 5px solid ${(props) => props.theme.topBar};
  overflow: hidden;
  height: 600px;

  &:hover {
    border-bottom: 5px solid white;
  }

  @media ${devices.tablet} {
    width: 80%;
    max-width: 80%;
    max-height: 450px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    text-align: left;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  text-shadow: 4px 4px 2px #585858;

  @media ${devices.mobile} {
    font-size: 1rem;
  }
`;

const Description = styled.div`
  text-align: left;
  margin-top: 0.5rem;
  white-space: pre-line;
  vertical-align: bottom;
`;

const Date = styled.div`
  text-align: left;
  margin-top: 1rem;
  opacity: 0.4;
`;

const Button = styled.button`
  background: ${(props) => props.theme.body};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin: 1.5rem 0;
  font-size: 1.2rem;
  cursor: pointer;

  a {
    color: white;
  }

  @media ${devices.mobile} {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }

  &:hover {
    transform: scale(1.2);
    transition: 1s;
  }
`;

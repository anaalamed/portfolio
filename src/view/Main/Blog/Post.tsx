import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { devices } from "../../../styles/responsive";
import YoutubeEmbed from "../Projects/YoutubeEmbed";

interface Details {
  title: string;
  description: string;
  date: string;
  link: string;
  order: number;
}

const Post: React.FC<Details> = ({ details }) => {
  console.log(details);

  return (
    <ThemeConsumer>
      {(theme) => (
        <Box className="post">
          <Title>{details.title}</Title>

          <Content>
            <YoutubeEmbed link={details.link}></YoutubeEmbed>
            <Details>
              <Date>{details.date}</Date>
              <Description>{details.description}</Description>
              <Button>
                <a href={details.github}>More...</a>
              </Button>
            </Details>
          </Content>
        </Box>
      )}
    </ThemeConsumer>
  );
};
export default Post;

const Box = styled.div`
  background: ${(props) => props.theme.topBar};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding: 2rem 1rem 0;
  max-width: 47%;
  border-radius: 1rem;
  border-bottom: 5px solid ${(props) => props.theme.topBar};
  overflow: hidden;

  &:hover {
    border-bottom: 5px solid white;
  }

  @media ${devices.tablet} {
    width: 80%;
    max-width: 80%;
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

const Details = styled.div``;

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

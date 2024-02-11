import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { Title, SectionBox } from "../../../styles/global";
import { devices } from "../../../styles/responsive";

import {
  skillsFrontend,
  skillsBackend,
  skillsTools,
  generateLink,
} from "../../../data/badgeIcons";

interface Avatar {
  avatar: string;
}

const About: React.FC<Avatar> = () => {
  const generateImgTag = (badge, theme) => {
    return React.createElement(
      "img",
      {
        src: generateLink(badge, theme),
        alt: badge.logo,
        title: badge.logo,
        height: 30,
        key: badge.logo,
      },
      null
    );
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <Box id="about">
          <Title>About</Title>

          <Content>
            <Image>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio-ts.appspot.com/o/profile%20(1).jpeg?alt=media&token=cba7f32e-c7c7-480d-852b-792b26e89412"
                alt="avatar"
              />
            </Image>

            <Details>
              <p>
                Software Engineer with 2 years of experience. My last position
                was at Google, working on GCP (Google Cloud Platform).
              </p>
              <p>
                I have completed my bachelor's degree in Electrical and
                Electronics Engineering. I'm also a graduate of Full Stack
                Development course.
              </p>
              <p>
                I come with a hands-on approach. I’m a fast learner, adaptive,
                and proactive. I'm very independent and also a great team
                player.
              </p>

              <p>
                I'm looking for full-time opportunities to contribute my
                expertise and collaborate with dynamic teams on cutting-edge
                projects.
              </p>
            </Details>
          </Content>

          <Icons>
            <p>Skills:</p>
            <div>
              {skillsFrontend.map((badge) => generateImgTag(badge, theme))}
            </div>
            <div>
              {skillsBackend.map((badge) => generateImgTag(badge, theme))}
            </div>
            <div>
              {skillsTools.map((badge) => generateImgTag(badge, theme))}
            </div>
          </Icons>
        </Box>
      )}
    </ThemeConsumer>
  );
};
export default About;

const Box = styled(SectionBox)`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

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

const Image = styled.div`
  margin-left: 1rem;
  overflow: hidden;
  transition: 1s ease;
  min-width: 300px;
  height: 300px;
  position: relative;
  border-radius: 50%;
  border-color: ${(props) => props.theme.topBar};
  border: 3px solid;

  img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: 1s;

    &:hover {
      transform: scale(1.2);
      transition: 1s;
    }
  }
  @media ${devices.mobile} {
    min-width: 200px;
    height: 200px;
  }
`;

const Details = styled.div`
  text-align: center;
`;

const Icons = styled.div`
  text-align: center;

  img {
    margin: 5px;
    transform: scale(1);
    transition: 1s;
  }

  img:hover {
    transform: scale(1.2);
    transition: 1s;
  }
`;

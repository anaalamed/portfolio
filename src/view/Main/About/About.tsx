import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { Title } from "../../../styles/global";
import { devices } from "../../../styles/responsive";

interface Avatar {
  avatar: string;
}

const About: React.FC<Avatar> = () => {
  const skillsFrontend = [
    { logo: "HTML5", color: "E34F26" },
    { logo: "CSS3", color: "1572B6" },
    { logo: "Sass", color: "CC6699" },
    { logo: "JavaScript", color: "F7DF1E" },
    { logo: "TypeScript", color: "3178C6" },
    { logo: "jQuery", color: "2331eb" },
    { logo: "React", color: "61DAFB" },
    { logo: "React", color: "61DAFB", name: "React Native" },
    { logo: "Redux", color: "764ABC" },
    { logo: "styled-components", color: "DB7093", name: "styled--components" },
  ];

  const skillsBackend = [
    { logo: "Node.js", color: "" },
    { logo: "Express", color: "FFFFFF" },
    { logo: "Java", color: "47A248" },
    { logo: "MongoDB", color: "47A248" },
    { logo: "MySql", color: "fff" },
  ];

  const skillsTools = [
    { logo: "Firebase", color: "FFCA28" },
    { logo: "Heroku", color: "6432a8" },
    { logo: "Git", color: "F05032" },
    { logo: "visual studio code", color: "007ACC", name: "VS Code" },
    { logo: "Postman", color: "e35b17" },
    { logo: "Expo", color: "grey" },
  ];

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
                I have completed my bachelor's degree in Electrical and
                Electronics Engineering, but my passion is coding!<br></br>
                I'm also a graduate of Full Stack Development course.
              </p>
              <p>
                I have 2 years of experience as a software engineer. My last
                position was at Google.
              </p>
              <p>
                I come with a hands-on approach. I’m a fast learner, adaptive,
                and proactive. I'm very undependent and also a great team
                player.
              </p>

              <p>
                I'm looking for full-time opportunities to contribute my
                expertise and collaborate with dynamic teams on cutting-edge
                projects.
              </p>

              <br></br>
              <p>Skills:</p>
              <Icons>
                {skillsFrontend.map((badge) => (
                  <img
                    src={`https://img.shields.io/badge/${
                      badge.name || badge.logo
                    }-${theme.topBar.substring(1)}?logo=${
                      badge.logo
                    }&logoColor=${badge.color}`}
                    alt={badge.logo}
                    title={badge.logo}
                    height="30"
                  ></img>
                ))}{" "}
                <br></br>
                {skillsBackend.map((badge) => (
                  <img
                    src={`https://img.shields.io/badge/${
                      badge.logo
                    }-${theme.topBar.substring(1)}?logo=${
                      badge.logo
                    }&logoColor=${badge.color}`}
                    alt={badge.logo}
                    title={badge.logo}
                    height="30"
                  ></img>
                ))}{" "}
                <br></br>
                {skillsTools.map((badge) => (
                  <img
                    src={`https://img.shields.io/badge/${
                      badge.name || badge.logo
                    }-${theme.topBar.substring(1)}?logo=${
                      badge.logo
                    }&logoColor=${badge.color}`}
                    alt={badge.logo}
                    title={badge.logo}
                    height="30"
                  ></img>
                ))}{" "}
                <br></br>
              </Icons>
            </Details>
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
  padding: 0 5rem;
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

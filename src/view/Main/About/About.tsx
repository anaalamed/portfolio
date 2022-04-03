import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { Title } from '../../../styles/global';
import YoutubeEmbed from "../Projects/YoutubeEmbed";

interface Avatar {
  avatar: string
}

const About: React.FC<Avatar> = ({ avatar }) => {

  const skillsFrontend = [
    { logo: "HTML5", color: "E34F26" },
    { logo: "CSS3", color: "1572B6" },
    { logo: "Sass", color: "CC6699" },
    { logo: "JavaScript", color: "F7DF1E" },
    { logo: "jQuery", color: "2331eb" },
    { logo: "React", color: "61DAFB" },
    { logo: "React", color: "61DAFB", name: "React Native" },
    { logo: "Redux", color: "764ABC" },
    { logo: "styled-components", color: "DB7093", name: "styled--components" }
  ]

  const skillsBackend = [
    { logo: "Node.js", color: "" },
    { logo: "Express", color: "FFFFFF" },
    { logo: "TypeScript", color: "3178C6" },
    { logo: "MongoDB", color: "47A248" }
  ]

  const skillsTools = [
    { logo: "Firebase", color: "FFCA28" },
    { logo: "Heroku", color: "6432a8" },
    { logo: "Git", color: "F05032" },
    { logo: "visual studio code", color: "007ACC", name: "VS Code" },
    { logo: "Postman", color: "e35b17" },
    { logo: "Expo", color: "grey" },
    // { logo: "Gatsby", color: "6115a3" }
  ]

  return (
    <ThemeConsumer>
      {theme =>
        <Box id='about' >
          <Title>About</Title>

          <Content>
            <Image><img src="https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio-ts.appspot.com/o/profile%20(1).jpeg?alt=media&token=cba7f32e-c7c7-480d-852b-792b26e89412" alt='avatar' /></Image>

            <Details>
              <p>I have completed my bachelor's degree in Electrical and Electronics Engineering, but my passion is coding! <br></br>
                I'm a graduate of Full Stack Development course searching for my first opportunity as a developer. <br></br>
                I’m coding for at least 4 hours every day. <br></br>
                I come with a hands-on approach. <br></br>
                I’m a quick learner. <br></br><br></br>
                Skills:
              </p>

              <Icons>
                {skillsFrontend.map(badge => (<img src={`https://img.shields.io/badge/${badge.name || badge.logo}-${theme.topBar.substring(1)}?logo=${badge.logo}&logoColor=${badge.color}`} alt={badge.logo} title={badge.logo} height="30"></img>))} <br></br>
                {skillsBackend.map(badge => (<img src={`https://img.shields.io/badge/${badge.logo}-${theme.topBar.substring(1)}?logo=${badge.logo}&logoColor=${badge.color}`} alt={badge.logo} title={badge.logo} height="30"></img>))} <br></br>
                {skillsTools.map(badge => (<img src={`https://img.shields.io/badge/${badge.name || badge.logo}-${theme.topBar.substring(1)}?logo=${badge.logo}&logoColor=${badge.color}`} alt={badge.logo} title={badge.logo} height="30"></img>))} <br></br>
              </Icons>
            </Details>
          </Content>
          <YoutubeEmbed></YoutubeEmbed>
        </Box >
      }
    </ThemeConsumer>
  );
};
export default About;


const Box = styled.section`
  margin-bottom: 5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

  p {
    font-size: 1.5rem;
    text-align: left;
  }

  @media only screen and (max-width: 1012px) {
      p {
        font-size: 1rem;
      }
    }

  @media only screen and (max-width: 812px) {
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
  transition:  1s ease;
  width: 20rem;
  height: 20rem;
  position: relative;
  border-radius: 50%;
  border-color: ${props => props.theme.topBar} ;
  border: 3px solid;

  
  img {
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition:  1s;

      &:hover {
        transform: scale(1.2);
        transition:  1s;
      }

  }
      @media only screen and (max-width: 812px) {
        width: 15rem;
        height: 15rem;
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



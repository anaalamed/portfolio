import React from "react";
import styled from "styled-components";

import { Title, SectionBox } from "../../../styles/global";
import { devices } from "../../../styles/responsive";

import BadgeIcons from "./BadgeIcons";
import Story from "./Story";

const About: React.FC = () => {
  return (
    <Box id="about">
      <Title>About</Title>

      <Content>
        <Image>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio-ts.appspot.com/o/profile%20(1).jpeg?alt=media&token=cba7f32e-c7c7-480d-852b-792b26e89412"
            alt="avatar"
          />
        </Image>

        <Story />
      </Content>

      <BadgeIcons />
    </Box>
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
  grid-gap: 10px;

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
  overflow: hidden;
  transition: 1s ease;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border-color: ${(props) => props.theme.topBar};
  border: 3px solid;
  flex-shrink: 0;

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
`;

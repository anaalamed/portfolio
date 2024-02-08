import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { Title } from "../../../styles/global";
import { devices } from "../../../styles/responsive";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";

import data from "../../../data/timeline.json";

const Timelene: React.FC = () => {
  console.log(data);

  return (
    <ThemeConsumer>
      {(theme) => (
        <Box id="timeline">
          <Title>Timeline</Title>

          <VerticalTimeline>
            {data.map((timelineElement) => (
              <TimelineElement details={timelineElement}></TimelineElement>
            ))}
          </VerticalTimeline>

          <Content></Content>
        </Box>
      )}
    </ThemeConsumer>
  );
};
export default Timelene;

const Box = styled.section`
  margin-bottom: 5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 5rem 0.5rem;
  background: ${(props) => props.theme.hero};
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

import React from "react";
import styled from "styled-components";

import { Title, SectionBox } from "../../../styles/global";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";

import data from "../../../data/timeline.json";

const Timelene: React.FC = () => {
  return (
    <Box id="timeline">
      <Title>Timeline</Title>

      <VerticalTimeline>
        {data.map((timelineElementData) => (
          <TimelineElement
            key={timelineElementData.id}
            data={timelineElementData}
          ></TimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};
export default Timelene;

const Box = styled(SectionBox)`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.hero};
  padding: 3rem 0.5rem;
`;

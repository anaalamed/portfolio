import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

interface TimelineElementData {
  id: number;
  title: string;
  company: string;
  description: string[];
  date: string;
  icon: string;
}

const TimelineElement: React.FC<{ data: TimelineElementData }> = ({ data }) => {
  let icon: JSX.Element, iconStyle: any;
  switch (data.icon) {
    case "education":
      icon = <IoSchool />;
      iconStyle = { background: "rgb(233, 30, 99)", color: "#fff" };
      break;
    case "work":
      icon = <MdOutlineWork />;
      iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
      break;
    case "search":
      icon = <FaSearch />;
      iconStyle = { background: "rgb(16, 204, 82)", color: "#fff" };
      break;
  }

  return (
    <ThemeConsumer>
      {(theme) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: theme.body, color: "#fff" }}
          contentArrowStyle={{ borderRight: `7px solid  ${theme.body}` }}
          date={data.date}
          iconStyle={iconStyle}
          icon={icon}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: "#fff" }}
          >
            {data.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: "#fff" }}
          >
            {data.company}
          </h4>

          {data.description?.length > 1 ? (
            <ul>
              {data.description.map((bullet) => (
                <LiItem key={bullet}>{bullet}</LiItem>
              ))}
            </ul>
          ) : (
            <p>{data.description}</p>
          )}
        </VerticalTimelineElement>
      )}
    </ThemeConsumer>
  );
};
export default TimelineElement;

const LiItem = styled.li`
  list-style-type: "⚡";
  padding-inline-start: 1ch;
`;

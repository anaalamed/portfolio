import React from "react";
import styled, { ThemeConsumer } from "styled-components";

import {
  skillsFrontend,
  skillsBackend,
  skillsTools,
  generateImgTag,
} from "../../../data/badgeIcons";

const BadgeIcons: React.FC = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Icons>
          <div>
            {skillsFrontend.map((badge) => generateImgTag(badge, theme))}
          </div>
          <div>
            {skillsBackend.map((badge) => generateImgTag(badge, theme))}
          </div>
          <div>{skillsTools.map((badge) => generateImgTag(badge, theme))}</div>
        </Icons>
      )}
    </ThemeConsumer>
  );
};
export default BadgeIcons;

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

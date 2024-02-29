import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import ReactTooltip from "react-tooltip";
import { devices } from "../../../styles/responsive";
import { IconType } from "react-icons";

interface IconData {
  name: string;
  tooltip: string;
  link: string;
  iconElement: IconType;
}

const ContactIcon: React.FC<{ icon: IconData }> = ({ icon }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Box key={icon.name}>
          <a href={icon.link} target="_blank" rel="noreferrer">
            <icon.iconElement data-tip data-for={icon.name} />
          </a>

          <ReactTooltip
            id={icon.name}
            place="top"
            effect="solid"
            backgroundColor={theme.body}
            textColor={"white"}
          >
            {icon.tooltip}
          </ReactTooltip>
        </Box>
      )}
    </ThemeConsumer>
  );
};
export default ContactIcon;

const Box = styled.div`
  a {
    margin: 1rem;
    font-size: 4rem;
    cursor: pointer;
    color: white;

    @media ${devices.mobile} {
      font-size: 1.8rem;
    }

    @media ${devices.tablet} {
      font-size: 2.5rem;
    }
  }
`;

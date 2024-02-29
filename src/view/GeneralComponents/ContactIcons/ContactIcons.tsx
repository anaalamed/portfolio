import React from "react";
import styled from "styled-components";
import { icons } from "../../../data/contactIcons";
import ContactIcon from "./ContactIcon";

const ContactIcons: React.FC = () => {
  return (
    <Box>
      {icons.map((icon) => (
        <ContactIcon key={icon.name} icon={icon} />
      ))}
    </Box>
  );
};
export default ContactIcons;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

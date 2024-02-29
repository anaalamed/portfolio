import React from "react";
import styled from "styled-components";

import { Title } from "../../styles/global";
import ContactIcons from "../GeneralComponents/ContactIcons/ContactIcons";

const Contact: React.FC = () => {
  return (
    <Box id="contact">
      <Title>Ana Levit</Title>
      <p>anaalamed@gmail.com</p>
      <ContactIcons></ContactIcons>
    </Box>
  );
};
export default Contact;

const Box = styled.footer`
  background: ${(props) => props.theme.topBar};
  text-align: center;
  padding: 2rem 0 1rem;

  h1 {
    margin: auto 0;
  }

  a {
    font-size: 1.5rem;
  }
`;

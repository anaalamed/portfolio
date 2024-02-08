import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Icons from "../Icons";
import { devices } from "../../styles/responsive";
import { headerHeght } from "../../styles/global";

const Hero: React.FC = () => {
  return (
    <Box id="hero">
      <Container>
        <Skica className="skica">
          <Details className="details">
            <Title>Ana Levit</Title>
            <p>Software Engineer</p>
            <AnchorLink href="#about" offset={headerHeght}>
              <Button>About me</Button>
            </AnchorLink>
          </Details>
          <Image className="imgWrapper">
            <img src="2.svg" alt="svgHero" />
          </Image>
        </Skica>

        <Icons></Icons>
      </Container>
    </Box>
  );
};
export default Hero;

const Box = styled.section`
  background: ${(props) => props.theme.hero};
  height: 100vh;

  @media ${devices.mobile} {
    height: auto;
    min-height: 70vh;
  }
`;

const Container = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;

  @media ${devices.tablet} {
    padding: 1rem 0;
    flex-direction: column;
    justify-content: space-around;
  }

  @media ${devices.mobile} {
    height: auto;
    min-height: 70vh;
  }
`;

const Skica = styled.div`
  height: 100vh;
  position: relative;

  @media ${devices.tablet} {
    height: 40rem;
  }

  @media ${devices.mobile} {
    height: 20rem;
  }
`;

const Image = styled.div`
  position: relative;
  height: 100vh;

  @media ${devices.tablet} {
    /* margin: 0 auto; */
    height: 60vh;
    top: 5rem;
    left: 0;
    right: 0;
    width: auto;
  }
  @media ${devices.mobile} {
    top: 3rem;
    height: 34vh;
  }

  img {
    width: 60rem;
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto;

    @media ${devices.tablet} {
      width: 48rem;
      left: 0;
      right: 0;
    }
    @media ${devices.mobile} {
      width: 20rem;
    }
  }
`;

const Details = styled.div`
  background-repeat: repeat-y;
  font-size: 3rem;
  z-index: 10;
  max-width: max-content;

  position: absolute;
  width: max-content;
  bottom: 16rem;
  left: 9rem;

  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;

  h1,
  p {
    margin: 1.5rem;

    &:hover {
      transform: scale(1.2);
      transition: 1s;
    }
  }

  @media ${devices.tablet} {
    font-size: 1.5rem;
    bottom: 12rem;
    left: 0;
    right: 5rem;
    margin: 0 auto;
    top: 11rem;
  }
  @media ${devices.mobile} {
    left: 3rem;
    top: 5rem;
    font-size: 1.3rem;
    max-width: 20rem;

    h1,
    p {
      margin: 0.5rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 7rem;
  text-shadow: 4px 4px 2px #585858;
  text-align: left;

  @media ${devices.tablet} {
    font-size: 5rem;
  }

  @media ${devices.mobile} {
    font-size: 3rem;
  }
`;

const Button = styled.button`
  background: ${(props) => props.theme.body};
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  margin: 0 1rem;
  font-size: 1.2rem;
  cursor: pointer;

  @media ${devices.mobile} {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  &:hover {
    transform: scale(1.2);
    transition: 1s;
  }
`;

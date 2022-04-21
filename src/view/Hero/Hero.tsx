import React from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Icons from '../Icons';
import { devices } from "../../styles/responsive";

const Hero: React.FC = () => {

  return (
    <Box id="front">
      <Container>

        <Skica>
          <Details>
            <Title>Ana Levit</Title>
            <p>Junior Full Stack Developer</p>
            <AnchorLink href='#about'>
              <Button >About me</Button>
            </AnchorLink>
          </Details>
          <Image><img src='2.svg' alt='' /></Image>
        </Skica>

        <Icons></Icons>
      </Container>
    </Box>
  );
};
export default Hero;


const Box = styled.section`
  background: ${props => props.theme.hero};
  height: 100vh;

`;

const Container = styled.div`
  padding: 0 6%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;


  @media ${devices.tablet} {
      padding: 1rem 0 ;
      flex-direction: column;
      justify-content: space-around;
  }

  @media ${devices.mobile} {
      height: auto;
      min-height: 0;
  }
`

const Skica = styled.div`
  height: 60rem;
  position: relative;

  @media ${devices.tablet} {
    height: 43rem; 
  }

  @media ${devices.mobile} {
    height: 20rem; 
  }
`;

const Image = styled.div`
  position: absolute;
  bottom: 0;

  @media ${devices.tablet} {
    margin: 0 auto;
    left: 0;
    right: 0;
    width: max-content;
  }
  @media ${devices.mobile} {
    top: -10rem;
  }

  img {
    width: 60rem;

    @media ${devices.tablet} {
      width: 48rem; 
    }
    @media ${devices.mobile} {
      width: 23rem;
    }
  }
`;

const Details = styled.div`
  background-repeat:repeat-y;
  font-size: 3rem;
  z-index: 10;
  max-width: max-content;

  position: absolute;
  width: max-content;
  bottom: 16rem;
  left: 9rem;

  h1, p {
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

  }
  @media ${devices.mobile} {
    left: 2rem;
    top: 3rem;
    font-size: 1.3rem;
    margin-right: 0;
    max-width: 20rem;

    h1, p {
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
  background: ${props => props.theme.body};
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
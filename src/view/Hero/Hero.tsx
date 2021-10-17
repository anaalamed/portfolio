import React from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Icons from '../Icons';

const Hero = () => {

  return (
    <Box id="front">
      <Skica>
        <Details>
          <Title>Ana Levit</Title>
          <p>Junior Front End Developer</p>
          <AnchorLink offset='140' href='#about'>
            <Button >About me</Button>
          </AnchorLink>
        </Details>
        <Image><img src='2.svg' alt='' /></Image>
      </Skica>

      <Icons></Icons>
    </Box>
  );
};
export default Hero;


const Box = styled.section`
  background: ${props => props.theme.hero};
  display: flex;
  justify-content: space-between;
  padding: 0 3rem ;

  @media only screen and (max-width: 1200px) {
      padding: 1rem 0 ;
      margin-top: 6rem;
      flex-direction: column;
      align-items: center;
    }
`;

const Skica = styled.div`
  height: 60rem;

  @media only screen and (max-width: 1200px) {
    height: 40rem;
  }

  @media only screen and (max-width: 812px) {
    height: 20rem;
  }
`;

const Image = styled.div`
  position: relative;
  top: -15rem;

  @media only screen and (max-width: 812px) {
    top: -13rem;
  }

  img {
    width: 60rem;

    @media only screen and (max-width: 1200px) {
      width: 50rem;
    }
      
    @media only screen and (max-width: 812px) {
      width: 25rem;
      padding: 0;
    }
  }
`;

const Details = styled.div`
  position: relative;
  background-repeat:repeat-y;
  left: 9rem;
  top: 15rem;
  font-size: 3rem;
  z-index: 10;
  width: max-content;

  h1, p {
    margin: 1.5rem;
  }

  @media only screen and (max-width: 1200px) {
    left: 9rem;
    top: 11rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 812px) {
    left: 3rem;
    top: 3rem;
    font-size: 1.5rem;
    width: max-content;
    margin-right: 0;
  }
`;

const Title = styled.h1`
  font-size: 7rem;
  text-shadow: 4px 4px 2px #585858;
  text-align: left;

  @media only screen and (max-width: 1200px) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 812px) {
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

  @media only screen and (max-width: 812px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;






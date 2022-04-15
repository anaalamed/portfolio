import React, { useState } from "react";
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Toggle from './Toogle';
import VerticalNav from './VerticalNav';
import { IoMdMenu } from "react-icons/io";


interface Props {
    setTheme(): any
}

const TopBar: React.FC<Props> = ({ setTheme }) => {
    const [open, setOpen] = useState(false);

    return (
        <Header >
            <Nav open={open} >
                <li><Link href='#front' onClick={() => setOpen(!open)}>Top</Link></li>
                <li><Link href='#about' onClick={() => setOpen(!open)}>About</Link></li>
                <li><Link href='#projects' onClick={() => setOpen(!open)}>Projects</Link></li>
                <li><Link href='#contact' onClick={() => setOpen(!open)}>Contact</Link></li>
                <li onClick={() => setOpen(!open)} className='toggle'><Toggle setTheme={setTheme} ></Toggle></li>
            </Nav>

            <MenuBtn onClick={() => setOpen(!open)} ><IoMdMenu /></MenuBtn>
        </Header >
    );
};
export default TopBar;


const Header = styled.header`
  width: unset;
  height: unset;
`;

const Nav = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  background: ${props => props.theme.topBar};
  margin: 0;
  width: 100%;
  height: 100vh;
  transition: transform 0.3s ease-in-out 0s;
  transform: ${props => (props.open ? "translateX(0px)" : "translateX(-100%)")};
  z-index: 999;

  li {
      margin: 1rem 0;
  }
`;

const Link = styled(AnchorLink)`
  cursor: pointer;
  /* margin: 4rem 0; */
  color: white;
  text-decoration: none;
  font-size: 4rem;
  font-weight: 500;
  width: 100%;

  :hover {
    color: ${props => props.theme.body}
  }

  @media only screen and (max-width: 812px) {
    font-size: 1.3rem;
  }
`;

const MenuBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 4rem;
  margin-right: 1rem;
  position: fixed;
  top: 5%;
  right: 1%;
  z-index: 9999;
`;
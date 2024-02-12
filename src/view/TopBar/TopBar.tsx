import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Toggle from "./Toogle";
import { devices } from "../../styles/responsive";
import { headerHeght } from "../../styles/global";
import { IoMdMenu } from "react-icons/io";

interface Props {
  setTheme(): any;
}

const TopBar: React.FC<Props> = ({ setTheme }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  return (
    <Header ref={ref}>
      <Link offset={headerHeght} href="#hero">
        <Logo src="logo192.png"></Logo>
      </Link>

      <Nav open={open}>
        <li>
          <Link
            offset={headerHeght}
            href="#about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            offset={headerHeght}
            href="#timeline"
            onClick={() => setOpen(false)}
          >
            Timeline
          </Link>
        </li>
        <li>
          <Link
            offset={headerHeght}
            href="#blog"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            offset={headerHeght}
            href="#projects"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
        <li className="toggle" onClick={() => setOpen(false)}>
          <Toggle setTheme={setTheme}></Toggle>
        </li>
      </Nav>

      <MenuBtn onClick={() => setOpen(!open)}>
        <IoMdMenu />
      </MenuBtn>
    </Header>
  );
};
export default TopBar;

const Header = styled.header`
  background: ${(props) => props.theme.topBar};
  box-shadow: 0 0.5rem 1rem rgba(179, 178, 178, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  padding: 0.4rem 2rem;
  width: 100%;
  height: ${headerHeght}px;

  @media ${devices.mobile} {
    padding: 0.3rem;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 6rem;
  @media ${devices.mobile} {
    width: 6rem;
  }
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;

  @media ${devices.mobile} {
    display: ${(props) => (props.open === true ? "block" : "none")};
    background: ${(props) => props.theme.topBar};
    list-style: none;
    position: absolute;
    top: ${headerHeght}px;
    right: 0;
    width: 100%;
    text-align: center;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.body};
    li {
      padding: 1rem;
    }

    .toggle {
      margin-right: 2rem;
    }
  }

  .toggle {
    margin-top: 0.65rem;
  }
`;

const Link = styled(AnchorLink)`
  cursor: pointer;
  margin-right: 2rem;
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;

  :hover {
    color: ${(props) => props.theme.body};
  }

  @media ${devices.tablet} {
    font-size: 1.3rem;
  }
`;

const MenuBtn = styled.button`
  display: none;
  float: right;
  background: transparent;
  border: none;
  font-size: 2rem;
  margin-right: 1rem;

  :hover {
    color: ${(props) => props.theme.body};
  }

  @media ${devices.mobile} {
    display: block;
  }
`;

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { devices } from "./responsive";
import { Theme } from "./theme";

export const headerHeght = 100;

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,body,#root{min-height:100%}

  body {
    background: ${({ theme }) => theme.body};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height:100%;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: white;
  }

  /*  -------------------------- toggle ------------------------------  */
  .react-toggle-track {
    background: ${(props) => props.theme.body};
  }

  .react-toggle--checked .react-toggle-track {
    background: ${(props) => props.theme.body};
  }

  .react-toggle-track-check, .react-toggle-track-x  {
    display: none;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background: ${(props) => props.theme.button};
  }

  /*  -------------------------- tooltip ------------------------------  */
  body .__react_component_tooltip.place-top.show::before {
    opacity: 0;
  }

  /*  -------------------------- pagination ------------------------------  */
  body #projects .ant-pagination li {
    background: ${(props) => props.theme.topBar};
    border-radius: 50%;
    margin: 3rem 0.5rem ;
    border: none;
    font-weight: bold;
    font-size: 1rem;

    a {
      :hover, :active {
        color: ${(props) => props.theme.button};
      }
    }
  }

  body #projects .ant-pagination-item a {
    color: white;
  }

  body #projects .ant-pagination-item-active a {
    color: ${(props) => props.theme.topBar};
    background: white;
    border-radius: 50%;
    border-color: ${(props) => props.theme.button};
  }

   body #projects .ant-pagination-prev .ant-pagination-item-link,
   body #projects .ant-pagination-next .ant-pagination-item-link {
    background: ${(props) => props.theme.topBar};  
    color: white;
    border-radius: 50%;
    border: none;
    :hover {
          color: ${(props) => props.theme.button};
        }
    }

  /*  -------------------------- awards slider ----------------------------  */
  .slick-list {
    margin: 0 -8px;
  }
  .slick-slide > div {
    padding: 0 8px;
  }
  `;

export const SectionBox = styled.section`
  margin: 0 auto;
  padding: 3rem 5rem;

  @media ${devices.mobile} {
    padding: 1rem;
    margin-top: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 4px 4px 2px #585858;
`;

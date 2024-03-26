import { IconType } from "react-icons";
import ReactTooltip from "react-tooltip";
import styled, { ThemeConsumer } from "styled-components";
import { devices } from "../../../styles/responsive";

export interface IconData {
  name: string;
  link: string;
  iconElement: IconType;
}

const IconButton: React.FC<{ iconData: IconData }> = ({ iconData }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <a href={iconData.link} target="_blank" rel="noreferrer">
          <Button data-tip="true" data-for={iconData.name}>
            <iconData.iconElement />
            <ReactTooltip
              id={iconData.name}
              place="top"
              effect="solid"
              backgroundColor={theme.body}
              textColor="white"
            >
              {iconData.name}
            </ReactTooltip>
          </Button>
        </a>
      )}
    </ThemeConsumer>
  );
};
export default IconButton;

const Button = styled.button`
  background: ${(props) => props.theme.button};
  padding: 0.3rem 3rem 0 3rem;
  border-radius: 1rem;
  cursor: pointer;

  @media ${devices.mobile} {
    padding: 0.2rem 2rem 0 2rem;

    a {
      font-size: 1rem;
    }
  }
`;

import React from "react";

import "react-toggle/style.css";
import Toggle from 'react-toggle';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styled from "styled-components";


interface Props {
    setTheme(): void
}

const Toogle: React.FC<Props> = ({ setTheme }) => {

    const onCheck = (e) => {
        setTheme();
    }

    return (
        <Box
            name='theme'
            onChange={onCheck}
            icons={{ checked: < BsFillMoonFill />, unchecked: < BsFillSunFill /> }}
        />
    )
};
export default Toogle;

const Box = styled(Toggle)`
  /* height: 50px; */
`;
import React from "react";

import "react-toggle/style.css"
import Toggle from 'react-toggle'

const Toogle = ({ setTheme }) => {

    const onCheck = (e) => {
        setTheme();
    }

    return (
        <>
            {/* <label> */}
            <Toggle
                name='theme'
                onChange={onCheck} />
            {/* </label> */}
        </>
    )
};
export default Toogle;
const sizes = {
    mobile: "767px",
    tablet: "1200px",
    desktop: "1200px"
};

export const devices = {
    mobile: `only screen and (max-width: ${sizes.mobile})`,
    tablet: `only screen and (max-width: ${sizes.tablet})`,
    desktop: `only screen and (min-width: ${sizes.desktop})`
};
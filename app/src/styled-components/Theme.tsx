import React, {ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import { PropsChildren } from "../tsc/types";

const theme = {
    colors: {
        primary: "#FFFFFF",
        secondary: "#2F2F2F",
        tertiary: "#089DD7",
        fourth: "#FF9800",
        textPrimary: "black",
        textSecondary: "white"
    },
    fonts: {
        textFont: "Roboto",
        headingFont: "BebasNeue",
    },
    breakpoint: {
        small: "460px",
        medium: "680px",
        big: "1280px",
        large: "1680px"
    }, space: {
        xs: ".5em",
        s: "1em",
        m: "1.5em",
        l: "3em",
        xl: "5em"
    }

};

const ThemeStyles = ({children}: PropsChildren) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default ThemeStyles;
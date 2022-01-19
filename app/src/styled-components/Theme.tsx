import React, {ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import { PropsChildren } from "../tsc/types";

const theme = {
    colors: {
        primary: "red",
        secondary: "green",
        tertiary: "yellow",
        textPrimary: "black",
        textSecondary: "white"
    },
    fonts: {
        
    }

};

const ThemeStyles = ({children}: PropsChildren) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default ThemeStyles;
import { createGlobalStyle } from "styled-components";
import Roboto from "./fonts/Roboto/roboto-regular-webfont.woff";
import BebasNeue from "./fonts/BebasNeue/bebasneue_regular-webfont.woff";
import {Theme} from "../tsc/types";

const GlobalStyles = createGlobalStyle<{theme: Theme}>`

    @font-face {
        font-family: "Roboto";
        src: url(${Roboto}) format("woff");
    }

    @font-face {
        font-family: "BebasNeue";
        src: url(${BebasNeue}) format("woff");
    }

    * {
        box-sizing: inherit;
        line-height: inherit;
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
        line-height: 1.5;
    }
    
    body {
        font-family: ${props => props.theme.fonts.textFont};    
        min-height: 100vh;
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.tertiary};
        @media (min-width: ${({theme: {breakpoint}}) => breakpoint.medium}) {
            font-size: 1.2rem;
        }
        
        @media (min-width: ${({theme: {breakpoint}}) => breakpoint.large}) {
            font-size: 1.5rem;
        }
    }
`;

export default GlobalStyles;


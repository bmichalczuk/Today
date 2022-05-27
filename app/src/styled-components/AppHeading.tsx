import styled from "styled-components"

const AppHeading = styled.h1`
    color: ${({theme: colors}) => colors.primary};
    font-size: ${({theme: fontsSize }) => fontsSize.h1};
    font-family: ${({theme: fonts}) => fonts.headingFont};
    
    a {
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;
        
    }


`;

export default AppHeading;
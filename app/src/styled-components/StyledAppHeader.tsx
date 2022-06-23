import styled from "styled-components";

const StyledAppHeader = styled.header`
    display: flex;
    font-size: 2rem;
    flex-direction: row;
    justify-content: space-between;
    background: ${({theme: {colors}}) => colors.fourth};
    color: ${({theme:{colors}}) => colors.primary};
    padding: ${({theme: {space: {xs, xl}}}) => `${xs} ${xl}`};
   
`;

export default StyledAppHeader;
import styled from "styled-components";

const LogOutButton = styled.button`
    color: ${({theme: {colors: {textPrimary}}}) => textPrimary};
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    letter-spacing: 1px;
    font-size: ${({theme: {fontSize}}) => fontSize.h1};
    padding: ${({theme: {space: {xs,m}}}) => `${xs} ${m}`};
    translate: 0.5s;

    &:hover,
    &:focus {
        position: relative;
        cursor: pointer;
        text-shadow: 0 1px 1px;
    }

    img {
        height: 1.5em;
        width: auto;
        margin-right: .2em;

    }
`;

export default LogOutButton;
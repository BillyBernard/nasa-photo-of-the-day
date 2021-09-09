import React from "react";
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledHeader = styled.div`
    background-color: #826C7F;
    padding-top: 5em;
    
`;
const StyledH1 = styled.h1`
    display: inline-block;
    animation: ${rotate} rotation 8s linear infinite;
`;

 const Header = () => {
    return (
        <StyledHeader>
            <StyledH1>Nasa Photo of The Day!</StyledH1>
        </StyledHeader>
    )
}

export default Header
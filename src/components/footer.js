import React from 'react'
import styled, { keyframes } from 'styled-components';

const StyledFooter = styled.div`
    background-color: #826C7F;
    padding-bottom: 5em;
`

const StyledH5 = styled.h5`
    padding-top: 6em;
    font-size: 2em;
    text-decoration: dashed underline ${pr => pr.theme.fifthColor}
`



const Footer = () => {
    return (
        <StyledFooter>
            <StyledH5>
                Copyright &copy; 2021
            </StyledH5>
        </StyledFooter>
    )
}

export default Footer
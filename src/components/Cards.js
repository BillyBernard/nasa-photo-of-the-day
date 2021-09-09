import React, { useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components';


const StyledCard = styled.div`
    display: block;
    margin: 2em;
`

const StyledH2 = styled.h2`
    font-size: 5em;
    text-decoration: dashed underline ${pr => pr.theme.fifthColor}
`

const StyledImgDiv = styled.div`
    background-color: ${pr => pr.theme.fourthColor};
    margin: 2em;
    padding: 5em;
`

const StyledImg = styled.img`
    border: 20px dashed ${pr => pr.theme.fifthColor};
    width: 50%;
    transition: transform .7s ease-in-out;
    &:hover {
        transform: scale(1.5) rotate(360deg);
    }
`

const StyledH3 = styled.h3`
    font-size: 5em;
    text-decoration: dashed underline ${pr => pr.theme.fifthColor}
`

const StyledP = styled.p`
    font-size: 2em;
    background-color: #A88FAC;
`

const Cards = (props) => {
    const {nasaApod} = props
    const [dailyCard, setDailyCard] = useState()


    return(
        <StyledCard>
            <StyledH2>
                {nasaApod.title}
            </StyledH2>
            <StyledImgDiv className='dailyImg'>
                <StyledImg src = {nasaApod.url} alt='space' />
            </StyledImgDiv>
            <StyledH3>
                {nasaApod.date}
            </StyledH3>
            <StyledP>
                {nasaApod.explanation}
            </StyledP>
            <p>

            </p>
        </StyledCard>
    )
}
export default Cards
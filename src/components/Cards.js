import React, { useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components';

const StyledCard = styled.div`
    display: block;
    margin: 2em;
`

const StyledImgDiv = styled.div`
    background-color: ${pr => pr.theme.fifthColor};
    margin: 2em;
    padding: 5em;
`

const StyledImg = styled.img`
    width: 50%;
`

const Cards = (props) => {
    const {nasaApod} = props
    const [dailyCard, setDailyCard] = useState()


    return(
        <StyledCard>
            <h2>
                Title: {nasaApod.title}
            </h2>
            <StyledImgDiv className='dailyImg'>
                <StyledImg src = {nasaApod.url} alt='space' />
            </StyledImgDiv>
            <h3>
                Date: {nasaApod.date}
            </h3>
            <p>
                Explanation: {nasaApod.explanation}
            </p>
            <p>

            </p>
        </StyledCard>
    )
}
export default Cards
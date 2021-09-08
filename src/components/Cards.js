import React, { useState, useEffect} from 'react'

const Cards = (props) => {
    const {nasaApod} = props
    const [dailyCard, setDailyCard] = useState()


    return(
        <div>
            <h2>
                Title: {nasaApod.title}
            </h2>
            <div className='dailyImg'>
                <img src = {nasaApod.url} alt='space' />
            </div>
            <h3>
                Date: {nasaApod.date}
            </h3>
            <p>
                Explanation: {nasaApod.explanation}
            </p>
            <p>

            </p>
        </div>
    )
}
export default Cards
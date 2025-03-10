import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import {BASE_URL, API_KEY} from './constants'
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'

import styled, { keyframes } from 'styled-components';

const StyledBack = styled.div`
  background-color: #5D4E60;
`


function App() {
  const [nasaApod, setNasaApod] = useState({})
  const [ApodId, setApodId] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res);
      setNasaApod(res.data);
    }).catch(err => console.log(err))
  }, [])

  

  return (
    <StyledBack className="App">
      <Header />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Cards nasaApod={nasaApod}/>
      <Footer />
    </StyledBack>
  );
}

export default App;

 
import React from 'react'
import styled from 'styled-components'
import { useState,useRef,useEffect } from 'react'


const ButtonsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width: 200px;
height:100%;
column-gap: 25px;


`

const Button = styled.button`

width: 50px;
min-width: 50px;
height: 50px;
background-color: transparent;
border-radius: 5px;
font-size: 48px;
color: white;
border: 1px solid #c0c0c0;
text-align: center;
padding: 0;
line-height: 0px;




`

const Degree = styled.label`

font-size: 30px;
color: #1FC60F;
font-family: 'SevenSegment', sans-serif;


`



function ThermoButtons() {

  const [degree, setDegree] = useState<number>(21.0) 

  const increaseDegree: () => void = () => {
      setDegree(prev=>prev+0.5);
  }

  const decreaseDegree: () => void = () => {
    setDegree(prev=>prev-0.5);
  }



  return (
    <div>
      <ButtonsContainer>

        <Button  onClick={decreaseDegree}>-
        </Button>
        <Degree>
          {degree.toFixed(1)}
        </Degree>
        <Button onClick={increaseDegree} >+


        </Button>

      </ButtonsContainer>

    </div>
  )
}

export default ThermoButtons
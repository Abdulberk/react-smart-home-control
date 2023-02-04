 
import React from 'react'
import styled from 'styled-components'
import { useState} from 'react'
import { useAppDispatch } from '../redux/stores/store'
import { setDegree, DegreeAction } from '../redux/slices/scenarioSlice'


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
letter-spacing: 3px;

`

const ThermoButtons = ({degree,id} :{degree:number,id:string|number} ) => {

  const dispatch = useAppDispatch()

  const [degreem, setDegreem] = useState<number>(degree) 



  const updateDegree = ({id,degree} : DegreeAction): void =>  {

    dispatch(setDegree({id,degree}))

  }

  const increaseDegree  = () => {
    setDegreem(prevDegree => {
      
      updateDegree({ id, degree:  prevDegree + 0.5 });

      return prevDegree + 0.5;

    });
  };

  const decreaseDegree: () => void = () => {

    setDegreem(prevDegree => {
      
      updateDegree({ id, degree:  prevDegree - 0.5 });

      return prevDegree - 0.5;

    });

  }

  return (
    <div>
      <ButtonsContainer>

        <Button onClick={decreaseDegree}>-
        </Button>
        <Degree>

          { React.useMemo(() => degreem.toFixed(1), [degreem])}
        </Degree>
        <Button onClick={increaseDegree} >+


        </Button>

      </ButtonsContainer>

    </div>
  )
}

export default ThermoButtons
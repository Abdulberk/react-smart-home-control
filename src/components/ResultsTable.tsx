import styled from "styled-components";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../redux/stores/store";
import { getActiveScenarios } from "../redux/slices/scenarioSlice";
import ActiveScenario from "./resultsPanelComponents/ActiveScenario";
import Scenario from "../redux/interfaces/Scenario";
import React from "react";




const Table = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width: 500px;
max-height: 580px;
overflow-y: scroll;
overflow-x: hidden;
user-select: none;
font-size: 16px;
color: white;
font-family: 'Roboto', sans-serif;
row-gap: 10px;
::-webkit-scrollbar {
  display: none;
}

`;



const ResultsTable = () => {

    const getActiveScenario = useAppSelector(getActiveScenarios);
    const [orderedScenarios, setOrderedScenarios] = useState<Scenario[]>(getActiveScenario);
   const dispatch = useAppDispatch();


    useEffect(() => {

        setOrderedScenarios(getActiveScenario);
    }, [getActiveScenario]);


    const moveUpScenario = (id:Scenario["id"]) => {

      const index = orderedScenarios.findIndex((scenario) => scenario.id === id);
   
      if (index === 0) return;
      const newScenarios = [...orderedScenarios];
      const temp = newScenarios[index];
      let prevScenario = newScenarios[index - 1];
      newScenarios[index] = prevScenario;
      newScenarios[index - 1] = temp;
      
     setOrderedScenarios(newScenarios);
    
 
    }

   


    const moveDownScenario = (id: Scenario["id"]) => {

      const currentIndex = orderedScenarios.findIndex((scenario ) => scenario.id === id);
    if (currentIndex === orderedScenarios.length - 1) return;

    const newScenarioOrder = [...orderedScenarios];
    newScenarioOrder[currentIndex] = orderedScenarios[currentIndex + 1];
    newScenarioOrder[currentIndex + 1] = orderedScenarios[currentIndex];

    setOrderedScenarios(newScenarioOrder);
   
    }
  



    return (
      <div>
        <Table>
          <>
          
          {orderedScenarios.map((scenario) => {
            return (

            <ActiveScenario

            key={scenario.id}
            label={scenario.label}
            icon={scenario.icon}
            selectedMode={scenario.selectedMode}
            buttonType = {scenario.buttonType}
            degree = {scenario.degree}
            id={scenario.id}
            onMoveUp = {  moveUpScenario}
            onMoveDown = {moveDownScenario} />
            );
          })}
          </>

        </Table>
      </div>
    );

}

export default ResultsTable
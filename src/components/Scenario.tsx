import React from "react";
import styled from "styled-components";
import ShutterButtons from "./ShutterButtons";
import ThermoButtons from "./ThermoButtons";
import AlarmButtons from "./AlarmButtons";
import ScenarioInterface from "../redux/interfaces/Scenario";

const ScenarioRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(4, 26, 46, 0.5);
  width: 480px;
  height: 64px;

`;

const ScenarioIcon = styled.img`
max-width: 64px;
max-height: 64px;
src: ${(props) => props.src};


`;

const ScenarioLabel = styled.p`

  height: 40px;

  color: #30D5C8;
  width:100px;
  align-self: center;
  text-align: left;
 
`;

const ScenarioToggleButtons = styled.div`
 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  
 
  width: 200px;
  column-gap: 10px;

`;

const UpButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: transparent;
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  color: white;
  font-size: 16px;

`;

const AddScenarioButton = styled.button`

   height : 100%;
background-color: rgba(13, 14, 28, 0.86);
max-width: 80px;
font-size: 16px;
color: white;
border:none;

`;

type ScenarioProps = {
  icon: string;
  label: string;
  buttonType: string;
  type: string;
  onActivate: (id: string) => void
  
};

const Scenario = ({ icon, label, buttonType,type,onActivate}: ScenarioProps) => {
  const setButtonType = ()  => {
    switch (buttonType) {
      case "lamp":
        return (
          <ScenarioToggleButtons>

            <UpButton>I</UpButton>
            <UpButton>0</UpButton>
          
          </ScenarioToggleButtons>
        );
      case "thermo":
        return <ThermoButtons />;
      case "valve":
        return (
          <ScenarioToggleButtons>

            <UpButton>I</UpButton>
            <UpButton>0</UpButton>
      
          </ScenarioToggleButtons>
        );
      case "alarm":
        return <AlarmButtons />;
      case "shutter":
        return <ShutterButtons />;
    }
  };

  return (
    <div>
      <ScenarioRow>
      <ScenarioLabel>{label}</ScenarioLabel>
        <ScenarioIcon src={process.env.PUBLIC_URL + `/assets/${icon}`} />
        
        {setButtonType()}
        <AddScenarioButton>EKLE</AddScenarioButton>
      </ScenarioRow>
    </div>
  );
};

export default Scenario;

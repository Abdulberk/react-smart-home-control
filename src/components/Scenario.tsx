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
  background-color: rgba(161, 177, 185, 0.3);
  width: 480px;


`;

const ScenarioIcon = styled.img`
max-width: 64px;
max-height: 64px;
src: ${(props) => props.src};
border: 1px solid red;

`;

const ScenarioLabel = styled.p`

  height: 100%;
  border: 1px solid red;
  color: #30D5C8;
  width:100px;

  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
    flex: 1;

`;

const ScenarioToggleButtons = styled.div`
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  height: 100%;
  border: 1px solid red;
flex: 1;
`;

const AddScenarioButton = styled.button`

  
    height : 100%;
  background-color: rgba(13, 14, 28, 0.86);
max-width: 80px;
font-size: 16px;
color: white;
margin-right: 5px;

`;

type ScenarioProps = {
  icon: string;
  label: string;
  buttonType: string;
  type: string;
  
};

const Scenario = ({ icon, label, buttonType,type}: ScenarioProps) => {
  const setButtonType = ()  => {
    switch (buttonType) {
      case "lamp":
        return (
          <ScenarioToggleButtons>
            <button>1</button>
            <button>0</button>
          </ScenarioToggleButtons>
        );
      case "thermo":
        return <ThermoButtons />;
      case "valve":
        return (
          <ScenarioToggleButtons>
            <button>1</button>
            <button>0</button>
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

import React from "react";
import styled from "styled-components";
import ShutterButtons from "./ShutterButtons";
import ThermoButtons from "./ThermoButtons";
import AlarmButtons from "./AlarmButtons";
import { ModeAction} from "../redux/slices/scenarioSlice";
import LampButtons from "./LampButtons";
import ValveButtons from "./ValveButtons";

const ScenarioRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(4, 26, 46, 0.5);
  width: 480px;
  height: 64px;

  transition: 0.2s;
  border: none;
  box-sizing: border-box;
  user-select: none;


  :hover {
    border: 1px solid #c0c0c0;
    transition: 0.2s;
    border-radius: 3px;
  
  }



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





const AddScenarioButton = styled.button`

   height : 100%;
background-color: rgba(13, 14, 28, 0.6);
max-width: 80px;
font-size: 16px;
color: white;
border:none;
transition: 0.5s;


:hover{
  background-color: rgba(13, 14, 28, 1);
  transition: 0.5s;

}

`;

type ScenarioProps = {
  icon: string;
  label: string;
  buttonType: string;
  type: string;
  onActivate: () => void;
  onUpdate  : (id :string | number, selectedMode:ModeAction["selectedMode"]) => void;
  id : string  | number;
  selectedMode? :  string | null | undefined;
  degree? : number |null;
  

};

const Scenario = React.memo(({ icon, label, buttonType, onActivate, onUpdate, id, selectedMode, degree}: ScenarioProps) => {


  const setButtonType = ()  => {
    switch (buttonType) {
      case "lamp":
        return <LampButtons onUpdate={onUpdate} id = {id} selectedMode = {selectedMode}/>;
      case "thermo":
        return <ThermoButtons degree = {degree as number} id = {id}/>;
      case "valve":
        return <ValveButtons onUpdate={onUpdate} id = {id} selectedMode = {selectedMode}/>;
   
      case "alarm":
        return <AlarmButtons onUpdate={onUpdate} id = {id} selectedMode = {selectedMode}/>;
      case "shutter":
        return <ShutterButtons onUpdate = {onUpdate} id = {id} selectedMode={selectedMode} />;
      default:
        return <> </>;

    }
  };

  return (
    <div>
      <ScenarioRow>
      <ScenarioLabel>{label}</ScenarioLabel>
        <ScenarioIcon src={process.env.PUBLIC_URL + `/assets/${icon}`} />

        {setButtonType()}
        <AddScenarioButton onClick={ onActivate}>
          EKLE</AddScenarioButton>
      </ScenarioRow>
    </div>
  );
});


export default Scenario;

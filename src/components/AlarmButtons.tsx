import React from "react";
import styled from "styled-components";
import { ModeAction, updateMode } from "../redux/slices/scenarioSlice";
import { AlarmMode } from "./resultsPanelComponents/ActiveScenario";
import withToggle from "./withToggle";




const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 100%;
`;



const Button = styled.button`
  height: 50px;
  width: 50px;
  background-color: transparent;
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  color: white;
  font-size: 16px;

  :focus {
    background-color: #3a5460;
    transition: 0.3s;
  }

`;

type AlarmButtonsProps = {
  onUpdate: (id: string | number, selectedMode: ModeAction["selectedMode"]) => void;
 selectedMode  : ModeAction["selectedMode"];
  id : string | number;
};


function AlarmButtons({ onUpdate,selectedMode, id}: AlarmButtonsProps) {

  const modes = ["home", "outside"] as AlarmMode[];

  return (
    <div>
      <ButtonsContainer>

        {modes.map((mode) => (
          
          <Button
            key={mode}
            onClick={() => onUpdate(id, mode)}
            style={
              selectedMode === mode ? { backgroundColor: "#3a5460" } : { backgroundColor: "transparent" }
              
            }
          
          >
            { mode === "home" ? "EV" : "DIŞ"}
            
          </Button>
        ))}
        
      </ButtonsContainer>
    </div>
  );
}

export default withToggle(AlarmButtons);

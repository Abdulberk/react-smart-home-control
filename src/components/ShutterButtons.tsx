import React from "react";
import styled from "styled-components";
import { ModeAction } from "../redux/slices/scenarioSlice";

import { ShutterMode } from "./resultsPanelComponents/ActiveScenario";
import withToggle from "./withToggle";

const ShutterButton = styled.button`
  border-radius: 3px;
  width: 48px;
  height: 48px;
  border: 1px solid #c0c0c0;
 
  line-height: 10px;
  background-color: transparent;

  :focus {
    background-color: #3a5460;
    transition: 0.3s;
  }
`;

const ShutterIcon = styled.img`
  width: 32px;
  height: 32px;
  src: ${(props) => props.src};
  pointer-events: none;
`;

const ShutterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 100%;
  column-gap: 30px;
  
`;

type ShutterButtonsProps = {
  onUpdate: (
    id: string | number,
    selectedMode: ModeAction["selectedMode"]
  ) => void;
  selectedMode: ModeAction["selectedMode"];
  id: string | number;
};

function ShutterButtons({ onUpdate, selectedMode, id }: ShutterButtonsProps) {
  const modes = ["open", "half", "close"] as ShutterMode[];

  return (
    <ShutterButtonsContainer>
      {modes.map((mode) => (
        <ShutterButton
          key={mode}
          onClick={() => onUpdate(id, mode)}
          style={
            selectedMode === mode
              ? { backgroundColor: "#3a5460" }
              : { backgroundColor: "transparent" }
          }
        >
          <ShutterIcon
            src={process.env.PUBLIC_URL + "assets/" + mode + ".png"}
          />
        </ShutterButton>
      ))}
    </ShutterButtonsContainer>
  );
}

export default withToggle(ShutterButtons);

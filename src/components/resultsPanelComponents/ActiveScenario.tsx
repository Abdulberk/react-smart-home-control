import styled from "styled-components";
import { useEffect, useState } from "react";
import LampView from "./LampView";
import ShutterView from "./ShutterView";
import AlarmView from "./AlarmView";

// @ts-check 

const ScenarioRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 90px;
  border: 1px solid black;
  row-gap: 10px;
`;

const DelayTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  border: 1px solid blue;
`;

const ActiveScenarioTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid green;
`;

export interface LampMode {
  on: 'on';
  off: 'off';
}
export interface ShutterMode {
  open: 'open';
  close: 'close';
  half: 'half';
}
export interface AlarmMode {
  home: 'home';
  outside: 'outside';
}





type ActiveScenarioProps = {
    label: string;
    icon: string;
    selectedMode:   any
};


const ActiveScenario = ({label, icon, selectedMode} : ActiveScenarioProps )  => {


    const Mood = () => {
      switch(selectedMode) {
        case 'on':
            return <LampView mode="on"/>;
        case 'off':
            return <LampView mode="off"/>;
        case 'open':
            return <ShutterView mood="open"/>;
        case 'close':
            return <ShutterView mood="close"/>;
        case 'half':
            return <ShutterView mood="half"/>;
        case 'home':
            return <AlarmView mood="home"/>;
        case 'outside':
            return <AlarmView mood="outside"/>;
        default:
            return null;
    }
  }

  return (
    <>
      <ScenarioRow>
        <DelayTable>

        </DelayTable>

        <ActiveScenarioTable>

            <Mood/>
            {label}
            <div>
<img  src= {process.env.PUBLIC_URL + "/assets/" + icon } alt=""  width = "50" height = "50"/>
              </div>

        </ActiveScenarioTable>
      </ScenarioRow>
    </>
  );
};

export default ActiveScenario;

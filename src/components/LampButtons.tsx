
import React from 'react'
import Scenario from '../redux/interfaces/Scenario'
import withToggle from './withToggle'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../redux/stores/store'
import {LampMode } from './resultsPanelComponents/ActiveScenario'


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



interface LampButtonsProps {
    onUpdate: (id:Scenario["id"], mode: any) => void
    selectedMode: string | null | undefined
    id: Scenario['id']

}

const LampButtons = ({onUpdate, selectedMode, id}:LampButtonsProps) => {

    const modes = ["on", "off"] as LampMode[];


    return (
        <>
            <ButtonsContainer>
                {modes.map((mode) => (
                    <Button
                    key = {mode}
                    onClick = {() => onUpdate(id, mode)}
                    style = { selectedMode === mode ? {backgroundColor: "#3a5460"} : {backgroundColor: "transparent"} }
                    >
                        {mode === "on" ? "I" : "0"}
                    </Button>
                ))}
            </ButtonsContainer>

        </>
    )
}

export default withToggle(LampButtons);


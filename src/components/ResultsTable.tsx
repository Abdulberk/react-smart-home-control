import styled from "styled-components";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../redux/stores/store";
import { getActiveScenarios } from "../redux/slices/scenarioSlice";
import ActiveScenario from "./resultsPanelComponents/ActiveScenario";
import {AlarmMode, LampMode, ShutterMode} from "./resultsPanelComponents/ActiveScenario"




const Table = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 500px;
height:100%;


`;

const ResultsTable = () => {

    const getActiveScenario = useAppSelector(getActiveScenarios);

    interface ResultsTableProps {
      selectedMode: any
  }


    return (
      <div>
        <Table>
          {getActiveScenario.map((scenario) => (
            <ActiveScenario
              key={scenario.id}
              label={scenario.label}
              icon={scenario.icon}
              selectedMode={scenario.selectedMode}
            />
          ))}
        </Table>
      </div>
    );

}

export default ResultsTable
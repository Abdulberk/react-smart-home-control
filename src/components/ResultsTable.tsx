import styled from "styled-components";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../redux/stores/store";
import { getActiveScenarios } from "../redux/slices/scenarioSlice";



const Table = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 500px;
height:100%;


`;

const ScenarioRow = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 500px;
height: 90px;
border: 1px solid black;
row-gap: 10px;

`;


const DelayTable = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 100%;
height: 25px;
border: 1px solid blue;

`;




const ActiveScenarioTable = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:  100%;
height: 50px;
border: 1px solid green;



`;

const ResultsTable = () => {

    const getActiveScenario = useAppSelector(getActiveScenarios);


    
    



    return (

        <div>
            <Table>



{getActiveScenario.map((scenario,index) => (

<ScenarioRow>

<DelayTable>
    <div>Delay + {index}</div>
    </DelayTable>


<ActiveScenarioTable>

    {
    
    scenario.label

    }
</ActiveScenarioTable>

</ScenarioRow>

))

}
              


            </Table>


        </div>

    )

}

export default ResultsTable
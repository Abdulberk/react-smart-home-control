import { useEffect, useState, useCallback, useMemo } from "react";
import Scenario from "./Scenario";
import IScenario from "../redux/interfaces/Scenario";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/stores/store";
import { activateScenario } from "../redux/slices/scenarioSlice";
import { addScenario } from "../redux/slices/scenarioSlice";
import { updateMode } from "../redux/slices/scenarioSlice";
import { v4 as uuidv4 } from 'uuid';
import { ModeAction } from "../redux/slices/scenarioSlice";




const MainContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  padding-top: 10px;

  `;

const AddNewScenarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 120px;
  background-color: rgba(13, 14, 28, 0.5);

`;

const AddNewScenarioUpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;

  button {

    margin-right: 10px;
  }

`;

const AddNewScenarioLowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 50%;
  padding: 10px;

  label {
    color: white;
    font-size: 16px;
    margin-left: 10px;
  }

  input {
    margin-right: 10px;
  }
`;

const AddNewScenarioInput = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 10px;
  margin: 15px;
  background-color: rgba(4, 26, 46, 0.5);
  font-size: 1.2rem;
  color: white;
  border: none;
  outline: none;
  text-indent: 20px;
`;

interface ButtonProps {
  src: string;
  content: string;
  
}

const AddNewScenarioButton = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  background-color: rgba(13, 14, 28, 0.86);
  border-radius: 50%;
  font-size: 16px;
  outline: none;
  border: none;
  background-image: url(${(props) => props.src});

  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  :hover {
    transform: scale(1.1);
    transition: 0.2s;
  }

  :active {
    transform: scale(0.9);
    transition: 0.2s;

  }

  :after {
    content: "${(props) => props.content}";
    color: white;
    font-size: 14px;
    position: absolute;
    margin-top: 25px;
    margin-left: -25px;
    font-family: "Roboto", sans-serif;

  }

`;


const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: 450px;
  overflow-y: scroll;
  overflow-x: hidden;
  row-gap: 10px;


  ::-webkit-scrollbar {
    display: none;
  }

`;

const ScenarioTable = () => {
  interface Sort {
    sort: "all" | "sortbyname" | "sortbytype";
  }

  const [sort, setSort] = useState<Sort["sort"]>("all");
  const [newScenarioText, setNewScenarioText] = useState<string>("");


  const scenarios: IScenario[] = useAppSelector(
    (state) => state.scenario.scenarios
  );


  const dispatch = useAppDispatch();

  const addNewScenario = (scenario: IScenario) => {
    dispatch(addScenario(scenario));
  
    setNewScenarioText("");

  };

 



 

  const handleUpdateScenario = useCallback( (id: IScenario["id"], selectedMode: ModeAction["selectedMode"]) => {

    dispatch(updateMode({id, selectedMode}));
    
  }, [dispatch]);
  


  const handleActivateScenario =  useCallback( (id: IScenario["id"]) => {

    dispatch(activateScenario(id));
  
  }, [dispatch]);

  const handleScenarioText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewScenarioText(event.target.value);
  };

  const handleSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.value as Sort["sort"]);
   

  };


  const sortedScenarios = useMemo(() => {
    const getScenarios = [...scenarios];
    switch (sort) {
      case "all":
        return getScenarios;
      case "sortbyname":
        return getScenarios.sort((a, b) => (a.label > b.label ? 1 : -1));
      case "sortbytype":
        return getScenarios.sort((a, b) => (a.type > b.type ? 1 : -1));
    }
  }, [sort, scenarios]);


  return (
    <div>
      <MainContainer>

      <AddNewScenarioContainer>
        <AddNewScenarioUpperContainer>
          <AddNewScenarioInput
            type="text"
            placeholder="Yeni senaryo adı"
            onChange={handleScenarioText}
            value={newScenarioText}
          />

          <AddNewScenarioButton src= {process.env.PUBLIC_URL + "/assets/cancel.png"} content = "İPTAL">

          </AddNewScenarioButton>


          <AddNewScenarioButton src= {process.env.PUBLIC_URL + "/assets/add-button.png" } content = "KAYDET"
            onClick={() =>
              addNewScenario({
                type: "lamp",
                buttonType: "lamp",
                icon: process.env.PUBLIC_URL + "/lamp.png",
                status: "passive",
                label: newScenarioText ? newScenarioText : `New Scenario ${scenarios.length + 1}`,
                id: uuidv4(),
                selectedMode : "on"

              })
            }
          >
          </AddNewScenarioButton>
        </AddNewScenarioUpperContainer>
        <AddNewScenarioLowerContainer>
          <label>
            {" "}
            Hepsi
            <input type="radio" name="sort" value="all" onChange={handleSort} />
          </label>
          <label>
            A-Z
            <input
              type="radio"
              value="sortbyname"
              name="sort"
              onChange={handleSort}
              
            />
          </label>

          <label>
            Alan
            <input
              type="radio"
              value="sortbytype"
              name="sort"
              onChange={handleSort}
            />
          </label>

          

          <label>
            {" "}
            Tip
            <input
              type="radio"
              value="sortbytype"
              name="sort"
              onChange={handleSort}
             
            />
          </label>
        </AddNewScenarioLowerContainer>
      </AddNewScenarioContainer>
      <Table>
        {sortedScenarios.map((scenario) => (
          <Scenario
            key={scenario.id}
            label={scenario.label}
            type={scenario.type}
            buttonType={scenario.buttonType}
            icon={scenario.icon}
            onActivate = {() => handleActivateScenario(scenario.id)}
            onUpdate = {handleUpdateScenario}
            id = {scenario.id}
            selectedMode = {scenario.selectedMode}
            degree = {scenario.degree}
            

         

          />
        ))}
      </Table>
    </MainContainer>
    </div>
  );
};

export default ScenarioTable;

import { useEffect, useState, useCallback, useMemo } from "react";
import Scenario from "./Scenario";
import IScenario from "../redux/interfaces/Scenario";
import styled from "styled-components";
import bell from "../../public/assets/bell.png";
import curt from "../../public/assets/curt.png";
import lamp from "../../public/assets/lamp.png";
import thermo from "../../public/assets/thermo.png";
import valve from "../../public/assets/valve.png";
import { useAppDispatch, useAppSelector } from "../redux/stores/store";


type TableProps = {

  children: React.ReactNode;
};

const AddNewScenarioContainer = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:80px;
border: 1px solid red;
`;

const AddNewScenarioUpperContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
height:50%;
border: 1px solid green;
`;

const AddNewScenarioLowerContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
height:50%;
border: 1px solid blue;
`;

const AddNewScenarioInput = styled.input`
  width: 20%;
  height: 30px;
  border-radius: 5px;
  margin: 15px;
  background-color: #323d43;
  font-size: 1.2rem;
  color: white;
`

const AddNewScenarioButton= styled.button`
width : 40px;
height : 40px;
background-color: rgba(13, 14, 28, 0.86);
border-radius: 50%;
font-size: 16px;

`;


const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100%;
  border: 1px solid black;
  row-gap: 10px;
`;

const ScenarioTable = () => {


  interface Sort {
    sort: "all" | "sortbyname" | "sortbytype";
  }

  const [sort, setSort] = useState<Sort["sort"]>("all");
  const [newScenarioText, setNewScenarioText] = useState<string>("");
  const scenarios: IScenario[]  = useAppSelector((state) => state.scenario.scenarios);


  const dispatch = useAppDispatch();
  

  const addScenario = (scenario: IScenario)  => {

    dispatch(
      {
        type: "addScenario",
        payload: scenario,
      }
    );

    console.log(scenarios)

  }
  

  const handleScenarioText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewScenarioText(event.target.value);
    
  };


  const handleSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.value as Sort["sort"]);
    console.log(event.target.value)
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
      
      <AddNewScenarioContainer>
        <AddNewScenarioUpperContainer>
          <AddNewScenarioInput type="text" placeholder="Yeni senaryo adı" onChange={handleScenarioText} />
       
<button onClick={() => {
  addScenario({
            type: "lamp",
            buttonType: "lamp",
            icon: process.env.PUBLIC_URL + "/assets/lamp.png",
            status: "passive",
            label: newScenarioText ? newScenarioText : "New Scenario",
            id: scenarios ? scenarios.length + 1 : 0,
  });
}}>Ekle</button>


         
          </AddNewScenarioUpperContainer>
          <AddNewScenarioLowerContainer>
          <label>
        <input
          type="radio"
          name = "sort"
          value="all"
          onChange={handleSort}
        />
        Hepsi
      </label>
      <label>
        <input
          type="radio"
          value="sortbyname"
         name = "sort"
          onChange={handleSort}
        />
        A-Z
      </label>
      <label>
        <input
          type="radio"
          value="sortbytype"
            name = "sort"
          
          onChange={handleSort}
        />
        Tip
        
      </label>

          </AddNewScenarioLowerContainer>
      </AddNewScenarioContainer>
      <Table>
      

{
  sortedScenarios.map((scenario) => (
    <Scenario key = {scenario.id} label = {scenario.label} type = {scenario.type} buttonType = {scenario.buttonType} icon = {scenario.icon} />
    
  ))
}




      </Table>

    </div>
  );
};

export default ScenarioTable;

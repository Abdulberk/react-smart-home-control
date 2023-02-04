import React from "react";
import "./App.css";
import ScenarioTable from "./components/ScenarioTable";
import styled from "styled-components";
import ResultsTable from "./components/ResultsTable";
import { Provider } from "react-redux";
import { store } from "./redux/stores/store";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url(${process.env.PUBLIC_URL + "/assets/bacc.jpg"});
  background-repeat: cover;
  background-size: cover;
  position: relative;


  width: 1024px;
  height: 600px;
  margin: 0 auto;
  margin-top: 20px;
  

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%
 
  }

`;


const ScenarioTableContainer = styled.div`
  width: 100%;
  max-height: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
    justify-content: center;
    
    

  }
`;

const ResultsTableContainer = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;


  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
    margin-top: 30px;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  
  
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <MainContainer>
          <ScenarioTableContainer>
            <ScenarioTable />
          </ScenarioTableContainer>
          <ResultsTableContainer>
            <ResultsTable />
          </ResultsTableContainer>
        </MainContainer>
      </Provider>
    </div>
  );
};

export default App;

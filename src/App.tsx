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
  background-image: url(${process.env.PUBLIC_URL + "/assets/bacc.png"});
  background-repeat: no-repeat;
  background-size: cover;
  width: 1024px;
  height: 600px;
  margin: 0 auto;
  margin-top: 20px;

  @media (max-width: 1024px) {
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;

  }
`;

const ScenarioTableContainer = styled.div`
  width: 50%;
  height: 600px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 300px;
  } ;
`;

const ResultsTableContainer = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
  } ;
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

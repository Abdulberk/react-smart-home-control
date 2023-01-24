import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScenarioTable from './components/ScenarioTable';
import styled from 'styled-components';
import background from '../../public/assets/bacc.png';
import ResultsTable from './components/ResultsTable';
import {Provider} from 'react-redux';
import {store} from './redux/stores/store';




const MainContainer = styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;
background-image: url(${process.env.PUBLIC_URL + '/assets/bacc.png'});
background-repeat: no-repeat;
background-size: cover;
width: 1024px;
height:600px;
margin: 0 auto;
margin-top: 20px;
`;


const App: React.FC= () => {

  return (
    <div>
      <Provider store={store}>

      <MainContainer>
        <ScenarioTable />
        <ResultsTable />
      </MainContainer>
      </Provider>
    </div>
  );

}

export default App;

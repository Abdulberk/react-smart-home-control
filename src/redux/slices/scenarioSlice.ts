import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import scenarioTable from "../../scenarioData";
import Scenario from "../interfaces/Scenario";


var scenarioData = scenarioTable();

interface ScenarioState {
  scenarios: Scenario[];
}

const initialState: ScenarioState = {
  scenarios: scenarioData,
};

export type ModeAction = {
  id: number | string
  selectedMode: Scenario["selectedMode"]
  
};

export type DegreeAction = {
  id: number | string
  degree: number

}


export const scenarioSlice = createSlice({
  name: "scenario",
  initialState,
  reducers: {

    
    updateScenarios(state, action: PayloadAction<Scenario[]>) {

      state.scenarios = action.payload;
      return state;
     
    },


 
    setDegree (state, action: PayloadAction<DegreeAction>) {

      const draftedScenarios = JSON.parse(JSON.stringify(state.scenarios));
      const getIndex = draftedScenarios.findIndex((scenario:Scenario) => scenario.id === action.payload.id);

      draftedScenarios[getIndex].degree = action.payload.degree

      return {...state, scenarios: draftedScenarios}
    
    },



    updateMode(state, action: PayloadAction<ModeAction>) {

      
    
        const updatedScenarios = state.scenarios.map(scenario => {
          if (scenario.id === action.payload.id) {
            return { ...scenario, selectedMode: action.payload.selectedMode };
          }
          return scenario;
        });
      
        return { ...state, scenarios: updatedScenarios };




    },


    addScenario(state, action: PayloadAction<Scenario>) {

      const checkExist = state.scenarios.find(
        (scenario) => scenario.id === action.payload.id
        
      );

      if (!checkExist) {
        state.scenarios.push(action.payload);
       
      }
   
      return state;
    },

    deleteScenario(state, action: PayloadAction<Scenario>) {
      const updatedScenarios = state.scenarios.filter(
        (scenario) => scenario.id !== action.payload.id
      );
      state.scenarios = updatedScenarios;
    },

    activateScenario(state, action: PayloadAction<Scenario["id"]>) {

        const copiedScenarios = JSON.parse(JSON.stringify(state.scenarios));
        const index = copiedScenarios.findIndex((scenario:Scenario) => scenario.id === action.payload);
        copiedScenarios[index].status = "active";
    
        return { ...state, scenarios: copiedScenarios };
    },

    deactivateScenario(state, action: PayloadAction<Scenario["id"]>) {
        
        const copiedScenarios = JSON.parse(JSON.stringify(state.scenarios));
        const index = copiedScenarios.findIndex((scenario:Scenario) => scenario.id === action.payload);
        copiedScenarios[index].status = "passive";
  
        return { ...state, scenarios: copiedScenarios };
    },
  },
});

export default scenarioSlice.reducer;

export const getActiveScenarios = (state: { scenario: ScenarioState }) =>
  state.scenario.scenarios.filter((s) => s.status === "active");

export const {
  addScenario,
  deleteScenario,
  activateScenario,
  deactivateScenario,
  updateMode,
  setDegree,
  updateScenarios
} = scenarioSlice.actions;

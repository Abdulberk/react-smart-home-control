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

export const scenarioSlice = createSlice({
  name: "scenario",
  initialState,
  reducers: {
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

    deactivateScenario(state, action: PayloadAction<Scenario>) {
      const scenarioStatusChanged = state.scenarios.map((scenario) => {
        if (scenario.id === action.payload.id) {
          scenario.status = "passive";
        }

        return scenario;
      });

      return { ...state, scenarios: scenarioStatusChanged };
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
} = scenarioSlice.actions;

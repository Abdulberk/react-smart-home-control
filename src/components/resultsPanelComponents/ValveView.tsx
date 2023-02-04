import styled from "styled-components";
import { useState } from "react";
import {ValveMode } from "./ActiveScenario";

export const  ValveBox = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  background-color: #3a5460;
  color: white;
  font-size: 18px;
  width: 45px;
  height: 45px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
 
`;


const ValveView = ({ selectedMode }: any) => {

  return (
    <div>
      {selectedMode ? (
        <ValveBox>{selectedMode === "on" ? "I" : "0"}</ValveBox>
      ) : (
        <></>
      )}
    </div>
  );
};

export default  ValveView;

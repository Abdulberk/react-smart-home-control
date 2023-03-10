import styled from "styled-components";
import { useState } from "react";
import { LampMode } from "./ActiveScenario";

export const LampBox = styled.div`
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


const LampView = ({ selectedMode }: any) => {

  return (
    <div>
      {selectedMode ? (
        <LampBox>{selectedMode === "on" ? "I" : "0"}</LampBox>
      ) : (
        <></>
      )}
    </div>
  );
};

export default  LampView;

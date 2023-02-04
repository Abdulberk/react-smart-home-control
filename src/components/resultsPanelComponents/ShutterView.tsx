import styled from "styled-components";
import { useState } from "react";

import { useEffect } from "react";


export const ShutterBox = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  background-color: #3a5460;
  color: white;
  font-size: 18px;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 65px;


`;

const ShutterIcon = styled.img`
  max-width: 32px;
  max-height: 32px;
  src: ${(props) => props.src};
  pointer-events: none;
  
`;

const ShutterView = ({ selectedMode }: any) => {


 
  const [mode,setMode] = useState<null | string>(selectedMode);

  useEffect (() => {
    setMode(selectedMode);
  },[selectedMode]);


  const Icon: () => JSX.Element | undefined = () => {
   
    switch (mode) {
      case "open":
        return <ShutterIcon src = {process.env.PUBLIC_URL + "assets/open.png"} />;
      case "close":
        return <ShutterIcon src = {process.env.PUBLIC_URL + "assets/close.png"} />;
      case "half":
        return <ShutterIcon src = {process.env.PUBLIC_URL + "assets/half.png"} />;
      default:<></>


    }

  }

  return (
    <div>
      
        <ShutterBox>
          {Icon()}

        </ShutterBox>
    
    </div>
  );    
};

export default  ShutterView;


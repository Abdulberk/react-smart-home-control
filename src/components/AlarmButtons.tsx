import React from "react";
import { useState,useRef,useEffect } from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width: 200px;
height:100%;

`

const Button = styled.button`
height: 50px;
width: 50px;
background-color: transparent;
border: 1px solid #c0c0c0;
border-radius: 3px;
color: white;
font-size: 16px;

`





function AlarmButtons() {


  return (
    <div>
      <ButtonsContainer>
        
        <Button>EV</Button>
        <Button>DIŞ</Button>

</ButtonsContainer>




    </div>
  )

  



}

export default AlarmButtons;

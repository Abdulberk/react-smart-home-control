
import React from 'react'
import {useEffect,useState} from 'react';
import styled from 'styled-components';
import up from "./up.png";
import down from "./down.png";
import normal from "./normal.png";


const ShutterButton = styled.button`
border-radius: 3px;
width:48px;
height:48px;
border: 1px solid red;

`;

const ShutterIcon = styled.img`

max-width: 32px;
max-height: 32px;
src: ${(props) => props.src};


`;

const ShutterButtonsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
height:100%;
column-gap: 30px;
border: 1px solid red;


`;


function ShutterButtons() {
  return (
   <div>

<ShutterButtonsContainer>
<ShutterButton>
<ShutterIcon src={process.env.PUBLIC_URL + 'assets/up.png'}/>
</ShutterButton>

<ShutterButton>
<ShutterIcon src={process.env.PUBLIC_URL + 'assets/normal.png'}/>
</ShutterButton>

<ShutterButton>
<ShutterIcon src={process.env.PUBLIC_URL + 'assets/down.png'}/>
</ShutterButton>

</ShutterButtonsContainer>


    </div>
  )
}

export default ShutterButtons
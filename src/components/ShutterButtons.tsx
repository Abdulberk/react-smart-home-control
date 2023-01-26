
import React from 'react'
import {useEffect,useState, useRef} from 'react';
import styled from 'styled-components';


const ShutterButton = styled.button`
border-radius: 3px;
width:48px;
height:48px;
border: 1px solid #c0c0c0;
text-align: center;
padding: 0;
line-height: 0px;
background-color: transparent;

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
width: 200px;
height:100%;
column-gap: 30px;

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
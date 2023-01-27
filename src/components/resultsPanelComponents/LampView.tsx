
import styled from "styled-components";
import {useState} from "react";
import {LampMode} from "./ActiveScenario"



const LampView = ({mood}:any ) => {


    return (
        <div>

{mood === 'on' ? <div>ON</div> : <div>OFF</div>}

        </div>
    )

}

export default LampView

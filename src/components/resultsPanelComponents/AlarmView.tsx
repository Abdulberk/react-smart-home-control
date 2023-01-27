
import styled from "styled-components";
import {useState} from "react";
import {AlarmMode} from "./ActiveScenario"




const AlarmView = ({mood}:any) => {


    return (
        <div>

{mood === 'home' ? <div>EV</div> : <div>DIŞ</div>}

        </div>
    )

}

export default AlarmView


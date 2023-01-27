
import styled from "styled-components";
import {useState} from "react";
import {ShutterMode} from "./ActiveScenario"



const ShutterView = ({mood}:any ) => {


    

    const SelectedMode: () => JSX.Element = () => {
        switch(mood) {
            case 'open' : return (<div>OPEN</div>)
            case 'close' : return (<div>CLOSE</div>)
            case 'half' : return (<div>HALF</div>)
            default: return <> </>;
       }
    }

    return (
        <div> 

            <SelectedMode/>


        </div>
    )

}

export default ShutterView

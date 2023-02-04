
import styled from "styled-components";

const Degree = styled.label`

font-size: 30px;
color: #1FC60F;
font-family: 'SevenSegment', sans-serif;
letter-spacing: 3px;

`


const ThermoView = ({degree}:any) => {


    return (
        <div>
            <Degree>

            {degree.toFixed(1)}

            </Degree>
        </div>
        
    )
}

export default ThermoView

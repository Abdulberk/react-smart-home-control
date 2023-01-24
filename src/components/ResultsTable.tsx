import styled from "styled-components";
import {useEffect, useState} from "react";

const Table = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 500px;
height:100%;
border: 1px solid black;

`;

const ResultsTable = () => {


    return (

        <div>
            <Table>
                <h1>Results</h1>
                <h1>Results</h1>
                <h1>Results</h1>
                <h1>Results</h1>
                <h1>Results</h1>
                <h1>Results</h1>


            </Table>


        </div>

    )

}

export default ResultsTable
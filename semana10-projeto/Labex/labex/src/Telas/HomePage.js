import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./components/Header.js";
import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items:  center;
    margin: 12px;
    
`



export function HomePage () {

 
    const history = useHistory()

    const ListaViagem = () => {
        history.push("/trips/list")
    }
    const Admin = () => {
        history.push("/login")
    }

    return(
        <div>
            < Header /> 

            <ButtonContainer>
            <button onClick={ListaViagem}>Ver Viagens</button>
            < hr />
            <button onClick={Admin}>Área de Admin</button>
            </ButtonContainer>
        </div>
    )
}
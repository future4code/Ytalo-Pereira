import React from "react";
import { useHistory } from "react-router-dom";

export function ListTripsPage () {

    const history = useHistory()

    const Voltar = () => {
        history.push("/")
    }

    const Inscrever = () => {
        history.push("/trips/application")
    }

    return (
        <div>ListTripsPage 
           
            <button onClick={Voltar}>Voltar</button>
            <button onClick={Inscrever}>Inscrever-se</button>
        </div>
    )
}
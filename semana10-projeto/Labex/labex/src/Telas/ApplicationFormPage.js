import React from "react";
import { useHistory } from "react-router-dom";

export function ApplicationFormPage () {

    const history = useHistory()
     
    const Voltar = () => {
        history.push("/trips/list")
    }

    const Enviar = () => {
        history.replace('/admin/trips/create')
    }
    
    return(
        <div>
            ApplicationFormPage
            <button onClick={Voltar}>Voltar</button>
            <button onClick={Enviar}>Enviar</button>
        </div>
    )
}
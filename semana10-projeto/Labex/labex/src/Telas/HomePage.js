import React from "react";
import { useHistory } from "react-router-dom";


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
            HomePage PRINCIPAL
            <button onClick={ListaViagem}>Ver Viagens</button>
            <button onClick={Admin}>Área de Admin</button>
        </div>
    )
}
import React from "react";
import { useHistory } from "react-router-dom";

export function CreateTripPage () {

    const history = useHistory()

    const Voltar = () => {
        history.push("/admin/trips/list")
    }
    const Criar = () => {
        history.push("/admin/trips/:id")
    }

    return (
        <div>
            CreateTripPage
            <button onClick={Voltar}>Voltar</button>
            <button onClick={Criar}>Criar</button>
        </div>
    )
}
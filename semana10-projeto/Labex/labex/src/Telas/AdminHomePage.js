import React from "react";
import { useHistory } from "react-router-dom";

export function AdminHomePage() {

    const history = useHistory()

    const Voltar = () => {
        history.replace("/")
    }
    const Criar = () => {
        history.push("/admin/trips/create")
    }
    const Logout = () => {
        history.push("/login")
    }

    return(
        <div>
            AdminHomePage
            <button onClick={Voltar}>Voltar</button>
            <button onClick={Criar}>Criar Viagem</button>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}
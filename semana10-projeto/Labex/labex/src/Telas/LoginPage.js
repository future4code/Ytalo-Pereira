import React from "react";
import { useHistory } from "react-router-dom";

export function LoginPage () {

    const history = useHistory()

    const Enviar = () => {
        history.push("/")
    }
    
    const Entrar = () => {
        history.push("/admin/trips/list")
    }

    return (
        <div>
            LoginPage

            <button onClick={Enviar}>Voltar</button>
            <button onClick={Entrar}>Entrar</button>
        </div>
    )
}
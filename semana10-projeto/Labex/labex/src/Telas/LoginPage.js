import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import axios from "axios";

export function LoginPage () {

    const history = useHistory()

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const Enviar = () => {
        history.push("/")
    };
    
    const Entrar = () => {
        history.push("/admin/trips/list")
    };
    
    const onEmail = (ev) => {
        setEmail(ev.target.value)
    };

    const onSenha = (ev) => {
        setSenha(ev.target.value)
    };

    const onLogin = () => {
        const body ={
            email: email,
	        password: senha
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login", body)
        .then((res) => {
           console.log('Deu certo', res.data)        
        })
        .catch((err) => {
            console.log('Deu errado', err.response)

        })
    };

    return (
        <div>
            <h1>LoginPage</h1>
           
           <main>
               <input 
               placeholder="Email"
               value={email}
               onChange={onEmail}
               />
               <input 
               placeholder="Senha"
               type="password"
               value={senha}
               onChange={onSenha}
               />
           </main>


            <div>
            <button onClick={Enviar}>Voltar</button>
            <button onClick={Entrar} onClick={onLogin}>Entrar</button>
            </div>

        </div>
    )
}
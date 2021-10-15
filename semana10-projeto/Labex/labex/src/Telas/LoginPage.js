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
    
    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    };

    const onChangeSenha = (ev) => {
        setSenha(ev.target.value)
    };

    const onSubmitLogin = () => {
        const body ={
            email: email,
	        password: senha
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ytalo/login", body)
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
               type="Email"
               value={email}
               onChange={onChangeEmail}
               />
               <input 
               placeholder="Senha"
               type="Senha"
               value={senha}
               onChange={onChangeSenha}
               />
           </main>


            <div>
            <button onClick={Enviar}>Voltar</button>
            <button onClick={Entrar} onClick={onSubmitLogin}>Entrar</button>
            </div>

        </div>
    )
}
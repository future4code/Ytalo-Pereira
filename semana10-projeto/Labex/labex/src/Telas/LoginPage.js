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

    const onLogin = (ev) => {
        
        ev.preventDeFault()

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
           
           <form onSubmit={onLogin}>
               <input
               required
               placeholder="Email"
               value={email}
               onChange={onEmail}
               type="email"
               />
               <input 
               required
               placeholder="Senha"
               type="password"
               value={senha}
               onChange={onSenha}
               pattern={"^.{3,}"}
               title={"Sua senha deve ter no mínimo 3 caracteres"}
               />
               <button >Voltar</button>
               <button >Entrar</button>
            </form>
            

        </div>
    )
}
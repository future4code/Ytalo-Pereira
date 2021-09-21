import React from "react";
import axios from "axios";

const headers = {
    headers: {
        Authorization: "ytalo-cruz-maryam"
    }
}

class Cadastro extends React.Component{

    state ={
        lista: [],
        nome: "",
        email: "",
    }

    handleNome = (ev) => {
        this.setState({nome: ev.target.value})
    }
    handleEmail = (ev) => {
        this.setState({email: ev.target.value})
    }

    componentDidMount(){
        this.getAllUsers();
    }

    createUser = () => {
        const  url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const body = {
            name: this.state.nome,
            email: this.state.email,
        }
        axios
        .post(url, body, headers)
        .then((response) => {
        this.setState({nome: ""});
        this.setState({email: ""})
        this.getAllUsers();
        })
        .catch((error) => {
            alert(error.response.data.messege)
        })
    }

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        axios
        .get(url, headers)
        .then((response) => {
           this.setState({lista: response.data.result.list})
        })
        .catch ((error) => {
            alert(error.response)
        })
    }
    
    render(){
        const UsuariosCadastro = this.state.lista.map((usurios)=>{
            return <li key={usurios.id}>[usurios.name]</li>
        })
        return (
            <div>
              <div>
               <label> <i>Nome: </i> </label>
               <input 
               placeholder="Nome"
               value={this.state.nome}
               onChange={this.handleNome}
               />
              </div>
              <br />
              <div>
               <label> <i>E-mail: </i> </label>
               <input 
               placeholder="E-mail"
               id="E-mail"
               name="E-mail"
               value={this.state.email}
               onChange={this.handleEmail}
               />
              </div>
               <br/>
              <button onClick={this.createUser}>Salvar</button>
               {UsuariosCadastro}
            </div>
        )
    }
}

export default Cadastro;
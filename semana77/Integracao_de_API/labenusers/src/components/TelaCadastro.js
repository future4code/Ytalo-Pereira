import React from "react"
import axios from "axios"
import styled from "styled-components"

const Div = styled.div`
 background-color: MediumAquamarine;
 position: relative;
 border-radius: 7px;
 margin: 40px auto;
 display: flex;
 justify-content: center;
 align-items: center;
` 
const Div2 = styled.div `
background-color:Aquamarine ;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
text-align: center;
padding: 0.5em 1em;
margin: 60px;
width: 20%;
border-radius: 10px;
`
const Button = styled.button`
background-color: MediumAquamarine;
border-radius: 13px;
cursor: pointer;
border 0;

`

export default class TelaCadastro extends React.Component {

    state = {
        nome: "",
        email: ""
    }

    handleNome = (ev) => {
        this.setState({nome: ev.target.value})
    }

    handleEmail = (ev) => {
        this.setState({ email: ev.target.value})
    }
    
    fazerCadastro = () => {
         const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const body = {
            name: this.state.nome,
            email:this.state.email
        }

        axios.post(url, body, {
             headers: {
                Authorization: "ytalo-cruz-maryam"
          }
        })
        .then((res) => {
            alert ("Cadastrado com Sucesso!")
            this.setState({npme: "", email: ""})
        })
        .catch((err) => {
            alert (err.response.data.messege)
        })
    }

    render (){
        return (
            <Div>
                <Div2>
                    <h2>Cadastro</h2>
                    <input 
                     placeholder= {"Nome"} 
                    value={this.state.nome}
                    onChange={this.handleNome}/>
                    <br />
                    <input placeholder ={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail} />
                     <br />
                    <Button onClick={this.fazerCadastro}>Cadastrar</Button>
                    <br />
                    <Button onClick={this.props.irParaLista}>Verificar lista de Usuário</Button>
                </Div2>
            </Div>
        )
    }
}
import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
background-color: MediumAquamarine;
position: relative;
border-radius: 7px;
margin: 40px auto;
display: flex;
justify-content: center;
align-content: center;
`

const Div2 = styled.div`
background-color: Aquamarine;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
text-align: center;
padding:  0.5em 1em;
margin: 60px;
width: 20%;
border-radius: 10px;
`
const Button = styled.button`
background-color:MediumAquamarine ;
border-radius: 13px;
cursor: pointer;
border: 0;
margin: 14px;
`

export default class TelaListaUsuario extends React.Component {

    state = {
       usuarios: []
    }

    componentDidMount() {
        this.pegarUsuario()
    }

    pegarUsuario = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
      axios.get(url, {
        headers: {
            Authorization: "ytalo-cruz-maryam"
        }
      })
      .then((res) => {
        this.setState({usuarios: res.data})
      })
      .catch((err) => {
         alert("Ocorreu um problema, tente novamente")
      })
    }

    deletar = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
         axios.delete( url, {
             headers: {
                Authorization: "ytalo-cruz-maryam"
             }
         })
         .then((res) => {
            alert("Deletado com sucesso")
            this.pegarUsuario()
          })
          .catch((err) => {
             alert("Ocorreu um problema, tente novamente")
          })
    }


    render(){
        const listaUsuarios = this.state.usuarios.map ((user) => {
           return <li key={user.id}>
               {user.name}
              <Button onClick={ () => this.deletar(user.id)}>X</Button>
           </li>
        })
        return(
            <Div> 
                <Div2>
                <h2>Lista de Usuário</h2>
                {listaUsuarios}
                <Button onClick={this.props.irParaCadastro}>Voltrar para Cadastro</Button>
                </Div2>
            </Div>
        )
    }
}
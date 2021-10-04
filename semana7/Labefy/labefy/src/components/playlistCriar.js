import React from "react";
import axios from "axios";



export default class playlistCriar extends React.Component {

    state = {
        nome: "",
        playlist: []
    }

    handleNome = (ev) => {
        this.setState({nome: ev.target.value})
    }
    
    criarPlaylist = () => {
        const body = {
                name: this.state.nome 
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers:{
                Authorization: "ytalo-cruz-maryam"
            } 
        })
        .then((res)=> {
            alert("Playlist adicionada com sucesso")
            this.setState({nome: ""})
        }).catch((err) => {
           alert(err.response.data.messege)
        })
    }

    mostrarPlaylist = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "ytalo-cruz-maryam"
            }
        }).then((res) => {
              this.setState({nome: res.data})   
        })
        .catch((err) => {
              console.log("Ocorreu algum erro")
        })
    }

    excluir = (id) => {
        axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId', {
            headers:{
                Authorization: "ytalo-cruz-maryam"
            }
        }).then((res) => {
         alert("Excluido com sucesso")
         this.mostrarPlaylist()
        }).catch((err) => {
          console.log("Ocorreu um erro!")
        })
    }


    render(){
        return (
            <body>
            <div>
            <h1> <i>Criar Playlist</i></h1>
            <input  placeholder={"Nome da Playlist"} 
            value={this.state.nome} 
            onChange={this.handleNome}
            />
            <button onClick={this.criarPlaylist}>Adicionar</button>
            </div>
            
            </body>
        )
    }
}
import axios from "axios";
import React from "react";



export default class mostrarList extends React.Component {
     
    state = {
        playlist: []
    }

    componentDidMount () {
        this.mostrarPlaylist()
    }
     
    mostrarPlaylist = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "ytalo-cruz-maryam"
            }
        }).then((res) => {
            this.setState({playlist: res.data})
        }).catch((err) => {
            alert("Ocorreu um erro na lista")
        })
    }

    delete = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId$${id}`;

        axios.delete(url, {
            headers: {
                Authorization: "ytalo-cruz-maryam"
            }
        }).then((res) => {
          alert("Deletado com sucesso")
          this.mostrarPlaylist()
        }).catch((err) => {
          alert("Ocorreu um problema, tente novamente")
        })
    }

    render() {

        const listPlay = this.state.playlist.map ((user) => {
            return <li key={user.id}>{user.name}
            <button onClick={() => this.delete(user.id)}>X</button>
            </li>
        })
        
        return(
         <div>
                {listPlay}
         </div>
        )
    }
}
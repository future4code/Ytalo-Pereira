import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Perfil from "../components/Perfil.js";

const MatchsLista = styled.div`
 
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 20px;
 padding: 20px;
 border: 1px solid black;
 width: 500px;

`
const Matchess = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Matches = () => {

const [matchesLista, setMatchesLista] = useState ([])


const getMatchesLista = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ytalo-cruz/matches")
    .then((res) => {
        setMatchesLista(res.data.matches)
    }).catch((err) => {
        alert(err.response)
    })
}

const lista = matchesLista.map((id) => {
    return <Perfil photo={id.photo} name={id.name}/>
})

useEffect (() => {
    getMatchesLista()
}, [])

     return (
         <Matchess>
             <MatchsLista>
                 {lista.length > 0 ? lista : <div>Você não recebeu matches 💔</div> }
             </MatchsLista>
         </Matchess>
     )
}

export default Matches;
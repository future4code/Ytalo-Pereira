import React, {useState} from "react";
import axios from "axios"
import Home from "./Pagina/Home";
import Matches from "./Pagina/Matches";


const App = () => {
 
 const [paginaAtual, setPaginaAtual] = useState("home")
  
  const mundacao = () => {
    if(paginaAtual === "home"){
      setPaginaAtual("matches")
    }else{
      setPaginaAtual("home")
    }
  }

  const clear = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ytalo-cruz/clear")
    .then((res) => {
     alert("Limpeza completa! ")
    }).catch((err) => {
      alert (err.response)
    })
  }


  return (
    <div>
      {paginaAtual === "home" ? <Home/> : <Matches/>}
      <button onClick={mundacao}>{paginaAtual === "home" ? "Ir para Matches" : "Ir para Home"}</button>
      <button onClic={clear}>Limpar Matches</button>

    </div>
  )
}

export default App;

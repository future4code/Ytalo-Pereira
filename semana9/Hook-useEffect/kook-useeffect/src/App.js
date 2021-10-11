import axios from "axios";
import React, {setState, useEffect} from "react";

const App = () => {

   const [pokeList, setPokeList] = setState({})
   const [pokeName, setPokeName] = setState("")

   useEffect(() => {
        listaPokemon
   })

   const listaPokemon = () => {
       axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then(res => {
         setPokeList(response.data.results)
       }).catch( err => {
         alert(err)
       })
   }


  return (
    <div>
      OI
    </div>
  )
}
export default App;

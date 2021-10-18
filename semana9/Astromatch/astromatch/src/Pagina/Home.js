import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const Img = styled.img`
width: 400px;
`

const Perfis = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
padding: 20px;
width: 500px;
border: 1px soli black;
`

const Homee = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Home = () => {

const [perfil, setPerfil] = useState({})


const getPerfil = () => {
const URL ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ytalo-cruz" 

    axios.get(`${URL}/person`)
    .then((res) => {
        setPerfil(res.data.profile)
    }).catch((err) => {
        alert(err.response)
    })
}


const cloosePessoa = (choice) => {
    const body = {
        id: perfil.id,
        choice: choice
    }

   axios.post(`${URL}/choose-person`, body)
   .then((res) => {
       console.log(res.data)
       getPerfil()
   }).catch((err) => {
       alert.log(err.response)
   })
}

useEffect(() => {
    getPerfil()
},[])

    return (
        <Homee>
            {!perfil ? <h3>Acabaram os perfis! Aperte o botão de limpar</h3> :
            <Perfis>
            < Img  src={perfil.photo}/>
            <h2>{perfil.name}, {perfil.age}</h2>
            <p>{perfil.bio}</p>

            <div>
              <button onCLick={() => cloosePessoa(true)}>❌</button>
              <button onCLick={() => cloosePessoa(false)}>💚</button>
            </div>
            </Perfis>
            }  
        </Homee>
    )
}

export default Home;
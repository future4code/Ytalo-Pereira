import React from "react";
import Logo from "./logo.png.png"
import styled from "styled-components"
import PlaylistCriar from "./components/playlistCriar"
import MostrarList from "./components/mostrarList";


const Header = styled.header`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

background-color: #67c7c5;
display: flex;
align-items: center;
border-radius: 30px 20px;
height: 100px;

`

const Img = styled.img`
width: 100px;
height: 100px;
`

export default class App extends React.Component {

  render(){
    return (
      <div>
        <Header>
          <Img src={Logo} />
          <h1><i>Labefy</i></h1>
        </Header>
        <nav>< PlaylistCriar/></nav>
          <MostrarList />
        <footer>Frases</footer>
      </div>
    );
  }
}


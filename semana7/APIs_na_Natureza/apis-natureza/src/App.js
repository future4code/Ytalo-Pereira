import React from "react"
import axios from "axios";
import styled from "styled-components"

const H1 = styled.h3`
text-align: center;
`
const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
background-color: Gray;
margin: 12px auto;
border-radius:7px;
`
const Div2 = styled.div`
background-color: Silver;
width: 25%;
margin: 20px;
border-radius: 20px;
`
const Button = styled.button`
background-color: Gray;
color: white;
cursor: pointer;
border-radius: 5px;
`

export default class App extends React.Component {

  state = {
    activity: {}
  }
  getActivity = () => {
    axios
    .get("http://www.boredapi.com/api/activity/")
    .then((res) => {
       console.log(res.data);
       this.setState({activity: res.data})
    })
    .catch((err) => {
       alert(err);
    });
  }

  render(){
    const {activity, type, participants, price} = this.state.activity
    return (
      <Div>
        <Div2>
        <H1><i>Atividade</i></H1>
       <Button onClick={this.getActivity}> Clique</Button>
       <hr />
       <p><i><b>Nome:</b></i> {activity}</p>
       <p><i> <b>Tipo:</b></i> {type}</p>
       <p> <i><b>Participantes:</b></i> {participants}</p>
       <p> <i><b>Preço:</b> </i>{price}</p>
        </Div2>
      </Div>
    );
  }
}



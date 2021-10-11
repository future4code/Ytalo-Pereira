import React from "react";
import styled from "styled-components";

const Div = styled.div`
display: flex;
border: 1px solid black;
justify-content: space-between;
align-items: center;
padding: 10px;
margin: 10px;
width: 400px;
`

const Img =styled.img`
    margin-right: 60px;
    height: 60px;
    width: 60px;
    border-radius:30px;

`
const Perfil = (props) => {
    return(
        <Div>
            < Img src={props.photo} />
            <h2>{props.name}</h2>
        </Div>
    )
}
export default Perfil;
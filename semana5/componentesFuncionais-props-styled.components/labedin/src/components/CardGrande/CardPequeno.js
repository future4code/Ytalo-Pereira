import React from "react";
import './CardGrande.css'

function CardPequeno(props){
     return (
      <div className="bigcard-container"> 
        <img src={ props.imagemm } />
        <img src={props.imagemmm}/>
        <div>
            <p>{props.nome}</p>
            <div>
            <p>{props.endereco}</p> 
            </div>
         </div>

      </div>
     )
}

export default CardPequeno;
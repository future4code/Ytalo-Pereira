import axios from "axios";
import React, { useEffect } from "react";

export function TripDetailsPage () {

   useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ytalo/trip/F5Xq3C5qca7ffkn0eiaz', {
        headers: {
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T…2OTV9.r0iGKfyw99j3By89xV6MgDI-lILjug-SijU85FaPekY'
        }  
      })
      .then((res) => {
          console.log('Deu certo', res.data)
      }).catch((err) => {
          console.log('Deu errado' , err.response)
      })
   }, [])


    return (
        <div>Detalhe da Viagem
           
        </div>
    )
}
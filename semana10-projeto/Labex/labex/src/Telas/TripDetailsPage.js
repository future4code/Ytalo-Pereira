import axios from "axios";
import React, { useEffect } from "react";

export function TripDetailsPage () {

   useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/ytalo/trip/:F5Xq3C5qca7ffkn0eiaz', {
        headers: {
            auth:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0S…zNDd9.2ahmoA2MX4clRR6bdq9lX976h_OO-iofzquoX8hfwpc'
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
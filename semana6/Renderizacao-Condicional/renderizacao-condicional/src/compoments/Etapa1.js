import React from "react";
import styled from "styled-components";



function Etapa1() {
    return (
        <div>
         <h2>Etapa1 - Dados Gerais</h2>
         <div>
             <p>1. Qual seu nome?</p>
             <input type="text" name="name" />
         </div>
         <div>
         <p>2. Qual seu idade?</p>
             <input type="text" name="name" />
         </div>
         <div>
         <p>1. Qual seu e-mail?</p>
             <input type="text" name="name" />
         </div>

         <p>4. Qual a sua escolaridade?</p>
         <select>
             <option value="ensino medio incompleto">Ensino médio incompleto</option>
             <option value="ensino medio completo">Ensino médio completo</option>
             <option value="ensino superiou incompleto">Ensino superiou incompleto</option>
             <option value="ensino superiou completo">Ensino superiou completo</option>
         </select>
         <br />
         <br />
         <button>Próxima etapa</button>


        </div>
    );
}
export default Etapa1;
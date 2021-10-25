import React from "react";

function Etapa3(){
    return (
        <div>
            <h2>Etapa3 - Informações Gerais de Ensino</h2>
         <div>
             <p>5. Por que você não terminou um curso de graduação?</p>
             <input type="text" name="name" />
         </div>
         <select>
             <p>6. Você fez algum curso complementar?</p>
             <option value="nenhum">Nenhum</option>
             <option value="Curso Técnico"> Curso Técnico</option>
             <option value="Curso de Inglês">Curso de Inglês</option>
         </select>
         <br/>
         <button>Próxima etapa</button>
        </div>
        
    )
}

export default Etapa3; 
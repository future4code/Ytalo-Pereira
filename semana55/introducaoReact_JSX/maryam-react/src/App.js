import React from "react";
import './App.css'


export default function App() {
  const titulo= "Título do video";


  function reproduzVideo() {
    alert ("O video está sendo reproduzido");
  }

  return (
    <div>
      <div  className="tela-inteiro">
        <header>
          <h1>LabeTube</h1>
          <input  type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

       <main>
          <nav className="menu-vertical">
             <ul>
               <hr />
               <li className="margin">Inicio</li>
               <hr />
               <li className="margin">Em alta</li>
               <hr />
               <li className="margin">Inscrições</li>
               <hr />
               <li className="margin">Originais</li>
               <hr />
               <li className="margin">Histórico</li>
               <hr />
              </ul>
          </nav>

          <section className="painel-video">
            <div className="pagina-principal">
              <img src="https://picsum.photos/seed/picsum/400/400" alt=""/>
              <h4>{titulo}</h4>
            </div>
            <div className="pagina-principal">
              <img src="https://picsum.photos/400/400?grayscale" alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="pagina-principal">
              <img src="https://picsum.photos/400/400" alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="pagina-principal" >
              <img src="https://picsum.photos/400/400" alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="pagina-principal">
              <img src="https://picsum.photos/400/400" alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="pagina-principal">
              <img src="https://picsum.photos/400/400" alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="pagina-principal">
              <img src="https://picsum.photos/400/400" alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="pagina-principal">
              <img src="https://picsum.photos/400/400" alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
       </main>

       <footer>  
          <h4>Se Divirta</h4>
       </footer>
      </div>
    </div>
  );
}
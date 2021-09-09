import React from 'react';
import './App.css';
import './components/CardGrande/CardGrande.css'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Img from './components/Imgg/ytalo.jpg.PNG';
import CardPequeno from './components/CardGrande/CardPequeno';
import Imgg from './components/Imgg/o-email.png'
import Imggg from './components/Imgg/download.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Img}
          nome="Ytalo Cruz Pereira" 
          descricao="Oi, Satisfação, tenho 19 anos, sou apaixonado pela área tecnológica, principalmente pelo desenvolvimento de Software. 
          Estou adquirido habilidades técnicas pela Labenu para ser um profissional considerado Full Stack no desenvolvimento WEB para ingressar imediatamente no Mercado de Trabalho. 👨🏻‍💻📚"
        />
        
        <ImagemButton 
          imagem="htt                                                                                         ps://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno 
      imagemm={Imgg}
       nome="E-mail: ytalocrz@gmail.com"
       />
       <CardPequeno 
       imagemmm={Imggg}
       endereco="Endereço: Manaus-AM"
       />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

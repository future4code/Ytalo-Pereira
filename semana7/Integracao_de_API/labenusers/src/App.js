import React from "react";
import TelaListaUsuario from "./components/TelaListaUsuario";
import TelaCadastro from "./components/TelaCadastro";




// const headers = {
//     headers: {
//         Authorization: "ytalo-cruz-maryam"
//     }
// };

// const Div = styled.div`
// background-color: Wheat;
// display: flex;
// flex-direction: column;
// justify-content: center;
// margin: 400px;
// margin-top: 12px;
// padding: 30px;
// align-content: center;
// text-align: center;
// width: 20%;
// border-radius: 10px;
// position: relative;
// `
// const Button = styled.button `
// margin: 0 auto;
// background-color: BurlyWood;
// border-radius: 4px;
// padding: 0.5em 1em;
// cursor: pointer;
// `
// const H2 = styled.h2`
// align-content: center;
// text-align: center;
// `
 

export default class App extends React.Component {

    state = {
        telaAtual: "cadastro"
        
    }

    escolheTela = () => {
        switch (this.state.telaAtual){
            case "cadastro":
                return <TelaCadastro irParaLista={this.irParaLista} />
            case "lista":
                return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />
            default:
                return <div>Página não encontrada</div>
        }
    }

    irParaCadastro = () => {
        this.setState({telaAtual: "cadastro"})
    }

    irParaLista = () => {
        this.setState({telaAtual: "lista"})
    }

 
    render(){
        return (
            <div>
                {this.escolheTela()}
            </div>
        )
    }
}
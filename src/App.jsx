// Icones de enfeite de status do celular, bateria, sinal e wifi
import sinal from "./assets/icones-celular/sinal.svg"
import wifi from "./assets/icones-celular/wifi.svg"
import bateria from "./assets/icones-celular/bateria.svg"

// Icones usados dentro da galeria
import adicionarimagem from "./assets/icones-gerais/adicionar-imagem.svg"
import adicionarpasta from "./assets/icones-gerais/adicionar-pasta.svg"
import mover from "./assets/icones-gerais/mover.svg"
import imagem from "./assets/icones-gerais/imagem.svg"

// Icones de enfeite de menu do celular
import voltar from "./assets/icones-celular/voltar.svg"
import menu from "./assets/icones-celular/menu.svg"
import apps from "./assets/icones-celular/apps.svg"

// Imagens da galeria pessoal
import show from "./assets/fotos-pessoais/show.jpg"
import parque from "./assets/fotos-pessoais/parque.jpg"


// Imagens da galeria de estudo



import "./index.css"

const App = () => {




  return (
    <>
        <div id="fora">
            {/* - Container Do Celular - */}
            <section id="celular">
                <div id="info-cel-cima">
                    <p>9:41</p>

                    <div id="enfeite-camera"><span></span></div>
                    
                    <div id="icones-cel-cima">
                        <img src={sinal}/>
                        <img src={wifi}/>
                        <img src={bateria}/>
                    </div>
                </div>

                <div id="titulo-galeria">
                    <h1>Galeria</h1>
                </div>
{/* EDICAO COMECA AQUI ------------------------------------------------------------------------------------------------------------------ */}
                <section id="corpo-principal">
                    <nav id="nav-principal">
                        <div id="botoes-pessoa-estudo">
                            <button id="botao-pessoal">Pessoal</button>
                            <button id="botao-estudo">Estudo</button>
                        </div>
{/* NAO ESQUECER DE APAGAR E MUDAR PARA IMPORT DOS COMPONENTES ESTUDO E PESSOAL, FACILITA PARA FAZER AS MUDANCAS DE PAGINA */}
                        <div id="acoes-galeria">
                            <button id="botao-adicionar-imagem"><img src={adicionarimagem}/></button>
                            {/* <button><img src={adicionarpasta}/></button> ****entra depois */}
                            <button id="botao-editar-ordem"><img src={mover}/></button>
                        </div>
                    </nav>

                    <ul id="imagens-template">
                        <li><img src={show}/></li>
                        <li><img src={parque}/></li>
                        <li><img src={imagem}/></li>
                    </ul>

                    {/* <div id="pastas">
                        <div>
                            <button class="pasta-materia"><img/></button>
                            <button class="editar-pasta"><img/></button>
                            <p>Matemática</p>
                            <span>0 itens</span>
                        </div>

                        <div>
                            <button class="pasta-materia"><img/></button>
                            <button class="editar-pasta"><img/></button>
                            <p>História</p>
                            <span>0 itens</span>
                        </div>
                    </div> ***entra depois */}
                </section>
{/* EDICAO ACABA AQUI ------------------------------------------------------------------------------------------------ */}
                <nav id="menu-celular">
                    <button><img src={voltar}/></button>
                    <button><img src={menu}/></button>
                    <button><img src={apps}/></button>
                </nav>
            </section>
        </div>
    </>
  )
}

export default App
// Import Dom
import {Routes, Route, NavLink} from "react-router-dom"

// IMPORT DE COMPONENTES ******************************** importante ****************************************
import Pessoal from "./components/Pessoal"
import Estudo from "./components/Estudo"

// Icones de enfeite de status do celular, bateria, sinal e wifi
import sinal from "./assets/icones-celular/sinal.svg"
import wifi from "./assets/icones-celular/wifi.svg"
import bateria from "./assets/icones-celular/bateria.svg"


// Icones de enfeite de menu do celular
import voltar from "./assets/icones-celular/voltar.svg"
import menu from "./assets/icones-celular/menu.svg"
import apps from "./assets/icones-celular/apps.svg"

// Imagens da galeria de estudo
import adicionarimagem from "./assets/icones-gerais/adicionar-imagem.svg"
import mover from "./assets/icones-gerais/mover.svg"

// Css
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

                <section id="corpo-principal">
                    <nav id="nav-principal">
                        {/* Alternar entre aba pessoal e aba de estudo */}
                        <div id="botoes-pessoal-estudo">
                            <NavLink 
                            to="/pessoal" 
                            id="botao-pessoal"
                            className={({isActive}) => isActive ? "ativo" : undefined}
                            >
                            
                            Pessoal
                            </NavLink>

                            <NavLink 
                            to="/estudo" 
                            id="botao-estudo"
                            className={({isActive}) => isActive ? "ativo" :undefined}
                            >

                            Estudo
                            </NavLink>
                        </div>

                        {/* Adicionar imagens ou editar posicoes */}
                        <div id="acoes-galeria">
                            {/* Adiciona imagens no Pessoal */}
                            <label id="botao-adicionar-imagem" htmlFor="input-adicionar-imagem">
                                <img src={adicionarimagem}/>
                            </label>
                            <input id="input-adicionar-imagem" type="file" accept="image/*" hidden></input>

                            {/* Edita ordem das pastas */}
                            <button id="botao-editar-ordem"><img src={mover}/></button>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/pessoal" element={<Pessoal/>}/>
                        <Route path="/estudo" element={<Estudo/>}/>
                        <Route path="/" element={<Pessoal/>}/>
                    </Routes>
                </section>

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
import { useState } from "react"

// Import Dom
import {Routes, Route, NavLink, useLocation} from "react-router-dom"

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

// Imagem geral galeria
import mover from "./assets/icones-gerais/mover.svg"

// Imagens da galeria de Pessoal
import adicionarimagemsvg from "./assets/icones-gerais/adicionar-imagem.svg"

//Imagens da galeria de Estudo
import adicionarpastasvg from "./assets/icones-gerais/adicionar-pasta.svg"

// Fotos de exemplo da galeria pessoal (usadas so na primeira vez, antes de ter algo salvo)
import show from "./assets/fotos-pessoais/show.jpg"
import parque from "./assets/fotos-pessoais/parque.jpg"

// Fotos de exemplo das pastas de estudo (idem)
import fotomatematica1 from "./assets/fotos-estudos/fotomatematica1.jpg"
import fotoredacao1 from "./assets/fotos-estudos/fotoredacao1.jpg"

// Css
import "./index.css"

const App = () => {

    // router
    const location = useLocation()
    const route = location.pathname

    // Fotos da galeria pessoal - tenta carregar do localStorage, senao usa os exemplos
    const [fotosPessoais, setFotosPessoais] = useState(() => {
        try {
            const salvas = localStorage.getItem("studyLensFotosPessoais")
            if (salvas) {
                return JSON.parse(salvas)
            }
        } catch (erro) {
            // Se o dado salvo estiver corrompido, cai pro valor padrao abaixo
        }
        return [
            { id: 1, url: show },
            { id: 2, url: parque }
        ]
    })

    // Pastas da galeria de estudo - tenta carregar do localStorage, senao usa os exemplos
    const [pastas, setPastas] = useState(() => {
        try {
            const salvas = localStorage.getItem("studyLensPastas")
            if (salvas) {
                return JSON.parse(salvas)
            }
        } catch (erro) {
            // Se o dado salvo estiver corrompido, cai pro valor padrao abaixo
        }
        return [
            { id: 1, nome: "Matemática", imagens: [{ id: 1, url: fotomatematica1 }] },
            { id: 2, nome: "Redação", imagens: [{ id: 2, url: fotoredacao1 }] }
        ]
    })

    // Id da pasta aberta no momento (null = estamos vendo a lista de pastas)
    const [pastaAberta, setPastaAberta] = useState(null)

    // Se o modo de reordenar esta ativo
    const [modoReordenar, setModoReordenar] = useState(false)

    // Url da imagem que esta sendo vista ampliada (ou null)
    const [imagemAmpliada, setImagemAmpliada] = useState(null)

    // Adicionar foto na galeria pessoal
    const adicionarImagemPessoal = (e) => {
        const arquivo = e.target.files[0]

        if (!arquivo) {
            return
        }

        const leitor = new FileReader()
        leitor.onload = () => {
            const novasFotos = [
                ...fotosPessoais,
                { id: Date.now(), url: leitor.result }
            ]
            setFotosPessoais(novasFotos)
            localStorage.setItem("studyLensFotosPessoais", JSON.stringify(novasFotos))
        }
        leitor.readAsDataURL(arquivo)

        e.target.value = ""
    }

    // Mover foto pessoal para cima (-1) ou para baixo (1)
    const moverFotoPessoal = (index, direcao) => {
        const novoIndex = index + direcao

        if (novoIndex < 0 || novoIndex >= fotosPessoais.length) {
            return
        }

        const novasFotos = [...fotosPessoais]
        const trocada = novasFotos[novoIndex]
        novasFotos[novoIndex] = novasFotos[index]
        novasFotos[index] = trocada

        setFotosPessoais(novasFotos)
        localStorage.setItem("studyLensFotosPessoais", JSON.stringify(novasFotos))
    }

    // Adicionar pasta
    const adicionarPasta = () => {
        const nome = prompt("Digite o nome da pasta:")

        if (!nome) {
            return
        }

        const novaPasta = {
            id: Date.now(),
            nome: nome,
            imagens: []
        }

        const novasPastas = [...pastas, novaPasta]

        setPastas(novasPastas)
        localStorage.setItem("studyLensPastas", JSON.stringify(novasPastas))
    }

    // Mover pasta para cima (-1) ou para baixo (1)
    const moverPasta = (index, direcao) => {
        const novoIndex = index + direcao

        if (novoIndex < 0 || novoIndex >= pastas.length) {
            return
        }

        const novasPastas = [...pastas]
        const trocada = novasPastas[novoIndex]
        novasPastas[novoIndex] = novasPastas[index]
        novasPastas[index] = trocada

        setPastas(novasPastas)
        localStorage.setItem("studyLensPastas", JSON.stringify(novasPastas))
    }

    // Adicionar imagem dentro da pasta que esta aberta
    const adicionarImagemNaPasta = (e) => {
        const arquivo = e.target.files[0]

        if (!arquivo || !pastaAberta) {
            return
        }

        const leitor = new FileReader()
        leitor.onload = () => {
            const novasPastas = pastas.map((item) => {
                if (item.id === pastaAberta) {
                    return {
                        ...item,
                        imagens: [...item.imagens, { id: Date.now(), url: leitor.result }]
                    }
                }
                return item
            })
            setPastas(novasPastas)
            localStorage.setItem("studyLensPastas", JSON.stringify(novasPastas))
        }
        leitor.readAsDataURL(arquivo)

        e.target.value = ""
    }

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

                        {/* Adicionar imagens */}
                        <div id="acoes-galeria">

                            {/* Adicionar imagem na galeria pessoal */}
                            {route === "/pessoal" && (
                                <div>
                                    <label id="botao-adicionar-imagem" htmlFor="input-adicionar-imagem">
                                        <img src={adicionarimagemsvg}/>
                                    </label>
                                    <input
                                        id="input-adicionar-imagem" 
                                        type="file" 
                                        accept="image/*"
                                        onChange={adicionarImagemPessoal}
                                        hidden>
                                    </input>
                                </div>
                            )}

                            {/* Adicionar pasta (quando estamos na lista de pastas) */}
                            {route === "/estudo" && !pastaAberta && (
                                <div>
                                    <button id="botao-adicionar-pasta" onClick={adicionarPasta}>
                                        <img src={adicionarpastasvg}/>
                                    </button>
                                </div>
                            )}

                            {/* Adicionar imagem dentro da pasta aberta */}
                            {route === "/estudo" && pastaAberta && (
                                <div>
                                    <label id="botao-adicionar-imagem" htmlFor="input-adicionar-imagem-pasta">
                                        <img src={adicionarimagemsvg}/>
                                    </label>
                                    <input
                                        id="input-adicionar-imagem-pasta" 
                                        type="file" 
                                        accept="image/*"
                                        onChange={adicionarImagemNaPasta}
                                        hidden>
                                    </input>
                                </div>
                            )}

                            {/* Editar ordem das pastas/imagens */}
                            <button 
                                id="botao-editar-ordem"
                                className={modoReordenar ? "ativo" : undefined}
                                onClick={() => setModoReordenar(!modoReordenar)}
                            >
                                <img src={mover}/>
                            </button>

                        </div>
                    </nav>

                    <Routes>
                        <Route path="/pessoal" element={
                            <Pessoal
                                fotos={fotosPessoais}
                                moverFoto={moverFotoPessoal}
                                modoReordenar={modoReordenar}
                                setImagemAmpliada={setImagemAmpliada}
                            />
                        }/>
                        <Route path="/estudo" element={
                            <Estudo
                                pastas={pastas}
                                pastaAberta={pastaAberta}
                                setPastaAberta={setPastaAberta}
                                moverPasta={moverPasta}
                                modoReordenar={modoReordenar}
                                setImagemAmpliada={setImagemAmpliada}
                            />
                        }/>
                        <Route path="/" element={
                            <Pessoal
                                fotos={fotosPessoais}
                                moverFoto={moverFotoPessoal}
                                modoReordenar={modoReordenar}
                                setImagemAmpliada={setImagemAmpliada}
                            />
                        }/>
                    </Routes>
                </section>

                <nav id="menu-celular">
                    <button><img src={voltar}/></button>
                    <button><img src={menu}/></button>
                    <button><img src={apps}/></button>
                </nav>
            </section>

            {/* Imagem ampliada */}
            {imagemAmpliada && (
                <div id="modal-imagem-ampliada" onClick={() => setImagemAmpliada(null)}>
                    <img src={imagemAmpliada} onClick={(e) => e.stopPropagation()}/>
                </div>
            )}
        </div>
    </>
  )
}

export default App
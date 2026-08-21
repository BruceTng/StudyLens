import React from 'react'

const Estudo = () => {
  return (
    <>
        <nav id="nav-principal">
            <div id="botoes-pessoa-estudo">
                <button id="botao-pessoal">Pessoal</button>
                <button id="botao-estudo">Estudo</button>
            </div>
        
            <div id="acoes-galeria">
                <button id="botao-adicionar-imagem"><img src={adicionarimagem}/></button>
                {/* <button><img src={adicionarpasta}/></button> ****entra depois */}
                <button id="botao-editar-ordem"><img src={mover}/></button>
            </div>
        </nav>

        <div id="pastas">
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
        </div>
    </>
  )
}

export default Estudo
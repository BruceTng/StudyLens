

const Pessoal = () => {
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
        
        <ul id="imagens-template">
            <li><img src={show}/></li>
            <li><img src={parque}/></li>
            <li><img src={imagem}/></li>
        </ul>
    </>
  )
}

export default Pessoal
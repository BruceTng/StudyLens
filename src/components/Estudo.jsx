// Icones usados dentro da galeria
import pasta from "../assets/icones-gerais/pasta.svg"
import lixo from "../assets/icones-gerais/lixo.svg"
import editar from "../assets/icones-gerais/editar.svg"
import voltar from "../assets/icones-celular/voltar.svg"

const Estudo = ({ pastas, pastaAberta, setPastaAberta, moverPasta, modoReordenar, setImagemAmpliada }) => {

    // Pasta que esta aberta no momento (undefined se estivermos na lista)
    const pastaAtual = pastas.find((item) => item.id === pastaAberta)

    // ----- Dentro de uma pasta -----
    if (pastaAtual) {
        return (
            <>
                <div id="cabecalho-pasta">
                    <button id="botao-voltar-pasta" onClick={() => setPastaAberta(null)}>
                        <img src={voltar}/>
                    </button>
                    <h2>{pastaAtual.nome}</h2>
                </div>

                <ul id="imagens-template">
                    {pastaAtual.imagens.map((imagem) => (
                        <li key={imagem.id} onClick={() => setImagemAmpliada(imagem.url)}>
                            <img src={imagem.url}/>
                        </li>
                    ))}
                </ul>
            </>
        )
    }

    // ----- Lista de pastas -----
    return (
        <>
            <div id="pastas">
                {pastas.map((item, index) => (
                    <div 
                        className="pastas-estudo" 
                        key={item.id}
                        onClick={() => !modoReordenar && setPastaAberta(item.id)}
                    >
                        {/* Preview: mostra a primeira foto da pasta, ou o icone de pasta vazia */}
                        {item.imagens.length > 0 ? (
                            <img className="previa" src={item.imagens[0].url}/>
                        ) : (
                            <div className="previa previa-vazia">
                                <img src={pasta}/>
                            </div>
                        )}

                        <button className="excluir-pasta" hidden><img src={lixo}/></button>
                        <button className="editar-pasta" hidden><img src={editar}/></button>

                        <span>
                            <img src={pasta}/>
                            <p>{item.nome}</p>
                        </span>

                        {modoReordenar && (
                            <div className="setas-ordem">
                                <button onClick={(e) => { e.stopPropagation(); moverPasta(index, -1) }}>▲</button>
                                <button onClick={(e) => { e.stopPropagation(); moverPasta(index, 1) }}>▼</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Estudo
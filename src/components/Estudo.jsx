// Icones usados dentro da galeria
import adicionarpasta from "../assets/icones-gerais/adicionar-pasta.svg"
import mover from "../assets/icones-gerais/mover.svg"
import pasta from "../assets/icones-gerais/pasta.svg"
import lixo from "../assets/icones-gerais/lixo.svg"
import editar from "../assets/icones-gerais/editar.svg"

// Fotos de estudo
import fotoredacao1 from "../assets/fotos-estudos/fotoredacao1.jpg"
import fotomatematica1 from "../assets/fotos-estudos/fotomatematica1.jpg"

const Estudo = () => {
  return (
    <>
        <div id="pastas">
            <div className="pastas-estudo">
                <img className="previa"/>
                <button className="excluir-pasta" hidden><img src={lixo}/></button>
                <button className="editar-pasta" hidden><img src={editar}/></button>
                <span>
                    <img src={pasta}/>
                    <p>Matemática</p>
                </span>
            </div>

            <div className="pastas-estudo">
                <img className="previa"/>
                <button className="excluir-pasta" hidden><img src={lixo}/></button>
                <button className="editar-pasta" hidden><img src={editar}/></button>
                <span>
                    <img src={pasta}/>
                    <p>Redação</p>
                </span>
            </div>
        </div>
    </>
  )
}

export default Estudo
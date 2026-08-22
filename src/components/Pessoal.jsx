// Icones usados dentro da galeria
import adicionarimagem from "../assets/icones-gerais/adicionar-imagem.svg"
import mover from "../assets/icones-gerais/mover.svg"
import imagem from "../assets/icones-gerais/imagem.svg"

// Imagens da galeria pessoal
import show from "../assets/fotos-pessoais/show.jpg"
import parque from "../assets/fotos-pessoais/parque.jpg"

const Pessoal = () => {
  return (
    <>
        <ul id="imagens-template">
            <li><img src={show}/></li>
            <li><img src={parque}/></li>
            <li><img src={imagem}/></li>
        </ul>
    </>
  )
}

export default Pessoal
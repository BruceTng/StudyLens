const Pessoal = ({ fotos, moverFoto, modoReordenar, setImagemAmpliada }) => {
  return (
    <>
        <ul id="imagens-template">
            {fotos.map((foto, index) => (
                <li 
                    key={foto.id}
                    onClick={() => !modoReordenar && setImagemAmpliada(foto.url)}
                >
                    <img src={foto.url}/>

                    {modoReordenar && (
                        <div className="setas-ordem">
                            <button onClick={(e) => { e.stopPropagation(); moverFoto(index, -1) }}>▲</button>
                            <button onClick={(e) => { e.stopPropagation(); moverFoto(index, 1) }}>▼</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    </>
  )
}

export default Pessoal


const App = () => {
  return (
    <div>

      <header>
        <div id="horario">
          <p>9:30</p>
        </div> 

        <div id="icones">
          <img></img>
          <img></img>
          <img></img>
        </div>
      </header>

      <main>
        <div>
          <img></img>
          <p>Galeria</p>
        </div>

        <section>
          <div>
          <button id="button-pessoal"></button>
          <button id="button-estudo"></button>
        </div>

        <div>
          <button id="button-nova-imagem"></button>
          <button id="button-nova-pasta"></button>
          <button id="button-organizar"></button>
        </div>

        </section>

        <section id="pessoal">
          <img></img>
          <img></img>
        </section>

        <section id="estudo">
          <div id="pasta1">
            <img></img>
            <button></button>
          </div>

          <div id="pasta2">
            <img></img>
            <button></button>
          </div>
        </section>
      </main>

      <footer>
        <img></img>
        <img></img>
        <img></img>
      </footer>

    </div>
  )
}

export default App
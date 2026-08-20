import sinal from "./assets/sinal.svg"
import wifi from "./assets/wifi.svg"
import bateria from "./assets/bateria.svg"

import "./App.css"

const App = () => {
  return (
    <div id="fora">
      <section id="celular">
        <header>
          <div id="horario">
            <p>9:30</p>
          </div> 

          <div id="icones">
            <img src={sinal}/>
            <img src={wifi}/>
            <img src={bateria}/>
          </div>
        </header>

        <main>
          <div>
            <img/>
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
            <img/>
            <img/>
          </section>

          <section id="estudo">
            <div id="pasta1">
              <img/>
              <button></button>
            </div>

            <div id="pasta2">
              <img/>
              <button></button>
            </div>
          </section>
        </main>

        <footer>
          <img/>
          <img/>
          <img/>
        </footer>
      </section>
    </div>
  )
}

export default App
import './App.css'
import NumAleatorio from './component/NumAleatorio'
import Card1 from './component/Card1'
import Card2 from './component/Card2'
import Veiculos from './component/Veiculos'
import CV from './component/CV'

function App() {

  return (
    <>
      <main id="cards">
        <h1> React: Componentes Básicos </h1>
        <NumAleatorio min={2}
          max={50} >
        </NumAleatorio>
        <Card1></Card1>
        <Card2>
          <NumAleatorio min={2}
            max={50}></NumAleatorio>
        </Card2>
        <Veiculos>
          <CV modelo="Ferrari" cor="vermelha"
          ></CV>
        </Veiculos>
      </main>
    </>
  )
}

export default App

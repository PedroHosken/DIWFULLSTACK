import './App.css'
import NumAleatorio from './component/NumAleatorio'

function App() {

  return (
    <>
      <main id="cards">
        <h1> React: Componentes Básicos </h1>
        <NumAleatorio min={2}
          max={50} >

        </NumAleatorio>
      </main>
    </>
  )
}

export default App

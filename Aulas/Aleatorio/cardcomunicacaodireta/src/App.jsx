import './App.css'
import NumAleatorio from './component/NumAleatorio'
import Card1 from './component/Card1'

function App() {

  return (
    <>
      <main id="cards">
        <h1> React: Componentes Básicos </h1>
        <NumAleatorio min={2}
          max={50} >
        </NumAleatorio>
        <Card1></Card1>
      </main>
    </>
  )
}

export default App

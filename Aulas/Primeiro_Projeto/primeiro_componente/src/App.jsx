//Import
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoasVindas from './componentes/boas_vindas'
import Identificacao from './componentes/identificacao'
import Idcomparametro from './componentes/idcomparametro'
import Status from './componentes/aprovado'

function App() {


  return (
    <main>
      <BoasVindas></BoasVindas>
      <Idcomparametro
        nome="Pedro Hosken"
        vulgo="Pedrão"
      >
      </Idcomparametro>
      <Status
      nome = "Luíza"
      nota = {5}
      
      ></Status>

    </main>
  )
}

export default App // Necessário realizar o export

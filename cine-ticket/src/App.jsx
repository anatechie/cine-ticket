import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'
import Resumo from './Components/Resumo'
import ControleIngresso from './Components/ControleIngresso'

function App() {
  const [adultos, setAdultos] = useState(0)
  const [infantis, setInfantis] = useState(0)

  // variavel calculo total
  const totalIngressos = adultos + infantis
  const valorTotal = adultos * 30 + infantis * 15

  //ADULTO 
  function aumentarAdulto(){
    setAdultos(adultos + 1)
  }

  function diminuirAdulto(){
    if (adultos > 0){
      setAdultos(adultos - 1)
    }
  }

  // INFANTIL
  function aumentarInfantil(){
    setInfantis(infantis + 1)
  }

  function diminuirInfantil(){
    if (infantis > 0){
      setInfantis(infantis - 1)
    }
  }

  function limparPedido(){
    setAdultos(0)
    setInfantis(0)
  }

  return (
    <>
      <Header
      titulo="CineTicket"
      subtitulo="Reserve seus ingressos."
      />

      <main className="container">
        <Card titulo= "Ingressos">
          <ControleIngresso
            tipo="Adulto"
            preco={30}
            quantidade={adultos}
            aumentar={aumentarAdulto}
            diminuir={diminuirAdulto}
          />

          <ControleIngresso
            tipo="Infantil"
            preco={15}
            quantidade={infantis}
            aumentar={aumentarInfantil}
            diminuir={diminuirInfantil}
          />
        </Card>

        <Card titulo="Resumo da compra:">
          <Resumo
            adultos={adultos}
            infantis={infantis}
            totalIngressos={totalIngressos}
            valorTotal={valorTotal}
            limparPedido={limparPedido}
          />
        </Card>
      </main>
    
    </>
  )
}

export default App

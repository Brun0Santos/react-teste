import './Form.css'
import { useState } from 'react'
import Tabelas from '../tabelas/Tabelas'
import Button from '../button/Button'
import 'react-toastify/dist/ReactToastify.css';
import getRotas from '../../services/api'
import MostrarValor from '../layout/MostrarValor';
import { toast } from 'react-toastify';

function Form() {
  let valorSaldoTotal = 0

  function sendDados(e) {
    e.preventDefault()
    fetchData()
  }

  function desabilitar() {
    setDados(false)
  }

  const [nomeOperador, setNomeOperador] = useState([])
  const [dataInicio, setDataInicio] = useState([])
  const [dataFim, setDataFim] = useState([])
  const [dados, setDados] = useState(false)

  function fetchData() {
    getRotas(dataInicio, dataFim, nomeOperador).then((response) => {
      setDados(response)
    }).catch(() => {
      toast.info("Preencha os dados corretamente")
      console.error("Http Error")
    })
  }

  return (
    <>
      <form action="POST" className='app'>
        <div className="formulario card coluna">
          <label htmlFor="dataInicio">Data de início</label>
          <input type="date" id="dataInicio" name="dataInicio" onChange={(e) => setDataInicio(e.target.value)}></input>
        </div>

        <div className="formulario card coluna">
          <label htmlFor="dataFim">Data de fim</label>
          <input type="date" id="dataFim" name="dataFim" onChange={(e) => setDataFim(e.target.value)}></input>
        </div>

        <div className="formulario card coluna">
          <label htmlFor="nomeOperador">Nome do operador transacionado</label>
          <input type="text" id="nomeOperador" name="nomeOperador" onChange={(e) => setNomeOperador(e.target.value)}></input>
        </div>

        <div>
          <button onClick={sendDados} type="submit">Pesquisar</button>
        </div>
      </form>

      {dados && (
        <>
          {dados.map((e) => {
            valorSaldoTotal += Number(e.valor.toFixed(2))
          })}
        </>
      )}


      {dados && (
        <MostrarValor
          saldoTotal={valorSaldoTotal}
          saldoNoPeriodo={valorSaldoTotal}
        />
      )}

      {dados && (
        <div>{dados?.map((e) =>
          <Tabelas
            key={e.id}
            dados={e.dataTransferencia.split("-").reverse().join("-")}
            valencia={e.valor.toFixed(2)}
            tipo={e.tipo.charAt(0).toUpperCase() + e.tipo.slice(1).toLowerCase()}
            nomeOperadorTransacao={e.conta.nomeResponsavel}
          />
        )}
          <Button evento={desabilitar} />
        </div>
      )}
    </>
  )
}

export default Form
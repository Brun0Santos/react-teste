import './Form.css'
import { useState } from 'react'
import Tabelas from '../tabelas/Tabelas'
import Button from '../button/Button'
import 'react-toastify/dist/ReactToastify.css';
import getRotas from '../../services/api'


function Form() {
  function getDados(e) {
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

  function fetchData () {
   getRotas(dataInicio, dataFim, nomeOperador).then((e) => {
    setDados(e)
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
          <button onClick={getDados} type="submit">Pesquisar</button>
        </div>
      </form>

      {dados && (
        <div>{dados?.map((e) =>
          <Tabelas
            key={e.id}
            dados={e.dataTransferencia.split("-").reverse().join("-")}
            valencia={e.valor.toFixed(2)}
            tipo={e.tipo}
            nomeOperadorTransacao={e.conta.nomeResponsavel}
          />
        )}
          <Button
          evento={desabilitar}
          />
        </div>
      )}
    </>
  )
}

export default Form
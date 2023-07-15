import './Form.css'
import { useState } from 'react'
import Tabelas from '../tabelas/Tabelas'
import Button from '../button/Button'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [error, setError] = useState(null);


  const fetchData = async () => {
    console.log(dataInicio.length)
    console.log(dataFim.length)
    console.log(nomeOperador)

    console.log(dataInicio)
    console.log(dataFim)
    try {

      if (dataInicio.length == 0 && dataFim == 0 && nomeOperador.length == 0){
        toast.info("Preencha os campos")
        return
      } else if (dataInicio.length == 0 && dataFim == 0) {
        toast.success("Usuário não encontrado")
      }
      //fetch(`http://localhost:8080/api/v1/transferencia/operador/${nomeOperador}`, {
      fetch(`http://localhost:8080/api/v1/transferencia/data/${dataInicio} 00:00:00/${dataFim} 00:00:00`)
        .then(reponse => {
          if (reponse.status !== 200) {
            toast.error("Usuário não encontrado")
            throw new Error(`HTTP error! Status: ${reponse.status}`);
          }
          return reponse.json();
        })
        .then((data) => {
          setDados(data)
        })
    } catch (error) {
      setError(error)
    }
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
            dados={e.dataTransferencia}
            valencia={e.valor}
            tipo={e.tipo}
            nomeOperadorTransacao={e.nomeOperadorTransacao}
          />
        )}
          <Button
          />
          <button onClick={desabilitar} type='button'>Desabilitar</button>
        </div>
      )}
    </>
  )
}

export default Form
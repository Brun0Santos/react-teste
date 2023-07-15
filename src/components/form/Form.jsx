import './Form.css'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import Tabelas from '../tabelas/Tabelas'
import Button from '../button/Button'



function Form() {
  function getDados(e) {
    e.preventDefault()
    console.log(nomeOperador)
    // fetchData()
  }

  function desabilitar(){
    setDados('')
  }


  const [nomeOperador, setNomeOperador] = useState([])
  const [dados, setDados] = useState([])



  useEffect(() => {
    api.get('').then(({ data }) => {
      setDados(data)
      //console.log(dados)
    })
  }, [nomeOperador])

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/api/v1/transferencia/operador/${nomeOperador}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const jsonData = await response.json();
  //     setDados(jsonData)


  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <form action="POST" className='app'>
        <div className="formulario card coluna">
          <label htmlFor="dataInicio">Data de início</label>
          <input type="datetime-local" id="dataInicio" name="dataInicio"></input>
        </div>

        <div className="formulario card coluna">
          <label htmlFor="dataFim">Data de fim</label>
          <input type="datetime-local" id="dataFim" name="dataFim"></input>
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
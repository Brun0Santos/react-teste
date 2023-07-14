import './Form.css'

function Form() {
  return (
    <>
      <form action="POST" className='app'>
        <div className="formulario card coluna">
          <label htmlFor="dataInicio">Data de início</label>
          <input type="datetime-local" id="dataInicio" name="dataInicio" ></input>
        </div>

        <div className="formulario card coluna">
          <label htmlFor="dataFim">Data de fim</label>
          <input type="datetime-local" id="dataFim" name="dataFim"></input>
        </div>

        <div className="formulario card coluna">
          <label htmlFor="nomeOperador">Nome do operador transacionado</label>
          <input type="text" id="nomeOperador" name="nomeOperador"></input>
        </div>

        <div>
          <button type="submit">Pesquisar</button>
        </div>
      </form>
    </>
  )
}

export default Form
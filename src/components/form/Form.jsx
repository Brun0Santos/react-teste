import './Form.css'

function Form() {
    return (
        <>
            <form action="POST" className="app">
                <div className='coluna'>
                    <label htmlFor="dadaInicio">Data de inicio</label>
                    <input type="datetime-local" id="dadaInicio" name="dataInicio" className='campos'></input>
                </div>

                <div className='coluna flex'>
                    <label htmlFor="dataFim">Data de inicio</label>
                    <input type="datetime-local" id="dataFim" name="dataFim"></input>
                </div>

                <div className='coluna'>
                    <label htmlFor="">Nome do operador transacionado</label>
                    <input type="text" id="dadaInicio" name="dataInicio"></input>
                </div>

                <div>
                <button type="submit">Pesquisar</button>
                </div>
            </form>

        </>
    )
}

export default Form
import './Tabela.css'
// eslint-disable-next-line react/prop-types
function Tabelas({ dados, valencia, tipo, nomeOperadorTransacao }) {
  return (
    <div >
      <table>
        <thead>
        <tr>
          <th>Dados</th>
          <th>Valencia</th>
          <th>Tipo</th>
          <th>Nome do operador transacionado</th>
        </tr>
        <tr>
          <th>{dados}</th>
          <th>R$ {valencia}</th>
          <th>{tipo}</th>
          <th>{nomeOperadorTransacao}</th>
        </tr>
        </thead>
      </table>
    </div>
  )
}

export default Tabelas
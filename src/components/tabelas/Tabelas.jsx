import './Tabela.css'
// eslint-disable-next-line react/prop-types
function Tabelas({ saldoTotal, saldoNoPeriodo, dados, valencia, tipo, nomeOperadorTransacao }) {
  return (
    <div >
      <table className="content-table">
        <thead>
          <tr className="active-row">
            <td>Saldo total: R$ {saldoTotal}</td>
            <td>Saldo no período: R$ {saldoNoPeriodo}</td>
          </tr>
        <tr className="active-row">
          <th>Dados</th>
          <th>Valencia</th>
          <th>Tipo</th>
          <th>Nome do operador transacionado</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>{dados}</th>
          <th>R$ {valencia}</th>
          <th>{tipo}</th>
          <th>{nomeOperadorTransacao}</th>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tabelas
import './MostrarValor.css'

// eslint-disable-next-line react/prop-types
function MostrarValor({ saldoTotal, saldoNoPeriodo }) {
  return (
    <div>
      <table className="tables">
        <thead>
          <tr>
            <td className='tds'>Saldo total: R$ {saldoTotal}</td>
            <td className='tds'>Saldo no período: R$ {saldoNoPeriodo}</td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default MostrarValor
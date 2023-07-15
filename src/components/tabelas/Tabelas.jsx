// eslint-disable-next-line react/prop-types
function Tabelas({ dados, valencia, tipo, nomeOperadorTransacao }) {
  return (
    <div>
      <table border="1">
        <tr>
          <th>dados</th>
          <th>valencia</th>
          <th>tipo</th>
          <th>nome do operador transacionado</th>
        </tr>
        <tr>
          <th>{dados}</th>
          <th>R${valencia}</th>
          <th>{tipo}</th>
          <th>{nomeOperadorTransacao}</th>
        </tr>
      </table>
    </div>
  )
}

export default Tabelas
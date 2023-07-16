import './Button.css'

function Button({ evento }) {
  const limparTela = () => {
    evento()
  }

  return (
    <>
      <button type="button" onClick={limparTela}>Limpar dados</button>
    </>
  )
}

export default Button
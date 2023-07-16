import './Button.css'

// eslint-disable-next-line react/prop-types
function Button({ evento }) {
  const limparTela = ()  => {
    evento()
  }

  return (
    <>
      <button type="button" onClick={limparTela}>Limpar dados</button>
    </>
  )
}

export default Button
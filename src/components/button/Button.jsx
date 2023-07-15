function Button() {
  function limparTela(){
    console.log("Fui clicado")
  }

  return (
    <>
      <button type="button" onClick={limparTela}>Limpar Tela</button>
    </>
  )
}

export default Button
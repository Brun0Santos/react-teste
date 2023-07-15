
async function getRotas(dataInicio, dataFim, nomeOperador) {

  if (dataInicio.length == 0 && dataFim == 0 && nomeOperador.length == 0) {
    alert("Preencha os dados")
    return

  } else if (nomeOperador.length == 0) {
    return await rotas(`http://localhost:8080/api/v1/transferencia/data/${dataInicio} 00:00:00/${dataFim} 00:00:00`)

  } else if (dataInicio.length == 0 && dataFim == 0) {
    return await rotas(`http://localhost:8080/api/v1/transferencia/operador/${nomeOperador}`)

  } else {
    return await rotas(`http://localhost:8080/api/v1/transferencia/data/${dataInicio} 00:00:00/${dataFim} 00:00:00/${nomeOperador}`)
  }

  async function rotas(endpoint) {
    try {
      return await fetch(endpoint)
        .then(reponse => {
          if (reponse.status !== 200) {
            //toast.error("Usuário não encontrado")
            throw new Error(`HTTP error! Status: ${reponse.status}`);
          }
          return reponse.json();
        })
        .then((data) => {
          return data
          //setDados(data)
        })
    } catch (error) {
      console.log(error)
      //setError(error)
    }
  }
}


export default getRotas
import { toast } from 'react-toastify';

const baseURL = "http://localhost:8080/api/v1/transferencia"

async function getRotas(dataInicio, dataFim, nomeOperador) {

  if (dataInicio.length == 0 && dataFim.length == 0 && nomeOperador.length == 0) {
    return

  } else if (nomeOperador.length == 0) {
    return await request(`${baseURL}/data/${dataInicio}/${dataFim}`)

  } else if (dataInicio.length == 0 && dataFim.length == 0) {
    return await request(`${baseURL}/operador/${nomeOperador}`)

  } else {
    return await request(`${baseURL}/data/${dataInicio}/${dataFim}/${nomeOperador}`)
  }

  async function request(endpoint) {
    try {
      return await fetch(endpoint)
        .then(reponse => {
          if (reponse.status !== 200) {
            toast.error("Dados nao encontrado")
            throw new Error(`HTTP error! Status: ${reponse.status}`);
          }
          return reponse.json();
        })
        .then((data) => { return data })
    } catch (error) {
      throw new Error(error)
    }
  }
}


export default getRotas
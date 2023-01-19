import API from '@/api/index'

export const actions = {
  async actionSendDataContact({ commit }, payload) {
    try {
      const response = await API.SendDataContact(payload)

      const dataSuccess = {
        data: response.data.body,
        status: response.status,
      }

      return dataSuccess
    } catch (error) {
      let messageError = ''
      if (error.message === 'Request failed with status code 500') {
        messageError = 'Error al conectar con el servidor.'
      } else if (error.message === 'Network Error') {
        messageError = 'Error al conectar con el servidor.'
      } else {
        messageError = error.response.data
      }
      const dataError = {
        data: messageError,
        status: error.message === 'Network Error' ? 500 : error.response.status,
      }

      return dataError
    }
  },
}

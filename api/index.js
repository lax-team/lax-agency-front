import API from '@/api/config'

const API_URL = process.env.API_BASE_URL

// eslint-disable-next-line
const SendDataContact = (data) => {
  //  eslint-disable-next-line
  return API({
    method: 'POST',
    url: `${API_URL}/message/email/send`,
    data,
  })
}

export default {
  SendDataContact,
}

import axios from 'axios'

export const loginApi = async (userInput) => {
  return await axios
    .post('http://localhost:3003/login', { ...userInput })
    .then((response) => {
      const res = response.data
      return res
    })
    .catch((e) => `因為${e}導致錯誤`)
}

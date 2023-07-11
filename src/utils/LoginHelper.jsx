import axios from 'axios'

export const loginApi = async (userInput) => {
  return await axios
    .post('http://192.168.1.104:3003/login', { ...userInput })
    .then((response) => {
      const res = response.data
      console.log(res)
      return res
    })
    .catch((e) => `因為${e}導致錯誤`)
}

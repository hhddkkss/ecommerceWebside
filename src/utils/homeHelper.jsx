import axios from 'axios'

export const fetchNews = async () => {
  return await axios
    .get('http://localhost:3003/home_page/home_articles')
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e)
    })
}

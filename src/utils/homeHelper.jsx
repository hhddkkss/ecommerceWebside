import axios from 'axios'

//新鮮事用
export const fetchNews = async () => {
  return await axios
    .get('http://localhost:3003/home_page/home_articles')
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e)
    })
}
//熱門商品用
export const fetchPopularProduct = async () => {
  return await axios
    .get('http://localhost:3003/home_page/recommend_product')
    .then((res) => res.data)
    .catch((e) => {
      throw new Error(e)
    })
}

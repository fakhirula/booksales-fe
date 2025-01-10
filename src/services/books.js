import API from "../api"

export const getBooks = async () => {
  const { data } = await API.get('/books') // endpoint
  return data.data
}
import API from "../api"

export const getBooks = async () => {
  return await API.get('/books')
}
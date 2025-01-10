import API from "../api"

export const getGenres = async () => {
  const { data } = await API.get('/genres') // endpoint
  return data.data
}
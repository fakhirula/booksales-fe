import API from "../api"


export const login = async ({email, password}) => {
  try {
    const { data } = await API.post('/login', {email, password})
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}
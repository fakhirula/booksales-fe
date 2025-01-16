import API from "../api"

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post('/login', { email, password })
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const register = async ({name, email, password}) => {
  await API.post('/register')
}

export const logout = () => {
  try {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userInfo')
  } catch (err) {
    console.log(err)
    throw err
  }
}
import API from "../api"

export const createOrder = async (data) => {
  try {
    const response = await API.post('/orders', data, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}


// Route::apiResource('/orders', OrderController::class)->only(['index', 'store']);


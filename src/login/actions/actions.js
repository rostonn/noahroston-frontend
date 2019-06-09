const apiUrl = process.env.REACT_APP_API_URL

export const loginUser = (code, provider) => {

  return dispatch => {
    return fetch(apiUrl + '/login/' + provider, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: code
      })
    })
      .then(function (response) {
        return response.text()
      })
      .then(function (token) {
        dispatch(loginUserAction(token))
      }).catch(function (ex) {
        dispatch(logoutUserAction())
      })
  }
}

export const loginUserAction = (token) => {
  return {
    type: 'LOGIN',
    token: token
  }
}

export const logoutUserAction = () => {
  return {
    type: 'LOGOUT'
  }
}
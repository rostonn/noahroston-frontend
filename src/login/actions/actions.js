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
  // Set Session storage
  sessionStorage.setItem("token", token)
  return {
    type: 'LOGIN',
    token: token
  }
}

export const logoutUserAction = () => {
  sessionStorage.removeItem("token")
  return {
    type: 'LOGOUT'
  }
}

export const validateTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem("token")
  if(!token) {
    return {
      type: 'TOKEN_CHECKED_FALSE'
    }
  }
  return dispatch => {
    return fetch(apiUrl + '/oauth/check_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(function (response) {
        console.log(response)
        if(response.status === 200) {
          dispatch({type: 'TOKEN_CHECKED_TRUE'})
        }
        dispatch({type: 'TOKEN_CHECKED_FALSE', token: token})
      })
      .catch(function (ex) {
        dispatch({type: 'TOKEN_CHECKED_FALSE'})
      })
  }
}
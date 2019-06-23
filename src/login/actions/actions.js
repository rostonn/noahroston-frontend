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
        if(response.status !== 200) {
          throw Object.assign(
            new Error("Unauthorized"),
            { code: 403 }
         );
        }

        return response.text()
      })
      .then(function (token) {

        dispatch(hideLoader())
        dispatch(loginUserAction(token))

      }).catch(function (ex) {
        dispatch(hideLoader())
        dispatch(logoutUserAction())
      })
  }
}

export const showLoader = () => {
  console.log("Showing loader...")
return {type: 'SHOW_LOADER'}
}

export const hideLoader = () => {
  return {type: 'HIDE_LOADER'}
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
  if (typeof (window.FB) !== "undefined") {
    window.FB.api('me/permissions?success:true', 'delete', function(response){
      console.log('Logged out', response)
    })
  }
  return {
    type: 'LOGOUT'
  }
}

export const validateTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem("token")
  if (!token) {
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
        if (response.status === 200) {
          var user = JSON.parse(atob(token.split(".")[1]))


          dispatch({ type: 'TOKEN_CHECKED_TRUE', token: token, user: user })
        }
        dispatch({ type: 'TOKEN_CHECKED_FALSE', token: token })
      })
      .catch(function (ex) {
        dispatch({ type: 'TOKEN_CHECKED_FALSE' })
      })
  }
}
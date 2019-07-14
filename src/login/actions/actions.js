const apiUrl = process.env.REACT_APP_API_URL

export const loginUser = (code, provider) => {
  console.log("LoginUser", code, provider);

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

        console.log("Why am i here")

        dispatch(hideLoader())
        if(provider === "facebook") {
          dispatch(logoutUserAction(true))
        } else {
          dispatch(logoutUserAction())
        }
        
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
  var arr = token.split(".")
  var tokenHeader = JSON.parse(atob(arr[0]))
  var tokenBody = JSON.parse(atob(arr[1]))
  sessionStorage.setItem("token", token)

  console.log(tokenHeader, tokenBody)


  return {
    type: 'LOGIN',
    token: token,
    tokenHeader: tokenHeader ,
    tokenBody: tokenBody
  }
}

export const logoutUserAction = (facebook) => {

  console.log("logging user out ...", facebook);

  sessionStorage.removeItem("token")

  if (facebook && typeof (window.FB) !== "undefined") {
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

          var arr = token.split(".")
          var tokenHeader = JSON.parse(atob(arr[0]))
          var tokenBody = JSON.parse(atob(arr[1]))

          var user = JSON.parse(atob(token.split(".")[1]))

          dispatch({ type: 'TOKEN_CHECKED_TRUE', 
          token: token, 
          user: user,
          tokenHeader: tokenHeader,
          tokenBody: tokenBody
         })
        }
        dispatch({ type: 'TOKEN_CHECKED_FALSE', token: token })
      })
      .catch(function (ex) {
        dispatch({ type: 'TOKEN_CHECKED_FALSE' })
      })
  }
}
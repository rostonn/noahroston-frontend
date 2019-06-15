let initialState = {
    authenticated: null,
    token: '',
    tokenChecked: false,
    nextRedirect: '/home'
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                authenticated: false,
                token: ''
            }
        case 'LOGIN':
            return {
                ...state,
                authenticated: true,
                token: action.token
            }
        case 'TOKEN_CHECKED_FALSE':
            console.log("Token Checked false")
            return {
                ...state,
                tokenChecked: true
            }
        case 'TOKEN_CHECKED_TRUE':
            return {
                ...state,
                tokenChecked: true,
                authenticated: true,
                token: action.token
            }
        default:
            return state
    }
}
let initialState = {
    authenticated: null,
    token: '',
    tokenChecked: false,
    nextRedirect: '/home',
    user: null,
    loading: false,
    tokenHeader: null,
    tokenBody: null
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGOUT':
            console.log("LOGOUT REDUCER")
            return {
                ...state,
                authenticated: false,
                token: '',
                user: null,
                tokenHeader: null,
                tokenBody: null
            }
        case 'LOGIN':
            return {
                ...state,
                authenticated: true,
                token: action.token,
                tokenHeader: action.tokenHeader,
                tokenBody: action.tokenBody
            }
        case 'TOKEN_CHECKED_FALSE':
            return {
                ...state,
                tokenChecked: true
            }
        case 'TOKEN_CHECKED_TRUE':
            return {
                ...state,
                tokenChecked: true,
                authenticated: true,
                token: action.token,
                user: action.user,
                tokenHeader: action.tokenHeader,
                tokenBody: action.tokenBody
            }
        case 'SHOW_LOADER':
            return {
                ...state,
                loading: true
            }
        case 'HIDE_LOADER':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
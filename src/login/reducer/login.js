let initialState = {
    authenticated: null,
    token: '',
    tokenChecked: false,
    nextRedirect: '/home',
    user: null,
    loading: false
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'LOGOUT':
            return {
                ...state,
                authenticated: false,
                token: '',
                user: null
            }
        case 'LOGIN':
            return {
                ...state,
                authenticated: true,
                token: action.token
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
                user: action.user
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
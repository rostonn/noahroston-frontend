let initialState = {
    authenticated: null,
    token: '',
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
        default:
            return state
    }
}
import { combineReducers } from 'redux'
import login from '../login/reducer/login'
import home from '../home/reducer/home'
export default combineReducers({
  login,
  home
})

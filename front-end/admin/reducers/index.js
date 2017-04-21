import { combineReducers } from 'redux'
import admin from './admin/admin'
import address from './admin/address'

const rootReducer = combineReducers({
	admin,
	address
})

export default rootReducer
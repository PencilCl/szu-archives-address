import mongoose from 'mongoose'

let Schema = mongoose.Schema

let AddressSchema = new Schema({
	province: {
		type: String
	},
	unit: {
		type: String
	},
	depart: {
		type: String
	},
	phone: {
		type: String
	},
	address: {
		type: String
	}
})

let Address = mongoose.model('Address', AddressSchema, 'address')

module.exports = Address;
import mongoose from 'mongoose'

let Schema = mongoose.Schema

let AddressSchema = new Schema({
	province: {
		type: String
	},
	city: {
		type: String
	},
	depart: {
		type: String
	},
	address: {
		type: String
	},
	autoImport: {
		type: Boolean,
		default: true
	},
	modified: {
		type: Boolean,
		default: false
	}
})

let Address = mongoose.model('Address', AddressSchema, 'address')

module.exports = Address;
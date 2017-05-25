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
	unit: {
		type: String
	},
	address: {
		type: String
	},
	postcode: {
		type: String
	},
	contact: {
		type: String
	},
	autoImport: {
		type: Boolean,
		default: true
	},
	modified: {
		type: Boolean,
		default: false
	},
	createAt: {
		type: Date,
		default: Date.now()
	},
	updateAt: {
		type: Date,
		default: Date.now()
	}
})

AddressSchema.pre('save', function(next) {
	if (this.isNew) {
		this.createAt = this.updateAt = Date.now();
	} else {
		this.updateAt = Date.now();
	}

	next();
})

let Address = mongoose.model('Address', AddressSchema, 'address')

module.exports = Address;
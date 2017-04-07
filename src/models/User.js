import mongoose from 'mongoose'
import path from 'path'
import bcrypt from 'bcrypt-nodejs'

let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let UserSchema = new Schema({
	name: {
		type: String,
		unique: true,
		require: true
	},
	password: {
		type: String,
		require: true
	}
})

UserSchema.pre('save', function(next) {
	if (!this.isModified('password')) {
		return next();
	}

	let hash = bcrypt.hashSync(this.password);
	this.password =  hash;

	next();
})

UserSchema.methods = {
	auth: function (_password, cb) {
		let hash = this.password;
		let isMatch = bcrypt.compareSync(_password, hash);
		cb(isMatch);
	}
}

let User = mongoose.model('User', UserSchema, 'user')

module.exports = User;
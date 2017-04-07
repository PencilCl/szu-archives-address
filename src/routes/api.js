'use strict';

import express from 'express'

import User from '../controllers/User'
import Authentication from '../controllers/Authentication'
import Address from '../controllers/Address'

let router = express.Router();

// student
router.route('/address/query/:stuNum')
	.get(Address.query)

// admin
router.route('/register')
	.post(User.save)
router.route('/login')
	.post(Authentication.login)
router.route('/logout')
	.get(Authentication.logout)

router.route('/address')
	.post(Authentication.auth, Address.save)
router.route('/address/:row/:page')
	.get(Authentication.auth, Address.index)
router.route('/address/count')
	.get(Authentication.auth, Address.count)
router.route('/address/:id')
	.get(Authentication.auth, Address.read)
	.put(Authentication.auth, Address.update)
	.delete(Authentication.auth, Address.delete)

module.exports = router;
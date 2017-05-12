'use strict';

import express from 'express'

import User from '../controllers/User'
import Authentication from '../controllers/Authentication'
import Address from '../controllers/Address'

let router = express.Router();

// student
router.route('/address/provinceList')
	.get(Address.provinceList)
router.route('/address/cityList/:province')
	.get(Address.cityList)
router.route('/address/departList/:city')
	.get(Address.departList)
router.route('/address/address/:depart')
	.get(Address.address)

// admin
router.route('/register')
	.post(User.save)
router.route('/login')
	.post(Authentication.login)
router.route('/logout')
	.get(Authentication.logout)
router.route('/user')
	.get(Authentication.auth, User.userInfo)

router.route('/address')
	.get(Authentication.auth, Address.index)
	.post(Authentication.auth, Address.save)
router.route('/address/count')
	.get(Authentication.auth, Address.count)
router.route('/address/all')
	.delete(Authentication.auth, Address.deleteAll)
router.route('/address/manual')
	.delete(Authentication.auth, Address.deleteManual)
router.route('/address/import')
	.post(Address.import)
	.delete(Authentication.auth, Address.deleteImport)
router.route('/address/:id')
	.get(Authentication.auth, Address.read)
	.put(Authentication.auth, Address.update)
	.delete(Authentication.auth, Address.delete)

module.exports = router;
import User from '../models/User'
import Token from '../models/Token'
import bcrypt from 'bcrypt-nodejs'

exports.login = (req, res, next) => {
	const {name, password} = req.body;
	// check params
	if (!name || !password) {
		return res.json({code: 10200, error: 'params error'});
	}
	// auth
	User.findOne({name: name}, (err, user) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		if (!user) {
			return res.json({code: 10200, error: '用户名不存在'});
		}
		user.auth(password, isMatch => {
			if (!isMatch) {
				return res.json({code: 10200, error: '账号或密码错误'});
			}

			create_access_token(res, user._id, err => {
				if (err) {
					console.log(err);
					res.json({code: 10404, error: '未知错误'});
				} else {
					res.json({code: 10000, error: '', data: {
						username: user.name
					}});
				}
			})
		})
	})
}

exports.logout = (req, res, next) => {
	let token = req.headers.token;
	if (token) {
		Token.findOne({token: token}, (err, token) => {
			if (!err && token) {
				token.used = true;
				token.save(err => {
					if (err) {
						console.log(err);
					}
				})
			}
		})
	}
	res.json({code: 10000});
}

/**
 * create, save and return token
 */
let create_access_token = (res, user_id, cb) => {
	let token = new Token();
	let time = Date.now() + 60 * 60 * 1000 * 24; // 24 hour
	let tokenString = bcrypt.hashSync(user_id + time);

	token.token = tokenString;
	token.user = user_id;
	token.expire = time;
	token.save(err => {
		res.header('token', tokenString);
		return cb(err);
	})
}

/**
 * refresh token
 */
let refresh_access_token = (res, oldToken, cb) => {
	let time = Date.now() + 60 * 60 * 1000; // 1 hour
	// let tokenString = bcrypt.hashSync(oldToken.user + time);
	
	// oldToken.token = tokenString;
	oldToken.expire = time;
	oldToken.save(err => {
		// res.header('token', tokenString);
		return cb(err);
	})
}
exports.refresh_access_token = refresh_access_token;

/*
判断是否登录
 */
exports.auth = (req, res, next) => {
	let token = req.headers.token;
	let time = Date.now();
	if (!token) {
		return res.json({code: 10200, error: '请先登录'});
	}
	Token.findOne({token: token}, (err, token) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		if (!token) {
			return res.json({code: 10200, error: 'token error'});
		}
		if (token.used || token.expire < time) {
			return res.json({code: 10200, error: '登录超时,请重新登录'});
		}

		User.findById(token.user, (err, user) => {
			if (err) {
				return res.json({code: 10500, error: 'server error'});
			}
			if (!user) {
				return res.json({code: 10200, error: '用户不存在'});
			}
			refresh_access_token(res, token, err => {
				if (err) {
					return res.json({code: 10500, error: 'server error'});
				}
				req.user = user;
				next();
			})
		})
	})
}
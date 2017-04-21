import User from '../models/User'

exports.userInfo = (req, res, next) => {
	res.json({code: 10000, error: '', data: {
		username: req.user.name
	}})
}

exports.save = (req, res, next) => {
	const {name, password} = req.body;
	// check params;
	if (!name || !password) {
		return res.json({code: 10200, error: 'params error'});
	}
	// check name
	new Promise((resolve, reject) => {
		User.findOne({name: name}, (err, user) => {
			if (err) {
				return reject("server error");
			}
			if (user) {
				return reject("name existed");
			}
			resolve();
		})
	}).then(() => {
		let user = new User();
		user.name = name;
		user.password = password;
		user.save(err => {
			if (err) {
				return res.json({code: 10500, error: 'server error'});
			}
			res.json({code: 10000, error: ''});
		})
	}, err => {
		res.json({code: 10500, error: err});
	})
}
import Address from '../models/Address'

exports.query = (req, res, next) => {
	const stuNum = req.params.stuNum;
	
	Address.findOne({stuNum: stuNum}, {_id: 0, __v: 0}, (err, address) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		if (!address) {
			return res.json({code: 10200, error: '无此学号记录'});
		}
		res.json({code: 10000, error: '', data: address});
	})
}

exports.index = (req, res, next) => {
	const {row, page} = req.params;
	Address.find({})
		.skip((page - 1) * row)
		.limit(row)
		.exec((err, address) => {
			if (err) {
				return res.json({code: 10404, error: 'params error'});
			}
			res.json({code: 10000, data: address});
		})
}

exports.save = (req, res, next) => {
	const {stuNum, province, unit, depart, phone, address} = req.body;
	// check parmas;
	if (!stuNum || !province || !unit || !depart || !phone || !address) {
		return res.json({code: 10200, error: 'params error'});
	}

	let objAddress = new Address();
	objAddress.stuNum = stuNum;
	objAddress.province = province;
	objAddress.unit = unit;
	objAddress.depart = depart;
	objAddress.phone = phone;
	objAddress.address = address;
	objAddress.save(err => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		res.json({code: 10000, error: ''});
	})
}

exports.read = (req, res, next) => {
	const id = req.params.id;
	Address.findById(id, (err, address) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		if (!address) {
			return res.json({code: 10200, error: `无此记录(id:${id})`});
		}
		res.json({code: 10000, error: '', data: address});
	})
}

exports.update = (req, res, next) => {
	const id = req.params.id;
	new Promise((resolve, reject) => {
		Address.findById(id, (err, address) => {
			if (err) {
				return reject('server error');
			}
			if (!address) {
				return reject(`无此记录(id:${id})`);
			}
			resolve(address);
		})
	}).then(objAddress => {
		const {stuNum, province, unit, depart, phone, address} = req.body;
		// check parmas;
		if (!stuNum || !province || !unit || !depart || !phone || !address) {
			return res.json({code: 10200, error: 'params error'});
		}
		objAddress.stuNum = stuNum;
		objAddress.province = province;
		objAddress.unit = unit;
		objAddress.depart = depart;
		objAddress.phone = phone;
		objAddress.address = address;
		objAddress.save(err => {
			if (err) {
				return res.json({code: 10500, error: 'server error'});
			}
			res.json({code: 10000, error: ''});
		})
	}, err => {
		return res.json({code: 10200, error: err});
	})
}

exports.delete = (req, res, next) => {
	const id = req.params.id;
	Address.remove({_id: id}, err => {
		if (err) {
			return res.json({code: 10200, error: 'params error'});
		}
		res.json({code: 10000, error: ''});
	})
}

exports.count = (req, res, next) => {
	Address.count({}, (err, count) => {
		if (err) {
			res.json({code: 10404, error: 'query error'});
		} else {
			res.json({code: 10000, data: count});
		}
	})
}
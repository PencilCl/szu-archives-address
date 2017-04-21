import Address from '../models/Address'

exports.queryUnit = (req, res, next) => {
	const province = req.params.province;
	
	Address.find({province: province}, {_id: 0, unit: 1}, (err, addresses) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		res.json({code: 10000, error: '', data: addresses});
	})
}

exports.queryByUnit = (req, res, next) => {
	const unit = req.params.unit;

	Address.find({unit: unit}, {_id: 0, depart: 1, phone: 1, address: 1}, (err, addresses) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		res.json({code: 10000, error: '', data: addresses});
	})
}

exports.index = (req, res, next) => {
	Address.find({}, (err, address) => {
		if (err) {
			return res.json({code: 10404, error: 'params error'});
		}
		res.json({code: 10000, data: address});
	})
}

exports.save = (req, res, next) => {
	const {province, unit, depart, phone, address} = req.body;
	// check parmas;
	if (!province || !unit || !depart || !phone || !address) {
		return res.json({code: 10200, error: 'params error'});
	}

	Address.findOne({province: province, unit: unit, depart: depart, phone: phone, address: address}, (err, addressObj) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		if (addressObj) {
			return res.json({code: 10200, error: "记录已存在"});
		}

		let objAddress = new Address();
		objAddress.province = province;
		objAddress.unit = unit;
		objAddress.depart = depart;
		objAddress.phone = phone;
		objAddress.address = address;
		objAddress.save((err, product) => {
			if (err) {
				return res.json({code: 10500, error: 'server error'});
			}
			res.json({code: 10000, error: '', data: product._id});
		})
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
		const {province, unit, depart, phone, address} = req.body;
		// check parmas;
		if (!province || !unit || !depart || !phone || !address) {
			return res.json({code: 10200, error: 'params error'});
		}
		objAddress.province = province;
		objAddress.unit = unit;
		objAddress.depart = depart;
		objAddress.phone = phone;
		objAddress.address = address;
		objAddress.save(err => {
			if (err) {
				console.log(err);
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
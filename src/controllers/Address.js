import Address from '../models/Address'

import fs from 'fs'
import formidable from 'formidable'
import xlsx from 'node-xlsx'

exports.queryAll = (req, res, next) => {
	Address.find({}, {_id: 0, autoImport: 0, modified: 0}, (err, addresses) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		res.json({code: 10000, error: '', data: addresses});
	})
}

exports.provinceList = (req, res, next) => {
	Address.distinct("province", (err, addresses) => {
		res.json({code: 10000, data: addresses});
	})
}

exports.cityList = (req, res, next) => {
	const province = req.params.province;

	Address.distinct("city", {province: province}, (err, addresses) => {
		res.json({code: 10000, data: addresses});
	})
}

exports.departList = (req, res, next) => {
	const city = req.params.city;
	
	Address.distinct("depart", {city: city}, (err, addresses) => {
		res.json({code: 10000, data: addresses});
	})
}

exports.address = (req, res, next) => {
	const depart = req.params.depart;

	Address.findOne({depart: depart}, {_id: 0, address: 1}, (err, address) => {
		if (err) {
			return res.json({code: 10500, error: '查询失败，请重新尝试'});
		}
		res.json({code: 10000, data: address.address});
	})
}

exports.import = (req, res, next) => {
	// 获取上传的excel文件
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, file) => {
  	if (err) {
  		return res.json({code: 10500, error: '解析上传文件失败'});
  	}
  	file = file.excel;
  	if (!file) {
  		return res.json({code: 10200, error: '参数错误'});
  	}
  	let tmpPath = file.path;

  	// 处理excel文件数据
  	let xmlData = xlsx.parse(tmpPath);
  	let sheet1 = xmlData[0].data;
  	// 第一行为表头信息，从第二行开始获取数据
  	// 省份	地区	派遣单位主管部门	派遣单位名称	派遣单位地址	派遣单位邮编
  	for (let i = 1; i < sheet1.length; ++i) {
			let data = sheet1[i];
			if (data[0] == '') {
				continue;
			}
			let objAddress = new Address();
			objAddress.province = data[0];
			objAddress.city = data[1];
			objAddress.depart = data[2];
			objAddress.address = data[4];
			objAddress.save((err) => {});
  	}
  	res.json({code: 10000, error: ''});
  });
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
	const {province, city, depart, phone, address} = req.body;
	// check parmas;
	if (!province || !city || !depart || !phone || !address) {
		return res.json({code: 10200, error: 'params error'});
	}

	Address.findOne({province: province, city: city, depart: depart, phone: phone, address: address}, (err, addressObj) => {
		if (err) {
			return res.json({code: 10500, error: 'server error'});
		}
		if (addressObj) {
			return res.json({code: 10200, error: "记录已存在"});
		}

		let objAddress = new Address();
		objAddress.province = province;
		objAddress.city = city;
		objAddress.depart = depart;
		objAddress.phone = phone;
		objAddress.address = address;
		objAddress.autoImport = false;
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
		const {province, city, depart, phone, address} = req.body;
		// check parmas;
		if (!province || !city || !depart || !phone || !address) {
			return res.json({code: 10200, error: 'params error'});
		}
		objAddress.province = province;
		objAddress.city = city;
		objAddress.depart = depart;
		objAddress.phone = phone;
		objAddress.address = address;
		objAddress.modified = true;
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

exports.deleteImport = (req, res, next) => {
	Address.remove({autoImport: true}, err => {
		if (err) {
			return res.json({code: 10200, error: '删除失败'});
		}
		res.json({code: 10000, error: ''});
	})
}

exports.deleteAll = (req, res, next) => {
	Address.remove({}, err => {
		if (err) {
			return res.json({code: 10200, error: '删除失败'});
		}
		res.json({code: 10000, error: ''});
	})
}

exports.deleteManual = (req, res, next) => {
	Address.remove({autoImport: false}, err => {
		if (err) {
			return res.json({code: 10200, error: '删除失败'});
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
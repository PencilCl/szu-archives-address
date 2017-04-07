import fs from 'fs'

let create = (name) => {
	const txt = `'use strict';

import express from 'express'

let router = express.Router();

module.exports = router;`
	fs.writeFile(`./src/routes/${name}.js`, txt, err => {
		if (err) console.log('创建失败: ', err);
	})
}

switch(process.env.COMMON) {
	case 'create':
		create(process.env.NAME);
		break;
	default:
		console.log(`common ${process.env.COMMON} not exists`);
}